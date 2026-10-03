import React from 'react';
import { SendHorizontal, ShieldCheck, Layers, Building } from 'lucide-react';

export const WhyProdeel: React.FC = () => {
  const points = [
    {
      icon: SendHorizontal,
      title: 'One request',
      description: 'No need to contact multiple professionals individually or repeat your situation.',
    },
    {
      icon: ShieldCheck,
      title: 'Verified professionals',
      description: 'Connect with certified specialists who meet rigorous licensing and insurance requirements.',
    },
    {
      icon: Layers,
      title: 'Multiple proposals',
      description: 'Compare transparent scopes, deliverables, and fees before making your informed decision.',
    },
    {
      icon: Building,
      title: 'Built for Cyprus',
      description: 'A professional-services marketplace designed specifically for Cyprus regulatory frameworks.',
    },
  ];

  return (
    <section id="why-prodeel" className="bg-white py-20 lg:py-24 border-b border-[#E4E9ED]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-[36px] sm:text-[44px] text-[#102A43] font-normal leading-[1.15]">
            Why choose Prodeel?
          </h2>
          <p className="mt-3 text-[16px] sm:text-[18px] text-[#243B53] font-sans leading-[1.6]">
            Eliminating opacity and inefficiency from professional appointments in Cyprus.
          </p>
        </div>

        {/* 4 Clean Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-[14px] bg-[#F8F4EE]/60 border border-[#E4E9ED] flex flex-col justify-between hover:bg-white hover:border-[#2FA7A0] hover:shadow-[0_8px_30px_rgba(16,42,67,0.06)] transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-[8px] bg-white border border-[#E4E9ED] flex items-center justify-center text-[#102A43] mb-5">
                    <Icon className="w-6 h-6 text-[#2FA7A0] stroke-[1.8]" />
                  </div>
                  <h3 className="font-serif text-[20px] text-[#102A43] font-normal mb-2.5">
                    {point.title}
                  </h3>
                  <p className="text-[14px] text-[#243B53] font-sans leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
