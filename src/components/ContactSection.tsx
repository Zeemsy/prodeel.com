import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/prodeelData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceNeeded: 'Accounting',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Please enter a valid business or personal email address.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="bg-[#F8F4EE] py-20 lg:py-24 border-b border-[#E4E9ED]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[12px] font-sans font-bold tracking-widest text-[#2FA7A0] uppercase">
              GET IN TOUCH
            </span>

            <h2 className="font-serif text-[38px] sm:text-[44px] text-[#102A43] font-normal leading-[1.15]">
              Let’s find the right professional for you.
            </h2>

            <p className="text-[17px] text-[#243B53] font-sans leading-[1.6]">
              Tell us what you need and we’ll help connect you with relevant, verified professionals
              across Cyprus within 24 hours.
            </p>

            <div className="pt-4 space-y-5">
              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-[8px] bg-white border border-[#E4E9ED] flex items-center justify-center text-[#2FA7A0] shrink-0 shadow-xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase font-sans font-bold text-[#6B7C8F]">Email Inquiries</div>
                  <a
                    href="mailto:contact@prodeel.cy"
                    className="text-[15px] font-sans font-bold text-[#102A43] hover:text-[#2FA7A0] transition-colors"
                  >
                    contact@prodeel.cy
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-[8px] bg-white border border-[#E4E9ED] flex items-center justify-center text-[#2FA7A0] shrink-0 shadow-xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase font-sans font-bold text-[#6B7C8F]">Cyprus Support Desk</div>
                  <div className="text-[15px] font-sans font-bold text-[#102A43]">
                    +357 22 890 100
                  </div>
                  <div className="text-xs text-[#6B7C8F]">Monday – Friday, 08:30 – 18:00 EET</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-[8px] bg-white border border-[#E4E9ED] flex items-center justify-center text-[#2FA7A0] shrink-0 shadow-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase font-sans font-bold text-[#6B7C8F]">Registered Office</div>
                  <div className="text-[15px] font-sans font-medium text-[#102A43]">
                    Severis Avenue 14, 1066 Nicosia, Cyprus
                  </div>
                  <div className="text-xs text-[#6B7C8F]">Branch: Gladstonos Street, Limassol</div>
                </div>
              </div>
            </div>

            <div className="pt-4 p-4 rounded-[10px] bg-white border border-[#E4E9ED] text-xs text-[#6B7C8F] leading-relaxed">
              <span className="font-bold text-[#102A43]">Privacy Guarantee:</span> Your contact information is never shared publicly or sold to lead aggregators. Only matched licensed firms who confirm availability receive your inquiry.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[20px] border border-[#E4E9ED] p-7 sm:p-9 shadow-[0_8px_30px_rgba(16,42,67,0.06)]">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#E8F5F3] text-[#2FA7A0] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-[28px] text-[#102A43]">
                    Request Received!
                  </h3>
                  <p className="text-[15px] text-[#243B53] font-sans max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#102A43]">{formData.name}</strong>. We have matched your inquiry for <strong className="text-[#2FA7A0]">{formData.serviceNeeded}</strong> with licensed specialists in Cyprus. You will receive proposals by email within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        serviceNeeded: 'Accounting',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-[8px] bg-[#102A43] text-white text-sm font-bold hover:bg-[#2FA7A0] transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-[#E4E9ED] pb-4 mb-2">
                    <h3 className="font-serif text-[24px] text-[#102A43]">
                      Direct Request Form
                    </h3>
                    <p className="text-xs text-[#6B7C8F] mt-0.5">
                      Receive up to 3 competitive proposals with clear scopes.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 text-xs rounded-[6px] bg-red-50 text-red-700 border border-red-200">
                      {errorMsg}
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label className="block text-xs uppercase font-sans font-bold text-[#102A43] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Constantinos Georgiou"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-[#D9E1E7] rounded-[8px] px-4 py-3.5 text-sm text-[#243B53] placeholder:text-[#6B7C8F]/60 focus:outline-none focus:border-[#2FA7A0] focus:ring-1 focus:ring-[#2FA7A0] transition-colors"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-sans font-bold text-[#102A43] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.cy"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-[#D9E1E7] rounded-[8px] px-4 py-3.5 text-sm text-[#243B53] placeholder:text-[#6B7C8F]/60 focus:outline-none focus:border-[#2FA7A0] focus:ring-1 focus:ring-[#2FA7A0] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase font-sans font-bold text-[#102A43] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+357 99 123 456"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-[#D9E1E7] rounded-[8px] px-4 py-3.5 text-sm text-[#243B53] placeholder:text-[#6B7C8F]/60 focus:outline-none focus:border-[#2FA7A0] focus:ring-1 focus:ring-[#2FA7A0] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label className="block text-xs uppercase font-sans font-bold text-[#102A43] mb-1.5">
                      Service Needed *
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full bg-white border border-[#D9E1E7] rounded-[8px] px-4 py-3.5 text-sm text-[#243B53] focus:outline-none focus:border-[#2FA7A0] focus:ring-1 focus:ring-[#2FA7A0] transition-colors"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name} ({s.subservices.slice(0, 2).join(', ')})
                        </option>
                      ))}
                      <option value="Multi-Service / Custom Package">
                        Multi-Service / Custom Advisory
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase font-sans font-bold text-[#102A43] mb-1.5">
                      How can we help? *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Briefly describe what you require (e.g. Annual audit for Cyprus Ltd with €2M turnover, or review of commercial office lease in Limassol)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-[#D9E1E7] rounded-[8px] px-4 py-3.5 text-sm text-[#243B53] placeholder:text-[#6B7C8F]/60 focus:outline-none focus:border-[#2FA7A0] focus:ring-1 focus:ring-[#2FA7A0] transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-[14px] bg-[#102A43] hover:bg-[#2FA7A0] text-white text-[15px] font-sans font-bold rounded-[8px] transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span>Matching Verified Professionals...</span>
                      ) : (
                        <>
                          <span>Submit Request →</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <div className="mt-2 text-center text-xs text-[#6B7C8F]">
                      Free of charge · Direct quotes from verified Cyprus practitioners
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
