import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

interface FinalCTAProps {
  onOpenRequestModal: () => void;
  onExploreServices: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onOpenRequestModal,
  onExploreServices,
}) => {
  return (
    <section className="bg-[#E8F5F3] py-20 lg:py-24 relative overflow-hidden border-b border-[#d1e9e5]">
      {/* Subtle decorative geometric watermarks */}
      <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full border-[1.5px] border-[#2FA7A0]/20 pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full border-[1.5px] border-[#2FA7A0]/20 pointer-events-none" />
      <div className="absolute top-1/2 right-12 -translate-y-1/2 opacity-15 hidden lg:block pointer-events-none text-[#2FA7A0]">
        <Compass className="w-48 h-48 stroke-[1]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-white/80 border border-[#2FA7A0]/30 text-xs font-sans font-bold text-[#102A43]">
            <span className="w-2 h-2 rounded-full bg-[#2FA7A0]" />
            <span>START YOUR FREE REQUEST</span>
          </div>

          <h2 className="font-serif text-[40px] sm:text-[48px] text-[#102A43] font-normal leading-[1.1]">
            Ready to find the right professional?
          </h2>

          <p className="text-[17px] sm:text-[18px] text-[#243B53] font-sans leading-[1.6]">
            Submit one request and let relevant professionals come to you with clear,
            fixed-fee proposals.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenRequestModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-[14px] bg-[#102A43] hover:bg-[#2FA7A0] text-white text-[15px] font-sans font-bold rounded-[8px] transition-all shadow-sm active:scale-[0.98] group"
            >
              <span>Submit a Request</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreServices}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-[14px] bg-transparent hover:bg-white text-[#102A43] border border-[#102A43] text-[15px] font-sans font-bold rounded-[8px] transition-all active:scale-[0.98]"
            >
              Explore Services
            </button>
          </div>

          <div className="pt-4 flex items-center justify-center gap-6 text-xs text-[#6B7C8F]">
            <span>✓ No hidden platform fees</span>
            <span>·</span>
            <span>✓ Verified Cyprus practitioners</span>
            <span>·</span>
            <span>✓ Zero spam</span>
          </div>
        </div>
      </div>
    </section>
  );
};
