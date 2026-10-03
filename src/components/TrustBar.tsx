import React from 'react';
import { ShieldCheck, FileCheck, MapPin, Zap } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Verified Professionals',
      description: 'Licensed with ICPAC, Cyprus Bar, or Insurance Superintendent',
    },
    {
      icon: FileCheck,
      title: 'Multiple Proposals',
      description: 'Receive competitive itemized quotes before choosing',
    },
    {
      icon: MapPin,
      title: 'Cyprus-Focused',
      description: 'Practitioners based in Nicosia, Limassol, Larnaca & Paphos',
    },
    {
      icon: Zap,
      title: 'Simple Process',
      description: 'One standardized request form with no cold outreach',
    },
  ];

  return (
    <section className="bg-white border-b border-[#E4E9ED] py-10 lg:py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E4E9ED]">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`flex items-start gap-4 ${idx !== 0 ? 'sm:pl-6 pt-6 sm:pt-0' : ''}`}
              >
                <div className="w-10 h-10 rounded-[8px] bg-[#E8F5F3] flex items-center justify-center shrink-0 text-[#2FA7A0]">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-[15px] text-[#102A43]">
                    {pillar.title}
                  </h4>
                  <p className="text-[13px] text-[#6B7C8F] font-sans mt-0.5 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cyprus cities served row */}
        <div className="mt-8 pt-6 border-t border-[#E4E9ED] flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-[#6B7C8F]">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#102A43]">Active Municipalities:</span>
            <span>Nicosia (Central & Strovolos)</span>
            <span>·</span>
            <span>Limassol (Marina & Germasogeia)</span>
            <span>·</span>
            <span>Larnaca</span>
            <span>·</span>
            <span>Paphos</span>
          </div>
          <div className="text-[#2FA7A0] font-medium flex items-center gap-1">
            <span>Average initial response time: <strong>4.2 hours</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};
