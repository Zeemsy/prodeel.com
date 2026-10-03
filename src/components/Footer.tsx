import React from 'react';
import { Linkedin, Twitter, Facebook, Mail, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenDirectoryModal: () => void;
  onOpenRequestModal: (service?: string) => void;
  onOpenJoinModal: () => void;
  onOpenDesignSystemModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDirectoryModal,
  onOpenRequestModal,
  onOpenJoinModal,
  onOpenDesignSystemModal,
}) => {
  return (
    <footer className="bg-[#102A43] text-white pt-16 pb-12 border-t border-[#1b3d5e]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#243B53]">
          
          {/* Column 1: Brand & Cyprus Mission (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-[6px] bg-[#2FA7A0] flex items-center justify-center text-white font-serif font-bold text-xl">
                P
              </div>
              <span className="font-serif text-[26px] tracking-tight text-white font-normal">
                Prodeel
              </span>
            </div>

            <p className="text-[14px] text-slate-300 font-sans leading-[1.6] max-w-sm">
              Connecting people and businesses with trusted, verified professionals in Cyprus.
              Compare transparent proposals from licensed accountants, lawyers, and advisors.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#2FA7A0]">
              <ShieldCheck className="w-4 h-4" />
              <span>Registered in the Republic of Cyprus (HE 452910)</span>
            </div>
          </div>

          {/* Column 2: Services (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-sans uppercase font-bold tracking-wider text-slate-200">
              Services
            </div>
            <ul className="space-y-2.5 text-[14px] text-slate-300">
              <li>
                <button
                  onClick={() => onOpenRequestModal('Accounting')}
                  className="hover:text-[#2FA7A0] transition-colors"
                >
                  Accounting & Statutory Audit
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenRequestModal('Legal')}
                  className="hover:text-[#2FA7A0] transition-colors"
                >
                  Commercial & Corporate Legal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenRequestModal('Insurance')}
                  className="hover:text-[#2FA7A0] transition-colors"
                >
                  Commercial & Property Insurance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenRequestModal('Business')}
                  className="hover:text-[#2FA7A0] transition-colors"
                >
                  Cyprus Headquartering & Advisory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenRequestModal('Financial')}
                  className="hover:text-[#2FA7A0] transition-colors"
                >
                  Wealth & Banking Advisory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenRequestModal('Consulting')}
                  className="hover:text-[#2FA7A0] transition-colors"
                >
                  Cybersecurity & ESG Consulting
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-sans uppercase font-bold tracking-wider text-slate-200">
              Company
            </div>
            <ul className="space-y-2.5 text-[14px] text-slate-300">
              <li>
                <a href="#about" className="hover:text-[#2FA7A0] transition-colors">
                  About Prodeel
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#2FA7A0] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenDirectoryModal}
                  className="hover:text-[#2FA7A0] transition-colors"
                >
                  Cyprus Directory
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenJoinModal}
                  className="hover:text-[#2FA7A0] transition-colors"
                >
                  For Professionals
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#2FA7A0] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#2FA7A0] transition-colors">
                  Contact & Support
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenDesignSystemModal}
                  className="text-xs text-[#D6B36A] hover:underline pt-1 text-left block"
                >
                  Elementor Style System
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-sans uppercase font-bold tracking-wider text-slate-200">
              Legal & Compliance
            </div>
            <ul className="space-y-2.5 text-[14px] text-slate-300">
              <li>
                <a href="#" className="hover:text-[#2FA7A0] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2FA7A0] transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2FA7A0] transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2FA7A0] transition-colors">
                  Professional Verification Standards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2FA7A0] transition-colors">
                  EU GDPR Compliance Notice
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Prodeel. All rights reserved. Designed for Cyprus professional practices.
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-[#183654] hover:bg-[#2FA7A0] hover:text-white flex items-center justify-center transition-colors"
              aria-label="Prodeel on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-[#183654] hover:bg-[#2FA7A0] hover:text-white flex items-center justify-center transition-colors"
              aria-label="Prodeel on X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-[#183654] hover:bg-[#2FA7A0] hover:text-white flex items-center justify-center transition-colors"
              aria-label="Prodeel on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="mailto:contact@prodeel.cy"
              className="w-8 h-8 rounded-full bg-[#183654] hover:bg-[#2FA7A0] hover:text-white flex items-center justify-center transition-colors"
              aria-label="Email Prodeel"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
