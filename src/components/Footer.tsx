import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#111827', color: '#ffffff' }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 flex items-center justify-center"
                style={{ backgroundColor: '#1D4ED8' }}
              >
                <span className="text-white font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>S</span>
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ fontFamily: 'Playfair Display, serif', color: '#ffffff' }}>
                  Soni Properties
                </div>
                <div className="text-xs" style={{ fontFamily: 'Inter, sans-serif', color: '#9CA3AF' }}>
                  Sahibzada Ajit Singh Nagar, Punjab
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif', color: '#9CA3AF' }}>
              Mohali and Chandigarh's trusted real estate partner for premium homes and investments. Helping clients find exceptional properties across premium Punjab and Chandigarh locations.
            </p>
            <div className="flex flex-col gap-2.5">
              <a href="tel:+919855232500" className="flex items-center gap-2 text-sm" style={{ fontFamily: 'Inter, sans-serif', color: '#D1D5DB', textDecoration: 'none' }}>
                <Phone size={14} color="#1D4ED8" />
                +91 98552 32500
              </a>
              <a
                href="https://wa.me/919855232500"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm"
                style={{ fontFamily: 'Inter, sans-serif', color: '#D1D5DB', textDecoration: 'none' }}
              >
                <MessageCircle size={14} color="#16A34A" />
                WhatsApp Us
              </a>
              <a href="mailto:info@soniproperties.in" className="flex items-center gap-2 text-sm" style={{ fontFamily: 'Inter, sans-serif', color: '#D1D5DB', textDecoration: 'none' }}>
                <Mail size={14} color="#1D4ED8" />
                info@soniproperties.in
              </a>
              <div className="flex items-start gap-2 text-sm" style={{ fontFamily: 'Inter, sans-serif', color: '#D1D5DB' }}>
                <MapPin size={14} color="#D97706" className="mt-0.5 flex-shrink-0" />
                LIG - 3017, Near Community Center,<br />Sector - 56,<br />Sahibzada Ajit Singh Nagar,<br />Punjab 160071
              </div>
            </div>
          </div>

          {/* Properties */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-5"
              style={{ fontFamily: 'Inter, sans-serif', color: '#ffffff' }}
            >
              Properties
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                '2 BHK Apartments',
                '3 BHK Apartments',
                '4 BHK Apartments',
                'Luxury Villas',
                'Row Houses',
                'Commercial Properties',
                'Plots & Land',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#properties"
                    className="text-sm hover:text-white transition-colors duration-150"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#9CA3AF', textDecoration: 'none' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-5"
              style={{ fontFamily: 'Inter, sans-serif', color: '#ffffff' }}
            >
              Locations
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                'Sector 56, Mohali',
                'Sector 70, Mohali',
                'Sector 71, Mohali',
                'Sector 79, Mohali',
                'Aerocity, Mohali',
                'Zirakpur',
                'New Chandigarh',
                'Sector 17, Chandigarh',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#search"
                    className="text-sm hover:text-white transition-colors duration-150"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#9CA3AF', textDecoration: 'none' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-5"
              style={{ fontFamily: 'Inter, sans-serif', color: '#ffffff' }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                'Property Buying',
                'Property Selling',
                'Property Rental',
                'Investment Advisory',
                'Loan Assistance',
                'Legal Documentation',
                'NRI Services',
                'Site Visit Booking',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#contact"
                    className="text-sm hover:text-white transition-colors duration-150"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#9CA3AF', textDecoration: 'none' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid #1F2937' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs"
            style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}
          >
            &copy; {new Date().getFullYear()} Soni Properties. All rights reserved. RERA Registered.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'RERA Info'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs hover:text-white transition-colors duration-150"
                style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280', textDecoration: 'none' }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
