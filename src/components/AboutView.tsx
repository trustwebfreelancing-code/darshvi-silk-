import React from 'react';
import { ArrowLeft, Sparkles, HeartHandshake, ShieldCheck, Gem } from 'lucide-react';
import { BRAND_STATS } from '../data/products';

interface AboutViewProps {
  onBackToHome: () => void;
  onExploreCollection: () => void;
  onOpenBespoke: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onBackToHome,
  onExploreCollection,
  onOpenBespoke
}) => {
  return (
    <div className="w-full min-h-screen pt-24 pb-20 px-5 md:px-10 lg:px-16 bg-[#fff8f6]">
      <div className="max-w-5xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center gap-2">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1 font-sans text-xs font-bold uppercase tracking-wider text-[#775a19] hover:text-[#3c0311] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </button>
        </div>

        {/* Hero Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3 text-[#775a19]">
            <span className="w-12 h-px bg-[#775a19]/40"></span>
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.24em] text-[#775a19]">
              Our Origin &amp; Soul
            </span>
            <span className="w-12 h-px bg-[#775a19]/40"></span>
          </div>

          <h1 className="font-serif text-[38px] md:text-[52px] text-[#3c0311] font-normal leading-tight mb-4">
            Where Tradition Meets Contemporary Elegance
          </h1>

          <p className="font-sans text-[16px] text-[#534344] leading-relaxed">
            Born from an unyielding devotion to Indian royal heritage craft, DARSHVI reinterprets timeless artisanal traditions for the modern discerning woman.
          </p>
        </div>

        {/* Feature Image & Atelier Manifesto */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16 bg-[#fff1ec] p-6 md:p-10 rounded-2xl border border-[#d9c1c2]/35">
          <div className="md:col-span-5 aspect-[4/5] rounded-xl overflow-hidden shadow-lg bg-[#fdeae3]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzRK9NQHEErO5_2s1abxO6erSxWY87V3TtUNsBCvHkCM9IvYE9O_u1tkH0oSx5khN-DqeuCVj9y4uoBmVqhVpCMSdIsP_UMmMX5_JQOv6CLmIPPbxFuPWcKxAY6uyYOF5FPOuHgLbmbFS6G1Rs3PfmC2oY0m4fqE6SCWyxsTCXyoqnmDsMJMdrqImt7CfPtu_KE7I4mg3_EKkAUDnIhg5a6S9fbMTTb63qjOkFCN-18_TjGD7sCPpS"
              alt="Darshvi Master Weaving"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="md:col-span-7 space-y-5">
            <span className="font-sans text-[11px] font-bold text-[#775a19] uppercase tracking-[0.2em] block">
              The Atelier Philosophy
            </span>
            <h2 className="font-serif text-[28px] md:text-[34px] text-[#3c0311] font-normal leading-snug">
              Every drape carries a thousand years of whispered loom secrets.
            </h2>
            <p className="font-sans text-[14px] text-[#534344] leading-relaxed">
              At DARSHVI, we believe luxury cannot be rushed. A single bespoke Anarkali or Bridal Lehenga passes through the hands of multiple hereditary craftsmen: the <em>Naqshaband</em> who charts the floral arabesques, the master weaver of Kashi who spends up to four months hand-shuttling the gold tilla threads, and the <em>Zardoz</em> artists who couched antique metal bullion stitch by stitch.
            </p>
            <p className="font-sans text-[14px] text-[#534344] leading-relaxed">
              We work directly with 18 artisan loom clusters across Varanasi, Chanderi, Lucknow, and Jaipur, ensuring fair wages, ethical craft preservation, and heirlooms built to last generations.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenBespoke}
                className="bg-[#3c0311] text-white hover:bg-[#581825] px-6 py-3 rounded-lg font-sans text-xs uppercase tracking-wider font-bold shadow-md transition-all"
              >
                Book Bespoke Consultation
              </button>
              <button
                onClick={onExploreCollection}
                className="border border-[#775a19] text-[#775a19] hover:bg-[#fed488]/30 px-6 py-3 rounded-lg font-sans text-xs uppercase tracking-wider font-bold transition-all"
              >
                Explore Archives
              </button>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Craft */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#fff8f6] p-6 rounded-xl border border-[#d9c1c2]/35 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#fdeae3] flex items-center justify-center mb-4 text-[#775a19]">
              <Gem className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#3c0311] mb-2">Imperial Silk Quality</h3>
            <p className="font-sans text-xs text-[#534344] leading-relaxed">
              Only pure unadulterated mulberry, katan, and raw silks with verified Silk Mark certification.
            </p>
          </div>

          <div className="bg-[#fff8f6] p-6 rounded-xl border border-[#d9c1c2]/35 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#fdeae3] flex items-center justify-center mb-4 text-[#775a19]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#3c0311] mb-2">Authentic Zardozi</h3>
            <p className="font-sans text-xs text-[#534344] leading-relaxed">
              Seventh-generation royal zardoz masters using authentic dabka, nakshi, and real metallic threads.
            </p>
          </div>

          <div className="bg-[#fff8f6] p-6 rounded-xl border border-[#d9c1c2]/35 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#fdeae3] flex items-center justify-center mb-4 text-[#775a19]">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#3c0311] mb-2">Artisan Welfare</h3>
            <p className="font-sans text-xs text-[#534344] leading-relaxed">
              We directly support over 120 artisan families with guaranteed year-round livelihood and health support.
            </p>
          </div>

          <div className="bg-[#fff8f6] p-6 rounded-xl border border-[#d9c1c2]/35 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#fdeae3] flex items-center justify-center mb-4 text-[#775a19]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#3c0311] mb-2">Complimentary Fit</h3>
            <p className="font-sans text-xs text-[#534344] leading-relaxed">
              Every outfit includes personal virtual draping consultations and complimentary lifetime alterations.
            </p>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-8 bg-[#fff1ec] rounded-xl border border-[#d9c1c2]/40 text-center">
          {BRAND_STATS.map((stat, idx) => (
            <div key={idx}>
              <span className="font-serif text-[36px] text-[#3c0311] block font-normal leading-none mb-1">
                {stat.value}
              </span>
              <span className="font-sans text-[11px] font-bold text-[#534344] uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
