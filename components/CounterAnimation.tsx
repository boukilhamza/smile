'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface CounterAnimationProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
}

export default function CounterAnimation({ 
  from = 0,
  to, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  delay = 0
}: CounterAnimationProps) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const animationRef = useRef<number>();

  useEffect(() => {
    if (isInView) {
      // Reset to start value when coming into view
      setCount(from);
      
      // Start animation after delay
      const timeoutId = setTimeout(() => {
        const startTime = performance.now();
        
        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function
          const easeOutCubic = 1 - Math.pow(1 - progress, 3);
          const currentValue = from + (to - from) * easeOutCubic;
          
          setCount(Math.floor(currentValue));
          
          if (progress < 1) {
            animationRef.current = requestAnimationFrame(animate);
          }
        };
        
        animationRef.current = requestAnimationFrame(animate);
      }, delay);
      
      return () => {
        clearTimeout(timeoutId);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    } else {
      // Reset when out of view
      setCount(from);
    }
  }, [isInView, from, to, duration, delay]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}