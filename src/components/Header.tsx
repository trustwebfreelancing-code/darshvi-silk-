import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentTab: 'home' | 'collections' | 'about-us' | 'new-arrivals';
  onNavigate: (tab: 'home' | 'collections' | 'about-us' | 'new-arrivals') => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenBespoke: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenBespoke
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#fff8f6]/95 backdrop-blur-md shadow-[0_1px_8px_rgba(35,25,22,0.04)] border-b border-[#d9c1c2]/30">
      {/* Top Announcement Bar */}
      <div className="w-full bg-[#fdeae3] border-b border-[#d9c1c2]/30 py-1.5 px-5 lg:px-16 text-center">
        <p className="font-sans text-[10px] md:text-[11px] font-bold text-[#775a19] uppercase tracking-[0.18em]">
          Complimentary Pan-India Shipping on Orders Above ₹5,000 &nbsp;|&nbsp; Worldwide Bespoke Delivery
        </p>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 w-full px-5 lg:px-16 flex items-center justify-between gap-4">
        {/* Logo and Brand */}
        <div 
          onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img 
            src="https://lh3.googleusercontent.com/aida/AEtjO1XOoYnPi5wYY9MSIoWknzH8LlTU5weg2k9mO_fqQZdj7hEGzglsm3SVPSlBItqdAdDJBW3iR67YlQ73QlPxDTyWsBHpQzB_ojidzUn8yDpDSQMuaF5BPFV1veSxr9yD9lN2uYlmE2Sbd1aybdXDN3CcRsp0S2uUUwHh3rq8SXfvUCi8uvGTeMsbkEjm2vhe3uG7Bry0OCcElGApi0hGP4FjYMGvCISjAExQ8HFQFSNjlHYlEBbOkn3GVw" 
            alt="DARSHVI Brand Logo" 
            className="h-8 md:h-9 w-auto object-contain"
          />
          <div className="hidden sm:flex flex-col justify-center pl-1">
            <span className="font-serif text-[20px] font-normal tracking-wide text-[#3c0311] leading-tight">
              DARSHVI
            </span>
            <span className="font-sans text-[10px] font-bold text-[#775a19] uppercase tracking-[0.16em]">
              Fine Ethnic Attire
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-9">
          <button
            onClick={() => onNavigate('home')}
            className={`font-sans text-[13px] uppercase tracking-[0.12em] py-1 transition-all ${
              currentTab === 'home'
                ? 'text-[#3c0311] font-bold border-b-2 border-[#775a19] pb-0.5'
                : 'text-[#534344] font-semibold hover:text-[#231916]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('collections')}
            className={`font-sans text-[13px] uppercase tracking-[0.12em] py-1 transition-all ${
              currentTab === 'collections'
                ? 'text-[#3c0311] font-bold border-b-2 border-[#775a19] pb-0.5'
                : 'text-[#534344] font-semibold hover:text-[#231916]'
            }`}
          >
            Collections
          </button>
          <button
            onClick={() => onNavigate('about-us')}
            className={`font-sans text-[13px] uppercase tracking-[0.12em] py-1 transition-all ${
              currentTab === 'about-us'
                ? 'text-[#3c0311] font-bold border-b-2 border-[#775a19] pb-0.5'
                : 'text-[#534344] font-semibold hover:text-[#231916]'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => onNavigate('new-arrivals')}
            className={`font-sans text-[13px] uppercase tracking-[0.12em] py-1 transition-all ${
              currentTab === 'new-arrivals'
                ? 'text-[#3c0311] font-bold border-b-2 border-[#775a19] pb-0.5'
                : 'text-[#534344] font-semibold hover:text-[#231916]'
            }`}
          >
            New Arrivals
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            aria-label="Search Collection"
            className="p-2 text-[#534344] hover:text-[#3c0311] transition-colors flex items-center justify-center rounded-full hover:bg-[#fdeae3]/60"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Wishlist Trigger */}
          <button
            onClick={onOpenWishlist}
            aria-label="View Wishlist"
            className="relative p-2 text-[#534344] hover:text-[#3c0311] transition-colors flex items-center justify-center rounded-full hover:bg-[#fdeae3]/60"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#3c0311] text-white font-sans text-[9px] font-bold flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Shopping Bag Trigger */}
          <button
            onClick={onOpenCart}
            aria-label="Shopping Bag"
            className="relative p-2 text-[#534344] hover:text-[#3c0311] transition-colors flex items-center justify-center rounded-full hover:bg-[#fdeae3]/60"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#581825] text-white font-sans text-[9px] font-bold flex items-center justify-center rounded-full animate-scale">
                {cartCount}
              </span>
            )}
          </button>

          {/* Shop Now Primary Button */}
          <button
            onClick={() => onNavigate('collections')}
            className="hidden md:inline-flex items-center justify-center bg-[#581825] text-white border border-[#775a19] px-5 py-2 rounded-lg font-sans text-[12px] font-bold uppercase tracking-wider hover:bg-[#3c0311] transition-all shadow-[0_2px_8px_rgba(88,24,37,0.15)] active:scale-95"
          >
            Shop Now
          </button>

          {/* Client Concierge / Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              aria-label="Client Concierge Profile"
              className="w-8 h-8 rounded-full bg-[#3c0311] text-white flex items-center justify-center ml-1 hover:bg-[#581825] transition-colors shadow-sm"
            >
              <User className="w-4 h-4 text-white" />
            </button>

            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-[#d9c1c2]/50 py-2 z-50 animate-in fade-in-50">
                <div className="px-4 py-2 border-b border-[#fdeae3]">
                  <p className="font-serif text-sm font-semibold text-[#3c0311]">Darshvi Client Atelier</p>
                  <p className="font-sans text-[11px] text-[#775a19]">Exclusive Royal Privileges</p>
                </div>
                <button
                  onClick={() => { setProfileDropdownOpen(false); onOpenBespoke(); }}
                  className="w-full text-left px-4 py-2 text-xs font-sans font-medium text-[#231916] hover:bg-[#fff1ec] flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#775a19]"></span>
                  Book Master Tailor Video Consultation
                </button>
                <button
                  onClick={() => { setProfileDropdownOpen(false); onNavigate('collections'); }}
                  className="w-full text-left px-4 py-2 text-xs font-sans font-medium text-[#231916] hover:bg-[#fff1ec] flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#3c0311]"></span>
                  View Royal Lookbook
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#3c0311] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fff8f6] border-b border-[#d9c1c2]/40 px-6 py-5 shadow-lg space-y-4">
          <nav className="flex flex-col space-y-3">
            <button
              onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
              className={`text-left font-sans text-sm uppercase tracking-wider py-1 font-semibold ${
                currentTab === 'home' ? 'text-[#3c0311] font-bold' : 'text-[#534344]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => { onNavigate('collections'); setMobileMenuOpen(false); }}
              className={`text-left font-sans text-sm uppercase tracking-wider py-1 font-semibold ${
                currentTab === 'collections' ? 'text-[#3c0311] font-bold' : 'text-[#534344]'
              }`}
            >
              Collections
            </button>
            <button
              onClick={() => { onNavigate('about-us'); setMobileMenuOpen(false); }}
              className={`text-left font-sans text-sm uppercase tracking-wider py-1 font-semibold ${
                currentTab === 'about-us' ? 'text-[#3c0311] font-bold' : 'text-[#534344]'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => { onNavigate('new-arrivals'); setMobileMenuOpen(false); }}
              className={`text-left font-sans text-sm uppercase tracking-wider py-1 font-semibold ${
                currentTab === 'new-arrivals' ? 'text-[#3c0311] font-bold' : 'text-[#534344]'
              }`}
            >
              New Arrivals
            </button>
          </nav>
          <div className="pt-3 border-t border-[#d9c1c2]/40 flex gap-2">
            <button
              onClick={() => { onNavigate('collections'); setMobileMenuOpen(false); }}
              className="flex-1 bg-[#581825] text-white py-2.5 rounded-lg font-sans text-xs uppercase tracking-wider font-bold text-center"
            >
              Shop All Silhouettes
            </button>
            <button
              onClick={() => { onOpenBespoke(); setMobileMenuOpen(false); }}
              className="px-3 py-2.5 border border-[#775a19] text-[#775a19] rounded-lg font-sans text-xs uppercase tracking-wider font-semibold"
            >
              Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
