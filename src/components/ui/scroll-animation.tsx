import { ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  triggerOnce?: boolean;
}

export function ScrollAnimation({
  children,
  className,
  delay = 0,
  direction = "up",
  triggerOnce = true,
}: ScrollAnimationProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce,
  });

  const getAnimationClass = () => {
    const baseClasses = "transition-all duration-700 ease-out";
    
    if (!isVisible) {
      switch (direction) {
        case "up":
          return `${baseClasses} opacity-0 translate-y-8`;
        case "down":
          return `${baseClasses} opacity-0 -translate-y-8`;
        case "left":
          return `${baseClasses} opacity-0 translate-x-8`;
        case "right":
          return `${baseClasses} opacity-0 -translate-x-8`;
        case "scale":
          return `${baseClasses} opacity-0 scale-95`;
        default:
          return `${baseClasses} opacity-0 translate-y-8`;
      }
    }

    switch (direction) {
      case "left":
      case "right":
        return `${baseClasses} opacity-100 translate-x-0`;
      case "scale":
        return `${baseClasses} opacity-100 scale-100`;
      case "up":
      case "down":
      default:
        return `${baseClasses} opacity-100 translate-y-0`;
    }
  };

  return (
    <div
      ref={ref}
      className={cn(getAnimationClass(), className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}