'use client';

import { useState } from 'react';
import { Send, Phone, Mail, User, MessageSquare } from 'lucide-react';

export default function PreFooter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can replace this with actual API call
  };

  return (
    <section className="relative bg-[var(--midnight-pine)] px-6 py-20 lg:px-8 lg:py-28 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(200, 155, 123, 0.08) 0%, transparent 60%)' }} />

      <div className="max-w-[900px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-[2.5rem] md:text-5xl lg:text-[3.5rem] font-medium text-[var(--alabaster-mist)] mb-4 leading-[1.2]">
            Get in Touch
          </h2>
          <p className="font-[family-name:var(--font-manrope)] text-base md:text-[1.0625rem] text-[var(--text-light)] opacity-70 max-w-[500px] mx-auto leading-[1.7]">
            The mountains are calling. Let our concierge curate your escape.
          </p>
        </div>

        {/* Contact Form */}
        <form className="mb-16" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
            {/* Name Field */}
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="flex items-center gap-2 font-[family-name:var(--font-manrope)] text-sm font-semibold text-[var(--brushed-copper)] tracking-[0.05em] uppercase">
                <User className="w-4 h-4 stroke-[2.5]" />
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="font-[family-name:var(--font-manrope)] text-base px-5 py-4 bg-[rgba(255,255,255,0.05)] border border-[rgba(200,155,123,0.2)] rounded text-[var(--text-light)] transition-all duration-[300ms] cubic-bezier(0.16,1,0.3,1) backdrop-blur-[10px] placeholder:text-[rgba(245,245,245,0.4)] focus:outline-none focus:border-[var(--brushed-copper)] focus:bg-[rgba(255,255,255,0.08)] focus:shadow-[0_0_0_3px_rgba(200,155,123,0.1),0_4px_12px_rgba(0,0,0,0.3)]"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="flex items-center gap-2 font-[family-name:var(--font-manrope)] text-sm font-semibold text-[var(--brushed-copper)] tracking-[0.05em] uppercase">
                <Mail className="w-4 h-4 stroke-[2.5]" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="font-[family-name:var(--font-manrope)] text-base px-5 py-4 bg-[rgba(255,255,255,0.05)] border border-[rgba(200,155,123,0.2)] rounded text-[var(--text-light)] transition-all duration-[300ms] cubic-bezier(0.16,1,0.3,1) backdrop-blur-[10px] placeholder:text-[rgba(245,245,245,0.4)] focus:outline-none focus:border-[var(--brushed-copper)] focus:bg-[rgba(255,255,255,0.08)] focus:shadow-[0_0_0_3px_rgba(200,155,123,0.1),0_4px_12px_rgba(0,0,0,0.3)]"
                placeholder="your@email.com"
                required
              />
            </div>

            {/* Phone Field */}
            <div className="flex flex-col gap-3">
              <label htmlFor="phone" className="flex items-center gap-2 font-[family-name:var(--font-manrope)] text-sm font-semibold text-[var(--brushed-copper)] tracking-[0.05em] uppercase">
                <Phone className="w-4 h-4 stroke-[2.5]" />
                Contact Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="font-[family-name:var(--font-manrope)] text-base px-5 py-4 bg-[rgba(255,255,255,0.05)] border border-[rgba(200,155,123,0.2)] rounded text-[var(--text-light)] transition-all duration-[300ms] cubic-bezier(0.16,1,0.3,1) backdrop-blur-[10px] placeholder:text-[rgba(245,245,245,0.4)] focus:outline-none focus:border-[var(--brushed-copper)] focus:bg-[rgba(255,255,255,0.08)] focus:shadow-[0_0_0_3px_rgba(200,155,123,0.1),0_4px_12px_rgba(0,0,0,0.3)]"
                placeholder="+92 300 1234567"
                required
              />
            </div>

            {/* Message Field - Full Width */}
            <div className="flex flex-col gap-3 col-span-1 md:col-span-2">
              <label htmlFor="message" className="flex items-center gap-2 font-[family-name:var(--font-manrope)] text-sm font-semibold text-[var(--brushed-copper)] tracking-[0.05em] uppercase">
                <MessageSquare className="w-4 h-4 stroke-[2.5]" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="font-[family-name:var(--font-manrope)] text-base px-5 py-4 bg-[rgba(255,255,255,0.05)] border border-[rgba(200,155,123,0.2)] rounded text-[var(--text-light)] transition-all duration-[300ms] cubic-bezier(0.16,1,0.3,1) backdrop-blur-[10px] placeholder:text-[rgba(245,245,245,0.4)] focus:outline-none focus:border-[var(--brushed-copper)] focus:bg-[rgba(255,255,255,0.08)] focus:shadow-[0_0_0_3px_rgba(200,155,123,0.1),0_4px_12px_rgba(0,0,0,0.3)] resize-vertical min-h-[120px] leading-[1.6]"
                placeholder="Tell us about your dream mountain escape..."
                rows="5"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="relative flex items-center justify-center gap-3 w-full max-w-[320px] md:max-w-[320px] md:px-12 md:py-5 mx-auto px-10 py-[1.125rem] bg-[var(--brushed-copper)] border-none rounded font-[family-name:var(--font-manrope)] text-[0.9375rem] font-semibold tracking-[0.1em] uppercase text-[var(--midnight-pine)] cursor-pointer overflow-hidden transition-all duration-[400ms] cubic-bezier(0.16,1,0.3,1) hover:translate-y-[-2px] hover:shadow-[0_0_30px_rgba(200,155,123,0.5),0_10px_25px_rgba(0,0,0,0.4)] active:translate-y-0">
            <span className="relative z-[2]">Send Message</span>
            <Send className="w-[18px] h-[18px] relative z-[2] stroke-[2.5] transition-transform duration-[400ms] cubic-bezier(0.16,1,0.3,1) group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-gradient-to-br from-[rgba(255,255,255,0.3)] to-transparent opacity-0 transition-opacity duration-[400ms] cubic-bezier(0.16,1,0.3,1)" />
          </button>
        </form>

        {/* Bottom decoration */}
        <div className="text-center flex flex-col gap-2 pt-12 border-t border-[rgba(200,155,123,0.15)]">
          <span className="font-[family-name:var(--font-playfair)] text-[1.75rem] font-semibold text-[var(--brushed-copper)] tracking-[0.2em]">LAVITA</span>
          <span className="font-[family-name:var(--font-manrope)] text-sm font-normal text-[var(--text-light)] opacity-50 tracking-[0.15em] uppercase">Malam Jabba</span>
        </div>
      </div>
    </section>
  );
}
