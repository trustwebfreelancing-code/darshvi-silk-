import React from 'react';
import { Palette, Sparkles, Scissors, CheckCircle, Leaf, Ruler } from 'lucide-react';
import { BRAND_PILLARS } from '../data/products';

export const BrandStatement: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'palette':
        return <Palette className="w-6 h-6 text-[#775a19]" />;
      case 'texture':
        return <Sparkles className="w-6 h-6 text-[#775a19]" />;
      case 'design_services':
        return <Scissors className="w-6 h-6 text-[#775a19]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#775a19]" />;
    }
  };

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'verified':
        return <CheckCircle className="w-3.5 h-3.5 text-[#775a19]" />;
      case 'eco':
        return <Leaf className="w-3.5 h-3.5 text-[#775a19]" />;
      case 'straighten':
        return <Ruler className="w-3.5 h-3.5 text-[#775a19]" />;
      default:
        return <CheckCircle className="w-3.5 h-3.5 text-[#775a19]" />;
    }
  };

  return (
    <section className="w-full py-16 lg:py-20 px-5 md:px-10 lg:px-16 bg-[#fff1ec]">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Minimal Royal Motif Separator */}
        <div className="flex items-center justify-center gap-3 mb-3 text-[#775a19]">
          <span className="w-12 h-px bg-[#775a19]/40"></span>
          <span className="text-sm tracking-widest">❖</span>
          <span className="w-12 h-px bg-[#775a19]/40"></span>
        </div>

        <p className="font-sans text-[12px] md:text-[13px] text-[#775a19] uppercase tracking-[0.24em] mb-2 font-bold">
          Tradition • Elegance • Modern Style
        </p>

        <h2 className="font-serif text-[28px] md:text-[34px] lg:text-[38px] text-[#3c0311] max-w-2xl mb-12 font-normal leading-snug">
          Heirloom Weaves Handcrafted for the Connoisseur
        </h2>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full text-left">
          {BRAND_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#fff8f6] p-8 rounded-xl shadow-[0_2px_12px_rgba(35,25,22,0.03)] border border-[#d9c1c2]/35 hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-[#775a19]/50"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#fdeae3] flex items-center justify-center mb-5 group-hover:bg-[#fed488]/40 transition-colors">
                  {getIcon(pillar.icon)}
                </div>
                <h3 className="font-serif text-[20px] font-semibold text-[#3c0311] mb-2.5 leading-snug">
                  {pillar.title}
                </h3>
                <p className="font-sans text-[13px] text-[#534344] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#fdeae3] flex items-center gap-2 text-[#775a19] font-sans text-[11px] font-bold uppercase tracking-wider">
                <span>{pillar.badge}</span>
                {getBadgeIcon(pillar.badgeIcon)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
