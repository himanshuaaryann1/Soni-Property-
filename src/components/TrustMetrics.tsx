import { useEffect, useRef, useState } from 'react';

const metrics = [
  { value: 500, suffix: '+', label: 'Properties Sold', desc: 'Across Mohali, Chandigarh, and premium Punjab' },
  { value: 1200, suffix: '+', label: 'Happy Clients', desc: 'Families who found their dream home' },
  { value: 15, suffix: '+', label: 'Years Experience', desc: 'Serving the Mohali & Chandigarh real estate market' },
  { value: 850, suffix: '+', label: 'Successful Transactions', desc: 'Residential & commercial deals closed' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', desc: 'Based on post-purchase feedback' },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function MetricCard({ value, suffix, label, desc, index, inView }: { value: number; suffix: string; label: string; desc: string; index: number; inView: boolean }) {
  const count = useCountUp(value, 1800, inView);
  return (
    <div
      className="text-center px-6 py-10"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      <div
        className="font-bold leading-none mb-3"
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
          color: '#1D4ED8',
        }}
      >
        {count}{suffix}
      </div>
      <div
        className="font-semibold text-base mb-1"
        style={{ fontFamily: 'Inter, sans-serif', color: '#111827' }}
      >
        {label}
      </div>
      <div
        className="text-sm leading-relaxed"
        style={{ fontFamily: 'Inter, sans-serif', color: '#9CA3AF' }}
      >
        {desc}
      </div>
    </div>
  );
}

export default function TrustMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-6" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #E5E7EB' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        {/* Top border accent */}
        <div className="flex items-center gap-4 py-8 mb-2 border-b border-gray-100">
          <div style={{ width: '3px', height: '36px', backgroundColor: '#1D4ED8', flexShrink: 0 }} />
          <p className="text-sm text-gray-500 italic" style={{ fontFamily: 'Inter, sans-serif' }}>
              Trusted by over 1,200 families across Mohali, Chandigarh and Punjab with a 4.9★ client rating — built on transparency, expertise, and local market knowledge.
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-gray-100">
          {metrics.map((m, i) => (
            <MetricCard key={m.label} {...m} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
