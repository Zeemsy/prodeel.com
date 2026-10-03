import React, { useEffect, useState } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  activeSection?: string;
  structuredDataType?: 'Organization' | 'ProfessionalService' | 'FAQPage';
}

interface SectionMeta {
  title: string;
  description: string;
}

const SECTION_METADATA: Record<string, SectionMeta> = {
  home: {
    title: 'Prodeel — Professional Services Marketplace in Cyprus',
    description:
      'Find verified licensed professionals in Cyprus without the hassle. Receive tailored proposals from top accountants, lawyers, insurance brokers, and business consultants.',
  },
  services: {
    title: 'Professional Services in Cyprus | Accounting, Legal, Insurance & Consulting — Prodeel',
    description:
      'Explore verified services in Cyprus: statutory accounting, tax compliance, corporate legal advice, commercial insurance, and management consulting.',
  },
  'how-it-works': {
    title: 'How It Works | Compare Verified Proposals in Cyprus — Prodeel',
    description:
      'Submit one request, receive itemized proposals from verified Cyprus practitioners, and choose the right specialist with fixed fees and transparent scopes.',
  },
  'why-prodeel': {
    title: 'Why Choose Prodeel | Cyprus Licensed Professional Network',
    description:
      'Zero platform markup, verified ICPAC and Cyprus Bar Association credentials, and transparent direct agreements across Nicosia, Limassol, Larnaca, and Paphos.',
  },
  about: {
    title: 'About Prodeel | Professional Services Infrastructure in Cyprus',
    description:
      'Prodeel connects individuals and enterprises with verified, licensed professional service providers across the Republic of Cyprus.',
  },
  'for-professionals': {
    title: 'For Licensed Professionals in Cyprus | Partner Network — Prodeel',
    description:
      'Are you an ICPAC accountant, licensed advocate, or insurance broker in Cyprus? Receive pre-qualified client briefs directly with 0% commission.',
  },
  faq: {
    title: 'Frequently Asked Questions | Prodeel Cyprus Marketplace',
    description:
      'Common questions on how Prodeel works, client pricing, licensing verification standards in Cyprus, turnaround times, and data privacy.',
  },
  contact: {
    title: 'Submit a Request & Contact Cyprus Advisory Desk — Prodeel',
    description:
      'Get in touch with the Prodeel advisory desk in Nicosia and Limassol or submit your service request for instant matching with verified professionals.',
  },
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  activeSection: propActiveSection,
}) => {
  const [currentSection, setCurrentSection] = useState<string>('home');

  // Listen to hash changes and observe scroll sections to dynamically update meta tags
  useEffect(() => {
    if (propActiveSection) {
      setCurrentSection(propActiveSection);
      return;
    }

    const sections = [
      'services',
      'how-it-works',
      'why-prodeel',
      'about',
      'for-professionals',
      'faq',
      'contact',
    ];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find the intersecting section with highest visibility
      const visible = entries.find((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.35);
      if (visible && visible.target.id) {
        setCurrentSection(visible.target.id);
      } else if (window.scrollY < 200) {
        setCurrentSection('home');
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-80px 0px -40% 0px',
      threshold: [0.35, 0.6],
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScrollTop = () => {
      if (window.scrollY < 150) {
        setCurrentSection('home');
      }
    };

    window.addEventListener('scroll', handleScrollTop, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollTop);
    };
  }, [propActiveSection]);

  // Update dynamic meta tags and Schema.org structured data whenever section changes
  useEffect(() => {
    const meta = SECTION_METADATA[currentSection] || SECTION_METADATA.home;
    const finalTitle = title || meta.title;
    const finalDescription = description || meta.description;
    const resolvedUrl =
      canonicalUrl ||
      (typeof window !== 'undefined'
        ? `${window.location.origin}${window.location.pathname}${currentSection !== 'home' ? `#${currentSection}` : ''}`
        : 'https://prodeel.cy');

    // 1. Page Title
    document.title = finalTitle;

    // Helper to create or update meta tag
    const setMetaTag = (attr: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Primary Meta Tags
    setMetaTag('name', 'description', finalDescription);

    // 3. OpenGraph Tags
    setMetaTag('property', 'og:title', finalTitle);
    setMetaTag('property', 'og:description', finalDescription);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', resolvedUrl);
    setMetaTag('property', 'og:site_name', 'Prodeel');
    setMetaTag('property', 'og:locale', 'en_US');

    // 4. Twitter / X Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', finalTitle);
    setMetaTag('name', 'twitter:description', finalDescription);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', resolvedUrl);

    // 6. Schema.org JSON-LD Structured Data
    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ProfessionalService',
          '@id': 'https://prodeel.cy/#organization',
          name: 'Prodeel',
          url: 'https://prodeel.cy',
          logo: 'https://prodeel.cy/favicon.ico',
          description:
            'Marketplace connecting individuals and enterprises with verified, licensed professional service providers in Cyprus.',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Severis Avenue 14',
            addressLocality: 'Nicosia',
            postalCode: '1066',
            addressCountry: 'CY',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 35.1667,
            longitude: 33.3667,
          },
          telephone: '+35722890100',
          email: 'contact@prodeel.cy',
          areaServed: {
            '@type': 'AdministrativeArea',
            name: 'Republic of Cyprus',
          },
          priceRange: '€€',
          knowsAbout: [
            'Accounting & Statutory Audit',
            'Cyprus Corporate Law',
            'Commercial Real Estate Conveyancing',
            'Commercial Insurance Placement',
            'Cyprus Headquartering & Substance',
          ],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://prodeel.cy/#website',
          url: 'https://prodeel.cy',
          name: 'Prodeel',
          description: finalDescription,
          publisher: {
            '@id': 'https://prodeel.cy/#organization',
          },
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://prodeel.cy/#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Is Prodeel free for clients looking for professional services?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, 100% free for clients. Submitting a request, receiving tailored proposals, and comparing verified professionals across Cyprus costs you nothing.',
              },
            },
            {
              '@type': 'Question',
              name: 'How does Prodeel verify professionals and firms on the platform?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Every professional undergoes compliance verification confirming active licensing with ICPAC, Cyprus Bar Association, or the Superintendent of Insurance.',
              },
            },
            {
              '@type': 'Question',
              name: 'How many proposals will I receive and how quickly?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'You typically receive 2 to 4 competitive, itemized proposals from qualified professionals within 12 to 24 hours of submitting your request.',
              },
            },
          ],
        },
      ],
    };

    let scriptTag = document.getElementById('prodeel-schema-ld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'prodeel-schema-ld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);
  }, [currentSection, title, description, canonicalUrl]);

  // Headless component; operates directly on DOM metadata
  return null;
};
