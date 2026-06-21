"use client";

import { ChevronLeft, ChevronRight, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Product data — watches with Unsplash images
const PRODUCTS = [
  { id: 1, name: "Chronos Elite", category: "Smart Watches", price: 199.99, oldPrice: 249.0, rating: 5, stock: 12, badge: "Trending", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop" },
  { id: 2, name: "Nova Sport Pro", category: "Smart Watches", price: 149.99, oldPrice: 189.0, rating: 4, stock: 8, badge: "Trending", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&auto=format&fit=crop" },
  { id: 3, name: "Apex Fitness Band", category: "Smart Watches", price: 89.99, oldPrice: 120.0, rating: 5, stock: 15, badge: "Trending", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&auto=format&fit=crop" },
  { id: 4, name: "Luxe Gold Watch", category: "Smart Watches", price: 299.99, oldPrice: 369.0, rating: 4, stock: 10, badge: "Trending", image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400&auto=format&fit=crop" },
  { id: 5, name: "Stealth Black Pro", category: "Smart Watches", price: 219.99, oldPrice: 270.0, rating: 5, stock: 6, badge: "Trending", image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&auto=format&fit=crop" },
  { id: 6, name: "Urban Classic", category: "Smart Watches", price: 179.99, oldPrice: 220.0, rating: 4, stock: 20, badge: "Trending", image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=400&auto=format&fit=crop" },
  { id: 7, name: "Pulse Tracker X", category: "Fitness Bands", price: 69.99, oldPrice: 90.0, rating: 5, stock: 18, badge: "Trending", image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&auto=format&fit=crop" },
  { id: 8, name: "FitBand Ultra", category: "Fitness Bands", price: 59.99, oldPrice: 79.0, rating: 4, stock: 9, badge: "Trending", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&auto=format&fit=crop" },
  { id: 9, name: "CardioMax Band", category: "Fitness Bands", price: 79.99, oldPrice: 99.0, rating: 5, stock: 14, badge: "Trending", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&auto=format&fit=crop" },
  { id: 10, name: "SlimFit Tracker", category: "Fitness Bands", price: 49.99, oldPrice: 65.0, rating: 4, stock: 22, badge: "Trending", image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&auto=format&fit=crop" },
  { id: 11, name: "Diamond Luxury", category: "Luxury Watches", price: 499.99, oldPrice: 599.0, rating: 5, stock: 5, badge: "Trending", image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400&auto=format&fit=crop" },
  { id: 12, name: "Gold Prestige", category: "Luxury Watches", price: 599.99, oldPrice: 720.0, rating: 4, stock: 3, badge: "Trending", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop" },
  { id: 13, name: "Platinum Series", category: "Luxury Watches", price: 799.99, oldPrice: 950.0, rating: 5, stock: 4, badge: "Trending", image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=400&auto=format&fit=crop" },
  { id: 14, name: "Elite Rose Gold", category: "Luxury Watches", price: 649.99, oldPrice: 780.0, rating: 5, stock: 6, badge: "Trending", image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&auto=format&fit=crop" },
  { id: 15, name: "Kids Dino Watch", category: "Kids Watches", price: 29.99, oldPrice: 39.0, rating: 5, stock: 25, badge: "Trending", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&auto=format&fit=crop" },
  { id: 16, name: "Kids Sport Band", category: "Kids Watches", price: 24.99, oldPrice: 34.0, rating: 4, stock: 30, badge: "Trending", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&auto=format&fit=crop" },
  { id: 17, name: "Kids Galaxy Watch", category: "Kids Watches", price: 34.99, oldPrice: 44.0, rating: 5, stock: 20, badge: "Trending", image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&auto=format&fit=crop" },
  { id: 18, name: "Kids Adventure", category: "Kids Watches", price: 39.99, oldPrice: 49.0, rating: 4, stock: 18, badge: "Trending", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop" },
];

// Category filter options
const CATEGORIES = [
  { label: "Smart Watches", emoji: "⌚" },
  { label: "Fitness Bands", emoji: "💪" },
  { label: "Luxury Watches", emoji: "💎" },
  { label: "Kids Watches", emoji: "🧒" },
];

const INITIAL_VISIBLE = 4;

export default function Products() {
  // Track active category filter
  const [activeCategory, setActiveCategory] = useState("Smart Watches");

  // Track how many products to show
  const [showAll, setShowAll] = useState(false);

  // Track wishlisted products
  const [wishlisted, setWishlisted] = useState<number[]>([]);

  // Toggle wishlist on/off for a product
  const toggleWishlist = (id: number) => {
    setWishlisted((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  // Filter products by active category
  const filtered = PRODUCTS.filter((p) => p.category === activeCategory);

  // Show only 4 initially, all when showAll is true
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);

  return (
    <section id="products" className="bg-[#0f172a] py-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header row */}
        <div className="flex items-start justify-between mb-6">
          <div>
            {/* Small label */}
            <p className="text-indigo-400 text-sm font-semibold flex items-center gap-1 mb-2">
              ✦ Our Specialty
            </p>
            {/* Main title */}
            <h2 className="text-4xl font-black text-white">Top Categories</h2>
          </div>

          {/* Arrow navigation buttons — indigo to match hero */}
          <div className="flex items-center gap-2 mt-2">
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-slate-700 hover:bg-indigo-500 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-indigo-500 hover:bg-indigo-600 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Category filter pills */}
        <div className="flex items-center gap-3 mb-10 flex-wrap">
          {CATEGORIES.map(({ label, emoji }) => (
            <button
              key={label}
              type="button"
              onClick={() => {
                setActiveCategory(label);
                setShowAll(false);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
                activeCategory === label
                  ? "bg-indigo-500 border-indigo-500 text-white"
                  : "bg-slate-800 border-slate-700 text-slate-400 hover:border-indigo-500 hover:text-indigo-400"
              }`}
            >
              <span>{emoji}</span>
              {label}
              <span className="text-xs opacity-60">· {PRODUCTS.filter(p => p.category === label).length} Products</span>
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visible.length > 0 ? (
            visible.map((product) => (
              <div
                key={product.id}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Product image area */}
                <div className="relative bg-slate-700/50 flex items-center justify-center h-48 overflow-hidden">

                  {/* Trending badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 z-10 bg-indigo-500 text-white text-xs font-semibold px-2 py-0.5 rounded-md">
                      {product.badge}
                    </span>
                  )}

                  {/* Wishlist heart button */}
                  <button
                    type="button"
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-slate-900/80 shadow flex items-center justify-center transition-colors"
                  >
                    <Heart
                      size={16}
                      className={
                        wishlisted.includes(product.id)
                          ? "fill-indigo-400 text-indigo-400"
                          : "text-slate-400"
                      }
                    />
                  </button>

                  {/* Unsplash product image */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product info */}
                <div className="p-4 flex flex-col gap-2">

                  {/* Category */}
                  <p className="text-slate-400 text-xs">{product.category}</p>

                  {/* Name */}
                  <h3 className="text-white font-bold text-sm">{product.name}</h3>

                  {/* Star rating */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={`${product.id}-star-${i}`}
                        className={i < product.rating ? "text-amber-400 text-xs" : "text-slate-600 text-xs"}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Stock */}
                  <p className="text-slate-500 text-xs">Stock: {product.stock} pieces</p>

                  {/* Price row */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      {/* Current price */}
                      <span className="text-white font-bold text-sm">${product.price.toFixed(2)}</span>
                      {/* Old price */}
                      <span className="text-slate-500 text-xs line-through">${product.oldPrice.toFixed(2)}</span>
                    </div>

                    {/* Add to cart button */}
                    <button
                      type="button"
                      className="flex items-center gap-1 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors duration-200"
                    >
                      <ShoppingCart size={12} />
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Empty state
            <div className="col-span-4 text-center py-16 text-slate-400">
              No products in this category yet.
            </div>
          )}
        </div>

        {/* View All Products button — links to /products page */}
        <div className="mt-12 flex justify-center">
          {filtered.length > INITIAL_VISIBLE && !showAll ? (
            // Show more products in the same page first
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200"
            >
              Show More
            </button>
          ) : (
            // Link to full products page
            <Link
              href="/products"
              className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200"
            >
              View All Products →
            </Link>
          )}
        </div>

      </div>
    </section>
  );
}