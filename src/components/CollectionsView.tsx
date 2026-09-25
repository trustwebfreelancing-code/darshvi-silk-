import React, { useState } from 'react';
import { Search, SlidersHorizontal, ArrowLeft } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface CollectionsViewProps {
  products: Product[];
  wishlistIds: Set<string>;
  onToggleWishlist: (product: Product) => void;
  onViewProduct: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
  onBackToHome: () => void;
  initialCategory?: string;
}

export const CollectionsView: React.FC<CollectionsViewProps> = ({
  products,
  wishlistIds,
  onToggleWishlist,
  onViewProduct,
  onQuickAdd,
  onBackToHome,
  initialCategory = 'All'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');

  const categories = [
    'All',
    'Royal Anarkalis',
    'Occasion Gowns',
    'Festive Kurta Sets',
    'Festive Suits',
    'Bridal Couture'
  ];

  // Filtering
  const filteredProducts = products.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.fabric.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.craft.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  return (
    <div className="w-full min-h-screen pt-24 pb-20 px-5 md:px-10 lg:px-16 bg-[#fff8f6]">
      <div className="max-w-7xl mx-auto">
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

        {/* Section Header */}
        <div className="border-b border-[#d9c1c2]/40 pb-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-sans text-[11px] font-bold text-[#775a19] uppercase tracking-[0.22em] block mb-1">
                Royal Atelier Archives
              </span>
              <h1 className="font-serif text-[34px] md:text-[44px] text-[#3c0311] font-normal leading-tight">
                The Couture Collections
              </h1>
              <p className="font-sans text-[14px] text-[#534344] mt-2 max-w-xl">
                Explore handloom drapes, pure mulberry silks, zardozi motifs, and festive couture handcrafted by hereditary master artisans.
              </p>
            </div>

            <div className="text-right">
              <span className="font-sans text-xs text-[#775a19] font-bold tracking-wider">
                Showing {sortedProducts.length} Silhouettes
              </span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-sans text-xs uppercase tracking-wider font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#3c0311] text-white shadow-sm'
                    : 'bg-[#fff1ec] text-[#534344] hover:bg-[#fdeae3] hover:text-[#231916]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Sort Bar */}
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#867274] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by silk, craft, or silhouette..."
                className="w-full bg-[#fff1ec] border border-[#d9c1c2]/50 pl-9 pr-4 py-2 rounded-lg font-sans text-xs text-[#231916] placeholder:text-[#867274] focus:outline-none focus:border-[#775a19]"
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-[#534344] font-medium">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#775a19]" />
                <span>Sort by:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#fff1ec] border border-[#d9c1c2]/50 px-3 py-1.5 rounded-lg font-sans text-xs text-[#231916] focus:outline-none focus:border-[#775a19]"
              >
                <option value="featured">Featured Curations</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
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
        ) : (
          <div className="text-center py-16 bg-[#fff1ec] rounded-xl border border-[#d9c1c2]/30 p-8">
            <p className="font-serif text-xl text-[#3c0311] mb-2">No matching couture piece found</p>
            <p className="font-sans text-xs text-[#534344] mb-4">Try clearing your search query or selecting another royal category.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="bg-[#3c0311] text-white px-5 py-2 rounded-lg font-sans text-xs uppercase font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
