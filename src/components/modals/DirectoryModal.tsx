import React, { useState } from 'react';
import { X, Search, ShieldCheck, Star, MapPin, ArrowRight } from 'lucide-react';
import { PROFESSIONALS_DATA } from '../../data/prodeelData';
import { Professional, ServiceCategory } from '../../types';

interface DirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProfessional: (pro: Professional) => void;
}

export const DirectoryModal: React.FC<DirectoryModalProps> = ({
  isOpen,
  onClose,
  onSelectProfessional,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');

  if (!isOpen) return null;

  const filteredPros = PROFESSIONALS_DATA.filter((pro) => {
    const matchesSearch =
      pro.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pro.firm.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pro.specialties.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'all' || pro.category === selectedCategory;

    const matchesCity = selectedCity === 'all' || pro.city === selectedCity;

    return matchesSearch && matchesCategory && matchesCity;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-[20px] max-w-4xl w-full border border-[#E4E9ED] shadow-2xl overflow-hidden relative">
        
        {/* Modal Top Bar */}
        <div className="bg-[#102A43] text-white px-6 sm:px-8 py-5 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#2FA7A0]">
              VERIFIED CYPRUS DIRECTORY
            </div>
            <h3 className="font-serif text-[24px] text-white font-normal mt-0.5">
              Find a Licensed Professional
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="p-4 sm:p-6 bg-[#F8F4EE] border-b border-[#E4E9ED] space-y-3">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#6B7C8F] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, firm, or specialty (e.g., Transfer Pricing, Maritime, Conveyancing)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#D9E1E7] rounded-[8px] text-sm text-[#243B53] placeholder:text-[#6B7C8F]/70 focus:outline-none focus:border-[#2FA7A0]"
            />
          </div>

          {/* Category Tabs & City Filters */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <span className="font-bold text-[#102A43] mr-1 hidden sm:inline">Discipline:</span>
              {[
                { id: 'all', label: 'All Services' },
                { id: 'accounting', label: 'Accounting' },
                { id: 'legal', label: 'Legal' },
                { id: 'insurance', label: 'Insurance' },
                { id: 'business', label: 'Business' },
                { id: 'financial', label: 'Financial' },
                { id: 'consulting', label: 'Consulting' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-[6px] font-sans font-medium transition-colors whitespace-nowrap ${
                    selectedCategory === tab.id
                      ? 'bg-[#102A43] text-white'
                      : 'bg-white text-[#243B53] border border-[#E4E9ED] hover:bg-[#E8F5F3]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* City dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-[#6B7C8F] font-bold">City:</span>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="bg-white border border-[#E4E9ED] rounded-[6px] px-2.5 py-1 text-xs text-[#243B53]"
              >
                <option value="all">All Cyprus</option>
                <option value="Nicosia">Nicosia</option>
                <option value="Limassol">Limassol</option>
                <option value="Larnaca">Larnaca</option>
                <option value="Paphos">Paphos</option>
              </select>
            </div>
          </div>
        </div>

        {/* Directory List Container */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-4">
          {filteredPros.length === 0 ? (
            <div className="text-center py-12 text-[#6B7C8F]">
              <p>No professionals match your filter criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedCity('all');
                }}
                className="mt-2 text-[#2FA7A0] font-bold hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredPros.map((pro) => (
              <div
                key={pro.id}
                className="p-5 rounded-[14px] bg-white border border-[#E4E9ED] hover:border-[#2FA7A0] shadow-xs hover:shadow-[0_8px_30px_rgba(16,42,67,0.06)] transition-all flex flex-col md:flex-row md:items-center justify-between gap-5"
              >
                {/* Left: Bio & Details */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-serif text-[20px] text-[#102A43] font-normal">
                      {pro.name}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-[11px] font-sans font-bold text-[#2FA7A0] bg-[#E8F5F3] px-2 py-0.5 rounded-[4px]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified
                    </span>
                    <span className="text-xs text-[#6B7C8F] font-mono">
                      {pro.licenseBody}
                    </span>
                  </div>

                  <div className="text-sm font-sans font-medium text-[#243B53]">
                    {pro.title} · <span className="text-[#6B7C8F]">{pro.firm}</span>
                  </div>

                  <p className="text-xs text-[#6B7C8F] font-sans line-clamp-2 max-w-xl">
                    {pro.bio}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#243B53] pt-1">
                    <span className="flex items-center gap-1 text-[#6B7C8F]">
                      <MapPin className="w-3.5 h-3.5 text-[#2FA7A0]" />
                      {pro.city}
                    </span>
                    <span>·</span>
                    <span>{pro.experienceYears} years experience</span>
                    <span>·</span>
                    <span>Languages: {pro.languages.join(', ')}</span>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {pro.specialties.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-sans bg-[#F8F4EE] text-[#243B53] px-2 py-0.5 rounded-[4px]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Rating & CTA */}
                <div className="flex md:flex-col items-center md:items-end justify-between gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-[#E4E9ED]">
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#D6B36A] text-[#D6B36A]" />
                      <span className="font-bold text-sm text-[#102A43]">{pro.rating}</span>
                      <span className="text-xs text-[#6B7C8F]">({pro.reviewCount})</span>
                    </div>
                    <div className="text-xs text-[#6B7C8F] mt-0.5">
                      Starting {pro.startingRate}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onSelectProfessional(pro);
                    }}
                    className="px-4 py-2 bg-[#102A43] hover:bg-[#2FA7A0] text-white text-xs font-sans font-bold rounded-[8px] transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-[0.98]"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#F8F4EE] border-t border-[#E4E9ED] flex items-center justify-between text-xs text-[#6B7C8F]">
          <span>Showing {filteredPros.length} licensed practitioners</span>
          <button
            onClick={onClose}
            className="font-bold text-[#102A43] hover:underline"
          >
            Close Directory
          </button>
        </div>

      </div>
    </div>
  );
};
