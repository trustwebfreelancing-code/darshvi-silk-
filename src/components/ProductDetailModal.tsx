import React, { useState } from 'react';
import { X, Heart, ShoppingBag, ShieldCheck, Sparkles, Check, Clock, Scissors } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product, size: string, bespokeConsultation: boolean, customMeasurements?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onAddToCart
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.availableSizes[1] || 'S');
  const [bespokeConsultation, setBespokeConsultation] = useState<boolean>(true);
  const [customMeasurements, setCustomMeasurements] = useState<string>('');
  const [addedNotice, setAddedNotice] = useState<boolean>(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, bespokeConsultation, customMeasurements);
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#231916]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#fff8f6] rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#775a19]/30 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#fff8f6]/90 hover:bg-[#fff8f6] text-[#231916] flex items-center justify-center shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Gallery Column */}
          <div className="relative bg-[#fff1ec] flex items-center justify-center min-h-[380px] md:min-h-[520px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-top max-h-[600px]"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-[#3c0311] text-white font-sans text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded shadow">
                {product.badge}
              </span>
            )}
            <div className="absolute bottom-4 left-4 right-4 bg-[#fff8f6]/90 backdrop-blur-md p-3 rounded-lg border border-[#d9c1c2]/40 flex items-center justify-between text-xs text-[#534344]">
              <span className="flex items-center gap-1 font-semibold text-[#775a19]">
                <Clock className="w-3.5 h-3.5" />
                {product.artisanHours} Handcrafted Hours
              </span>
              <span className="font-semibold text-[#3c0311]">
                {product.origin}
              </span>
            </div>
          </div>

          {/* Contiguous Purchase Module */}
          <div className="p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh]">
            <div>
              <span className="font-sans text-[11px] font-bold text-[#775a19] uppercase tracking-[0.2em] block mb-1">
                {product.subtitle} &bull; {product.category}
              </span>
              <h2 className="font-serif text-[26px] md:text-[30px] font-normal text-[#3c0311] leading-tight mb-2">
                {product.name}
              </h2>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-[24px] font-bold text-[#231916] tabular-nums">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="font-sans text-sm text-[#867274] line-through tabular-nums">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="font-sans text-[11px] font-semibold text-[#775a19] bg-[#fed488]/30 px-2 py-0.5 rounded">
                  Taxes Included
                </span>
              </div>

              {/* Description */}
              <p className="font-sans text-[13px] text-[#534344] leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Size Selector */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="font-sans text-xs font-bold uppercase tracking-wider text-[#3c0311]">
                    Select Drape Size
                  </label>
                  <span className="font-sans text-[11px] text-[#775a19] font-semibold">
                    Standard Couture Sizing
                  </span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {product.availableSizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-1 text-center rounded-lg font-sans text-xs font-bold uppercase transition-all ${
                        selectedSize === size
                          ? 'bg-[#3c0311] text-white shadow-sm border border-[#3c0311]'
                          : 'bg-[#fff1ec] text-[#534344] hover:bg-[#fdeae3] border border-[#d9c1c2]/50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {selectedSize === 'Custom Royal Drape' && (
                  <div className="mt-3 p-3 bg-[#fff1ec] rounded-lg border border-[#775a19]/40 space-y-2">
                    <p className="font-sans text-xs font-semibold text-[#785a1a]">
                      Specify Custom Drape / Bust &amp; Height Measurements:
                    </p>
                    <input
                      type="text"
                      value={customMeasurements}
                      onChange={(e) => setCustomMeasurements(e.target.value)}
                      placeholder="e.g. Bust: 38'', Waist: 32'', Kurta Length: 52''"
                      className="w-full bg-white border border-[#d9c1c2] px-3 py-1.5 rounded text-xs font-sans focus:outline-none focus:border-[#775a19]"
                    />
                  </div>
                )}
              </div>

              {/* Bespoke Tailoring Consultation Toggle */}
              <div className="mb-6 p-3.5 bg-[#fdeae3] rounded-xl border border-[#775a19]/30 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="bespoke-check"
                  checked={bespokeConsultation}
                  onChange={(e) => setBespokeConsultation(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-[#775a19] text-[#581825] focus:ring-[#775a19]"
                />
                <label htmlFor="bespoke-check" className="cursor-pointer">
                  <span className="font-sans text-xs font-bold text-[#3c0311] flex items-center gap-1.5">
                    <Scissors className="w-3.5 h-3.5 text-[#775a19]" />
                    Complimentary Atelier Fit &amp; Trousseau Consultation
                  </span>
                  <p className="font-sans text-[11px] text-[#534344] mt-0.5">
                    Our master cutter will schedule a personal video call to confirm your drape specifications prior to stitching.
                  </p>
                </label>
              </div>

              {/* Fabric & Craft Specifications */}
              <div className="space-y-2 py-4 border-t border-[#d9c1c2]/40 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#867274] font-medium">Textile Composition:</span>
                  <span className="text-[#231916] font-semibold text-right max-w-[200px]">{product.fabric}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#867274] font-medium">Embroidery Craft:</span>
                  <span className="text-[#231916] font-semibold text-right max-w-[200px]">{product.craft}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#867274] font-medium">Weaver Atelier:</span>
                  <span className="text-[#231916] font-semibold text-right">{product.origin}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#d9c1c2]/40 space-y-3">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleAdd}
                  disabled={addedNotice}
                  className={`flex-1 py-3 px-4 rounded-lg font-sans text-xs uppercase tracking-wider font-bold shadow-md transition-all flex items-center justify-center gap-2 ${
                    addedNotice
                      ? 'bg-[#775a19] text-white'
                      : 'bg-[#581825] hover:bg-[#3c0311] text-white'
                  }`}
                >
                  {addedNotice ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Added to Shopping Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Shopping Bag • ₹{product.price.toLocaleString('en-IN')}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => onToggleWishlist(product)}
                  className={`w-12 h-12 rounded-lg flex items-center justify-center border transition-colors ${
                    isWishlisted
                      ? 'bg-[#3c0311] text-white border-[#3c0311]'
                      : 'bg-[#fff1ec] text-[#231916] hover:bg-[#fdeae3] border-[#d9c1c2]'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-white' : ''}`} />
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] font-sans text-[#775a19] pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Insured Pan-India &amp; Global Delivery
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Silk Mark Certified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
