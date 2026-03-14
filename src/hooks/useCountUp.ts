import { useEffect, useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

export function useCountUp(target: number, duration = 1500) {
  const { ref, isVisible } = useScrollReveal(0.3);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOut cubic
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return { ref, value, isVisible };
}
