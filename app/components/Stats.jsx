"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 2,  suffix: "+", label: "Years of Experience" },
  { value: 12, suffix: "+", label: "Projects Shipped" },
  { value: 8,  suffix: "+", label: "Industries" },
];

const DURATION = 1400; // ms
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

function StatItem({ value, suffix, label, run }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run) return;
    let raf, start;
    const step = (ts) => {
      if (start === undefined) start = ts;
      const p = Math.min((ts - start) / DURATION, 1);
      setN(Math.round(easeOutCubic(p) * value));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, value]);

  return (
    <div className="flex flex-col">
      <span className="text-4xl sm:text-6xl font-bold text-text tracking-tight tabular-nums leading-none">
        {n}
        <span className="text-accent">{suffix}</span>
      </span>
      <span className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-muted uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Reduced-motion: skip the count, show final values immediately.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-3 gap-4 sm:gap-10 max-w-2xl mb-16 sm:mb-24">
      {STATS.map((s) => (
        <StatItem key={s.label} {...s} run={inView} />
      ))}
    </div>
  );
}
