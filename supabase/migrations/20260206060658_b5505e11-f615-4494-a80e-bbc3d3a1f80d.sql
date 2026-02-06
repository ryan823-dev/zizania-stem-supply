
-- Rate limiting table for edge functions
CREATE TABLE public.edge_rate_limits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  window_start TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  count INTEGER NOT NULL DEFAULT 1
);

-- Enable RLS - no public policies, only service role can access
ALTER TABLE public.edge_rate_limits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.edge_rate_limits FORCE ROW LEVEL SECURITY;

-- Index for fast lookups and cleanup
CREATE INDEX idx_edge_rate_limits_key ON public.edge_rate_limits (key);
CREATE INDEX idx_edge_rate_limits_window ON public.edge_rate_limits (window_start);

-- Atomic rate limit check function
-- Returns TRUE if request is allowed, FALSE if rate limited
CREATE OR REPLACE FUNCTION public.check_rate_limit(
  p_key TEXT,
  p_max_requests INTEGER DEFAULT 10,
  p_window_seconds INTEGER DEFAULT 600
) RETURNS BOOLEAN AS $$
DECLARE
  v_count INTEGER;
BEGIN
  -- Clean up expired entries (older than window)
  DELETE FROM public.edge_rate_limits 
  WHERE window_start < now() - make_interval(secs => p_window_seconds);
  
  -- Upsert: insert new or increment existing (reset if window expired)
  INSERT INTO public.edge_rate_limits (key, window_start, count)
  VALUES (p_key, now(), 1)
  ON CONFLICT (key) DO UPDATE SET
    count = CASE 
      WHEN public.edge_rate_limits.window_start < now() - make_interval(secs => p_window_seconds)
      THEN 1
      ELSE public.edge_rate_limits.count + 1
    END,
    window_start = CASE
      WHEN public.edge_rate_limits.window_start < now() - make_interval(secs => p_window_seconds)
      THEN now()
      ELSE public.edge_rate_limits.window_start
    END;
  
  -- Get current count
  SELECT el.count INTO v_count FROM public.edge_rate_limits el WHERE el.key = p_key;
  
  RETURN v_count <= p_max_requests;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;
