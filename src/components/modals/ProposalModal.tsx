import React from 'react';
import { X, Check, Star, ShieldCheck, Clock, Calendar, ArrowRight, Building } from 'lucide-react';
import { ProposalPreview } from '../../types';

interface ProposalModalProps {
  proposal: ProposalPreview | null;
  onClose: () => void;
  onAcceptProposal: (proposal: ProposalPreview) => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({
  proposal,
  onClose,
  onAcceptProposal,
}) => {
  if (!proposal) return null;

  const pro = proposal.professional;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-[20px] max-w-2xl w-full border border-[#E4E9ED] shadow-2xl overflow-hidden relative">
        
        {/* Modal Top Bar */}
        <div className="bg-[#102A43] text-white px-6 sm:px-8 py-5 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#2FA7A0]">
              VERIFIED PROPOSAL BREAKDOWN
            </div>
            <h3 className="font-serif text-[22px] sm:text-[24px] text-white font-normal mt-0.5">
              {proposal.serviceTitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Professional Header Card */}
          <div className="p-4 rounded-[14px] bg-[#F8F4EE] border border-[#E4E9ED] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-[8px] bg-[#102A43] text-white flex items-center justify-center font-serif text-xl font-bold">
                {pro.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-sans font-bold text-[16px] text-[#102A43]">
                    {pro.name}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[11px] font-sans font-bold text-[#2FA7A0] bg-[#E8F5F3] px-2 py-0.5 rounded-[4px]">
                    <ShieldCheck className="w-3 h-3" />
                    Verified
                  </span>
                </div>
                <div className="text-xs text-[#6B7C8F] font-sans mt-0.5">
                  {pro.title} · {pro.firm} ({pro.city})
                </div>
                <div className="text-[11px] text-[#243B53] font-mono mt-0.5">
                  {pro.licenseBody}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-[8px] border border-[#E4E9ED] self-start sm:self-center">
              <Star className="w-4 h-4 fill-[#D6B36A] text-[#D6B36A]" />
              <span className="font-bold text-sm text-[#102A43]">{pro.rating}</span>
              <span className="text-xs text-[#6B7C8F]">({pro.reviewCount} reviews)</span>
            </div>
          </div>

          {/* Scope Summary */}
          <div>
            <div className="text-xs font-sans font-bold uppercase tracking-wider text-[#6B7C8F] mb-1.5">
              Scope of Work
            </div>
            <p className="text-[15px] text-[#243B53] font-sans leading-relaxed">
              {proposal.summary}
            </p>
          </div>

          {/* Concrete Deliverables */}
          <div>
            <div className="text-xs font-sans font-bold uppercase tracking-wider text-[#6B7C8F] mb-2.5">
              Included Deliverables
            </div>
            <div className="space-y-2 bg-[#F8F4EE]/50 p-4 rounded-[12px] border border-[#E4E9ED]">
              {proposal.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-[#243B53]">
                  <Check className="w-4 h-4 text-[#2FA7A0] shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & Timing Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-[12px] bg-[#E8F5F3] border border-[#2FA7A0]/20">
              <div className="text-[11px] uppercase font-bold text-[#2FA7A0]">
                Proposed Fee
              </div>
              <div className="text-2xl font-serif font-bold text-[#102A43] mt-1">
                {proposal.pricing.currency}{proposal.pricing.amount}
              </div>
              <div className="text-xs text-[#243B53] mt-0.5">
                {proposal.pricing.model}
              </div>
            </div>

            <div className="p-4 rounded-[12px] bg-[#F8F4EE] border border-[#E4E9ED]">
              <div className="text-[11px] uppercase font-bold text-[#6B7C8F] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Turnaround</span>
              </div>
              <div className="text-sm font-bold text-[#102A43] mt-2">
                {proposal.estimatedTimeline}
              </div>
              <div className="text-[11px] text-[#6B7C8F] mt-0.5">
                Milestones documented
              </div>
            </div>

            <div className="p-4 rounded-[12px] bg-[#F8F4EE] border border-[#E4E9ED]">
              <div className="text-[11px] uppercase font-bold text-[#6B7C8F] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Validity</span>
              </div>
              <div className="text-sm font-bold text-[#102A43] mt-2">
                {proposal.validUntil}
              </div>
              <div className="text-[11px] text-[#6B7C8F] mt-0.5">
                Price lock guaranteed
              </div>
            </div>
          </div>

          {/* Trust footnote */}
          <div className="p-3.5 rounded-[8px] bg-slate-50 border border-slate-200 text-xs text-[#6B7C8F]">
            <strong>No platform commission:</strong> If you accept this proposal, you enter into a direct client engagement letter with {pro.firm} with full indemnity protection under Cyprus law.
          </div>

        </div>

        {/* Modal Actions */}
        <div className="px-6 sm:px-8 py-4 bg-[#F8F4EE] border-t border-[#E4E9ED] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-bold text-[#6B7C8F] hover:text-[#102A43] transition-colors"
          >
            Close Preview
          </button>

          <button
            onClick={() => onAcceptProposal(proposal)}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#102A43] hover:bg-[#2FA7A0] text-white text-sm font-sans font-bold rounded-[8px] transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Connect with {pro.name.split(' ')[0]}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
