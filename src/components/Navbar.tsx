import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Properties', href: '#properties' },
  { label: 'Search', href: '#search' },
  { label: 'About', href: '#about' },
  { label: 'EMI Calculator', href: '#emi-calculator' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.98)' : 'transparent',
        borderBottom: scrolled ? '1px solid #E5E7EB' : 'none',
        boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-18" style={{ height: '72px' }}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
              <div
                className="w-9 h-9 flex items-center justify-center"
                style={{ backgroundColor: '#1D4ED8' }}
              >
                <span className="text-white font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>S</span>
              </div>
            <div>
              <div
                className="font-semibold text-base leading-tight"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  color: scrolled ? '#111827' : '#ffffff',
                }}
              >
                Soni Properties
              </div>
              <div
                className="text-xs tracking-widest uppercase"
                style={{ color: scrolled ? '#6B7280' : 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}
              >
                Sahibzada Ajit Singh Nagar, Punjab
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wide hover:opacity-70"
                style={{
                  color: scrolled ? '#374151' : 'rgba(255,255,255,0.9)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919855232500"
              className="flex items-center gap-2 text-sm font-medium"
              style={{ color: scrolled ? '#1D4ED8' : '#ffffff', fontFamily: 'Inter, sans-serif' }}
            >
              <Phone size={15} />
              +91 98552 32500
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-medium text-white"
              style={{ backgroundColor: '#1D4ED8', fontFamily: 'Inter, sans-serif' }}
            >
              Book Site Visit
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: scrolled ? '#111827' : '#ffffff' }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-100 last:border-0"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+919855232500"
            className="flex items-center gap-2 mt-4 text-sm font-medium"
            style={{ color: '#1D4ED8', fontFamily: 'Inter, sans-serif' }}
          >
            <Phone size={15} />
            +91 98552 32500
          </a>
        </div>
      )}
    </nav>
  );
}
