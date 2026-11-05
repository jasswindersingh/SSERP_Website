'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ submitting: false, success: true, error: '' });
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        setStatus({ submitting: false, success: false, error: result.error || 'Something went wrong.' });
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, error: 'Failed to connect to server.' });
    }
  };

  return (
    <div className="pt-28 pb-20 bg-[#120826] text-white min-h-screen relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6b2fe0]/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 right-10 w-[400px] h-[400px] bg-[#e5389a]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#e5389a]/20 border border-[#e5389a]/40 text-[#e5389a] text-xs font-bold uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            Connect With Our Experts
          </h1>
          <p className="text-[#b3a8cf] text-base">
            Fill out your details below and click <strong className="text-white">Expert Opinion</strong> to send your requirement directly to our leadership team at SingleStream ERP.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-[#1b0f35]/90 border border-[#33224f] p-8 sm:p-10 rounded-3xl shadow-xl space-y-8 backdrop-blur-md">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">SingleStream ERP Pvt. Ltd.</h3>
              <p className="text-sm text-[#b3a8cf] leading-relaxed">
                Specialists in IFS Cloud implementation, end-to-end process mapping, and bespoke enterprise solutions.
              </p>
            </div>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6b2fe0]/20 border border-[#6b2fe0]/40 flex items-center justify-center text-[#e5389a] shrink-0 font-bold">
                  📍
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Office Address</h4>
                  <p className="text-[#b3a8cf] leading-relaxed">
                    B 601, Cosmos Golden Heights, 6th Floor, Crossings Republic, Ghaziabad, Uttar Pradesh 201016.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 font-bold">
                  📞
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Phone Number</h4>
                  <p className="text-[#b3a8cf]">+91 88260 36507</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#e5389a]/20 border border-[#e5389a]/40 flex items-center justify-center text-[#e5389a] shrink-0 font-bold">
                  ✉️
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Address</h4>
                  <p className="text-[#b3a8cf]">info@singlestreamerp.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-[#1b0f35]/90 border border-[#33224f] p-8 sm:p-10 rounded-3xl shadow-xl backdrop-blur-md">
            {status.success ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-[#b3a8cf] text-sm max-w-md mx-auto">
                  Thank you for reaching out. Your inquiry has been forwarded directly to the owner. Our consulting team will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus({ submitting: false, success: false, error: '' })}
                  className="px-6 py-2.5 rounded-full bg-[#e5389a] text-white font-bold text-xs uppercase hover:bg-[#c4287e] transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#d9cdf5] mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#0b0418] border border-[#33224f] text-white focus:outline-none focus:border-[#e5389a] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#d9cdf5] mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0b0418] border border-[#33224f] text-white focus:outline-none focus:border-[#e5389a] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#d9cdf5] mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-[#0b0418] border border-[#33224f] text-white focus:outline-none focus:border-[#e5389a] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#d9cdf5] mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Victoria Industries Pvt. Ltd."
                      className="w-full px-4 py-3 rounded-xl bg-[#0b0418] border border-[#33224f] text-white focus:outline-none focus:border-[#e5389a] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#d9cdf5] mb-2">Your Requirement / Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your ERP implementation, upgrade, or business intelligence needs..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0b0418] border border-[#33224f] text-white focus:outline-none focus:border-[#e5389a] text-sm resize-none"
                  />
                </div>

                {status.error && (
                  <p className="text-red-400 text-xs font-semibold">{status.error}</p>
                )}

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full py-4 rounded-full bg-[#e5389a] hover:bg-[#c4287e] text-white font-bold text-sm tracking-wider uppercase transition-all shadow-lg shadow-[#e5389a]/30 disabled:opacity-50"
                >
                  {status.submitting ? 'Sending Request...' : 'Expert Opinion'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}