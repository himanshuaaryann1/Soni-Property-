import { useEffect, useRef, useState } from 'react';
import { MapPin, BedDouble, Bath, Square } from 'lucide-react';

const properties = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/7672060/pexels-photo-7672060.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=520&w=780',
    tag: 'Ready to Move',
    tagColor: '#059669',
    name: 'Soni Properties Signature Avenue',
    location: 'Sector 56, Mohali',
    price: '₹1.18 Cr',
    priceNote: 'Onwards',
    beds: 3,
    baths: 3,
    area: '1,850 sq.ft',
    type: 'Apartment',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/7672061/pexels-photo-7672061.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=520&w=780',
    tag: 'New Launch',
    tagColor: '#7C3AED',
    name: 'Soni Properties Luxe Heights',
    location: 'Sector 70, Mohali',
    price: '₹1.05 Cr',
    priceNote: 'Onwards',
    beds: 3,
    baths: 3,
    area: '1,420 sq.ft',
    type: 'Apartment',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/30781823/pexels-photo-30781823.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=520&w=780',
    tag: 'Premium Villa',
    tagColor: '#1D4ED8',
    name: 'Soni Properties Estate Villas',
    location: 'Sector 79, Mohali',
    price: '₹2.55 Cr',
    priceNote: 'Onwards',
    beds: 4,
    baths: 4,
    area: '3,500 sq.ft',
    type: 'Villa',
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=520&w=780',
    tag: 'Commercial',
    tagColor: '#374151',
    name: 'Soni Properties Aero Hub',
    location: 'Aerocity, Mohali',
    price: '₹2.15 Cr',
    priceNote: 'Onwards',
    beds: 0,
    baths: 2,
    area: '2,320 sq.ft',
    type: 'Commercial',
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/36703484/pexels-photo-36703484.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=520&w=780',
    tag: 'Ready to Move',
    tagColor: '#059669',
    name: 'Soni Properties Green Terrace',
    location: 'Zirakpur',
    price: '₹1.35 Cr',
    priceNote: 'Onwards',
    beds: 3,
    baths: 3,
    area: '1,680 sq.ft',
    type: 'Apartment',
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/7174113/pexels-photo-7174113.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=520&w=780',
    tag: 'Premium Launch',
    tagColor: '#D97706',
    name: 'Soni Properties Capitol Residency',
    location: 'Sector 17, Chandigarh',
    price: '₹1.78 Cr',
    priceNote: 'Onwards',
    beds: 3,
    baths: 3,
    area: '1,920 sq.ft',
    type: 'Apartment',
  },
];

function PropertyCard({ property, index, inView }: { property: typeof properties[0]; index: number; inView: boolean }) {
  return (
    <div
      className="property-card bg-white overflow-hidden group"
      style={{
        border: '1px solid #E5E7EB',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '240px' }}>
        <img
          src={property.image}
          alt={property.name}
          className="property-image w-full h-full object-cover transition-transform duration-500"
        />
        {/* Tag */}
        <div
          className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-white"
          style={{ backgroundColor: property.tagColor, fontFamily: 'Inter, sans-serif' }}
        >
          {property.tag}
        </div>
        {/* Type Badge */}
        <div
          className="absolute top-4 right-4 px-3 py-1 text-xs font-medium"
          style={{
            backgroundColor: 'rgba(255,255,255,0.92)',
            color: '#374151',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {property.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Price */}
        <div className="flex items-baseline gap-2 mb-2">
          <span
            className="font-bold"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#111827' }}
          >
            {property.price}
          </span>
          <span className="text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
            {property.priceNote}
          </span>
        </div>

        {/* Name */}
        <h3
          className="font-semibold mb-1.5"
          style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#111827' }}
        >
          {property.name}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 mb-4">
          <MapPin size={13} color="#1D4ED8" />
          <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}>
            {property.location}
          </span>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #F3F4F6', marginBottom: '14px' }} />

        {/* Specs */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {property.beds > 0 && (
              <div className="flex items-center gap-1.5">
                <BedDouble size={14} color="#9CA3AF" />
                <span className="text-xs" style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}>
                  {property.beds} BHK
                </span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Bath size={14} color="#9CA3AF" />
              <span className="text-xs" style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}>
                {property.baths} Bath
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Square size={14} color="#9CA3AF" />
              <span className="text-xs" style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}>
                {property.area}
              </span>
            </div>
          </div>
        </div>

        {/* View Details */}
        <a
          href="#contact"
          className="mt-4 w-full text-center block py-2.5 text-sm font-medium transition-colors duration-200"
          style={{
            border: '1px solid #1D4ED8',
            color: '#1D4ED8',
            fontFamily: 'Inter, sans-serif',
          }}
          onMouseOver={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1D4ED8';
            (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
          }}
          onMouseOut={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
            (e.currentTarget as HTMLAnchorElement).style.color = '#1D4ED8';
          }}
        >
          View Details
        </a>
      </div>
    </div>
  );
}

export default function FeaturedProperties() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="properties" className="py-20 lg:py-28" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14" ref={ref}>
          <div>
            <div className="divider-line" />
            <h2 className="section-title mb-4">Featured Properties</h2>
            <p className="section-subtitle" style={{ maxWidth: '520px' }}>
              Handpicked residential and commercial properties across Mohali, Chandigarh, and premium Punjab locations — verified, transparent, and ready for you.
            </p>
          </div>
          <a
            href="#search"
            className="mt-6 lg:mt-0 inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: '#1D4ED8', fontFamily: 'Inter, sans-serif' }}
          >
            View All Properties →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, i) => (
            <PropertyCard key={property.id} property={property} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
