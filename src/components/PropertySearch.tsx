import { useState } from 'react';
import { Search } from 'lucide-react';

const locations = ['All Locations', 'Sector 56', 'Sector 70', 'Sector 71', 'Sector 79', 'Aerocity', 'Sunny Enclave', 'Kharar', 'Zirakpur', 'New Chandigarh', 'Sector 17 Chandigarh', 'Sector 35 Chandigarh'];
const propertyTypes = ['All Types', 'Apartment', 'Villa', 'Row House', 'Bungalow', 'Plot', 'Commercial', 'Shop', 'Office'];
const budgets = ['Any Budget', 'Under ₹30L', '₹30L – ₹50L', '₹50L – ₹80L', '₹80L – ₹1.2Cr', '₹1.2Cr – ₹2Cr', 'Above ₹2Cr'];
const bhkOptions = ['Any BHK', '1 BHK', '2 BHK', '3 BHK', '4 BHK', '4+ BHK'];
const purposeOptions = ['Buy', 'Rent', 'Sell'];

const inputStyle: React.CSSProperties = {
  fontFamily: 'Inter, sans-serif',
  fontSize: '0.875rem',
  color: '#374151',
  border: '1px solid #E5E7EB',
  backgroundColor: '#ffffff',
  padding: '11px 14px',
  width: '100%',
  outline: 'none',
  appearance: 'none' as const,
};

export default function PropertySearch() {
  const [purpose, setPurpose] = useState('Buy');
  const [location, setLocation] = useState('All Locations');
  const [propType, setPropType] = useState('All Types');
  const [budget, setBudget] = useState('Any Budget');
  const [bhk, setBhk] = useState('Any BHK');

  return (
    <section id="search" className="py-20 lg:py-28" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-12">
          <div className="divider-line" />
          <h2 className="section-title mb-4">Search Properties</h2>
          <p className="section-subtitle">
            Use our advanced filters to find the perfect property that matches your requirements and budget.
          </p>
        </div>

        {/* Search Card */}
        <div
          className="p-8 lg:p-10"
          style={{ backgroundColor: '#F8FAFC', border: '1px solid #E5E7EB' }}
        >
          {/* Purpose Toggle */}
          <div className="flex gap-0 mb-8 w-fit border border-gray-200 overflow-hidden">
            {purposeOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setPurpose(opt)}
                className="px-8 py-2.5 text-sm font-medium transition-colors duration-200"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  backgroundColor: purpose === opt ? '#1D4ED8' : '#ffffff',
                  color: purpose === opt ? '#ffffff' : '#374151',
                  border: 'none',
                  cursor: 'pointer',
                  borderRight: opt !== 'Sell' ? '1px solid #E5E7EB' : 'none',
                }}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Filters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Location */}
            <div>
              <label
                className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}
              >
                Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={inputStyle}
              >
                {locations.map((l) => <option key={l}>{l}</option>)}
              </select>
            </div>

            {/* Property Type */}
            <div>
              <label
                className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}
              >
                Property Type
              </label>
              <select
                value={propType}
                onChange={(e) => setPropType(e.target.value)}
                style={inputStyle}
              >
                {propertyTypes.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>

            {/* Budget */}
            <div>
              <label
                className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}
              >
                Budget
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                style={inputStyle}
              >
                {budgets.map((b) => <option key={b}>{b}</option>)}
              </select>
            </div>

            {/* BHK */}
            <div>
              <label
                className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}
              >
                BHK
              </label>
              <select
                value={bhk}
                onChange={(e) => setBhk(e.target.value)}
                style={inputStyle}
              >
                {bhkOptions.map((b) => <option key={b}>{b}</option>)}
              </select>
            </div>
          </div>

          {/* Search Button */}
          <button
            className="flex items-center gap-2.5 px-8 py-3.5 text-sm font-medium text-white transition-colors duration-200"
            style={{ backgroundColor: '#1D4ED8', fontFamily: 'Inter, sans-serif', border: 'none', cursor: 'pointer' }}
            onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1e40af'; }}
            onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1D4ED8'; }}
          >
            <Search size={16} />
            Search Properties
          </button>
        </div>

        {/* Quick Categories */}
        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Popular Searches
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              '2 BHK Apartments in Mohali',
              '3 BHK in Sector 56',
              'Villas in Sector 79',
              'Commercial Shops in Aerocity',
              'Plots near Kharar',
              'Budget Flats Under ₹50L',
              'Ready to Move Apartments',
              'New Launch Projects',
            ].map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 text-sm transition-colors duration-200"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  border: '1px solid #E5E7EB',
                  color: '#374151',
                  backgroundColor: '#ffffff',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = '#1D4ED8';
                  (e.currentTarget as HTMLButtonElement).style.color = '#1D4ED8';
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = '#E5E7EB';
                  (e.currentTarget as HTMLButtonElement).style.color = '#374151';
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
