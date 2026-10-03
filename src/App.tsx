import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorks } from './components/HowItWorks';
import { WhyProdeel } from './components/WhyProdeel';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ForProfessionalsSection } from './components/ForProfessionalsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';

// Modals
import { RequestModal } from './components/modals/RequestModal';
import { DirectoryModal } from './components/modals/DirectoryModal';
import { ProposalModal } from './components/modals/ProposalModal';
import { JoinModal } from './components/modals/JoinModal';
import { DesignSystemModal } from './components/modals/DesignSystemModal';

import { ServiceItem, ProposalPreview, Professional } from './types';
import { PROPOSALS_SHOWCASE } from './data/prodeelData';

export default function App() {
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [requestCategory, setRequestCategory] = useState<string | undefined>(undefined);
  
  const [isDirectoryModalOpen, setIsDirectoryModalOpen] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isDesignSystemModalOpen, setIsDesignSystemModalOpen] = useState(false);

  const [activeProposal, setActiveProposal] = useState<ProposalPreview | null>(null);

  // Open Request Modal with preselected category
  const handleOpenRequest = (category?: string) => {
    setRequestCategory(category);
    setIsRequestModalOpen(true);
  };

  // Open Service Request from service card
  const handleSelectService = (service: ServiceItem) => {
    handleOpenRequest(service.name);
  };

  // View Proposal Details
  const handleSelectProposal = (proposal: ProposalPreview) => {
    setActiveProposal(proposal);
  };

  // Choose a Professional from directory to request a quote
  const handleSelectProfessional = (pro: Professional) => {
    setIsDirectoryModalOpen(false);
    // Find matching proposal or create standard request
    const existing = PROPOSALS_SHOWCASE.find((p) => p.professional.id === pro.id);
    if (existing) {
      setActiveProposal(existing);
    } else {
      handleOpenRequest(pro.category.charAt(0).toUpperCase() + pro.category.slice(1));
    }
  };

  const handleAcceptProposal = (proposal: ProposalPreview) => {
    setActiveProposal(null);
    handleOpenRequest(proposal.professional.category);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F4EE] text-[#243B53] font-sans antialiased selection:bg-[#2FA7A0] selection:text-white">
      {/* Dynamic SEO & Structured Data */}
      <SEO />

      {/* 1. Header / Navigation */}
      <Header
        onOpenRequestModal={handleOpenRequest}
        onOpenDirectoryModal={() => setIsDirectoryModalOpen(true)}
        onOpenDesignSystemModal={() => setIsDesignSystemModalOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenRequestModal={() => handleOpenRequest()}
          onOpenDirectoryModal={() => setIsDirectoryModalOpen(true)}
          onSelectProposal={handleSelectProposal}
        />

        {/* 3. Trust Bar */}
        <TrustBar />

        {/* 4. Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 5. How It Works */}
        <HowItWorks onOpenRequestModal={() => handleOpenRequest()} />

        {/* 6. Why Prodeel */}
        <WhyProdeel />

        {/* 7. About Section */}
        <AboutSection onOpenDirectoryModal={() => setIsDirectoryModalOpen(true)} />

        {/* 8. Testimonials Section */}
        <TestimonialsSection />

        {/* 9. For Professionals Section */}
        <ForProfessionalsSection onOpenJoinModal={() => setIsJoinModalOpen(true)} />

        {/* 10. Frequently Asked Questions Section */}
        <FAQSection onOpenRequestModal={() => handleOpenRequest()} />

        {/* 11. Contact Section */}
        <ContactSection />

        {/* 11. Final CTA */}
        <FinalCTA
          onOpenRequestModal={() => handleOpenRequest()}
          onExploreServices={handleExploreServices}
        />
      </main>

      {/* 12. Footer */}
      <Footer
        onOpenDirectoryModal={() => setIsDirectoryModalOpen(true)}
        onOpenRequestModal={handleOpenRequest}
        onOpenJoinModal={() => setIsJoinModalOpen(true)}
        onOpenDesignSystemModal={() => setIsDesignSystemModalOpen(true)}
      />

      {/* Modals & Drawers */}
      <RequestModal
        isOpen={isRequestModalOpen}
        initialCategory={requestCategory}
        onClose={() => setIsRequestModalOpen(false)}
      />

      <DirectoryModal
        isOpen={isDirectoryModalOpen}
        onClose={() => setIsDirectoryModalOpen(false)}
        onSelectProfessional={handleSelectProfessional}
      />

      <ProposalModal
        proposal={activeProposal}
        onClose={() => setActiveProposal(null)}
        onAcceptProposal={handleAcceptProposal}
      />

      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />

      <DesignSystemModal
        isOpen={isDesignSystemModalOpen}
        onClose={() => setIsDesignSystemModalOpen(false)}
      />
    </div>
  );
}
