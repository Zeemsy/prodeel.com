import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

interface FAQItem {
  id: string;
  category: 'General' | 'Proposals' | 'Verification' | 'Payment';
  question: string;
  answer: string;
}

const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'Is Prodeel free for clients looking for professional services?',
    answer:
      'Yes, 100% free for clients. Submitting a request, receiving tailored proposals, and comparing verified professionals across Cyprus costs you nothing. We do not take a cut or add markup to client fees.',
  },
  {
    id: 'faq-2',
    category: 'Verification',
    question: 'How does Prodeel verify professionals and firms on the platform?',
    answer:
      'Every professional on Prodeel undergoes rigorous compliance verification. We confirm their active licensing with the Institute of Certified Public Accountants of Cyprus (ICPAC), the Cyprus Bar Association, or the Superintendent of Insurance. We also verify professional indemnity insurance and active Cyprus corporate registration.',
  },
  {
    id: 'faq-3',
    category: 'Proposals',
    question: 'How many proposals will I receive, and how quickly?',
    answer:
      'You will typically receive 2 to 4 competitive, itemized proposals from qualified professionals within 12 to 24 hours of submitting your request. Each proposal outlines the scope of work, deliverables, timeline, and a clear fee structure (fixed fee, monthly retainer, or hourly rate).',
  },
  {
    id: 'faq-4',
    category: 'Payment',
    question: 'Do I pay through Prodeel or directly to the professional?',
    answer:
      'You contract and transact directly with the professional or firm you choose. Once you accept a proposal, the practitioner will issue their standard engagement letter under Cyprus law. Prodeel does not handle client client funds or insert hidden intermediary fees.',
  },
  {
    id: 'faq-5',
    category: 'General',
    question: 'What cities and districts in Cyprus do you cover?',
    answer:
      'We cover all major municipalities and business centers across Cyprus, including Nicosia, Limassol, Larnaca, and Paphos. Many professionals offer both in-person meetings at their offices and secure digital onboarding.',
  },
  {
    id: 'faq-6',
    category: 'Verification',
    question: 'How is my confidential information and project brief protected?',
    answer:
      'Your brief is shared strictly with relevant, licensed Cyprus practitioners who confirm availability and capacity to take on your mandate. We operate under strict EU GDPR standards and never sell data to third-party telemarketers or external lead brokers.',
  },
  {
    id: 'faq-7',
    category: 'Proposals',
    question: 'Can I request a combined package of legal, accounting, and insurance services?',
    answer:
      'Yes. When completing your request, you can select "Multi-Service / Custom Advisory" or specify that your business requires multi-disciplinary assistance (such as establishing a Cyprus holding entity, drafting shareholder agreements, and arranging D&O insurance). We will coordinate proposals from complementary licensed specialists.',
  },
];

interface FAQSectionProps {
  onOpenRequestModal?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenRequestModal }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Proposals', 'Verification', 'Payment'];

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS_DATA.filter((faq) =>
    activeCategory === 'All' ? true : faq.category === activeCategory
  );

  return (
    <section id="faq" className="bg-white py-20 lg:py-24 border-b border-[#E4E9ED]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#E8F5F3] text-[#2FA7A0] text-xs font-sans font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>ANSWERS & GUIDELINES</span>
          </div>

          <h2 className="font-serif text-[36px] sm:text-[44px] text-[#102A43] font-normal leading-[1.15]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-[16px] sm:text-[18px] text-[#243B53] font-sans leading-[1.6]">
            Everything you need to know about requesting proposals and working with verified Cyprus professionals.
          </p>
        </div>

        {/* Category Filter Pills (Functional Buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-sans font-bold rounded-[8px] transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#102A43] text-white shadow-xs'
                  : 'bg-[#F8F4EE] text-[#243B53] hover:bg-[#E8F5F3] hover:text-[#2FA7A0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion Container (constrained width for high legibility) */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`rounded-[14px] border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#2FA7A0] bg-white shadow-[0_8px_30px_rgba(16,42,67,0.06)]'
                    : 'border-[#E4E9ED] bg-[#F8F4EE]/60 hover:border-[#CBD5E1]'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FA7A0]"
                >
                  <span className="font-serif text-[18px] sm:text-[20px] text-[#102A43] font-normal leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#E8F5F3] text-[#2FA7A0] rotate-180'
                        : 'bg-white text-[#6B7C8F] border border-[#E4E9ED]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-[15px] text-[#243B53] font-sans leading-[1.65] border-t border-[#E4E9ED]/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Callout */}
        <div className="mt-14 max-w-xl mx-auto p-6 rounded-[14px] bg-[#F8F4EE] border border-[#E4E9ED] text-center space-y-3">
          <div className="font-serif text-[20px] text-[#102A43]">
            Have a question not listed here?
          </div>
          <p className="text-xs text-[#6B7C8F] font-sans">
            Our Cyprus advisory support desk is available Monday through Friday to guide you through matching.
          </p>
          <div className="pt-1 flex items-center justify-center gap-4">
            <a
              href="#contact"
              className="text-xs font-sans font-bold text-[#102A43] hover:text-[#2FA7A0] transition-colors"
            >
              Contact Support Desk →
            </a>
            {onOpenRequestModal && (
              <>
                <span className="text-[#CBD5E1]">·</span>
                <button
                  onClick={onOpenRequestModal}
                  className="text-xs font-sans font-bold text-[#2FA7A0] hover:underline"
                >
                  Submit a Request Now
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
