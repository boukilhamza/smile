'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
}

export default function AnimatedCounterSimple({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  delay = 0
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      
      const timeout = setTimeout(() => {
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          
          setCount(Math.floor(progress * end));
          
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        
        window.requestAnimationFrame(step);
      }, delay);
      
      return () => clearTimeout(timeout);
    }
  }, [isInView, hasStarted, end, duration, delay]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}