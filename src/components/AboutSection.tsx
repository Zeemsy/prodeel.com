import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onOpenDirectoryModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenDirectoryModal }) => {
  return (
    <section id="about" className="bg-white py-20 lg:py-24 border-b border-[#E4E9ED]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Mission */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[12px] font-sans font-bold tracking-widest text-[#2FA7A0] uppercase">
              ABOUT PRODEEL
            </span>

            <h2 className="font-serif text-[38px] sm:text-[44px] text-[#102A43] font-normal leading-[1.15]">
              Making professional services easier to access.
            </h2>

            <p className="text-[17px] text-[#243B53] font-sans leading-[1.6]">
              Prodeel connects people and businesses with relevant professionals, making
              it easier to discover, compare and connect with trusted service providers
              across Cyprus.
            </p>

            <p className="text-[15px] text-[#6B7C8F] font-sans leading-[1.6]">
              For decades, appointing an accountant, lawyer, or corporate insurance broker
              in Cyprus meant fragmented phone calls, non-transparent hourly billing, and
              unpredictable outcomes. Prodeel establishes a standardized, high-integrity
              marketplace where verified professionals respond with transparent scopes and
              fixed deliverables.
            </p>

            {/* Value checklist */}
            <div className="pt-2 space-y-3 text-[15px] font-sans text-[#243B53]">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2FA7A0] shrink-0" />
                <span>Zero commission added to client invoices — transparent direct agreements</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2FA7A0] shrink-0" />
                <span>Mandatory professional indemnity insurance verification</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2FA7A0] shrink-0" />
                <span>Local offices and bilingual service (Greek & English) across all districts</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenDirectoryModal}
                className="inline-flex items-center gap-2 text-[15px] font-sans font-bold text-[#102A43] hover:text-[#2FA7A0] transition-colors group"
              >
                <span>Browse our verified Cyprus directory</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual & 3 Pill/Stat Cards */}
          <div className="lg:col-span-6 relative">
            {/* Soft decorative background shape */}
            <div className="absolute -top-4 -right-4 w-72 h-72 rounded-full bg-[#E8F5F3] -z-0 opacity-70 blur-2xl" />

            <div className="relative z-10 space-y-6">
              {/* Photo Container */}
              <div className="relative rounded-[20px] overflow-hidden border border-[#E4E9ED] shadow-[0_8px_30px_rgba(16,42,67,0.06)] aspect-[4/3] bg-[#F8F4EE]">
                <img
                  src="/src/assets/images/about_cyprus_executives_1791012835357.jpg"
                  alt="Prodeel licensed Cyprus partners and advisors"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to stylized SVG placeholder if asset blocked
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#102A43]/85 via-[#102A43]/40 to-transparent p-6 text-white">
                  <div className="text-xs uppercase tracking-wider text-[#D6B36A] font-bold">
                    Cyprus Professional Standards
                  </div>
                  <div className="text-sm font-sans font-medium text-slate-100 mt-1">
                    Licensed members of ICPAC & Cyprus Bar Association
                  </div>
                </div>
              </div>

              {/* 3 Numbered Statistic Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-[14px] bg-[#F8F4EE] border border-[#E4E9ED]">
                  <div className="font-serif text-[24px] text-[#102A43] font-bold">01</div>
                  <div className="text-[13px] font-sans font-bold text-[#102A43] mt-1">Simple Process</div>
                  <div className="text-[11px] text-[#6B7C8F] mt-0.5">&lt; 2 min request submission</div>
                </div>

                <div className="p-4 rounded-[14px] bg-[#F8F4EE] border border-[#E4E9ED]">
                  <div className="font-serif text-[24px] text-[#2FA7A0] font-bold">02</div>
                  <div className="text-[13px] font-sans font-bold text-[#102A43] mt-1">Verified Pros</div>
                  <div className="text-[11px] text-[#6B7C8F] mt-0.5">100% credential vetted</div>
                </div>

                <div className="p-4 rounded-[14px] bg-[#F8F4EE] border border-[#E4E9ED]">
                  <div className="font-serif text-[24px] text-[#D6B36A] font-bold">03</div>
                  <div className="text-[13px] font-sans font-bold text-[#102A43] mt-1">Multiple Options</div>
                  <div className="text-[11px] text-[#6B7C8F] mt-0.5">Avg 3 tailored proposals</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
