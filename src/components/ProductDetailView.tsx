/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, ChevronDown, ChevronUp, Check, ShieldAlert, Sparkles, AlertCircle } from "lucide-react";
import { Product, ViewType } from "../types";
import { PRODUCTS } from "../data";

interface ProductDetailViewProps {
  setView: (view: ViewType) => void;
  product: Product;
  setSelectedProductById: (id: string) => void;
  wishlistIds: string[];
  toggleWishlist: (id: string) => void;
  addToCart: (product: Product, size: string) => void;
}

export default function ProductDetailView({
  setView,
  product,
  setSelectedProductById,
  wishlistIds,
  toggleWishlist,
  addToCart
}: ProductDetailViewProps) {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || "S");
  const [isSustainabilityOpen, setIsSustainabilityOpen] = useState(false);
  const [isCareInstructionsOpen, setIsCareInstructionsOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [justAddedToBag, setJustAddedToBag] = useState(false);

  const isFavorite = wishlistIds.includes(product.id);

  // Recommendations: products that are NOT the current one, capped at 3
  const recommendations = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  const handleAddToBag = () => {
    addToCart(product, selectedSize);
    setJustAddedToBag(true);
    setTimeout(() => {
      setJustAddedToBag(false);
    }, 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-24 pb-36 max-w-7xl mx-auto px-6"
    >
      {/* Toast alert when added to bag */}
      <AnimatePresence>
        {justAddedToBag && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-black text-white px-6 py-4 flex items-center gap-3 shadow-2xl border border-white/10"
          >
            <Check className="w-4 h-4 text-white" />
            <span className="font-sans text-xs uppercase tracking-widest font-semibold">
              Added to Bag: {product.title} ({selectedSize})
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Editorial Layout: Product Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16">
        
        {/* Product Gallery: Asymmetric Grid */}
        <div className="lg:col-span-7 space-y-12">
          {/* Main Full Shot */}
          <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              src={product.image}
              alt={`${product.title} main view`}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Asymmetrical gallery side details if product has multiple images, otherwise mock fabric views */}
          <div className="grid grid-cols-2 gap-8">
            <div className="aspect-[4/5] overflow-hidden bg-neutral-100">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src={product.images?.[1] || "https://lh3.googleusercontent.com/aida-public/AB6AXuBpkKP_ZyaC5JOQMv4yCwUSrEzhHCgMG37K30xI8JFAPwYTZD2xxmiLgWlWWrF-NnTx5U9a7eHZz3iGmYO5oO5HnaPUusIXeMD9YaJIfRfvbvzOPzpkiPaoLCYmdsQMpu_oCd_hATlq-NJRg-8PI6-Zhn2eHWo0tXc-hC8Zp4odTW9BEY8RbcH8Rb_VCM0XGctYPk2TLprbi3sa6AWOOCaVa2kXe92kAjtuMyB02Qmgh54vj-Z3D5a6i-a_Fdx4_VCryQ4qeTwqPfM"}
                alt={`${product.title} texture view`}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden bg-neutral-100 mt-12">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src={product.images?.[2] || "https://lh3.googleusercontent.com/aida-public/AB6AXuDxYlaab3avIwOron6RYsQWyEAQGr6S6m1kFgCw1S2P0PMrPybqeHOa-EnB2WfuZ8AWVax5-XUxx8eVrwMCF9jxlOtuJAm-Bm31FpnR_oXSvxTTfydUKPhAJy6oWql9z2rU1lm3OD-m1ZxTB5g6k3o6tp6A9tagt_Fg4cm-C9iOplDZjyS9KjK8nuUmKIYnyij84f3eua00d1twlHUsUPqOvpibFIIGpkLMDylWIYf8hBjbrRE-2BYxUnbMTTc6AY3rcT-t5XCVkWk"}
                alt={`${product.title} back detail`}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Wide Landscape Context Shot */}
          <div className="aspect-[16/9] overflow-hidden bg-neutral-100">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              src={product.images?.[3] || product.hoverImage || product.image}
              alt={`${product.title} lifestyle view`}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Product Information Sticky Panel */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start flex flex-col space-y-10">
          <div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-sans text-xs tracking-[0.25em] text-neutral-400 uppercase font-medium">
                {product.collection}
              </p>
              <button
                onClick={() => toggleWishlist(product.id)}
                className="text-black hover:text-red-500 hover:scale-105 active:scale-95 transition-all focus:outline-none"
                aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
                id="details-favorite-toggle-btn"
              >
                <Heart className={`w-5 h-5 stroke-[1.25] ${isFavorite ? "fill-black text-black" : "text-black/60"}`} />
              </button>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl mb-6 font-light leading-[1.15] text-black">
              {product.title}
            </h2>
            <p className="font-sans text-xl tracking-tight text-neutral-800 font-light">
              ${product.price.toLocaleString()}.00
            </p>
          </div>

          <div className="space-y-6">
            <p className="font-sans text-sm leading-relaxed text-neutral-600 font-light max-w-md">
              {product.description}
            </p>

            <div className="pt-4 flex flex-col">
              <div className="flex justify-between items-center py-4 border-b border-black/5">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-medium">Material</span>
                <span className="font-headline text-sm italic text-black/80">{product.material}</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-black/5">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-medium">Origin</span>
                <span className="font-sans text-xs tracking-wider text-black/80 uppercase font-semibold">{product.origin}</span>
              </div>
            </div>
          </div>

          {/* Size Selector */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold">Select Size</label>
              <button
                onClick={() => setIsSizeGuideOpen(true)}
                className="font-sans text-[10px] underline underline-offset-4 uppercase tracking-[0.15em] text-neutral-400 hover:text-black transition-colors focus:outline-none"
                id="size-guide-btn"
              >
                Size Guide
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`py-4 text-xs tracking-widest font-sans transition-all focus:outline-none ${
                    selectedSize === sz
                      ? "bg-black text-white font-semibold border border-black"
                      : "bg-white text-black border border-neutral-200 hover:border-black/40"
                  }`}
                  id={`size-btn-${sz.toLowerCase()}`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Bag Action Button */}
          <div className="flex flex-col space-y-3">
            <button
              onClick={handleAddToBag}
              className="w-full bg-black text-white hover:bg-neutral-800 py-6 px-8 font-sans text-xs uppercase tracking-[0.25em] transition-colors focus:outline-none font-semibold shadow-md active:scale-98"
              id="btn-add-to-bag"
            >
              Add to Bag
            </button>
            <p className="text-center font-sans text-[9px] text-neutral-400 tracking-widest uppercase font-medium pt-1">
              Free express shipping on all curated orders.
            </p>
          </div>

          {/* Collapsible Info Accents */}
          <div className="pt-6 space-y-4 border-t border-black/5">
            <details 
              open={isSustainabilityOpen}
              onToggle={(e) => setIsSustainabilityOpen((e.target as HTMLDetailsElement).open)}
              className="group cursor-pointer select-none"
              id="details-sustainability"
            >
              <summary className="list-none flex justify-between items-center py-3 text-black">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">Sustainability</span>
                {isSustainabilityOpen ? <ChevronUp className="w-4 h-4 text-black/60" /> : <ChevronDown className="w-4 h-4 text-black/60" />}
              </summary>
              <div className="pb-4 font-sans text-xs text-neutral-500 leading-relaxed font-light">
                {product.sustainability || "OEKO-TEX® certified fabrics and local artisanal craftsmanship, ensuring a reduced environmental footprint and high social standard."}
              </div>
            </details>

            <details 
              open={isCareInstructionsOpen}
              onToggle={(e) => setIsCareInstructionsOpen((e.target as HTMLDetailsElement).open)}
              className="group cursor-pointer select-none"
              id="details-care"
            >
              <summary className="list-none flex justify-between items-center py-3 text-black border-t border-black/5">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">Care Instructions</span>
                {isCareInstructionsOpen ? <ChevronUp className="w-4 h-4 text-black/60" /> : <ChevronDown className="w-4 h-4 text-black/60" />}
              </summary>
              <div className="pb-4 font-sans text-xs text-neutral-500 leading-relaxed font-light">
                {product.careInstructions || "Dry clean only. Hang on tailored padded hangers to prevent shape distortion."}
              </div>
            </details>
          </div>

        </div>
      </div>

      {/* Recommended Items Section */}
      <section className="mt-40 border-t border-black/5 pt-20">
        <h3 className="font-headline text-3xl mb-16 text-center font-light tracking-wide text-black">Complete the Look</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {recommendations.map((rec, idx) => (
            <motion.div
              key={rec.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              onClick={() => {
                setSelectedProductById(rec.id);
                setSelectedSize(rec.sizes[0] || "S");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="space-y-4 group cursor-pointer"
              id={`rec-item-${rec.id}`}
            >
              <div className="aspect-[3/4] overflow-hidden bg-neutral-100">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-1000 group-hover:scale-103"
                  src={rec.image}
                  alt={rec.title}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-sans text-[11px] uppercase tracking-widest text-neutral-400 font-bold group-hover:text-black transition-colors">
                  {rec.title}
                </h4>
                <p className="font-sans text-sm font-medium text-neutral-800">
                  ${rec.price.toLocaleString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Size Guide Modal Overlay */}
      {isSizeGuideOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsSizeGuideOpen(false)} />
          <div className="bg-white max-w-md w-full p-8 relative z-10 shadow-2xl border border-black/5">
            <h4 className="font-headline text-2xl font-light mb-6">Size Curation</h4>
            <div className="space-y-4 text-xs font-sans text-neutral-600 leading-relaxed mb-8">
              <p>All items follow architectural draping rules and run true to measurement fits:</p>
              <table className="w-full text-left border-collapse mt-4">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="pb-2 font-semibold">SIZE</th>
                    <th className="pb-2 font-semibold">BUST (CM)</th>
                    <th className="pb-2 font-semibold">WAIST (CM)</th>
                    <th className="pb-2 font-semibold">HIP (CM)</th>
                  </tr>
                </thead>
                <tbody className="font-mono">
                  <tr className="border-b border-black/5">
                    <td className="py-2 font-sans font-bold">XS</td>
                    <td className="py-2">80 - 84</td>
                    <td className="py-2">60 - 64</td>
                    <td className="py-2">86 - 90</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-2 font-sans font-bold">S</td>
                    <td className="py-2">84 - 88</td>
                    <td className="py-2">64 - 68</td>
                    <td className="py-2">90 - 94</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-2 font-sans font-bold">M</td>
                    <td className="py-2">88 - 92</td>
                    <td className="py-2">68 - 72</td>
                    <td className="py-2">94 - 98</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-sans font-bold">L</td>
                    <td className="py-2">92 - 96</td>
                    <td className="py-2">72 - 76</td>
                    <td className="py-2">98 - 102</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 italic">Note: Silk items are bias-cut and feature structural drapes that accommodate flexible silhouettes easily.</p>
            </div>
            <button
              onClick={() => setIsSizeGuideOpen(false)}
              className="w-full bg-black text-white py-4 font-sans text-xs uppercase tracking-widest font-semibold focus:outline-none"
              id="close-size-guide-modal"
            >
              Close Guide
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
