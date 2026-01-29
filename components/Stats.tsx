
import React, { useState, useEffect, useRef } from 'react';

const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = end / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return { count, ref };
};

const StatItem: React.FC<{ label: string; val: number }> = ({ label, val }) => {
  const { count, ref } = useCountUp(val);
  
  return (
    <div ref={ref} className="text-white">
      <div className="text-7xl font-bold mb-4 font-['Oswald'] tabular-nums">
        {count}
      </div>
      <div className="text-sm font-bold uppercase tracking-[0.2em] opacity-60 max-w-[200px] mx-auto leading-relaxed">
        {label}
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  const stats = [
    { label: "Children connected to nature", val: 850 },
    { label: "Unique species on our nature reserves", val: 42 },
    { label: "Acres of meadow created or restored", val: 340 }
  ];

  return (
    <section className="bg-[#304e43] py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {stats.map((stat, idx) => (
          <StatItem key={idx} label={stat.label} val={stat.val} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
