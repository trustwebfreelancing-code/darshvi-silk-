import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface NewArrivalsProps {
  products: Product[];
  wishlistIds: Set<string>;
  onToggleWishlist: (product: Product) => void;
  onViewProduct: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
  onViewCatalogue: () => void;
}

export const NewArrivals: React.FC<NewArrivalsProps> = ({
  products,
  wishlistIds,
  onToggleWishlist,
  onViewProduct,
  onQuickAdd,
  onViewCatalogue
}) => {
  // Show the primary 4 new arrivals from the prompt
  const displayProducts = products.slice(0, 4);

  return (
    <section className="w-full py-16 lg:py-24 px-5 md:px-10 lg:px-16 bg-[#fff8f6]" id="new-arrivals">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-5">
          <div>
            <span className="font-sans text-[11px] font-bold text-[#775a19] uppercase tracking-[0.2em] block mb-2">
              Curated For You
            </span>
            <h2 className="font-serif text-[32px] md:text-[44px] text-[#3c0311] font-normal leading-tight">
              New Arrivals
            </h2>
            <p className="font-sans text-[15px] text-[#534344] mt-2 max-w-xl leading-relaxed">
              Freshly curated hand-embroidered silhouettes for the festive season, harmonizing ceremonial opulence with modern ease.
            </p>
          </div>

          <div className="flex items-center">
            <button
              onClick={onViewCatalogue}
              className="inline-flex items-center gap-1 font-sans text-[13px] font-bold uppercase tracking-wider text-[#775a19] hover:text-[#3c0311] transition-colors group cursor-pointer"
            >
              <span>View Complete Catalogue</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlistIds.has(product.id)}
              onToggleWishlist={onToggleWishlist}
              onViewProduct={onViewProduct}
              onQuickAdd={onQuickAdd}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
