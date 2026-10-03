import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/prodeelData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = TESTIMONIALS_DATA[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#F8F4EE] py-20 lg:py-24 border-b border-[#E4E9ED]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Centered container constrained to ~680px max-width */}
        <div className="max-w-[700px] mx-auto text-center">
          
          {/* Section Kicker */}
          <div className="text-xs font-sans uppercase font-bold tracking-widest text-[#2FA7A0] mb-4">
            CLIENT EXPERIENCES
          </div>

          {/* Testimonial Card */}
          <div className="bg-white rounded-[20px] border border-[#E4E9ED] p-8 sm:p-12 shadow-[0_8px_30px_rgba(16,42,67,0.06)] relative">
            
            {/* Large Decorative Quotation Mark */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#E8F5F3] flex items-center justify-center text-[#2FA7A0]">
                <Quote className="w-6 h-6 rotate-180 fill-[#2FA7A0]" />
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D6B36A] text-[#D6B36A]" />
              ))}
            </div>

            {/* Quote Body in DM Serif Display */}
            <blockquote className="font-serif text-[24px] sm:text-[28px] text-[#102A43] font-normal leading-[1.3] mb-8">
              “{current.quote}”
            </blockquote>

            {/* Author Metadata */}
            <div className="border-t border-[#E4E9ED] pt-6">
              <div className="font-sans font-bold text-[17px] text-[#102A43]">
                {current.author}
              </div>
              <div className="text-[14px] text-[#6B7C8F] font-sans mt-0.5">
                {current.role} {current.company && `· ${current.company}`}
              </div>
              <div className="text-[12px] text-[#2FA7A0] font-sans font-medium mt-1">
                {current.serviceUsed} · {current.city}, Cyprus
              </div>
            </div>

            {/* Prev / Next controls */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#E4E9ED]/60">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full border border-[#E4E9ED] hover:bg-[#F8F4EE] hover:text-[#102A43] text-[#6B7C8F] transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {TESTIMONIALS_DATA.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === i ? 'bg-[#102A43] w-6' : 'bg-[#CBD5E1] w-2'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-2 rounded-full border border-[#E4E9ED] hover:bg-[#F8F4EE] hover:text-[#102A43] text-[#6B7C8F] transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
