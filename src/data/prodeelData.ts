import { ServiceItem, Professional, ProposalPreview, Testimonial } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'insurance',
    name: 'Insurance',
    tagline: 'Comprehensive coverage tailored to Cyprus risks',
    description: 'Connect with certified brokers for vehicle, property, health, and executive liability policies.',
    subservices: ['Car Insurance', 'Home & Property', 'Life & Health', 'Commercial Liability', 'Marine Cargo'],
    iconName: 'ShieldCheck',
    startingFrom: '€190 / year',
    typicalResponseTime: '< 12 hours'
  },
  {
    id: 'accounting',
    name: 'Accounting',
    tagline: 'ICPAC certified chartered accountants & auditors',
    description: 'Statutory audit, Cyprus tax compliance, VAT returns, payroll, and International Financial Reporting.',
    subservices: ['Accounting & Bookkeeping', 'Corporate & Personal Tax', 'Audit & Assurance', 'VAT & VIES Compliance', 'Payroll Management'],
    iconName: 'Calculator',
    startingFrom: '€180 / month',
    typicalResponseTime: '< 6 hours'
  },
  {
    id: 'legal',
    name: 'Legal',
    tagline: 'Licensed Cyprus Bar Association advocates',
    description: 'Corporate law, commercial contracts, real estate acquisitions, Cyprus intellectual property, and litigation.',
    subservices: ['Commercial Contracts', 'Company Formation', 'Real Estate Conveyancing', 'Employment Law', 'Cyprus IP Box'],
    iconName: 'Scale',
    startingFrom: '€250 / case',
    typicalResponseTime: '< 18 hours'
  },
  {
    id: 'business',
    name: 'Business',
    tagline: 'Strategic advisory for Cyprus & international enterprises',
    description: 'Cyprus headquartering, M&A structuring, corporate governance, and local operational setup.',
    subservices: ['Cyprus Headquartering', 'Corporate Governance', 'M&A Advisory', 'Market Feasibility', 'Permit Licensing'],
    iconName: 'Building2',
    startingFrom: '€850 / project',
    typicalResponseTime: '< 24 hours'
  },
  {
    id: 'financial',
    name: 'Financial',
    tagline: 'Wealth planning and corporate finance advisory',
    description: 'Investment advisory, banking introduction, capital raising, and transfer pricing studies.',
    subservices: ['Wealth Management', 'Banking Support', 'Transfer Pricing', 'Fund Setup (AIF/RAIF)', 'Capital Advisory'],
    iconName: 'TrendingUp',
    startingFrom: '€500 / consultation',
    typicalResponseTime: '< 16 hours'
  },
  {
    id: 'consulting',
    name: 'Consulting',
    tagline: 'Digital transformation & ESG regulatory compliance',
    description: 'Technology implementation, cybersecurity audits, and European CSRD/ESG sustainability reporting.',
    subservices: ['Digital Strategy', 'Cybersecurity & GDPR', 'ESG & Sustainability', 'HR Organizational Design', 'Operations Optimization'],
    iconName: 'Compass',
    startingFrom: '€650 / audit',
    typicalResponseTime: '< 20 hours'
  }
];

export const PROFESSIONALS_DATA: Professional[] = [
  {
    id: 'pro-1',
    name: 'Andreas Christodoulou, FCA',
    title: 'Chartered Certified Accountant',
    firm: 'Christodoulou & Partners LLC',
    category: 'accounting',
    city: 'Nicosia',
    rating: 4.95,
    reviewCount: 48,
    isVerified: true,
    licenseBody: 'ICPAC Registered (No. 4182)',
    experienceYears: 16,
    languages: ['English', 'Greek'],
    startingRate: '€180 / mo',
    specialties: ['Corporate Tax', 'Audit & Assurance', 'International Structuring'],
    bio: 'Former Big 4 senior director advising local and international companies in Cyprus on tax optimization, audit standards, and annual compliance.'
  },
  {
    id: 'pro-2',
    name: 'Katia Michaelidou, LL.M',
    title: 'Senior Corporate & Commercial Advocate',
    firm: 'Michaelidou Law Chambers',
    category: 'legal',
    city: 'Limassol',
    rating: 4.92,
    reviewCount: 39,
    isVerified: true,
    licenseBody: 'Cyprus Bar Association (Reg. 5920)',
    experienceYears: 14,
    languages: ['English', 'Greek', 'French'],
    startingRate: '€220 / hr',
    specialties: ['M&A Contracts', 'Cyprus IP Box', 'Real Estate Conveyancing'],
    bio: 'Specialized in cross-border commercial transactions, shareholder agreements, and real estate purchases for high-net-worth investors and fast-growing tech firms.'
  },
  {
    id: 'pro-3',
    name: 'Stelios Georgiou, ACII',
    title: 'Senior Commercial Risk Broker',
    firm: 'Aegis Cyprus Insurance Brokers',
    category: 'insurance',
    city: 'Limassol',
    rating: 4.88,
    reviewCount: 31,
    isVerified: true,
    licenseBody: 'Superintendent of Insurance (Lic. 1109)',
    experienceYears: 18,
    languages: ['English', 'Greek'],
    startingRate: '€320 / yr',
    specialties: ['D&O Liability', 'Commercial Property', 'Cyber Insurance'],
    bio: 'Independent licensed insurance broker structuring tailored multi-carrier policies for Cyprus companies with zero conflict of interest.'
  },
  {
    id: 'pro-4',
    name: 'Dr. Maria Panayiotou',
    title: 'Managing Director & Strategic Consultant',
    firm: 'Horizon Mediterranean Advisory',
    category: 'business',
    city: 'Nicosia',
    rating: 4.90,
    reviewCount: 27,
    isVerified: true,
    licenseBody: 'Cyprus Chamber of Commerce (EVE)',
    experienceYears: 20,
    languages: ['English', 'Greek', 'German'],
    startingRate: '€950 / project',
    specialties: ['Cyprus Headquartering', 'Corporate Relocation', 'Licensing'],
    bio: 'Guides foreign tech enterprises and European family offices relocating operations and management substance to Cyprus.'
  },
  {
    id: 'pro-5',
    name: 'Costas Charalambous, CFA',
    title: 'Principal Wealth & Finance Advisor',
    firm: 'Levant Capital Partners',
    category: 'financial',
    city: 'Larnaca',
    rating: 4.85,
    reviewCount: 22,
    isVerified: true,
    licenseBody: 'CySEC Certified Advanced (Reg. CN-841)',
    experienceYears: 13,
    languages: ['English', 'Greek'],
    startingRate: '€450 / consultation',
    specialties: ['Banking Introduction', 'Transfer Pricing', 'Fund Setup'],
    bio: 'Chartered Financial Analyst providing institutional-grade financial modeling, bank account introductions, and CySEC compliance assistance.'
  },
  {
    id: 'pro-6',
    name: 'Nicos Demetriou',
    title: 'Lead Technology & Cybersecurity Consultant',
    firm: 'Synapse Consulting Group',
    category: 'consulting',
    city: 'Paphos',
    rating: 4.89,
    reviewCount: 26,
    isVerified: true,
    licenseBody: 'Cyprus Computer Society (CCS)',
    experienceYears: 15,
    languages: ['English', 'Greek', 'Russian'],
    startingRate: '€700 / audit',
    specialties: ['GDPR & NIS2', 'ISO 27001 Readiness', 'Cloud Migration'],
    bio: 'Advises Cyprus enterprises on European cybersecurity directives, data privacy mandates, and digital workflow automation.'
  }
];

export const PROPOSALS_SHOWCASE: ProposalPreview[] = [
  {
    id: 'prop-1',
    professional: PROFESSIONALS_DATA[0], // Andreas Christodoulou
    serviceTitle: 'Annual Corporate Tax Compliance & Statutory Audit Preparation',
    summary: 'Complete financial statement preparation, VAT review, and proactive corporate tax return filing for FY2025/26 under Cyprus Tax Department guidelines.',
    deliverables: [
      'Comprehensive ledger & trial balance review',
      'Corporate income tax return (TD4) preparation & submission',
      'Quarterly VAT & VIES reconciliation check',
      'Direct liaison with statutory external auditors'
    ],
    estimatedTimeline: '2–3 weeks from document delivery',
    pricing: {
      amount: 180,
      currency: '€',
      model: 'Monthly Retainer'
    },
    validUntil: '14 days'
  },
  {
    id: 'prop-2',
    professional: PROFESSIONALS_DATA[1], // Katia Michaelidou
    serviceTitle: 'Commercial Service Agreement & IP Assignment Drafting',
    summary: 'Full bespoke drafting of cross-border software licensing agreement and commercial IP assignment compliant with Cyprus and EU contract laws.',
    deliverables: [
      'Tailored Master Services Agreement (MSA) + SLA schedule',
      'IP assignment & confidentiality protection clauses',
      'One round of negotiation review with counterparty legal counsel',
      'Final execution package with Cyprus stamp duty advice'
    ],
    estimatedTimeline: '5 business days',
    pricing: {
      amount: 650,
      currency: '€',
      model: 'Fixed Fee'
    },
    validUntil: '21 days'
  },
  {
    id: 'prop-3',
    professional: PROFESSIONALS_DATA[2], // Stelios Georgiou
    serviceTitle: 'Comprehensive Directors & Officers (D&O) Liability Cover',
    summary: 'Market tender across 4 leading Cyprus and Lloyd’s syndicates securing €2,000,000 liability protection with defense cost extensions.',
    deliverables: [
      'Comparative premium quote table from 4 vetted underwriters',
      'Policy wording analysis highlighting key exclusions & nuances',
      'Full policy placement and certificate issuance within 48h',
      'Annual policy claims advocacy support'
    ],
    estimatedTimeline: '3 business days',
    pricing: {
      amount: 480,
      currency: '€',
      model: 'Fixed Fee'
    },
    validUntil: '30 days'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Finding the right professional no longer feels overwhelming. Prodeel made the process simple. Within 24 hours of submitting our accounting request, we had 3 clear proposals with transparent fees from licensed ICPAC members.',
    author: 'George P.',
    role: 'Founder & Managing Director',
    company: 'Aegean Logistics Ltd',
    city: 'Limassol',
    serviceUsed: 'Corporate Accounting & Tax',
    rating: 5
  },
  {
    id: 'test-2',
    quote: 'When establishing our regional tech hub in Nicosia, getting trustworthy legal advice on contracts and employment compliance was urgent. Prodeel connected us with Katia, who drafted all agreements flawlessly.',
    author: 'Elena M.',
    role: 'Co-Founder & COO',
    company: 'FinPulse Systems',
    city: 'Nicosia',
    serviceUsed: 'Commercial Legal Counsel',
    rating: 5
  },
  {
    id: 'test-3',
    quote: 'Comparing insurance policies in Cyprus was always opaque. With Prodeel, I uploaded my property details once and received 3 itemized quotes from verified brokers. Saved over €650 on commercial property insurance.',
    author: 'Andreas K.',
    role: 'Commercial Property Owner',
    company: 'Mediterranean Retail Plaza',
    city: 'Paphos',
    serviceUsed: 'Commercial Property Insurance',
    rating: 5
  }
];

export const ELEMENTOR_SPEC = {
  colors: [
    { role: 'Primary / Navy', name: 'Deep Navy', hex: '#102A43', use: 'Logo, main headings, navigation, primary buttons, footer' },
    { role: 'Secondary / Teal', name: 'Professional Teal', hex: '#2FA7A0', use: 'Links, accent words, verification badges, icons, secondary buttons, hover states' },
    { role: 'Accent', name: 'Soft Gold', hex: '#D6B36A', use: 'Use sparingly: small decorative details, premium badges, tiny highlights' },
    { role: 'Background', name: 'Warm Cream', hex: '#F8F4EE', use: 'Hero, services, how it works, CTA sections' },
    { role: 'Surface', name: 'White', hex: '#FFFFFF', use: 'Cards, forms, professional profiles, about section' },
    { role: 'Soft Teal', name: 'Pale Teal', hex: '#E8F5F3', use: 'Final CTA background, highlight containers' },
    { role: 'Text', name: 'Dark Slate', hex: '#243B53', use: 'Body paragraphs, subheadings, input text' },
    { role: 'Muted Text', name: 'Slate Gray', hex: '#6B7C8F', use: 'Metadata, labels, secondary descriptions' },
    { role: 'Border', name: 'Light Gray', hex: '#E4E9ED', use: 'Cards, containers, input outlines, table dividers' }
  ],
  typography: [
    { tag: 'H1', font: 'DM Serif Display', desktop: '58px', mobile: '38–42px', weight: '400', lineHeight: '1.05' },
    { tag: 'H2', font: 'DM Serif Display', desktop: '44px', mobile: '32px', weight: '400', lineHeight: '1.15' },
    { tag: 'H3', font: 'DM Serif Display', desktop: '30px', mobile: '24px', weight: '400', lineHeight: '1.2' },
    { tag: 'H4', font: 'Manrope', desktop: '22px', mobile: '20px', weight: '700', lineHeight: '1.3' },
    { tag: 'Body Large', font: 'Manrope', desktop: '18px', mobile: '16px', weight: '400', lineHeight: '1.6' },
    { tag: 'Body', font: 'Manrope', desktop: '16px', mobile: '15–16px', weight: '400', lineHeight: '1.6' },
    { tag: 'Small', font: 'Manrope', desktop: '14px', mobile: '13px', weight: '500', lineHeight: '1.5' },
    { tag: 'Button', font: 'Manrope', desktop: '14–15px', mobile: '14px', weight: '700', lineHeight: '1.0' }
  ],
  borderRadius: [
    { target: 'Small elements (badges, tags)', value: '6px' },
    { target: 'Buttons', value: '8px' },
    { target: 'Cards', value: '14px' },
    { target: 'Large containers', value: '20px' },
    { target: 'Hero visual', value: '20–24px' }
  ],
  spacingGrid: ['8px', '16px', '24px', '32px', '48px', '64px', '80px', '96px', '120px'],
  shadow: '0 8px 30px rgba(16, 42, 67, 0.06)'
};
