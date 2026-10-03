import React from 'react';
import { ArrowRight, CheckCircle2, Inbox, TrendingUp, ShieldAlert, Award } from 'lucide-react';

interface ForProfessionalsProps {
  onOpenJoinModal: () => void;
}

export const ForProfessionalsSection: React.FC<ForProfessionalsProps> = ({ onOpenJoinModal }) => {
  const sampleBriefs = [
    {
      category: 'Accounting & Tax',
      title: 'Holding Company Restructuring & Transfer Pricing',
      client: 'FinTech Group (Limassol)',
      budget: '€3,500 – €5,000',
      timing: 'Immediate (Q4)',
      matchScore: '98% match',
    },
    {
      category: 'Commercial Legal',
      title: 'Commercial SaaS Agreement & Intellectual Property Box',
      client: 'Software Scale-up (Nicosia)',
      budget: '€1,800 – €2,400',
      timing: 'Within 2 weeks',
      matchScore: '95% match',
    },
    {
      category: 'Commercial Insurance',
      title: 'Marine Cargo & Professional Indemnity Policy',
      client: 'Import/Export Firm (Larnaca)',
      budget: '€1,200 / yr',
      timing: 'Within 7 days',
      matchScore: '92% match',
    },
  ];

  return (
    <section id="for-professionals" className="bg-[#102A43] text-white py-20 lg:py-24 border-b border-[#1b3d5e] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2FA7A0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D6B36A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Value Proposition & CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#2FA7A0]/20 text-[#2FA7A0] text-xs font-sans font-bold border border-[#2FA7A0]/30">
              <Award className="w-3.5 h-3.5" />
              <span>LICENSED PRACTITIONER NETWORK</span>
            </div>

            <h2 className="font-serif text-[38px] sm:text-[44px] text-white font-normal leading-[1.15]">
              Are you a licensed professional in Cyprus?
            </h2>

            <p className="text-[17px] text-slate-300 font-sans leading-[1.6]">
              Join Prodeel and receive relevant client requests directly — without cold outreach,
              speculative pitch decks, or unnecessary proposals.
            </p>

            <div className="space-y-3.5 pt-2 text-[15px] font-sans text-slate-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2FA7A0] shrink-0 mt-0.5" />
                <span>Pre-qualified client briefs with verified budgets and decision timelines</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2FA7A0] shrink-0 mt-0.5" />
                <span>Direct client relationship with 0% commission added to your fee</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2FA7A0] shrink-0 mt-0.5" />
                <span>Protected reputation: restricted exclusively to licensed Cyprus practitioners</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenJoinModal}
                className="inline-flex items-center gap-2 px-7 py-[14px] bg-[#2FA7A0] hover:bg-[#27928b] text-white text-[15px] font-sans font-bold rounded-[8px] transition-all shadow-md active:scale-[0.98] group"
              >
                <span>Apply to Join</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="mt-3 text-xs text-slate-400 font-sans">
                Review turnaround: ~48 hours upon verification of ICPAC / CBA license.
              </div>
            </div>
          </div>

          {/* Right Column: Professional Partner Dashboard Mockup */}
          <div className="lg:col-span-7">
            <div className="bg-[#183654] rounded-[20px] border border-[#2b4c6e] p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.3)] space-y-6">
              
              {/* Mockup Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#2b4c6e]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[8px] bg-[#2FA7A0] flex items-center justify-center text-white font-bold text-base">
                    P
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>Prodeel Partner Console</span>
                      <span className="text-[10px] bg-[#2FA7A0]/30 text-[#2FA7A0] px-1.5 py-0.5 rounded font-mono">
                        VERIFIED
                      </span>
                    </div>
                    <div className="text-xs text-slate-400">
                      Live Cyprus Incoming Opportunities
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-300 bg-[#102A43] px-3 py-1.5 rounded-[6px] border border-[#2b4c6e]">
                  <Inbox className="w-3.5 h-3.5 text-[#2FA7A0]" />
                  <span>3 New Requests</span>
                </div>
              </div>

              {/* Sample Incoming Request Cards */}
              <div className="space-y-3">
                {sampleBriefs.map((brief, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-[12px] bg-[#102A43] border border-[#2b4c6e] hover:border-[#2FA7A0] transition-colors group cursor-default"
                  >
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-[#2FA7A0] font-bold font-sans">
                        {brief.category}
                      </span>
                      <span className="text-xs bg-[#2FA7A0]/15 text-[#2FA7A0] px-2 py-0.5 rounded font-mono font-medium">
                        {brief.matchScore}
                      </span>
                    </div>

                    <div className="text-sm font-bold text-white font-sans group-hover:text-[#2FA7A0] transition-colors">
                      {brief.title}
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-[#1b3d5e] flex items-center justify-between text-xs text-slate-400">
                      <span>{brief.client}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-white">{brief.budget}</span>
                        <span className="text-[#D6B36A]">{brief.timing}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mockup Footer Stats */}
              <div className="pt-2 grid grid-cols-3 gap-3 text-center border-t border-[#2b4c6e]">
                <div className="p-2.5 rounded-[8px] bg-[#102A43]/60">
                  <div className="text-base font-bold text-white">€4,850</div>
                  <div className="text-[11px] text-slate-400">Avg. mandate size</div>
                </div>
                <div className="p-2.5 rounded-[8px] bg-[#102A43]/60">
                  <div className="text-base font-bold text-[#2FA7A0]">86%</div>
                  <div className="text-[11px] text-slate-400">Proposal win rate</div>
                </div>
                <div className="p-2.5 rounded-[8px] bg-[#102A43]/60">
                  <div className="text-base font-bold text-[#D6B36A]">0%</div>
                  <div className="text-[11px] text-slate-400">Commission taken</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
