import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function StatCounter({ end, suffix = '', prefix = '', label, duration = 2000 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-headline-xl text-headline-xl text-secondary-container font-black">
        {prefix}{count.toLocaleString()}{suffix}
      </p>
      <p className="font-label-sm text-label-sm text-on-tertiary-container uppercase tracking-widest mt-2">{label}</p>
    </div>
  );
}
