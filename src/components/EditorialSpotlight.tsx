import React from 'react';
import { ArrowRight, Award } from 'lucide-react';

interface EditorialSpotlightProps {
  onShopCollection: () => void;
}

export const EditorialSpotlight: React.FC<EditorialSpotlightProps> = ({ onShopCollection }) => {
  return (
    <section className="w-full py-16 lg:py-24 px-5 md:px-10 lg:px-16 bg-[#fdeae3]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Editorial Image Composition (7 Columns) */}
          <div className="lg:col-span-7 relative">
            <div className="relative z-10 w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-[#f7e4de] border border-[#d9c1c2]/40">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzRK9NQHEErO5_2s1abxO6erSxWY87V3TtUNsBCvHkCM9IvYE9O_u1tkH0oSx5khN-DqeuCVj9y4uoBmVqhVpCMSdIsP_UMmMX5_JQOv6CLmIPPbxFuPWcKxAY6uyYOF5FPOuHgLbmbFS6G1Rs3PfmC2oY0m4fqE6SCWyxsTCXyoqnmDsMJMdrqImt7CfPtu_KE7I4mg3_EKkAUDnIhg5a6S9fbMTTb63qjOkFCN-18_TjGD7sCPpS"
                alt="Editorial Spotlight - Darshvi Couture Anarkali"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Overlapping Float Card */}
            <div className="hidden sm:block absolute -bottom-6 -right-4 lg:-right-8 z-20 bg-[#fff8f6] p-5 rounded-xl shadow-xl max-w-xs border border-[#d9c1c2]/50">
              <div className="flex items-center gap-2 text-[#775a19] mb-1">
                <Award className="w-5 h-5 text-[#775a19]" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-wider">
                  Couture Standard
                </span>
              </div>
              <p className="font-serif text-[18px] font-semibold text-[#3c0311]">
                Kashi Heritage Loom
              </p>
              <p className="font-sans text-[13px] text-[#534344] mt-1 leading-snug">
                Spun with genuine metallic gold tilla threads.
              </p>
            </div>
          </div>

          {/* Typographic Narrative (5 Columns) */}
          <div className="lg:col-span-5 lg:pl-6 space-y-6">
            <div className="space-y-2">
              <span className="font-sans text-[11px] font-bold text-[#775a19] uppercase tracking-[0.22em] block">
                The Artisan Chronicle
              </span>
              <h2 className="font-serif text-[32px] md:text-[44px] text-[#3c0311] leading-tight font-normal">
                Designed for Every Occasion
              </h2>
            </div>

            <p className="font-sans text-[15px] lg:text-[17px] text-[#231916] leading-relaxed">
              Discover elegant ethnic styles for celebrations, festivals and unforgettable moments. Every drape carries stories of master craftspeople from Varanasi, Lucknow, and Jaipur.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-[#fff8f6]/80 p-4 rounded-lg border border-[#d9c1c2]/40">
                <span className="font-serif text-[18px] font-semibold text-[#3c0311] block mb-1">
                  Varanasi
                </span>
                <span className="font-sans text-[13px] text-[#534344]">
                  Pure Katan &amp; Brocade
                </span>
              </div>
              <div className="bg-[#fff8f6]/80 p-4 rounded-lg border border-[#d9c1c2]/40">
                <span className="font-serif text-[18px] font-semibold text-[#3c0311] block mb-1">
                  Lucknow
                </span>
                <span className="font-sans text-[13px] text-[#534344]">
                  Intricate Chikankari Knots
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onShopCollection}
                className="inline-flex items-center gap-2 bg-[#3c0311] text-white hover:bg-[#581825] px-8 py-3.5 rounded-lg font-sans text-[12px] font-bold uppercase tracking-[0.16em] shadow-md hover:shadow-xl transition-all active:scale-95"
              >
                <span>Shop Collection</span>
                <ArrowRight className="w-4 h-4 text-[#fed488]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
