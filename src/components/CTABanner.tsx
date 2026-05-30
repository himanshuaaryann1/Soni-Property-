export default function CTABanner() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1D4ED8 50%, #2563EB 100%)',
        padding: '72px 0',
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 60px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="font-semibold mb-3"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                color: '#ffffff',
                lineHeight: 1.2,
              }}
            >
              Ready to Find Your Dream Property in Mohali?
            </h2>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.78)',
                lineHeight: 1.7,
              }}
            >
              Talk to our expert advisors today. Site visits available 7 days a week across Mohali, Chandigarh & Punjab.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
            <a
              href="tel:+919855232500"
              className="flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold"
              style={{
                backgroundColor: '#ffffff',
                color: '#1D4ED8',
                fontFamily: 'Inter, sans-serif',
                textDecoration: 'none',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#1D4ED8" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white"
              style={{
                backgroundColor: 'transparent',
                border: '1.5px solid rgba(255,255,255,0.5)',
                fontFamily: 'Inter, sans-serif',
                textDecoration: 'none',
              }}
            >
              Book Site Visit →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
