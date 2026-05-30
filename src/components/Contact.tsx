import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, Send } from 'lucide-react';

const inputClass: React.CSSProperties = {
  fontFamily: 'Inter, sans-serif',
  fontSize: '0.875rem',
  color: '#374151',
  border: '1px solid #E5E7EB',
  backgroundColor: '#ffffff',
  padding: '12px 14px',
  width: '100%',
  outline: 'none',
};

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-14">
          <div className="divider-line" />
          <h2 className="section-title mb-4">Get In Touch</h2>
          <p className="section-subtitle" style={{ maxWidth: '520px' }}>
            Ready to find your perfect property? Contact our team today — we are available 7 days a week to answer your queries and schedule site visits.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left – Contact Info */}
          <div className="lg:col-span-2">
            {/* Quick Contact Cards */}
            <div className="flex flex-col gap-4 mb-8">
              {/* Phone */}
              <a
                href="tel:+919855232500"
                className="flex items-center gap-4 p-5 bg-white group hover:border-blue-200 transition-colors duration-200"
                style={{ border: '1px solid #E5E7EB', textDecoration: 'none' }}
              >
                <div
                  className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#EFF6FF' }}
                >
                  <Phone size={18} color="#1D4ED8" />
                </div>
                <div>
                  <div
                    className="text-xs uppercase tracking-wide font-semibold mb-0.5"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#9CA3AF' }}
                  >
                    Call Us
                  </div>
                  <div
                    className="font-semibold text-sm"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#111827' }}
                  >
                    +91 98552 32500
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919855232500?text=Hello%2C%20I%20am%20interested%20in%20a%20property%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white group hover:border-green-200 transition-colors duration-200"
                style={{ border: '1px solid #E5E7EB', textDecoration: 'none' }}
              >
                <div
                  className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#F0FDF4' }}
                >
                  <MessageCircle size={18} color="#16A34A" />
                </div>
                <div>
                  <div
                    className="text-xs uppercase tracking-wide font-semibold mb-0.5"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#9CA3AF' }}
                  >
                    WhatsApp
                  </div>
                  <div
                    className="font-semibold text-sm"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#111827' }}
                  >
                    Chat with us instantly
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@soniproperties.in"
                className="flex items-center gap-4 p-5 bg-white group transition-colors duration-200"
                style={{ border: '1px solid #E5E7EB', textDecoration: 'none' }}
              >
                <div
                  className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#EFF6FF' }}
                >
                  <Mail size={18} color="#1D4ED8" />
                </div>
                <div>
                  <div
                    className="text-xs uppercase tracking-wide font-semibold mb-0.5"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#9CA3AF' }}
                  >
                    Email Us
                  </div>
                  <div
                    className="font-semibold text-sm"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#111827' }}
                  >
                    info@soniproperties.in
                  </div>
                </div>
              </a>

              {/* Address */}
              <div
                className="flex items-start gap-4 p-5 bg-white"
                style={{ border: '1px solid #E5E7EB' }}
              >
                <div
                  className="w-11 h-11 flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: '#FEF3C7' }}
                >
                  <MapPin size={18} color="#D97706" />
                </div>
                <div>
                  <div
                    className="text-xs uppercase tracking-wide font-semibold mb-0.5"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#9CA3AF' }}
                  >
                    Office Address
                  </div>
                  <div
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#111827' }}
                  >
                    LIG - 3017, Near Community Center,<br />
                    Sector - 56,<br />
                    Sahibzada Ajit Singh Nagar,<br />
                    Punjab 160071
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div
                className="flex items-center gap-4 p-5 bg-white"
                style={{ border: '1px solid #E5E7EB' }}
              >
                <div
                  className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#F8FAFC' }}
                >
                  <Clock size={18} color="#374151" />
                </div>
                <div>
                  <div
                    className="text-xs uppercase tracking-wide font-semibold mb-0.5"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#9CA3AF' }}
                  >
                    Office Hours
                  </div>
                  <div
                    className="text-sm"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#111827' }}
                  >
                    Mon – Sat: 9:00 AM – 7:00 PM<br />
                    Sunday: 10:00 AM – 4:00 PM
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="overflow-hidden" style={{ height: '220px', border: '1px solid #E5E7EB' }}>
              <iframe
                title="Soni Properties Location"
                src="https://www.google.com/maps?q=LIG+-+3017,+Near+Community+Center,+Sector+-+56,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160071&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right – Inquiry Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 lg:p-10" style={{ border: '1px solid #E5E7EB' }}>
              <h3
                className="font-semibold mb-1"
                style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#111827' }}
              >
                Send an Inquiry
              </h3>
              <p
                className="text-sm mb-7"
                style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}
              >
                Fill in your details and our property advisor will call you within 2 business hours.
              </p>

              {submitted ? (
                <div
                  className="text-center py-16"
                  style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0' }}
                >
                  <div className="text-3xl mb-3">✓</div>
                  <h4
                    className="font-semibold mb-2"
                    style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#111827' }}
                  >
                    Inquiry Submitted Successfully
                  </h4>
                  <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif', color: '#374151' }}>
                    Thank you! Our team will contact you within 2 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                        style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        style={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                        style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        style={inputClass}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                      style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={inputClass}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                        style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}
                      >
                        Property Type
                      </label>
                      <select
                        name="propertyType"
                        value={form.propertyType}
                        onChange={handleChange}
                        style={inputClass}
                      >
                        <option value="">Select Type</option>
                        <option>Apartment (2 BHK)</option>
                        <option>Apartment (3 BHK)</option>
                        <option>Apartment (4 BHK)</option>
                        <option>Villa / Bungalow</option>
                        <option>Row House</option>
                        <option>Commercial Property</option>
                        <option>Plot / Land</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                        style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}
                      >
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        style={inputClass}
                      >
                        <option value="">Select Budget</option>
                        <option>Under ₹30 Lakhs</option>
                        <option>₹30L – ₹50L</option>
                        <option>₹50L – ₹80L</option>
                        <option>₹80L – ₹1.2 Cr</option>
                        <option>₹1.2 Cr – ₹2 Cr</option>
                        <option>Above ₹2 Cr</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                      style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}
                    >
                      Message / Requirements
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements — location preference, possession timeline, etc."
                      style={{ ...inputClass, resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-4 text-sm font-semibold text-white transition-colors duration-200"
                    style={{ backgroundColor: '#1D4ED8', fontFamily: 'Inter, sans-serif', border: 'none', cursor: 'pointer' }}
                    onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1e40af'; }}
                    onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1D4ED8'; }}
                  >
                    <Send size={15} />
                    Submit Inquiry
                  </button>

                  <p
                    className="text-xs text-center mt-4"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#9CA3AF' }}
                  >
                    By submitting, you agree to be contacted by Soni Properties. We do not share your information with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
