import { useEffect, useRef, useState } from 'react';
import { Award, Users, MapPin, Clock } from 'lucide-react';

const milestones = [
  { year: '2009', event: 'Founded with a mission to simplify real estate for families in NCR' },
  { year: '2013', event: 'Expanded to commercial properties and investment advisory services' },
  { year: '2017', event: 'Crossed 500 successful transactions across residential and commercial' },
  { year: '2022', event: 'Launched digital property search platform and NRI services division' },
  { year: '2024', event: 'Over 1,200 happy clients and 850+ verified active listings in Mohali, Chandigarh and Punjab' },
];

const highlights = [
  { icon: Award, label: 'Certified Real Estate Advisor', desc: 'RERA Registered' },
  { icon: Users, label: '25+ In-House Professionals', desc: 'Agents, Legal, Finance' },
  { icon: MapPin, label: 'Mohali-Chandigarh Expertise', desc: 'All micro-markets covered' },
  { icon: Clock, label: '15+ Years in Business', desc: 'Since 2009' },
];

export default function About() {
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
    <section id="about" className="py-20 lg:py-28" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start" ref={ref}>
          {/* Left – Content */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <div className="divider-line" />
            <h2 className="section-title mb-6">
              About Soni Properties
            </h2>
            <p
              className="mb-5 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: '#374151', lineHeight: 1.8 }}
            >
              Established in 2009, Soni Properties has grown to become one of Mohali and Chandigarh’s most trusted real estate companies. Founded on the principles of transparency, integrity, and client-first service, we have helped over 1,200 families and investors find their perfect property.
            </p>
            <p
              className="mb-5 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: '#374151', lineHeight: 1.8 }}
            >
              Our deep understanding of the Mohali and Chandigarh real estate landscape — from Sector 56 to Sector 79, from Aerocity to Zirakpur and New Chandigarh — allows us to offer unmatched guidance across all price segments and property types.
            </p>
            <p
              className="mb-10 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: '#374151', lineHeight: 1.8 }}
            >
              Whether you are a first-time buyer, a seasoned investor, or an NRI looking to invest in Punjab, our team of 25+ dedicated professionals is committed to delivering a seamless, stress-free experience from search to possession.
            </p>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="p-6" style={{ backgroundColor: '#F8FAFC', borderLeft: '3px solid #1D4ED8' }}>
                <div
                  className="text-xs uppercase tracking-widest font-semibold mb-2"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#1D4ED8' }}
                >
                  Our Mission
                </div>
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: '#374151' }}>
                  To simplify real estate for every family in Mohali and Chandigarh through honest guidance, transparent dealings, and uncompromised service.
                </p>
              </div>
              <div className="p-6" style={{ backgroundColor: '#F8FAFC', borderLeft: '3px solid #6B7280' }}>
                <div
                  className="text-xs uppercase tracking-widest font-semibold mb-2"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#374151' }}
                >
                  Our Vision
                </div>
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: '#374151' }}>
                  To be Punjab's most trusted regional real estate brand, known for integrity, local expertise, and client success.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.label} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: '#EFF6FF' }}
                    >
                      <Icon size={17} color="#1D4ED8" />
                    </div>
                    <div>
                      <div
                        className="text-sm font-semibold leading-tight"
                        style={{ fontFamily: 'Inter, sans-serif', color: '#111827' }}
                      >
                        {h.label}
                      </div>
                      <div
                        className="text-xs text-gray-400 mt-0.5"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {h.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right – Image + Timeline */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(24px)',
              transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
            }}
          >
            {/* Image */}
            <div className="overflow-hidden mb-10" style={{ height: '320px' }}>
              <img
                src="https://images.pexels.com/photos/7672059/pexels-photo-7672059.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=640&w=960"
                alt="Soni Properties Office and Portfolio"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Timeline */}
            <div>
              <h3
                className="font-semibold mb-6 text-base"
                style={{ fontFamily: 'Playfair Display, serif', color: '#111827' }}
              >
                Our Journey
              </h3>
              <div className="relative">
                {/* Line */}
                <div
                  className="absolute top-0 bottom-0"
                  style={{ left: '56px', width: '1px', backgroundColor: '#E5E7EB' }}
                />
                <div className="flex flex-col gap-0">
                  {milestones.map((m, i) => (
                    <div key={m.year} className="flex gap-6 relative pb-6 last:pb-0">
                      <div
                        className="text-xs font-bold flex-shrink-0 pt-0.5"
                        style={{ width: '40px', fontFamily: 'Inter, sans-serif', color: '#1D4ED8', textAlign: 'right' }}
                      >
                        {m.year}
                      </div>
                      {/* Dot */}
                      <div
                        className="flex-shrink-0 relative z-10"
                        style={{ marginTop: '4px' }}
                      >
                        <div
                          style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: i === milestones.length - 1 ? '#1D4ED8' : '#ffffff',
                            border: '2px solid #1D4ED8',
                          }}
                        />
                      </div>
                      <p
                        className="text-sm leading-relaxed flex-1"
                        style={{ fontFamily: 'Inter, sans-serif', color: '#374151', paddingTop: '0px' }}
                      >
                        {m.event}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
