import React from 'react';
import { ClipboardEdit, Users, Scale, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenRequestModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenRequestModal }) => {
  const steps = [
    {
      number: '01',
      title: 'Tell us what you need',
      description:
        'Complete one simple request form with the details of the service you need, timeline, and location in Cyprus.',
      icon: ClipboardEdit,
      detail: 'Takes less than 2 minutes · No obligation',
    },
    {
      number: '02',
      title: 'We find the right professionals',
      description:
        'Your request is matched with relevant verified professionals licensed by ICPAC, Cyprus Bar Association, or ICCS.',
      icon: Users,
      detail: 'Strict privacy · Only vetted specialists respond',
    },
    {
      number: '03',
      title: 'Compare your proposals',
      description:
        'Review your options, compare fixed-fee proposals side-by-side, and choose the professional that best suits your goals.',
      icon: Scale,
      detail: 'Clear deliverables · Transparent pricing',
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#F8F4EE] py-20 lg:py-24 border-b border-[#E4E9ED]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-[36px] sm:text-[44px] text-[#102A43] font-normal leading-[1.15]">
            How it works
          </h2>
          <p className="mt-3 text-[16px] sm:text-[18px] text-[#243B53] font-sans leading-[1.6]">
            Simple steps. Real results. Better decisions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Horizontal connecting line for desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[15%] right-[15%] h-[2px] bg-[#E4E9ED] -z-0" />

          {/* 3 Step Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[14px] border border-[#E4E9ED] p-8 shadow-[0_8px_30px_rgba(16,42,67,0.04)] flex flex-col justify-between hover:border-[#2FA7A0] transition-colors"
                >
                  <div>
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-full bg-[#F8F4EE] border-2 border-[#102A43] flex items-center justify-center font-serif text-[20px] font-bold text-[#102A43]">
                        {step.number}
                      </div>
                      <div className="w-10 h-10 rounded-[8px] bg-[#E8F5F3] flex items-center justify-center text-[#2FA7A0]">
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-serif text-[22px] text-[#102A43] font-normal mb-3 leading-snug">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-[14px] text-[#243B53] font-sans leading-[1.6] mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Step detail footer */}
                  <div className="pt-4 border-t border-[#E4E9ED] flex items-center justify-between text-xs text-[#6B7C8F]">
                    <span>{step.detail}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Callout */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenRequestModal}
            className="inline-flex items-center gap-2 px-6 py-[14px] bg-[#102A43] hover:bg-[#2FA7A0] text-white text-[15px] font-sans font-bold rounded-[8px] transition-all shadow-sm hover:shadow"
          >
            <span>Start Your Request Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
