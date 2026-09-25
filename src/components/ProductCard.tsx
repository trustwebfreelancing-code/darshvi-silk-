import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onViewProduct: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onViewProduct,
  onQuickAdd
}) => {
  const getBadgeStyle = (badgeType?: string) => {
    switch (badgeType) {
      case 'bestseller':
        return 'bg-[#3c0311] text-white';
      case 'embellished':
        return 'bg-[#fed488] text-[#785a1a]';
      case 'silk':
        return 'bg-[#f1dfd8] text-[#3c0311]';
      case 'festive':
        return 'bg-[#775a19] text-white';
      default:
        return 'bg-[#581825] text-white';
    }
  };

  return (
    <article className="group bg-[#fff1ec] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between border border-[#d9c1c2]/30">
      <div>
        {/* Visual Container */}
        <div 
          onClick={() => onViewProduct(product)}
          className="relative aspect-[3/4] overflow-hidden bg-[#fdeae3] cursor-pointer"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            referrerPolicy="no-referrer"
          />

          {/* Badge */}
          {product.badge && (
            <span
              className={`absolute top-3 left-3 font-sans text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm ${getBadgeStyle(
                product.badgeType
              )}`}
            >
              {product.badge}
            </span>
          )}

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
            }}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#fff8f6]/90 hover:bg-white text-[#231916] flex items-center justify-center shadow-md transition-transform active:scale-90"
            type="button"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isWishlisted ? 'fill-[#3c0311] text-[#3c0311]' : 'text-[#231916]'
              }`}
            />
          </button>
        </div>

        {/* Content Info */}
        <div className="p-4 sm:p-5">
          <span className="font-sans text-[10px] font-bold text-[#775a19] uppercase tracking-widest block mb-1">
            {product.subtitle}
          </span>
          <h3 
            onClick={() => onViewProduct(product)}
            className="font-serif text-[18px] sm:text-[20px] font-semibold text-[#3c0311] mb-1 group-hover:text-[#581825] transition-colors cursor-pointer leading-snug"
          >
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <p className="font-sans text-[17px] sm:text-[18px] text-[#231916] font-bold tabular-nums">
              ₹{product.price.toLocaleString('en-IN')}
            </p>
            {product.originalPrice && (
              <span className="font-sans text-xs text-[#867274] line-through tabular-nums">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Button Controls */}
      <div className="p-4 sm:p-5 pt-0 flex gap-2">
        <button
          onClick={() => onViewProduct(product)}
          className="flex-1 bg-[#3c0311] text-white hover:bg-[#581825] font-sans text-[11px] font-bold uppercase tracking-wider py-2.5 rounded-lg transition-colors shadow-sm text-center active:scale-95"
          type="button"
        >
          View Product
        </button>
        <button
          onClick={() => onQuickAdd(product)}
          className="w-10 h-10 flex items-center justify-center bg-[#fdeae3] hover:bg-[#fed488] text-[#231916] rounded-lg transition-colors active:scale-90"
          title="Quick Add to Bag"
          type="button"
        >
          <ShoppingBag className="w-4 h-4 text-[#3c0311]" />
        </button>
      </div>
    </article>
  );
};
