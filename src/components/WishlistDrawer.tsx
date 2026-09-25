import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (product: Product) => void;
  onMoveToCart: (product: Product) => void;
  onExplore: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onMoveToCart,
  onExplore
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#231916]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#fff8f6] shadow-2xl flex flex-col border-l border-[#775a19]/30">
          {/* Header */}
          <div className="p-5 border-b border-[#d9c1c2]/40 flex items-center justify-between bg-[#fff1ec]">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#3c0311] fill-[#3c0311]" />
              <h2 className="font-serif text-xl font-normal text-[#3c0311]">
                Saved Heirlooms ({wishlistProducts.length})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#fdeae3] text-[#534344]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {wishlistProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#fdeae3] flex items-center justify-center text-[#775a19]">
                  <Heart className="w-8 h-8 stroke-1" />
                </div>
                <h3 className="font-serif text-xl text-[#3c0311]">No saved heirlooms</h3>
                <p className="font-sans text-xs text-[#534344] max-w-xs">
                  Save your favored lehengas, royal anarkalis, and handcrafted kurta sets for future celebrations.
                </p>
                <button
                  onClick={() => { onClose(); onExplore(); }}
                  className="bg-[#581825] text-white px-6 py-2.5 rounded-lg font-sans text-xs uppercase tracking-wider font-bold shadow-md hover:bg-[#3c0311] transition-all"
                >
                  Explore Collections
                </button>
              </div>
            ) : (
              wishlistProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="flex gap-4 p-3 bg-[#fff1ec] rounded-xl border border-[#d9c1c2]/40"
                >
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-20 h-24 object-cover object-top rounded-lg bg-[#fdeae3]"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif text-sm font-semibold text-[#3c0311] leading-tight">
                          {prod.name}
                        </h4>
                        <button
                          onClick={() => onRemoveFromWishlist(prod)}
                          className="text-[#867274] hover:text-[#ba1a1a] transition-colors p-0.5"
                          aria-label="Remove from wishlist"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="font-sans text-[11px] text-[#775a19] uppercase font-bold tracking-wider mt-0.5">
                        {prod.subtitle}
                      </p>
                      <p className="font-sans text-sm font-bold text-[#231916] mt-1 tabular-nums">
                        ₹{prod.price.toLocaleString('en-IN')}
                      </p>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => {
                          onMoveToCart(prod);
                        }}
                        className="w-full bg-[#3c0311] hover:bg-[#581825] text-white py-1.5 px-3 rounded-lg font-sans text-[11px] uppercase tracking-wider font-bold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
