import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Gift, ArrowRight, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onProceedToCheckout: (appliedDiscount: number, giftWrap: boolean, giftMessage?: string) => void;
  onExploreCollections: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onExploreCollections
}) => {
  const [giftWrap, setGiftWrap] = useState(false);
  const [giftMessage, setGiftMessage] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const freeShippingThreshold = 5000;
  const shipping = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 450;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  const discountAmount = promoApplied ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal - discountAmount + shipping;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'ROYALFIRST' || promoCode.trim().toUpperCase() === 'DARSHVI10') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid royal code. Try "ROYALFIRST"');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#231916]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#fff8f6] shadow-2xl flex flex-col border-l border-[#775a19]/30">
          {/* Header */}
          <div className="p-5 border-b border-[#d9c1c2]/40 flex items-center justify-between bg-[#fff1ec]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#3c0311]" />
              <h2 className="font-serif text-xl font-normal text-[#3c0311]">
                Your Shopping Bag ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close bag"
              className="p-1.5 rounded-full hover:bg-[#fdeae3] text-[#534344] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="px-5 py-3 bg-[#fdeae3] border-b border-[#d9c1c2]/30">
            {subtotal >= freeShippingThreshold ? (
              <p className="font-sans text-xs font-bold text-[#775a19] text-center">
                ✨ You've unlocked Complimentary Worldwide Bespoke Delivery!
              </p>
            ) : (
              <div>
                <p className="font-sans text-xs text-[#534344] mb-1.5 flex justify-between">
                  <span>Add <strong>₹{(freeShippingThreshold - subtotal).toLocaleString('en-IN')}</strong> for Complimentary Delivery</span>
                  <span className="font-bold text-[#775a19]">{progressPercent}%</span>
                </p>
                <div className="w-full bg-[#f1dfd8] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#775a19] h-full rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#fdeae3] flex items-center justify-center text-[#775a19]">
                  <ShoppingBag className="w-8 h-8 stroke-1" />
                </div>
                <h3 className="font-serif text-xl text-[#3c0311]">Your bag is empty</h3>
                <p className="font-sans text-xs text-[#534344] max-w-xs">
                  Each Darshvi silhouette is hand-embroidered with centuries of regal craft. Explore our new festive arrivals.
                </p>
                <button
                  onClick={() => { onClose(); onExploreCollections(); }}
                  className="bg-[#581825] text-white px-6 py-2.5 rounded-lg font-sans text-xs uppercase tracking-wider font-bold shadow-md hover:bg-[#3c0311] transition-all"
                >
                  Explore Creations
                </button>
              </div>
            ) : (
              <>
                {cartItems.map((item, idx) => (
                  <div
                    key={`${item.product.id}-${item.size}-${idx}`}
                    className="flex gap-4 p-3 bg-[#fff1ec] rounded-xl border border-[#d9c1c2]/40"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-24 object-cover object-top rounded-lg bg-[#fdeae3]"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 className="font-serif text-sm font-semibold text-[#3c0311] leading-tight line-clamp-1">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(idx)}
                            className="text-[#867274] hover:text-[#ba1a1a] transition-colors p-0.5"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="font-sans text-[11px] text-[#775a19] uppercase font-bold tracking-wider mt-0.5">
                          Size: {item.size}
                        </p>
                        {item.bespokeConsultation && (
                          <span className="inline-block mt-1 text-[10px] font-sans font-semibold text-[#3c0311] bg-[#fed488]/40 px-1.5 py-0.5 rounded">
                            Bespoke Fit Consultation Included
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#d9c1c2]/30">
                        {/* Stepper */}
                        <div className="flex items-center border border-[#d9c1c2] rounded bg-white">
                          <button
                            onClick={() => onUpdateQuantity(idx, Math.max(1, item.quantity - 1))}
                            className="px-2 py-0.5 text-xs text-[#534344] hover:bg-[#fff1ec]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 font-sans text-xs font-bold text-[#231916]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                            className="px-2 py-0.5 text-xs text-[#534344] hover:bg-[#fff1ec]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-sans text-sm font-bold text-[#231916] tabular-nums">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Luxury Gifting Option */}
                <div className="p-3.5 bg-[#fdeae3] rounded-xl border border-[#775a19]/30">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="gift-wrap-check"
                      checked={giftWrap}
                      onChange={(e) => setGiftWrap(e.target.checked)}
                      className="h-4 w-4 rounded border-[#775a19] text-[#581825]"
                    />
                    <label htmlFor="gift-wrap-check" className="font-sans text-xs font-bold text-[#3c0311] flex items-center gap-1.5 cursor-pointer">
                      <Gift className="w-3.5 h-3.5 text-[#775a19]" />
                      Complimentary Royal Silk Gift Packaging
                    </label>
                  </div>
                  {giftWrap && (
                    <input
                      type="text"
                      value={giftMessage}
                      onChange={(e) => setGiftMessage(e.target.value)}
                      placeholder="Enter calligraphy card message..."
                      className="mt-2 w-full bg-white border border-[#d9c1c2] px-3 py-1.5 rounded text-xs font-sans focus:outline-none focus:border-[#775a19]"
                    />
                  )}
                </div>

                {/* Promo Code Input */}
                <div className="pt-2">
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Royal Privilege Code (e.g. ROYALFIRST)"
                      className="flex-1 bg-white border border-[#d9c1c2] px-3 py-1.5 rounded-lg text-xs font-sans focus:outline-none focus:border-[#775a19] uppercase"
                    />
                    <button
                      type="submit"
                      className="bg-[#775a19] hover:bg-[#581825] text-white px-3 py-1.5 rounded-lg font-sans text-xs font-bold uppercase transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                  {promoApplied && (
                    <p className="font-sans text-[11px] text-green-700 font-semibold mt-1">
                      ✓ Privilege code applied: 10% Royal Atelier Courtesy
                    </p>
                  )}
                  {promoError && (
                    <p className="font-sans text-[11px] text-[#ba1a1a] mt-1">
                      {promoError}
                    </p>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Footer Summary */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-[#d9c1c2]/40 bg-[#fff1ec] space-y-3">
              <div className="space-y-1.5 font-sans text-xs">
                <div className="flex justify-between text-[#534344]">
                  <span>Atelier Subtotal:</span>
                  <span className="font-bold text-[#231916] tabular-nums">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-green-700">
                    <span>Privilege Courtesy (10%):</span>
                    <span className="font-bold tabular-nums">-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#534344]">
                  <span>Insured Shipping:</span>
                  <span>{shipping === 0 ? <strong className="text-[#775a19] uppercase font-bold">Complimentary</strong> : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#3c0311] pt-2 border-t border-[#d9c1c2]/30">
                  <span>Grand Total (Taxes Included):</span>
                  <span className="text-base tabular-nums">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={() => onProceedToCheckout(discountAmount, giftWrap, giftMessage)}
                className="w-full bg-[#581825] hover:bg-[#3c0311] text-white py-3 rounded-lg font-sans text-xs uppercase tracking-wider font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Proceed to Bespoke Checkout</span>
                <ArrowRight className="w-4 h-4 text-[#fed488]" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] font-sans text-[#775a19]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Authentic Handloom Assurance &amp; Safe Payment</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
