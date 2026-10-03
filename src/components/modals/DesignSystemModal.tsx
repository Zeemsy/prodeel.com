import React, { useState } from 'react';
import { X, Copy, Check, SlidersHorizontal, Palette, Type, Box, Layers } from 'lucide-react';
import { ELEMENTOR_SPEC } from '../../data/prodeelData';

interface DesignSystemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DesignSystemModal: React.FC<DesignSystemModalProps> = ({ isOpen, onClose }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [copiedJson, setCopiedJson] = useState(false);
  const [activeTab, setActiveTab] = useState<'colors' | 'typography' | 'buttons' | 'spacing'>('colors');

  if (!isOpen) return null;

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(ELEMENTOR_SPEC, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-[20px] max-w-3xl w-full border border-[#E4E9ED] shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-[#102A43] text-white px-6 sm:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-[8px] bg-[#2FA7A0] flex items-center justify-center text-white">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#2FA7A0]">
                SITE SETTINGS SPECIFICATION
              </div>
              <h3 className="font-serif text-[22px] sm:text-[24px] text-white font-normal mt-0.5">
                Prodeel Design System for Elementor
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs Bar */}
        <div className="flex items-center border-b border-[#E4E9ED] bg-[#F8F4EE] px-6 sm:px-8 gap-2 pt-2 overflow-x-auto">
          {[
            { id: 'colors', label: '1. Color Palette', icon: Palette },
            { id: 'typography', label: '2. Typography System', icon: Type },
            { id: 'buttons', label: '3. Buttons & Radius', icon: Box },
            { id: 'spacing', label: '4. Spacing & Shadows', icon: Layers },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 text-xs font-sans font-bold rounded-t-[8px] transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-white text-[#102A43] border-t-2 border-[#2FA7A0] shadow-xs'
                    : 'text-[#6B7C8F] hover:text-[#102A43]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto space-y-6">
          
          {/* TAB 1: COLORS */}
          {activeTab === 'colors' && (
            <div className="space-y-4">
              <div className="text-xs text-[#6B7C8F]">
                Configure centrally in <strong>Elementor → Site Settings → Global Colors</strong>.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {ELEMENTOR_SPEC.colors.map((c, i) => (
                  <div
                    key={i}
                    onClick={() => handleCopyHex(c.hex)}
                    className="p-3.5 rounded-[10px] border border-[#E4E9ED] bg-white hover:border-[#2FA7A0] cursor-pointer transition-all flex items-center justify-between group shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-[6px] border border-black/10 shadow-inner shrink-0"
                        style={{ backgroundColor: c.hex }}
                      />
                      <div>
                        <div className="text-xs font-bold text-[#102A43] font-sans">
                          {c.role}
                        </div>
                        <div className="text-[11px] font-mono text-[#6B7C8F]">
                          {c.hex}
                        </div>
                      </div>
                    </div>

                    <button
                      className="p-1.5 rounded-[4px] text-[#6B7C8F] group-hover:text-[#2FA7A0] hover:bg-[#F8F4EE]"
                      title="Copy hex code"
                    >
                      {copiedHex === c.hex ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#F8F4EE] rounded-[10px] border border-[#E4E9ED] text-xs text-[#243B53] space-y-1">
                <strong>Color Distribution Rule:</strong>
                <div>• <strong>Navy (#102A43) + Cream (#F8F4EE):</strong> Dominates canvas, navigation & structure.</div>
                <div>• <strong>Teal (#2FA7A0):</strong> Guides action, verification badges & hover states.</div>
                <div>• <strong>Soft Gold (#D6B36A):</strong> Occasional premium highlight / subtle detail.</div>
              </div>
            </div>
          )}

          {/* TAB 2: TYPOGRAPHY */}
          {activeTab === 'typography' && (
            <div className="space-y-4">
              <div className="text-xs text-[#6B7C8F]">
                Defined in <strong>Elementor → Site Settings → Global Fonts</strong>: Headings use <em>DM Serif Display</em>, Body & UI use <em>Manrope</em>.
              </div>

              <div className="border border-[#E4E9ED] rounded-[12px] overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#102A43] text-white font-bold">
                    <tr>
                      <th className="py-2.5 px-3">Style</th>
                      <th className="py-2.5 px-3">Font Family</th>
                      <th className="py-2.5 px-3">Desktop</th>
                      <th className="py-2.5 px-3">Mobile</th>
                      <th className="py-2.5 px-3">Weight</th>
                      <th className="py-2.5 px-3">Line Height</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E4E9ED] text-[#243B53]">
                    {ELEMENTOR_SPEC.typography.map((t, idx) => (
                      <tr key={idx} className="hover:bg-[#F8F4EE]">
                        <td className="py-2.5 px-3 font-bold text-[#102A43]">{t.tag}</td>
                        <td className="py-2.5 px-3 italic">{t.font}</td>
                        <td className="py-2.5 px-3 font-mono">{t.desktop}</td>
                        <td className="py-2.5 px-3 font-mono text-[#6B7C8F]">{t.mobile}</td>
                        <td className="py-2.5 px-3">{t.weight}</td>
                        <td className="py-2.5 px-3 font-mono">{t.lineHeight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: BUTTONS & RADIUS */}
          {activeTab === 'buttons' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-[12px] border border-[#E4E9ED] bg-white space-y-2">
                  <div className="text-xs font-bold text-[#102A43] uppercase tracking-wider">
                    Primary Button
                  </div>
                  <div className="text-xs text-[#6B7C8F]">
                    Background: #102A43 · Text: #FFFFFF · Radius: 8px · Padding: 14px 24px · Hover: #2FA7A0
                  </div>
                  <div className="pt-2">
                    <button className="px-5 py-3 bg-[#102A43] hover:bg-[#2FA7A0] text-white text-sm font-bold rounded-[8px] transition-colors">
                      Submit a Request →
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-[12px] border border-[#E4E9ED] bg-white space-y-2">
                  <div className="text-xs font-bold text-[#102A43] uppercase tracking-wider">
                    Secondary Button
                  </div>
                  <div className="text-xs text-[#6B7C8F]">
                    Background: Transparent · Border: 1px #102A43 · Text: #102A43 · Hover: Navy with white text
                  </div>
                  <div className="pt-2">
                    <button className="px-5 py-3 border border-[#102A43] hover:bg-[#102A43] hover:text-white text-[#102A43] text-sm font-bold rounded-[8px] transition-colors">
                      Find a Professional
                    </button>
                  </div>
                </div>
              </div>

              {/* Consistent Radius Scale */}
              <div>
                <div className="text-xs font-bold text-[#102A43] uppercase tracking-wider mb-2">
                  Standardized Radius System
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
                  {ELEMENTOR_SPEC.borderRadius.map((r, i) => (
                    <div key={i} className="p-2.5 rounded-[8px] bg-[#F8F4EE] border border-[#E4E9ED]">
                      <div className="font-bold text-[#102A43] text-sm font-mono">{r.value}</div>
                      <div className="text-[11px] text-[#6B7C8F] mt-0.5">{r.target}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SPACING & SHADOWS */}
          {activeTab === 'spacing' && (
            <div className="space-y-4">
              <div className="p-4 rounded-[12px] bg-[#F8F4EE] border border-[#E4E9ED] space-y-2 text-xs">
                <div className="font-bold text-[#102A43] text-sm">8px-Based Spacing Scale</div>
                <div className="flex flex-wrap gap-2 pt-1 font-mono">
                  {ELEMENTOR_SPEC.spacingGrid.map((sp, i) => (
                    <span key={i} className="px-2 py-1 bg-white border border-[#E4E9ED] rounded-[4px] font-bold text-[#102A43]">
                      {sp}
                    </span>
                  ))}
                </div>
                <div className="pt-2 text-[#6B7C8F]">
                  <strong>Section Padding:</strong> Desktop 96px top/bottom, Hero 80-100px, Mobile 64px. Content Max-Width: 1200px.
                </div>
              </div>

              <div className="p-4 rounded-[12px] bg-white border border-[#E4E9ED] space-y-1 text-xs">
                <div className="font-bold text-[#102A43]">Shadows: Restrained 0 8px 30px rgba(16,42,67,0.06)</div>
                <div className="text-[#6B7C8F]">
                  Cards appear subtly floating without harsh, heavy, or glowing dark outlines.
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-4 bg-[#F8F4EE] border-t border-[#E4E9ED] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-[#6B7C8F]">
            Ready to apply directly into Elementor Site Settings.
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyJson}
              className="px-4 py-2 rounded-[8px] bg-white border border-[#E4E9ED] hover:border-[#102A43] text-[#102A43] font-bold transition-all flex items-center gap-1.5"
            >
              {copiedJson ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copied Elementor JSON!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#2FA7A0]" />
                  <span>Copy Tokens JSON</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-[8px] bg-[#102A43] hover:bg-[#2FA7A0] text-white font-bold transition-colors"
            >
              Done
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
