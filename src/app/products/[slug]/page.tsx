"use client";

import {
  ArrowLeft,
  Check,
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "../../features/landing-page/components/productsdata";

export default function ProductSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  // Find the product that matches the slug from the URL
  const product = PRODUCTS.find((p) => p.slug === resolvedParams.slug);

  // Get up to 4 related products, prioritizing the same category
  const relatedProducts = product
    ? PRODUCTS.filter((p) => p.id !== product.id)
        .sort((a, b) => {
          const aMatch = a.category === product.category ? 1 : 0;
          const bMatch = b.category === product.category ? 1 : 0;
          return bMatch - aMatch;
        })
        .slice(0, 4)
    : [];

  // Track which image is currently shown as main
  const [activeImage, setActiveImage] = useState(0);

  // Track wishlist state
  const [wishlisted, setWishlisted] = useState(false);

  // Track quantity
  const [quantity, setQuantity] = useState(1);

  // Track add to cart success
  const [added, setAdded] = useState(false);

  // Handle add to cart click
  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Handle cycling through product images
  const handlePrevImage = () => {
    if (!product) return;
    setActiveImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1,
    );
  };

  const handleNextImage = () => {
    if (!product) return;
    setActiveImage((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1,
    );
  };

  // If product not found show 404 message
  if (!product) {
    return (
      <div className="min-h-screen bg-[#0a0d1a] flex flex-col items-center justify-center gap-4">
        <p className="text-white text-2xl font-bold">Product not found</p>
        <Link
          href="/products"
          className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0d1a] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Back button */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Products
        </Link>

        {/* Product detail grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT — Images */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="relative h-96 rounded-2xl overflow-hidden bg-slate-800 group">
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                className="object-cover"
              />

              {/* Left Arrow Button */}
              {product.images.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-indigo-500 text-white flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 z-10 hover:scale-105"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
              )}

              {/* Right Arrow Button */}
              {product.images.length > 1 && (
                <button
                  type="button"
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-indigo-500 text-white flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 z-10 hover:scale-105"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              )}

              {/* Badge — Shadcn Badge */}
              {product.badge && (
                <Badge className="absolute top-4 left-4 bg-indigo-500 hover:bg-indigo-500 text-white text-xs font-semibold z-10 border-0">
                  {product.badge}
                </Badge>
              )}
            </div>

            {/* Thumbnail images */}
            <div className="flex items-center gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`relative w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === i
                      ? "border-indigo-500"
                      : "border-slate-700 hover:border-slate-500"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — Product info */}
          <div className="flex flex-col gap-6">
            {/* Category */}
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
              {product.category}
            </p>

            {/* Product name */}
            <h1 className="text-4xl font-black text-white leading-tight">
              {product.name}
            </h1>

            {/* Rating row */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((starNum) => (
                  <Star
                    key={starNum}
                    size={16}
                    className={
                      starNum <= product.rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-slate-600"
                    }
                  />
                ))}
              </div>
              <span className="text-slate-400 text-sm">
                {product.rating}.0 · {product.reviews.length} reviews
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-white font-black text-4xl">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-slate-500 text-xl line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
              {/* Savings badge — Shadcn Badge */}
              <Badge className="bg-green-500/20 text-green-400 text-sm font-semibold border-0 hover:bg-green-500/20">
                Save ${(product.oldPrice - product.price).toFixed(2)}
              </Badge>
            </div>

            {/* Description */}
            <p className="text-slate-400 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <Check size={14} className="text-indigo-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stock */}
            <p className="text-slate-500 text-sm">
              {product.stock > 10 ? (
                <span className="text-green-400">
                  ✓ In stock ({product.stock} available)
                </span>
              ) : (
                <span className="text-amber-400">
                  ⚠ Only {product.stock} left in stock
                </span>
              )}
            </p>

            {/* Quantity selector */}
            <div className="flex items-center gap-4">
              <p className="text-slate-400 text-sm">Quantity:</p>
              <div className="flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2">
                {/* Decrease */}
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="text-slate-400 hover:text-white transition-colors text-lg font-bold"
                >
                  −
                </button>
                <span className="text-white font-semibold w-6 text-center">
                  {quantity}
                </span>
                {/* Increase */}
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((q) => Math.min(product.stock, q + 1))
                  }
                  className="text-slate-400 hover:text-white transition-colors text-lg font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action buttons — Shadcn Button */}
            <div className="flex items-center gap-4">
              {/* Add to cart — Reference: https://ui.shadcn.com/docs/components/button */}
              <Button
                type="button"
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 font-semibold h-14 rounded-xl transition-all duration-200 border-0 ${
                  added
                    ? "bg-green-500 hover:bg-green-500 text-white"
                    : "bg-indigo-500 hover:bg-indigo-600 text-white"
                }`}
              >
                {added ? (
                  <>
                    <Check size={18} />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart size={18} />
                    Add to Cart
                  </>
                )}
              </Button>

              {/* Wishlist button */}
              <Button
                type="button"
                variant="outline"
                size="icon-lg"
                onClick={() => setWishlisted((w) => !w)}
                className="w-14 h-14 rounded-xl border-slate-700 hover:border-indigo-500 bg-transparent"
              >
                <Heart
                  size={20}
                  className={
                    wishlisted
                      ? "fill-indigo-400 text-indigo-400"
                      : "text-slate-400"
                  }
                />
              </Button>
            </div>
          </div>
        </div>

        {/* Reviews section */}
        <div className="mt-20">
          <h2 className="text-2xl font-black text-white mb-8">
            Customer Reviews
            <span className="text-indigo-400 ml-2">
              ({product.reviews.length})
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.reviews.map((review) => (
              <div
                key={review.name}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 flex flex-col gap-3"
              >
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((starNum) => (
                    <Star
                      key={starNum}
                      size={14}
                      className={
                        starNum <= review.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-slate-600"
                      }
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  "{review.comment}"
                </p>

                {/* Reviewer name */}
                <p className="text-indigo-400 text-sm font-semibold">
                  — {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products section */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 border-t border-white/10 pt-16">
            <h2 className="text-2xl font-black text-white mb-8">
              Related Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 group hover:-translate-y-1"
                >
                  {/* Image area */}
                  <div className="relative bg-slate-700/50 flex items-center justify-center h-48 overflow-hidden">
                    {p.badge && (
                      <span className="absolute top-3 left-3 z-10 bg-indigo-500 text-white text-xs font-semibold px-2 py-0.5 rounded-md">
                        {p.badge}
                      </span>
                    )}
                    <Image
                      src={p.images[0]}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Info area */}
                  <div className="p-4 flex flex-col gap-2">
                    <p className="text-slate-400 text-xs">{p.category}</p>
                    <h3 className="text-white font-bold text-sm">{p.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-white font-bold text-sm">
                        ${p.price.toFixed(2)}
                      </span>
                      <span className="text-slate-500 text-xs line-through">
                        ${p.oldPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
