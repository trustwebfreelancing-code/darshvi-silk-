import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BRAND_STATS } from '../data/products';

interface AboutPreviewProps {
  onLearnMore: () => void;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({ onLearnMore }) => {
  return (
    <section className="w-full py-16 lg:py-24 px-5 md:px-10 lg:px-16 bg-[#fff1ec]">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <span className="font-sans text-[11px] font-bold text-[#775a19] uppercase tracking-[0.24em] mb-2">
          Our Origin &amp; Soul
        </span>

        <h2 className="font-serif text-[32px] md:text-[44px] text-[#3c0311] font-normal leading-tight mb-4">
          Where Tradition Meets Contemporary Elegance
        </h2>

        {/* Subtle Motif Accent */}
        <div className="flex items-center justify-center gap-4 mb-6 text-[#775a19]">
          <span className="w-16 h-px bg-[#775a19]/30"></span>
          <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#775a19]">
            Darshvi Atelier
          </span>
          <span className="w-16 h-px bg-[#775a19]/30"></span>
        </div>

        <p className="font-sans text-[15px] lg:text-[17px] text-[#534344] leading-relaxed max-w-2xl mb-8">
          Born from a devotion to Indian heritage craft, DARSHVI reinterprets timeless artisanal traditions for the modern discerning woman. Every stitch embodies regal grace, mindful craftsmanship, and enduring beauty.
        </p>

        <div className="flex items-center justify-center">
          <button
            onClick={onLearnMore}
            className="inline-flex items-center gap-2 bg-[#581825] text-white hover:bg-[#3c0311] px-8 py-3.5 rounded-lg font-sans text-[12px] font-bold uppercase tracking-[0.16em] shadow-md hover:shadow-xl transition-all active:scale-95"
          >
            <span>About Darshvi</span>
            <ArrowUpRight className="w-4 h-4 text-[#fed488]" />
          </button>
        </div>

        {/* Atelier Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full mt-16 pt-8 border-t border-[#d9c1c2]/40 text-center">
          {BRAND_STATS.map((stat, idx) => (
            <div key={idx} className="p-2">
              <span className="font-serif text-[34px] sm:text-[42px] text-[#3c0311] block font-normal leading-none mb-1">
                {stat.value}
              </span>
              <span className="font-sans text-[10px] sm:text-[11px] font-bold text-[#534344] uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
