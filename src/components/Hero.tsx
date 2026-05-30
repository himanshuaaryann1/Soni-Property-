

export default function Hero() {
  return (
    <section className="relative w-full" style={{ height: '100vh', minHeight: '640px' }}>
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/7672058/pexels-photo-7672058.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920"
          alt="Premium Property in Mohali"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.2) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-2xl animate-fadeInUp" style={{ paddingTop: '72px' }}>
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: '32px', height: '2px', backgroundColor: '#1D4ED8' }} />
              <span
                className="text-xs tracking-widest uppercase font-medium"
                style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter, sans-serif' }}
              >
                Soni Properties — Sahibzada Ajit Singh Nagar's Trusted Real Estate Partner
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-semibold leading-tight mb-6"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                color: '#ffffff',
                lineHeight: 1.15,
              }}
            >
              Premium Properties
              <br />
              <em>Across Mohali, Chandigarh &amp; Premium Punjab</em>
            </h1>

            {/* Subheadline */}
            <p
              className="mb-10 leading-relaxed"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.05rem',
                color: 'rgba(255,255,255,0.82)',
                maxWidth: '520px',
                lineHeight: 1.75,
              }}
            >
              Helping families and investors discover exceptional residential and commercial opportunities in Mohali, Chandigarh, and nearby premium Punjab locations.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#properties" className="btn-primary">
                Explore Properties
              </a>
              <a href="#contact" className="btn-outline" style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.6)' }}>
                Book Site Visit
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 text-white text-sm font-medium px-6 py-3.5"
                style={{ fontFamily: 'Inter, sans-serif', border: 'none' }}
              >
                Contact Us →
              </a>
            </div>

            {/* Tagline */}
            <div className="mt-12 flex items-center gap-6">
              {[
                { value: '500+', label: 'Properties Sold' },
                { value: '15+', label: 'Years Experience' },
                { value: '1200+', label: 'Happy Clients' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="font-bold text-2xl leading-none"
                    style={{ color: '#ffffff', fontFamily: 'Playfair Display, serif' }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs mt-1"
                    style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
