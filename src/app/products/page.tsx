"use client";

import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PRODUCTS } from "../features/landing-page/components/productsdata";

// Category filter options
const CATEGORIES = [
  { label: "All", emoji: "🔍" },
  { label: "Smart Watches", emoji: "⌚" },
  { label: "Fitness Bands", emoji: "💪" },
  { label: "Luxury Watches", emoji: "💎" },
  { label: "Kids Watches", emoji: "🧒" },
];

export default function ProductsPage() {
  // Track active category filter
  const [activeCategory, setActiveCategory] = useState("All");

  // Track search query
  const [searchQuery, setSearchQuery] = useState("");

  // Track wishlisted products
  const [wishlisted, setWishlisted] = useState<number[]>([]);

  // Toggle wishlist on/off for a product
  const toggleWishlist = (id: number, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to detail page
    e.stopPropagation();
    setWishlisted((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  // Filter products by active category & search query
  const filtered = PRODUCTS.filter((p) => {
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#0a0d1a] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
          <div>
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">
              ✦ Catalog
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white">
              Our Products
            </h1>
            <p className="text-slate-400 mt-2 max-w-xl">
              Explore our premium smart watches and fitness trackers designed to
              complement your lifestyle and fitness goals.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-80">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 focus:border-indigo-500 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
            />
          </div>
        </div>

        {/* Category filter pills */}
        <div className="flex items-center gap-3 mb-10 flex-wrap">
          {CATEGORIES.map(({ label, emoji }) => (
            <button
              key={label}
              type="button"
              onClick={() => setActiveCategory(label)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
                activeCategory === label
                  ? "bg-indigo-500 border-indigo-500 text-white"
                  : "bg-slate-800 border-slate-700 text-slate-400 hover:border-indigo-500 hover:text-indigo-400"
              }`}
            >
              <span>{emoji}</span>
              {label}
              <span className="text-xs opacity-60">
                ·{" "}
                {label === "All"
                  ? PRODUCTS.length
                  : PRODUCTS.filter((p) => p.category === label).length}
              </span>
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
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
                    onClick={(e) => toggleWishlist(product.id, e)}
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
                    src={product.images[0]}
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
                  <h3 className="text-white font-bold text-sm">
                    {product.name}
                  </h3>

                  {/* Star rating */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={`${product.id}-star-${i}`}
                        className={
                          i < product.rating
                            ? "text-amber-400 text-xs"
                            : "text-slate-600 text-xs"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Stock */}
                  <p className="text-slate-500 text-xs">
                    Stock: {product.stock} pieces
                  </p>

                  {/* Price row */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      {/* Current price */}
                      <span className="text-white font-bold text-sm">
                        ${product.price.toFixed(2)}
                      </span>
                      {/* Old price */}
                      <span className="text-slate-500 text-xs line-through">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    </div>

                    {/* Add to cart button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      className="flex items-center gap-1 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors duration-200"
                    >
                      <ShoppingCart size={12} />
                      Add
                    </button>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            // Empty state
            <div className="col-span-4 text-center py-16 text-slate-400">
              No products found matching your search.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
