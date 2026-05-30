import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Patil',
    role: 'Home Buyer — Sector 56, Mohali',
    image: '',
    initials: 'RP',
    rating: 5,
    text: 'Soni Properties made our home buying journey completely stress-free. Their team guided us through every step — from shortlisting properties to loan documentation. We got our dream 3 BHK in Sector 56 at the best price. Highly recommended!',
    property: 'Purchased: 3 BHK, Sector 56',
  },
  {
    name: 'Sneha Kulkarni',
    role: 'Investor — Aerocity, Mohali',
    image: '',
    initials: 'SK',
    rating: 5,
    text: 'I was looking to invest in a premium commercial property and had no idea where to start. The team at Soni Properties gave me incredible market insights and helped me identify a great opportunity. Very professional and transparent throughout.',
    property: 'Purchased: Commercial Space, Aerocity',
  },
  {
    name: 'Amol & Priya Deshmukh',
    role: 'Home Buyers — Sector 71, Mohali',
    image: '',
    initials: 'AD',
    rating: 5,
    text: 'We were skeptical at first, but working with Soni Properties restored our faith. No hidden charges, verified paperwork, and the team was available 24/7 to answer our questions. The registration process was smooth and quick.',
    property: 'Purchased: 2 BHK, Sector 71',
  },
  {
    name: 'Sunil Mehta',
    role: 'NRI Investor — Zirakpur / New Chandigarh',
    image: '',
    initials: 'SM',
    rating: 5,
    text: 'As an NRI, I was worried about managing property investment remotely. Soni Properties handled everything — site visits, legal checks, documentation, and possession. I did not have to visit even once. Exceptional service!',
    property: 'Purchased: Villa, Zirakpur',
  },
  {
    name: 'Kavita Joshi',
    role: 'First-Time Buyer — Sector 35, Chandigarh',
    image: '',
    initials: 'KJ',
    rating: 5,
    text: 'As a first-time home buyer, I had a lot of questions and concerns. The team patiently explained everything and helped me secure the right home in Sector 35. I could not have done this without their expert guidance.',
    property: 'Purchased: 2 BHK, Sector 35',
  },
  {
    name: 'Prakash Sharma',
    role: 'Property Seller — Kharar',
    image: '',
    initials: 'PS',
    rating: 5,
    text: 'I wanted to sell my commercial property quickly at the right price. Soni Properties listed it, found genuine buyers within weeks, and handled all negotiations professionally. Got a price beyond my expectations!',
    property: 'Sold: Commercial Property, Kharar',
  },
];

export default function Testimonials() {
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
        <div className="mb-14">
          <div className="divider-line" />
          <h2 className="section-title mb-4">What Our Clients Say</h2>
          <p className="section-subtitle" style={{ maxWidth: '520px' }}>
            Real stories from real families. Over 1,200 satisfied clients have trusted Soni Properties with their most important investment decisions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={ref}>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-white p-6 relative"
              style={{
                border: '1px solid #E5E7EB',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-5 right-5">
                <Quote size={28} color="#EFF6FF" strokeWidth={1.5} />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={14} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              {/* Text */}
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ fontFamily: 'Inter, sans-serif', color: '#374151' }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Property Tag */}
              <div
                className="text-xs mb-5 px-3 py-1.5 inline-block"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  color: '#1D4ED8',
                  backgroundColor: '#EFF6FF',
                }}
              >
                {t.property}
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid #F3F4F6', paddingTop: '16px' }}>
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white flex-shrink-0"
                    style={{ backgroundColor: '#1D4ED8', fontFamily: 'Inter, sans-serif' }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      className="font-semibold text-sm"
                      style={{ fontFamily: 'Inter, sans-serif', color: '#111827' }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-xs"
                      style={{ fontFamily: 'Inter, sans-serif', color: '#9CA3AF' }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
