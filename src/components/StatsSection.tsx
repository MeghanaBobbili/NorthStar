"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  label: string;
  symbol?: string;
  plus?: boolean;
}

const stats: StatItem[] = [
  { value: 12, label: "YEARS OF EXPERIENCE", plus: true },
  { value: 9, label: "COMPLETED PROJECTS" },
  { value: 6, label: "ONGOING PROJECTS" },
  { value: 2, label: "UPCOMING PROJECTS" },
  { value: 8, label: "WINNING AWARDS", plus: true },
  { value: 500, label: "HAPPY CUSTOMERS", plus: true },
  { value: 13, label: "LAKHS SFT SOLD OUT" },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      const duration = 2000; // 2 seconds
      const steps = 50;
      const stepValue = stat.value / steps;
      let currentStep = 0;

      return setInterval(() => {
        currentStep++;
        
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.min(Math.ceil(stepValue * currentStep), stat.value);
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(intervals[index]);
        }
      }, duration / steps);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="py-12 bg-gray-light">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {counts[index]}
                {stat.symbol && stat.symbol}
                {stat.plus && "+"}
              </div>
              <div className="text-sm font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection; 