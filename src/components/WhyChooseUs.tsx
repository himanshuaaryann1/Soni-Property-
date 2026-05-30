import { useEffect, useRef, useState } from 'react';
import { ShieldCheck, TrendingUp, FileText, Lightbulb, CreditCard, HandshakeIcon } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Verified Listings',
    desc: 'Every property on our platform is physically verified and legally vetted. No fake listings, no surprises — what you see is what you get.',
  },
  {
    icon: TrendingUp,
    title: 'Market Expertise',
    desc: 'With 15+ years in Mohali, Chandigarh and Punjab real estate, we understand micro-markets, price trends, and growth corridors better than anyone in the region.',
  },
  {
    icon: FileText,
    title: 'Documentation Support',
    desc: 'From sale agreement to registration, our legal team handles all documentation, ensuring a completely stress-free transaction for you.',
  },
  {
    icon: Lightbulb,
    title: 'Investment Guidance',
    desc: 'Looking to invest? Our advisors provide data-backed insights on rental yields, capital appreciation, and the best micro-markets in Mohali, Chandigarh and New Chandigarh.',
  },
  {
    icon: CreditCard,
    title: 'Loan Assistance',
    desc: 'We partner with leading banks and NBFCs to help you secure the best home loan rates with minimal paperwork and faster approvals.',
  },
  {
    icon: HandshakeIcon,
    title: 'Transparent Transactions',
    desc: 'No hidden charges. No surprises. We believe in complete transparency at every stage — from property search to possession.',
  },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-end">
          <div>
            <div className="divider-line" />
            <h2 className="section-title mb-4">Why Choose<br />Soni Properties?</h2>
          </div>
          <p className="section-subtitle leading-relaxed">
            Buying or selling property is one of the most significant financial decisions of your life. We combine deep local expertise, ethical practices, and dedicated support to make that journey seamless and rewarding.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: '#E5E7EB' }} ref={ref}>
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="bg-white p-8 group hover:bg-gray-50 transition-colors duration-200"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center mb-5 transition-colors duration-200"
                  style={{ backgroundColor: '#EFF6FF' }}
                >
                  <Icon size={22} color="#1D4ED8" />
                </div>
                {/* Title */}
                <h3
                  className="font-semibold mb-3"
                  style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', color: '#111827' }}
                >
                  {reason.title}
                </h3>
                {/* Desc */}
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}>
                  {reason.desc}
                </p>
                {/* Bottom accent */}
                <div
                  className="mt-6"
                  style={{ width: '32px', height: '2px', backgroundColor: '#E5E7EB', transition: 'background-color 0.3s ease' }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
