import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreCollection: () => void;
  onViewNewArrivals: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCollection, onViewNewArrivals }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#3c0311] -mt-20">
      <div className="relative w-full min-h-[92vh] lg:min-h-screen flex items-end lg:items-center pt-36 pb-16 lg:py-32 px-5 md:px-10 lg:px-16">
        {/* Background Hero Visual */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVZw2TUHtWkzts87EdA_kTUDkSSK0KMOKQlm5zBaTjiSCOay2on1PtXnc9liFsMhig2g_VYW3aq2VP4gPcpXqLcjosXZ4V8XszJBPllzZ0X0iAvGu1B2bRd9tukQI7_kPO4SbblRbjY8VtRwVOnA6AgBUb5d8L_Uf7gJF5CVNdS4FMNGJfAzoRAzZjJNpFmYCySPdn5QBTYBiPPFClzJZuLJMzS5R6k3SUBd9i1hUReIwAdS_821zt')`
          }}
        />

        {/* Gradient Scrim for Immersive Depth & Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3c0311]/95 via-[#3c0311]/50 to-[#3c0311]/25 lg:bg-gradient-to-r lg:from-[#3c0311]/90 lg:via-[#3c0311]/55 lg:to-transparent" />

        {/* Hero Narrative Content */}
        <div className="relative z-10 max-w-2xl text-[#fff8f6]">
          {/* Subtle Edition Tag */}
          <div className="inline-flex items-center gap-2 mb-3 bg-[#fff8f6]/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#fed488] animate-pulse"></span>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#fed488]">
              The Festive &amp; Couture 2025 Edit
            </span>
          </div>

          <h1 className="font-serif text-[38px] md:text-[50px] lg:text-[58px] text-[#fff8f6] font-normal leading-[1.08] mb-4">
            Elegance, <br />
            <span className="italic font-serif font-light text-[#fed488]">Woven for You</span>
          </h1>

          <p className="font-sans text-[15px] lg:text-[17px] text-[#fff8f6]/90 max-w-lg mb-8 leading-relaxed font-light">
            Discover timeless ethnic styles crafted for every special moment, steeped in royal atelier mastery and contemporary poise.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={onExploreCollection}
              className="inline-flex items-center justify-center gap-2 bg-[#581825] text-white hover:bg-[#3c0311] border border-[#775a19]/60 font-sans text-[13px] font-bold uppercase tracking-[0.16em] px-8 py-3.5 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 active:scale-95"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 text-[#fed488]" />
            </button>
            <button
              onClick={onViewNewArrivals}
              className="inline-flex items-center justify-center bg-[#fff8f6]/15 hover:bg-[#fff8f6]/25 border border-white/20 backdrop-blur-md text-[#fff8f6] font-sans text-[13px] font-bold uppercase tracking-[0.16em] px-8 py-3.5 rounded-lg transition-all duration-300 active:scale-95"
            >
              View New Arrivals
            </button>
          </div>

          {/* Metric Accents */}
          <div className="mt-12 pt-6 flex items-center gap-8 text-[#fff8f6]/80 border-t border-white/10">
            <div>
              <div className="font-serif text-[24px] font-semibold text-[#fed488]">350+</div>
              <div className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#fff8f6]/70">
                Artisan Hours Per Drape
              </div>
            </div>
            <div className="w-px h-8 bg-[#fff8f6]/20" />
            <div>
              <div className="font-serif text-[24px] font-semibold text-[#fed488]">100%</div>
              <div className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#fff8f6]/70">
                Pure Silk &amp; Zardozi
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
