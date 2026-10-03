import React, { useState } from 'react';
import { Check, Star, ShieldCheck, ArrowRight, Eye, ChevronRight } from 'lucide-react';
import { PROPOSALS_SHOWCASE } from '../data/prodeelData';
import { ProposalPreview } from '../types';

interface HeroProps {
  onOpenRequestModal: () => void;
  onOpenDirectoryModal: () => void;
  onSelectProposal: (proposal: ProposalPreview) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenRequestModal,
  onOpenDirectoryModal,
  onSelectProposal,
}) => {
  const [activeProposalIndex, setActiveProposalIndex] = useState(0);
  const currentProposal = PROPOSALS_SHOWCASE[activeProposalIndex];

  return (
    <section className="relative overflow-hidden bg-[#F8F4EE] pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[#E4E9ED]">
      {/* Background subtle architectural ambiance */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#102A43_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8">
            {/* Small badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-white border border-[#E4E9ED] shadow-xs text-xs font-sans font-semibold text-[#102A43]">
              <span className="w-2 h-2 rounded-full bg-[#2FA7A0]" />
              <span>Trusted Professional Services in Cyprus</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="font-serif text-[42px] sm:text-[52px] lg:text-[58px] leading-[1.05] text-[#102A43] font-normal tracking-tight">
                Find the right professional. <br />
                <span className="italic text-[#2FA7A0]">Without the hassle.</span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-[17px] sm:text-[18px] text-[#243B53] font-sans leading-[1.6] max-w-xl">
              Tell us what you need and receive tailored proposals from verified
              professionals in Cyprus. Compare fixed fees, scopes, and licensed
              credentials in one place.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenRequestModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-[14px] bg-[#102A43] hover:bg-[#2FA7A0] text-white text-[15px] font-sans font-bold rounded-[8px] transition-all shadow-[0_4px_14px_rgba(16,42,67,0.12)] active:scale-[0.98] group"
              >
                <span>Submit a Request</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenDirectoryModal}
                className="inline-flex items-center justify-center px-6 py-[14px] bg-transparent hover:bg-[#102A43] text-[#102A43] hover:text-white border border-[#102A43] text-[15px] font-sans font-bold rounded-[8px] transition-all active:scale-[0.98]"
              >
                Find a Professional
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 border-t border-[#E4E9ED]/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-[14px] font-sans font-medium text-[#243B53]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#2FA7A0] stroke-[2.5]" />
                <span>Verified professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#2FA7A0] stroke-[2.5]" />
                <span>Compare multiple proposals</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#2FA7A0] stroke-[2.5]" />
                <span>Responses within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Proposal Comparison Interface */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-[500px] lg:max-w-none">
              
              {/* Proposal Container with restrained shadow */}
              <div className="bg-white rounded-[20px] border border-[#E4E9ED] shadow-[0_8px_30px_rgba(16,42,67,0.06)] overflow-hidden">
                
                {/* Header bar */}
                <div className="px-6 py-4 bg-[#102A43] text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2FA7A0] animate-pulse" />
                    <span className="text-[12px] font-sans uppercase tracking-wider font-bold text-slate-200">
                      Live Proposal Matcher
                    </span>
                  </div>
                  <span className="text-[12px] text-slate-300 font-sans">
                    Cyprus Verified Network
                  </span>
                </div>

                {/* Proposal Tabs Selector */}
                <div className="flex items-center border-b border-[#E4E9ED] bg-[#F8F4EE]/60 px-2 pt-2 gap-1 overflow-x-auto">
                  {PROPOSALS_SHOWCASE.map((prop, idx) => (
                    <button
                      key={prop.id}
                      onClick={() => setActiveProposalIndex(idx)}
                      className={`px-4 py-2.5 text-xs font-sans font-bold rounded-t-[8px] transition-all whitespace-nowrap flex items-center gap-1.5 ${
                        activeProposalIndex === idx
                          ? 'bg-white text-[#102A43] border-t-2 border-[#2FA7A0] shadow-xs'
                          : 'text-[#6B7C8F] hover:text-[#102A43] hover:bg-white/50'
                      }`}
                    >
                      <span>{prop.professional.category.toUpperCase()}</span>
                      <span className="text-[10px] opacity-70">
                        {prop.pricing.currency}{prop.pricing.amount}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Active Proposal Card Details */}
                <div className="p-6 sm:p-7 space-y-5">
                  {/* Verified & Rating Row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-[#E8F5F3] text-[#2FA7A0] text-xs font-sans font-bold">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#2FA7A0]" />
                        Verified Professional
                      </span>
                      <span className="text-xs text-[#6B7C8F] font-sans">
                        {currentProposal.professional.licenseBody}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-[#F8F4EE] px-2.5 py-1 rounded-[6px] text-xs font-sans font-bold text-[#102A43]">
                      <Star className="w-3.5 h-3.5 fill-[#D6B36A] text-[#D6B36A]" />
                      <span>{currentProposal.professional.rating}</span>
                      <span className="text-[#6B7C8F] font-normal font-sans">
                        ({currentProposal.professional.reviewCount})
                      </span>
                    </div>
                  </div>

                  {/* Professional Info */}
                  <div>
                    <h4 className="font-serif text-[24px] text-[#102A43] font-normal leading-snug">
                      {currentProposal.professional.title}
                    </h4>
                    <p className="text-sm font-sans font-medium text-[#243B53] mt-0.5">
                      {currentProposal.professional.name} · <span className="text-[#6B7C8F]">{currentProposal.professional.firm} ({currentProposal.professional.city})</span>
                    </p>
                  </div>

                  {/* Service Scope Summary */}
                  <div className="p-3.5 rounded-[8px] bg-[#F8F4EE]/70 border border-[#E4E9ED]">
                    <div className="text-xs font-sans font-bold text-[#102A43] mb-1">
                      {currentProposal.serviceTitle}
                    </div>
                    <p className="text-xs font-sans text-[#6B7C8F] line-clamp-2 leading-relaxed">
                      {currentProposal.summary}
                    </p>
                    <div className="mt-2.5 pt-2 border-t border-[#E4E9ED] flex items-center justify-between text-[11px] text-[#6B7C8F]">
                      <span>Turnaround: <strong className="text-[#243B53]">{currentProposal.estimatedTimeline}</strong></span>
                      <span>Valid: <strong className="text-[#243B53]">{currentProposal.validUntil}</strong></span>
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-2 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider font-sans font-bold text-[#6B7C8F]">
                        Proposal Scope
                      </div>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-xs font-sans font-medium text-[#6B7C8F]">From</span>
                        <span className="text-2xl font-serif font-bold text-[#102A43]">
                          {currentProposal.pricing.currency}{currentProposal.pricing.amount}
                        </span>
                        <span className="text-xs font-sans text-[#6B7C8F]">
                          / {currentProposal.pricing.model}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectProposal(currentProposal)}
                      className="px-5 py-2.5 rounded-[8px] bg-[#2FA7A0] hover:bg-[#27928b] text-white text-sm font-sans font-bold transition-all flex items-center gap-1.5 shadow-xs hover:shadow active:scale-[0.98]"
                    >
                      <span>View Proposal</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Bottom switcher footer */}
                <div className="px-6 py-3 bg-[#F8F4EE] border-t border-[#E4E9ED] flex items-center justify-between text-xs text-[#243B53]">
                  <span className="font-sans font-medium text-[#6B7C8F]">
                    Showing proposal {activeProposalIndex + 1} of {PROPOSALS_SHOWCASE.length}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {PROPOSALS_SHOWCASE.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveProposalIndex(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          activeProposalIndex === idx
                            ? 'bg-[#102A43] w-6'
                            : 'bg-[#CBD5E1] hover:bg-[#94A3B8]'
                        }`}
                        aria-label={`Switch to proposal ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

              </div>

              {/* Sub-label under card */}
              <div className="mt-3 text-center text-xs text-[#6B7C8F] font-sans flex items-center justify-center gap-1.5">
                <span>+ 24 verified specialists currently available in Cyprus</span>
                <span className="w-1 h-1 rounded-full bg-[#6B7C8F]" />
                <button
                  onClick={onOpenDirectoryModal}
                  className="text-[#2FA7A0] font-bold hover:underline"
                >
                  Explore Directory →
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
