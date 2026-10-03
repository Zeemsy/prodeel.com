import React, { useState } from 'react';
import { Menu, X, SlidersHorizontal } from 'lucide-react';

interface HeaderProps {
  onOpenRequestModal: (category?: string) => void;
  onOpenDirectoryModal: () => void;
  onOpenDesignSystemModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenRequestModal,
  onOpenDirectoryModal,
  onOpenDesignSystemModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-[#E4E9ED] transition-shadow">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-[76px] flex items-center justify-between gap-4">
        {/* Zone 1: Single element brand wordmark */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FA7A0] rounded-sm"
          >
            <div className="w-8 h-8 rounded-[6px] bg-[#102A43] flex items-center justify-center text-white font-serif font-bold text-xl group-hover:bg-[#2FA7A0] transition-colors">
              P
            </div>
            <span className="font-serif text-[26px] tracking-tight text-[#102A43] font-normal">
              Prodeel
            </span>
          </a>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-sans font-medium text-[#243B53]">
          <a
            href="#services"
            className="hover:text-[#2FA7A0] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#2FA7A0] after:transition-all"
          >
            Services
          </a>
          <a
            href="#how-it-works"
            className="hover:text-[#2FA7A0] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#2FA7A0] after:transition-all"
          >
            How It Works
          </a>
          <a
            href="#for-professionals"
            className="hover:text-[#2FA7A0] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#2FA7A0] after:transition-all"
          >
            For Professionals
          </a>
          <a
            href="#about"
            className="hover:text-[#2FA7A0] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#2FA7A0] after:transition-all"
          >
            About
          </a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenDesignSystemModal}
            className="px-2.5 py-2 text-xs font-sans font-medium text-[#6B7C8F] hover:text-[#102A43] border border-transparent hover:border-[#E4E9ED] rounded-[8px] transition-colors flex items-center gap-1.5"
            title="Inspect Elementor Site Settings & Design System Tokens"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#2FA7A0]" />
            <span className="hidden lg:inline">Design System</span>
          </button>

          <button
            onClick={onOpenDirectoryModal}
            className="px-4 py-[11px] text-[14px] font-sans font-bold text-[#102A43] border border-[#102A43] rounded-[8px] hover:bg-[#102A43] hover:text-white transition-all whitespace-nowrap active:scale-[0.98]"
          >
            Find a Professional
          </button>

          <button
            onClick={() => onOpenRequestModal()}
            className="px-5 py-[11px] text-[14px] font-sans font-bold text-white bg-[#102A43] hover:bg-[#2FA7A0] rounded-[8px] transition-all whitespace-nowrap shadow-sm hover:shadow active:scale-[0.98]"
          >
            Submit a Request →
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => onOpenRequestModal()}
            className="px-3 py-2 text-xs font-bold text-white bg-[#102A43] rounded-[6px]"
          >
            Request
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#102A43] hover:text-[#2FA7A0] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[#E4E9ED] bg-white px-4 py-5 shadow-lg space-y-4">
          <nav className="flex flex-col space-y-3 font-medium text-[#243B53]">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#2FA7A0]"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#2FA7A0]"
            >
              How It Works
            </a>
            <a
              href="#for-professionals"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#2FA7A0]"
            >
              For Professionals
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#2FA7A0]"
            >
              About
            </a>
          </nav>
          <div className="pt-3 border-t border-[#E4E9ED] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDirectoryModal();
              }}
              className="w-full py-2.5 text-center text-sm font-bold text-[#102A43] border border-[#102A43] rounded-[8px]"
            >
              Find a Professional
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRequestModal();
              }}
              className="w-full py-2.5 text-center text-sm font-bold text-white bg-[#102A43] rounded-[8px]"
            >
              Submit a Request →
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDesignSystemModal();
              }}
              className="w-full py-2 text-center text-xs text-[#6B7C8F] flex items-center justify-center gap-1.5"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#2FA7A0]" />
              Elementor Design System Tokens
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
