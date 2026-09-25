import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.fabric.toLowerCase().includes(query.toLowerCase()) ||
          p.craft.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const popularSearches = ['Zardozi Anarkali', 'Mulberry Silk', 'Wine Kurta', 'Bridal Lehenga', 'Chanderi'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#231916]/75 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#fff8f6] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#775a19]/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#d9c1c2]/40 flex items-center gap-3 bg-[#fff1ec]">
          <Search className="w-5 h-5 text-[#775a19]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by silk, embroidery craft, silhouette..."
            className="flex-1 bg-transparent font-sans text-sm md:text-base text-[#231916] placeholder:text-[#867274] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs font-sans text-[#867274] hover:text-[#231916]"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-[#534344] hover:text-[#3c0311] rounded-full hover:bg-[#fdeae3]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Popular Tags */}
        <div className="px-5 py-3 bg-[#fdeae3] border-b border-[#d9c1c2]/30 flex flex-wrap items-center gap-2 text-xs">
          <span className="font-sans font-bold text-[#775a19] uppercase tracking-wider text-[10px]">
            Royal Curations:
          </span>
          {popularSearches.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="bg-white/80 hover:bg-white text-[#534344] hover:text-[#3c0311] px-2.5 py-0.5 rounded-full border border-[#d9c1c2]/40 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Body */}
        <div className="p-5 max-h-[60vh] overflow-y-auto">
          {query.trim() === '' ? (
            <div className="text-center py-8 text-[#534344]">
              <p className="font-serif text-lg text-[#3c0311]">Search the Darshvi Royal Archives</p>
              <p className="font-sans text-xs mt-1 text-[#867274]">
                Type an embroidery style, royal silhouette, or natural silk type above.
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-8">
              <p className="font-serif text-lg text-[#3c0311]">No matching creation found</p>
              <p className="font-sans text-xs text-[#534344] mt-1">
                Try searching for "Silk", "Zardozi", "Kurta", or "Anarkali"
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="font-sans text-[11px] font-bold text-[#775a19] uppercase tracking-wider mb-2">
                Found {results.length} Atelier Creation{results.length > 1 ? 's' : ''}
              </p>
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center gap-4 p-3 bg-[#fff1ec] hover:bg-[#fdeae3] rounded-xl border border-[#d9c1c2]/40 cursor-pointer transition-all group"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-20 object-cover object-top rounded-lg bg-[#fdeae3]"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="font-sans text-[10px] font-bold text-[#775a19] uppercase tracking-wider block">
                      {product.subtitle}
                    </span>
                    <h4 className="font-serif text-base font-semibold text-[#3c0311] group-hover:text-[#581825] truncate">
                      {product.name}
                    </h4>
                    <p className="font-sans text-xs text-[#534344] truncate mt-0.5">
                      {product.craft} • {product.origin}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-sans text-sm font-bold text-[#231916] tabular-nums block">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <span className="inline-flex items-center gap-1 font-sans text-[10px] font-bold text-[#775a19] uppercase group-hover:translate-x-0.5 transition-transform mt-1">
                      View <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
