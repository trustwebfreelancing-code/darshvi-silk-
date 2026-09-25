import React, { useState } from 'react';
import { Instagram, Compass, Headset, Check } from 'lucide-react';

interface FooterProps {
  onNavigateTab: (tab: 'home' | 'collections' | 'about-us' | 'new-arrivals') => void;
  onOpenBespoke: () => void;
  onSelectCategory?: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateTab,
  onOpenBespoke,
  onSelectCategory
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const handleCategoryClick = (cat: string) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    onNavigateTab('collections');
  };

  return (
    <footer className="w-full bg-[#fff1ec] text-[#231916] border-t border-[#d9c1c2]/35 mt-16">
      <div className="w-full px-5 md:px-10 lg:px-16 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div className="space-y-5">
          <div className="space-y-1">
            <h3 className="font-serif text-[22px] font-normal tracking-wide text-[#3c0311]">
              DARSHVI
            </h3>
            <p className="font-sans text-[10px] font-bold text-[#775a19] uppercase tracking-[0.16em]">
              Fine Ethnic Attire
            </p>
          </div>
          <p className="font-sans text-[13px] text-[#534344] leading-relaxed">
            Embodying the timeless grandeur of Indian royal ateliers. Each silhouette is a bespoke dialogue between hand-spun Banarasi weaves, zardozi needlework, and imperial finesse.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <button
              aria-label="Instagram Atelier"
              className="w-9 h-9 rounded-full bg-[#fdeae3] flex items-center justify-center text-[#534344] hover:bg-[#fed488] hover:text-[#785a1a] transition-all border border-[#d9c1c2]/40"
            >
              <Instagram className="w-4 h-4" />
            </button>
            <button
              aria-label="Atelier Showcase"
              className="w-9 h-9 rounded-full bg-[#fdeae3] flex items-center justify-center text-[#534344] hover:bg-[#fed488] hover:text-[#785a1a] transition-all border border-[#d9c1c2]/40"
            >
              <Compass className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenBespoke}
              aria-label="Concierge Support"
              className="w-9 h-9 rounded-full bg-[#fdeae3] flex items-center justify-center text-[#534344] hover:bg-[#fed488] hover:text-[#785a1a] transition-all border border-[#d9c1c2]/40"
            >
              <Headset className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Collections Links */}
        <div className="space-y-3">
          <h4 className="font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-[#3c0311] border-b border-[#d9c1c2]/40 pb-2">
            Collections
          </h4>
          <ul className="space-y-2.5 font-sans text-[13px] text-[#534344]">
            <li 
              onClick={() => handleCategoryClick('Bridal Couture')}
              className="hover:text-[#3c0311] transition-colors cursor-pointer"
            >
              Bridal Couture
            </li>
            <li 
              onClick={() => handleCategoryClick('Royal Anarkalis')}
              className="hover:text-[#3c0311] transition-colors cursor-pointer"
            >
              Royal Anarkalis
            </li>
            <li 
              onClick={() => handleCategoryClick('Festive Kurta Sets')}
              className="hover:text-[#3c0311] transition-colors cursor-pointer"
            >
              Festive Kurta Sets
            </li>
            <li 
              onClick={() => handleCategoryClick('Occasion Gowns')}
              className="hover:text-[#3c0311] transition-colors cursor-pointer"
            >
              Embroidered Lehengas &amp; Gowns
            </li>
            <li 
              onClick={() => handleCategoryClick('Festive Suits')}
              className="hover:text-[#3c0311] transition-colors cursor-pointer"
            >
              Handloom Dupattas &amp; Suits
            </li>
          </ul>
        </div>

        {/* Quick Links & Client Care */}
        <div className="space-y-3">
          <h4 className="font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-[#3c0311] border-b border-[#d9c1c2]/40 pb-2">
            Quick Links &amp; Client Care
          </h4>
          <ul className="space-y-2.5 font-sans text-[13px] text-[#534344]">
            <li 
              onClick={() => onNavigateTab('about-us')}
              className="hover:text-[#3c0311] transition-colors cursor-pointer"
            >
              About Darshvi
            </li>
            <li 
              onClick={() => onNavigateTab('about-us')}
              className="hover:text-[#3c0311] transition-colors cursor-pointer"
            >
              Our Atelier &amp; Weavers
            </li>
            <li 
              onClick={onOpenBespoke}
              className="hover:text-[#3c0311] transition-colors cursor-pointer"
            >
              Bespoke Tailoring Consultation
            </li>
            <li 
              onClick={onOpenBespoke}
              className="hover:text-[#3c0311] transition-colors cursor-pointer"
            >
              Royal Fit &amp; Size Guide
            </li>
            <li 
              onClick={() => onNavigateTab('collections')}
              className="hover:text-[#3c0311] transition-colors cursor-pointer"
            >
              Track Order Status
            </li>
            <li 
              onClick={onOpenBespoke}
              className="hover:text-[#3c0311] transition-colors cursor-pointer"
            >
              Contact Royal Concierge
            </li>
          </ul>
        </div>

        {/* Client Advisory & Newsletter */}
        <div className="space-y-3">
          <h4 className="font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-[#3c0311] border-b border-[#d9c1c2]/40 pb-2">
            Client Advisory
          </h4>
          <ul className="space-y-2 font-sans text-[13px] text-[#534344] mb-4">
            <li className="hover:text-[#3c0311] transition-colors cursor-pointer">
              Shipping &amp; Delivery (Worldwide)
            </li>
            <li className="hover:text-[#3c0311] transition-colors cursor-pointer">
              Returns &amp; Complimentary Exchanges
            </li>
            <li className="hover:text-[#3c0311] transition-colors cursor-pointer">
              Imperial Silk Certification
            </li>
          </ul>

          <div className="pt-2 space-y-2">
            <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#775a19] block">
              Join the Darshvi Circle
            </span>
            <p className="font-sans text-[12px] text-[#534344] leading-snug">
              Receive confidential previews and royal salon invites.
            </p>

            {subscribed ? (
              <div className="p-2.5 bg-[#fdeae3] border border-[#775a19]/50 rounded-lg flex items-center gap-2 text-xs font-semibold text-[#785a1a]">
                <Check className="w-4 h-4 text-[#775a19]" />
                <span>Welcome to the Darshvi Circle.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center pt-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-[#ffffff] border border-[#d9c1c2]/60 px-3 py-2 rounded-l-lg font-sans text-[13px] text-[#231916] placeholder:text-[#867274] focus:outline-none focus:border-[#775a19]"
                />
                <button
                  type="submit"
                  className="bg-[#3c0311] text-white px-4 py-2 rounded-r-lg font-sans text-[10px] font-bold uppercase tracking-wider hover:bg-[#581825] transition-colors whitespace-nowrap"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="w-full border-t border-[#d9c1c2]/30 px-5 md:px-10 lg:px-16 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        <p className="font-sans text-[11px] text-[#534344]">
          © 2025 DARSHVI Fine Ethnic Attire. All rights reserved.
        </p>
        <p className="font-sans text-[11px] font-bold text-[#775a19] uppercase tracking-[0.18em]">
          Made in India
        </p>
      </div>
    </footer>
  );
};
