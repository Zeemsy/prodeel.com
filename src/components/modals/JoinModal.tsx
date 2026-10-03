import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Award } from 'lucide-react';
import { SERVICES_DATA } from '../../data/prodeelData';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    firmName: '',
    category: 'accounting',
    city: 'Nicosia',
    licenseBody: '',
    experienceYears: '10',
    email: '',
    phone: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-[20px] max-w-xl w-full border border-[#E4E9ED] shadow-2xl overflow-hidden relative">
        
        {/* Modal Header */}
        <div className="bg-[#102A43] text-white px-6 sm:px-8 py-5 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#2FA7A0]">
              PARTNER ONBOARDING · CYPRUS
            </div>
            <h3 className="font-serif text-[22px] sm:text-[24px] text-white font-normal mt-0.5">
              Apply to Join Prodeel Network
            </h3>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#E8F5F3] text-[#2FA7A0] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-[26px] text-[#102A43]">
                Application Under Review
              </h3>
              <p className="text-sm text-[#243B53] font-sans max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#102A43]">{formData.fullName}</strong> ({formData.firmName}). Our Cyprus compliance team will verify your regulatory credentials ({formData.licenseBody}) and reach out within 48 hours with your Partner Portal access.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-[8px] bg-[#102A43] text-white text-sm font-bold hover:bg-[#2FA7A0] transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-[#E8F5F3] rounded-[8px] text-xs text-[#243B53] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2FA7A0] shrink-0" />
                <span>Exclusively for licensed practitioners registered in the Republic of Cyprus.</span>
              </div>

              {/* Full Name & Firm Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-sans font-bold text-[#102A43] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Hadjipavlou"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-white border border-[#D9E1E7] rounded-[8px] px-3.5 py-2.5 text-sm text-[#243B53]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-sans font-bold text-[#102A43] mb-1">
                    Firm / Practice Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hadjipavlou & Associates"
                    value={formData.firmName}
                    onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                    className="w-full bg-white border border-[#D9E1E7] rounded-[8px] px-3.5 py-2.5 text-sm text-[#243B53]"
                  />
                </div>
              </div>

              {/* Service & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-sans font-bold text-[#102A43] mb-1">
                    Primary Service Area *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-white border border-[#D9E1E7] rounded-[8px] px-3.5 py-2.5 text-sm text-[#243B53]"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase font-sans font-bold text-[#102A43] mb-1">
                    Office District *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-white border border-[#D9E1E7] rounded-[8px] px-3.5 py-2.5 text-sm text-[#243B53]"
                  >
                    <option value="Nicosia">Nicosia</option>
                    <option value="Limassol">Limassol</option>
                    <option value="Larnaca">Larnaca</option>
                    <option value="Paphos">Paphos</option>
                  </select>
                </div>
              </div>

              {/* Regulatory License Number */}
              <div>
                <label className="block text-xs uppercase font-sans font-bold text-[#102A43] mb-1">
                  License Body & Registration Number *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., ICPAC Reg #5021 or Cyprus Bar Assoc #4819"
                  value={formData.licenseBody}
                  onChange={(e) => setFormData({ ...formData, licenseBody: e.target.value })}
                  className="w-full bg-white border border-[#D9E1E7] rounded-[8px] px-3.5 py-2.5 text-sm text-[#243B53]"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-sans font-bold text-[#102A43] mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="elena@firm.cy"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#D9E1E7] rounded-[8px] px-3.5 py-2.5 text-sm text-[#243B53]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-sans font-bold text-[#102A43] mb-1">
                    Direct Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+357 25 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-[#D9E1E7] rounded-[8px] px-3.5 py-2.5 text-sm text-[#243B53]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#102A43] hover:bg-[#2FA7A0] text-white text-sm font-sans font-bold rounded-[8px] transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit Partner Application</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <div className="text-center text-[11px] text-[#6B7C8F] mt-2">
                  No upfront fees · 0% commission on client fees
                </div>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
