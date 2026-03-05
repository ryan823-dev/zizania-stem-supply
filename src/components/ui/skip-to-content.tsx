import { useState } from "react";

export function SkipToContent() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <a
      href="#main-content"
      className={`
        fixed top-4 left-4 z-[9999] px-4 py-2 bg-primary text-primary-foreground
        rounded-lg font-medium text-sm
        transition-all duration-200
        ${isFocused ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
      `}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      Skip to main content
    </a>
  );
}