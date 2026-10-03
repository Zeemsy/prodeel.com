import React from 'react';
import {
  ShieldCheck,
  Calculator,
  Scale,
  Building2,
  TrendingUp,
  Compass,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/prodeelData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  // Map icon component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'Calculator':
        return <Calculator className="w-6 h-6" />;
      case 'Scale':
        return <Scale className="w-6 h-6" />;
      case 'Building2':
        return <Building2 className="w-6 h-6" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="bg-[#F8F4EE] py-20 lg:py-24 border-b border-[#E4E9ED]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-serif text-[36px] sm:text-[44px] text-[#102A43] font-normal leading-[1.15]">
            What do you need help with?
          </h2>
          <p className="mt-3 text-[16px] sm:text-[18px] text-[#243B53] font-sans leading-[1.6]">
            Choose a service and connect with verified professionals who can help.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group bg-white rounded-[14px] border border-[#E4E9ED] p-7 transition-all duration-200 hover:border-[#2FA7A0] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(16,42,67,0.06)] cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Icon & Starting Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-[8px] bg-[#F8F4EE] group-hover:bg-[#E8F5F3] flex items-center justify-center text-[#102A43] group-hover:text-[#2FA7A0] transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[12px] font-sans font-medium text-[#6B7C8F]">
                    From {service.startingFrom}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-[24px] text-[#102A43] font-normal mb-2 group-hover:text-[#2FA7A0] transition-colors">
                  {service.name}
                </h3>

                {/* Short Description */}
                <p className="text-[14px] text-[#243B53] font-sans leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Subservice List Tags */}
                <div className="pt-4 border-t border-[#E4E9ED]/60 flex flex-wrap gap-1.5 mb-6">
                  {service.subservices.slice(0, 3).map((sub, i) => (
                    <span
                      key={i}
                      className="text-[12px] font-sans text-[#6B7C8F] bg-[#F8F4EE] px-2 py-1 rounded-[6px]"
                    >
                      {sub}
                    </span>
                  ))}
                  {service.subservices.length > 3 && (
                    <span className="text-[12px] font-sans text-[#6B7C8F] px-1 py-1">
                      +{service.subservices.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer / Arrow CTA */}
              <div className="flex items-center justify-between text-[14px] font-sans font-bold text-[#102A43] group-hover:text-[#2FA7A0] transition-colors pt-2">
                <span>Request Proposals</span>
                <div className="w-8 h-8 rounded-full bg-[#F8F4EE] group-hover:bg-[#2FA7A0] group-hover:text-white flex items-center justify-center transition-all group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom helper info */}
        <div className="mt-12 text-center">
          <p className="text-sm font-sans text-[#6B7C8F]">
            Need a bespoke combination of legal, tax, and licensing services?{' '}
            <button
              onClick={() => onSelectService(SERVICES_DATA[1])}
              className="text-[#2FA7A0] font-bold hover:underline ml-1"
            >
              Submit a custom brief →
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};
