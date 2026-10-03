import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft, Loader2, Sparkles } from 'lucide-react';
import { SERVICES_DATA, PROFESSIONALS_DATA } from '../../data/prodeelData';

interface RequestModalProps {
  isOpen: boolean;
  initialCategory?: string;
  onClose: () => void;
}

export const RequestModal: React.FC<RequestModalProps> = ({
  isOpen,
  initialCategory,
  onClose,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory || 'Accounting'
  );
  const [district, setDistrict] = useState<'Nicosia' | 'Limassol' | 'Larnaca' | 'Paphos' | 'All Cyprus'>('Limassol');
  const [timeline, setTimeline] = useState('Within 2 weeks');
  const [budgetRange, setBudgetRange] = useState('€500 – €1,500');
  const [details, setDetails] = useState('');
  
  // Contact info
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [matchedPros, setMatchedPros] = useState(PROFESSIONALS_DATA.slice(0, 3));

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (!details.trim()) {
        alert('Please describe what you need assistance with.');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!fullName.trim() || !email.trim()) {
        alert('Please provide your name and email address.');
        return;
      }
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(4);
      }, 1000);
    }
  };

  const handleReset = () => {
    setStep(1);
    setDetails('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-[20px] max-w-2xl w-full border border-[#E4E9ED] shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-[#102A43] text-white px-6 sm:px-8 py-5 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#2FA7A0]">
              PRODEEL REQUEST WIZARD · CYPRUS
            </div>
            <h3 className="font-serif text-[22px] sm:text-[24px] text-white font-normal mt-0.5">
              Submit a Service Request
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

        {/* Step Progress Bar */}
        {step < 4 && (
          <div className="bg-[#F8F4EE] px-6 sm:px-8 py-3 border-b border-[#E4E9ED] flex items-center justify-between text-xs font-sans">
            <span className="font-bold text-[#102A43]">
              Step {step} of 3:{' '}
              {step === 1 && 'Select Service Category'}
              {step === 2 && 'Scope & Location'}
              {step === 3 && 'Your Contact Details'}
            </span>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-2 rounded-full transition-all ${
                    step >= s ? 'bg-[#2FA7A0] w-6' : 'bg-[#CBD5E1] w-3'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[72vh] overflow-y-auto">
          
          {/* STEP 1: Service Category Selection */}
          {step === 1 && (
            <div className="space-y-4">
              <p className="text-sm text-[#243B53] font-sans">
                Which professional discipline do you require assistance with in Cyprus?
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {SERVICES_DATA.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => setSelectedCategory(srv.name)}
                    className={`p-4 rounded-[12px] border text-left cursor-pointer transition-all ${
                      selectedCategory === srv.name
                        ? 'border-[#2FA7A0] bg-[#E8F5F3] shadow-xs'
                        : 'border-[#E4E9ED] bg-white hover:border-[#2FA7A0]/60'
                    }`}
                  >
                    <div className="font-serif text-[18px] text-[#102A43] font-normal">
                      {srv.name}
                    </div>
                    <div className="text-xs text-[#6B7C8F] mt-1 line-clamp-1">
                      {srv.subservices.slice(0, 3).join(', ')}
                    </div>
                    <div className="text-[11px] text-[#2FA7A0] font-bold mt-2">
                      From {srv.startingFrom}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Scope & Location in Cyprus */}
          {step === 2 && (
            <div className="space-y-4">
              {/* Cyprus District */}
              <div>
                <label className="block text-xs uppercase font-sans font-bold text-[#102A43] mb-1.5">
                  District in Cyprus
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {(['Limassol', 'Nicosia', 'Larnaca', 'Paphos', 'All Cyprus'] as const).map((dist) => (
                    <button
                      key={dist}
                      type="button"
                      onClick={() => setDistrict(dist)}
                      className={`py-2 text-xs font-bold rounded-[8px] border transition-all ${
                        district === dist
                          ? 'bg-[#102A43] text-white border-[#102A43]'
                          : 'bg-white text-[#243B53] border-[#E4E9ED] hover:bg-[#F8F4EE]'
                      }`}
                    >
                      {dist}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timing & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-sans font-bold text-[#102A43] mb-1.5">
                    Expected Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full bg-white border border-[#D9E1E7] rounded-[8px] px-3.5 py-2.5 text-sm text-[#243B53]"
                  >
                    <option value="Immediate (within 48 hours)">Immediate (within 48 hours)</option>
                    <option value="Within 2 weeks">Within 2 weeks</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="Planning ahead / Flexible">Planning ahead / Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-sans font-bold text-[#102A43] mb-1.5">
                    Estimated Budget (Optional)
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full bg-white border border-[#D9E1E7] rounded-[8px] px-3.5 py-2.5 text-sm text-[#243B53]"
                  >
                    <option value="Under €500">Under €500</option>
                    <option value="€500 – €1,500">€500 – €1,500</option>
                    <option value="€1,500 – €5,000">€1,500 – €5,000</option>
                    <option value="€5,000+ / Ongoing Retainer">€5,000+ / Ongoing Retainer</option>
                  </select>
                </div>
              </div>

              {/* Details Textarea */}
              <div>
                <label className="block text-xs uppercase font-sans font-bold text-[#102A43] mb-1.5">
                  Describe what you need help with *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="e.g., We operate an e-commerce business in Limassol and require statutory audit + corporate tax return filing for 2025. Annual turnover approx €800k..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full bg-white border border-[#D9E1E7] rounded-[8px] p-3 text-sm text-[#243B53] focus:outline-none focus:border-[#2FA7A0] focus:ring-1 focus:ring-[#2FA7A0]"
                />
              </div>
            </div>
          )}

          {/* STEP 3: Contact Information */}
          {step === 3 && (
            <div className="space-y-4">
              <p className="text-sm text-[#243B53]">
                Where should verified Cyprus professionals send their customized proposals?
              </p>

              <div>
                <label className="block text-xs uppercase font-sans font-bold text-[#102A43] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maria Constantinou"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-white border border-[#D9E1E7] rounded-[8px] px-3.5 py-2.5 text-sm text-[#243B53]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-sans font-bold text-[#102A43] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="maria@company.cy"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#D9E1E7] rounded-[8px] px-3.5 py-2.5 text-sm text-[#243B53]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-sans font-bold text-[#102A43] mb-1.5">
                    Phone (+357)
                  </label>
                  <input
                    type="tel"
                    placeholder="+357 99 000 000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-[#D9E1E7] rounded-[8px] px-3.5 py-2.5 text-sm text-[#243B53]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-sans font-bold text-[#102A43] mb-1.5">
                  Company / Organization (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Horizon Holdings Ltd"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-white border border-[#D9E1E7] rounded-[8px] px-3.5 py-2.5 text-sm text-[#243B53]"
                />
              </div>

              <div className="p-3 bg-[#F8F4EE] rounded-[8px] text-xs text-[#6B7C8F]">
                🔒 <strong>Zero spam guarantee:</strong> Your details will only be presented to licensed practitioners in Cyprus who match your requirements.
              </div>
            </div>
          )}

          {/* STEP 4: Success & Proposal Matching Animation */}
          {step === 4 && (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#E8F5F3] text-[#2FA7A0] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#2FA7A0]">
                  REQUEST SUBMITTED SUCCESSFULLY
                </div>
                <h3 className="font-serif text-[28px] text-[#102A43] mt-1">
                  Matching Cyprus Specialists
                </h3>
                <p className="text-sm text-[#6B7C8F] max-w-md mx-auto mt-2">
                  We have forwarded your brief to verified professionals in {district} matching <strong className="text-[#102A43]">{selectedCategory}</strong>.
                </p>
              </div>

              {/* Matched Professionals List */}
              <div className="border border-[#E4E9ED] rounded-[14px] p-4 bg-[#F8F4EE]/60 text-left space-y-3">
                <div className="text-xs font-bold text-[#102A43] uppercase tracking-wider flex items-center justify-between">
                  <span>Notified Qualified Practitioners</span>
                  <span className="text-[#2FA7A0]">Estimated reply: &lt; 4 hours</span>
                </div>

                {matchedPros.map((pro) => (
                  <div
                    key={pro.id}
                    className="p-3 bg-white rounded-[8px] border border-[#E4E9ED] flex items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <div className="font-bold text-[#102A43]">{pro.name}</div>
                      <div className="text-[#6B7C8F]">{pro.firm} · {pro.city} ({pro.licenseBody})</div>
                    </div>
                    <span className="text-[#2FA7A0] font-bold">★ {pro.rating}</span>
                  </div>
                ))}
              </div>

              <div>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-[8px] bg-[#102A43] text-white text-sm font-bold hover:bg-[#2FA7A0] transition-colors"
                >
                  Return to Marketplace
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Actions */}
        {step < 4 && (
          <div className="px-6 sm:px-8 py-4 bg-[#F8F4EE] border-t border-[#E4E9ED] flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => (s - 1) as any)}
                className="px-4 py-2 text-sm font-bold text-[#6B7C8F] hover:text-[#102A43] flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleNext}
              className="px-6 py-2.5 bg-[#102A43] hover:bg-[#2FA7A0] text-white text-sm font-sans font-bold rounded-[8px] transition-all flex items-center gap-2 shadow-sm disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>{step === 3 ? 'Submit Request' : 'Continue'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
