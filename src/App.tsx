/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PRODUCTS } from './data/products';
import { Product, CartItem, PlacedOrder } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandStatement } from './components/BrandStatement';
import { NewArrivals } from './components/NewArrivals';
import { EditorialSpotlight } from './components/EditorialSpotlight';
import { AboutPreview } from './components/AboutPreview';
import { Footer } from './components/Footer';
import { CollectionsView } from './components/CollectionsView';
import { AboutView } from './components/AboutView';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { BespokeModal } from './components/BespokeModal';

export default function App() {
  // Navigation State
  const [currentTab, setCurrentTab] = useState<'home' | 'collections' | 'about-us' | 'new-arrivals'>('home');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All');

  // Modals & Drawers State
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bespokeOpen, setBespokeOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  // Checkout Data State
  const [checkoutDiscount, setCheckoutDiscount] = useState(0);
  const [checkoutGiftWrap, setCheckoutGiftWrap] = useState(false);
  const [checkoutGiftMessage, setCheckoutGiftMessage] = useState<string | undefined>(undefined);

  // Cart State (Initialized with 1 item to match initial screenshot cart badge "1")
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[1], // Rose Gold Ethnic Dress
      size: 'M',
      quantity: 1,
      bespokeConsultation: true
    }
  ]);

  // Wishlist State (Initialized with 2 items to match initial screenshot wishlist badge "2")
  const [wishlistIds, setWishlistIds] = useState<Set<string>>(
    new Set([PRODUCTS[0].id, PRODUCTS[3].id])
  );

  // Wishlist Handlers
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      const next = new Set(prev);
      if (next.has(product.id)) {
        next.delete(product.id);
      } else {
        next.add(product.id);
      }
      return next;
    });
  };

  const handleRemoveFromWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      const next = new Set(prev);
      next.delete(product.id);
      return next;
    });
  };

  // Cart Handlers
  const handleAddToCart = (
    product: Product,
    size: string,
    bespokeConsultation: boolean,
    customMeasurements?: string
  ) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [
          ...prev,
          {
            product,
            size,
            quantity: 1,
            bespokeConsultation,
            customMeasurements
          }
        ];
      }
    });
  };

  const handleQuickAdd = (product: Product) => {
    handleAddToCart(product, product.availableSizes[1] || 'S', true);
    setCartOpen(true);
  };

  const handleUpdateCartQuantity = (index: number, quantity: number) => {
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = quantity;
      return updated;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleMoveWishlistToCart = (product: Product) => {
    handleAddToCart(product, product.availableSizes[1] || 'S', true);
    handleRemoveFromWishlist(product);
    setWishlistOpen(false);
    setCartOpen(true);
  };

  const handleProceedToCheckout = (
    appliedDiscount: number,
    giftWrap: boolean,
    giftMessage?: string
  ) => {
    setCheckoutDiscount(appliedDiscount);
    setCheckoutGiftWrap(giftWrap);
    setCheckoutGiftMessage(giftMessage);
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  const handleOrderComplete = (_order: PlacedOrder) => {
    setCartItems([]);
  };

  // Navigation Handlers
  const handleNavigate = (tab: 'home' | 'collections' | 'about-us' | 'new-arrivals') => {
    if (tab === 'new-arrivals') {
      if (currentTab === 'home') {
        const el = document.getElementById('new-arrivals');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      setCurrentTab('collections');
      setSelectedCategoryFilter('All');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectFooterCategory = (category: string) => {
    setSelectedCategoryFilter(category);
    setCurrentTab('collections');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const wishlistedProducts = PRODUCTS.filter((p) => wishlistIds.has(p.id));
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#fff8f6] font-sans text-[#231916] antialiased selection:bg-[#fed488] selection:text-[#785a1a]">
      {/* Fixed Header */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.size}
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenBespoke={() => setBespokeOpen(true)}
      />

      {/* Main Content Areas */}
      <main className="w-full pt-20">
        {currentTab === 'home' && (
          <div className="flex flex-col w-full">
            {/* 1. Full-Width Editorial Hero */}
            <Hero
              onExploreCollection={() => {
                setCurrentTab('collections');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onViewNewArrivals={() => {
                const el = document.getElementById('new-arrivals');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />

            {/* 2. Trust & Brand Statement */}
            <BrandStatement />

            {/* 3. New Arrivals (4-card grid matching screenshot) */}
            <NewArrivals
              products={PRODUCTS}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onViewProduct={(product) => setActiveProduct(product)}
              onQuickAdd={handleQuickAdd}
              onViewCatalogue={() => {
                setCurrentTab('collections');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 4. Featured Collection Showcase (Editorial Spotlight) */}
            <EditorialSpotlight
              onShopCollection={() => {
                setCurrentTab('collections');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 5. Origin & Soul (About Atelier Preview) */}
            <AboutPreview
              onLearnMore={() => {
                setCurrentTab('about-us');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {currentTab === 'collections' && (
          <CollectionsView
            products={PRODUCTS}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onViewProduct={(product) => setActiveProduct(product)}
            onQuickAdd={handleQuickAdd}
            onBackToHome={() => setCurrentTab('home')}
            initialCategory={selectedCategoryFilter}
          />
        )}

        {currentTab === 'about-us' && (
          <AboutView
            onBackToHome={() => setCurrentTab('home')}
            onExploreCollection={() => {
              setCurrentTab('collections');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenBespoke={() => setBespokeOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigateTab={handleNavigate}
        onOpenBespoke={() => setBespokeOpen(true)}
        onSelectCategory={handleSelectFooterCategory}
      />

      {/* Product Detail Modal (PDP) */}
      <ProductDetailModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        isWishlisted={activeProduct ? wishlistIds.has(activeProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={(prod, size, bespoke, custom) => {
          handleAddToCart(prod, size, bespoke, custom);
          setCartOpen(true);
        }}
      />

      {/* Shopping Bag Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={handleProceedToCheckout}
        onExploreCollections={() => {
          setCurrentTab('collections');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistProducts={wishlistedProducts}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onMoveToCart={handleMoveWishlistToCart}
        onExplore={() => {
          setCurrentTab('collections');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Live Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(product) => setActiveProduct(product)}
      />

      {/* Bespoke Fit & Master Tailor Consultation Modal */}
      <BespokeModal
        isOpen={bespokeOpen}
        onClose={() => setBespokeOpen(false)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cartItems={cartItems}
        discount={checkoutDiscount}
        giftWrap={checkoutGiftWrap}
        giftMessage={checkoutGiftMessage}
        onOrderComplete={handleOrderComplete}
      />
    </div>
  );
}
