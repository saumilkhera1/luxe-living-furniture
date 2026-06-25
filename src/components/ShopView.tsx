/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Filter, ChevronDown, Check, X, SlidersHorizontal, Eye } from "lucide-react";
import { Product, ViewType, FilterState } from "../types";
import { PRODUCTS } from "../data";

interface ShopViewProps {
  setView: (view: ViewType) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  setSelectedProductById: (id: string) => void;
  wishlistIds: string[];
  toggleWishlist: (id: string) => void;
}

export default function ShopView({
  setView,
  selectedCategory,
  setSelectedCategory,
  setSelectedProductById,
  wishlistIds,
  toggleWishlist
}: ShopViewProps) {
  // Advanced filters state
  const [filters, setFilters] = useState<FilterState>({
    size: "All",
    color: "All",
    fabric: "All"
  });

  // Active filter overlay toggle
  const [activeFilterDropdown, setActiveFilterDropdown] = useState<"size" | "color" | "fabric" | null>(null);

  // Category list
  const categoryOptions = ["All", "Dresses", "Outerwear", "Accessories", "Footwear", "Tailoring"];

  // Unique options extracted from data
  const sizeOptions = ["All", "XS", "S", "M", "L"];
  const colorOptions = ["All", "Monochrome", "Beige"];
  const fabricOptions = ["All", "Silk", "Wool", "Cotton", "Canvas", "Leather"];

  // Filter products based on selected parameters
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== "All" && product.category !== selectedCategory) {
        return false;
      }
      // Size filter
      if (filters.size !== "All" && !product.sizes.includes(filters.size)) {
        return false;
      }
      // Color filter
      if (filters.color !== "All" && !product.colors.includes(filters.color)) {
        return false;
      }
      // Fabric filter
      if (filters.fabric !== "All" && !product.fabrics.includes(filters.fabric)) {
        return false;
      }
      return true;
    });
  }, [selectedCategory, filters]);

  // Reset all filters
  const handleResetFilters = () => {
    setFilters({ size: "All", color: "All", fabric: "All" });
    setSelectedCategory("All");
  };

  // Layout configurations for asymmetrical grid (maps index inside grid to Tailwind classes)
  const getLayoutClasses = (index: number) => {
    const layoutPatterns = [
      { colSpan: "md:col-span-7", aspect: "aspect-[4/5]", marginTop: "md:mt-0" },
      { colSpan: "md:col-span-5", aspect: "aspect-square", marginTop: "md:mt-24" },
      { colSpan: "md:col-span-4", aspect: "aspect-[2/3]", marginTop: "md:mt-0" },
      { colSpan: "md:col-span-8", aspect: "aspect-[16/9]", marginTop: "md:mt-12" },
      { colSpan: "md:col-span-5", aspect: "aspect-square", marginTop: "md:mt-0" },
      { colSpan: "md:col-span-7", aspect: "aspect-[4/3]", marginTop: "md:mt-0" }
    ];
    return layoutPatterns[index % layoutPatterns.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-20 pb-44 max-w-7xl mx-auto px-6"
    >
      {/* Editorial Header */}
      <section className="mb-12 border-b border-black/5 pb-8">
        <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-2 font-medium">
          Collection 004 / L'Essence
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="font-headline text-4xl md:text-6xl max-w-2xl leading-tight font-light">
            Quiet Elegance <br className="hidden md:block" /> in Monochrome.
          </h2>
          <p className="font-sans text-xs text-neutral-500 font-light max-w-xs">
            A celebration of high-end draping, raw structural fibers, and curated silhouettes from Lake Como to Tokyo.
          </p>
        </div>
      </section>

      {/* Pill Category Selection */}
      <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-10 pb-2 border-b border-black/5">
        {categoryOptions.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 text-xs tracking-widest uppercase rounded-none transition-all focus:outline-none whitespace-nowrap ${
              selectedCategory === cat
                ? "bg-black text-white font-medium"
                : "bg-neutral-100 hover:bg-neutral-200 text-neutral-600"
            }`}
            id={`tab-category-${cat.toLowerCase()}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Dynamic Products Counter and Clean Slate indicator */}
      <div className="flex items-center justify-between mb-8">
        <span className="font-sans text-xs uppercase tracking-widest text-neutral-400 font-medium">
          {filteredProducts.length} {filteredProducts.length === 1 ? "Item" : "Items"} Found
        </span>
        {(filters.size !== "All" || filters.color !== "All" || filters.fabric !== "All" || selectedCategory !== "All") && (
          <button
            onClick={handleResetFilters}
            className="font-sans text-xs uppercase tracking-widest text-black underline underline-offset-4 font-semibold flex items-center gap-1.5 focus:outline-none hover:opacity-60 transition-opacity"
            id="btn-clear-all-filters"
          >
            <X className="w-3.5 h-3.5" />
            Clear Filters
          </button>
        )}
      </div>

      {/* Asymmetrical Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-20 md:gap-x-12">
          {filteredProducts.map((product, idx) => {
            const layout = getLayoutClasses(idx);
            const isFavorite = wishlistIds.includes(product.id);

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (idx % 3) * 0.1, duration: 0.6 }}
                className={`${layout.colSpan} ${layout.marginTop} group flex flex-col justify-between`}
                id={`product-card-${product.id}`}
              >
                <div>
                  {/* Image container */}
                  <div className="relative bg-neutral-100 overflow-hidden cursor-pointer">
                    <div 
                      onClick={() => {
                        setSelectedProductById(product.id);
                        setView("product-detail");
                      }}
                      className="w-full h-full"
                    >
                      <img
                        alt={product.title}
                        className={`w-full ${layout.aspect} object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0`}
                        src={product.image}
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Interactive buttons */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-md rounded-none shadow-sm hover:scale-110 active:scale-95 transition-all focus:outline-none border border-black/5"
                      aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
                      id={`btn-wishlist-toggle-${product.id}`}
                    >
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          isFavorite ? "fill-black text-black" : "text-black/60 hover:text-black"
                        }`}
                      />
                    </button>

                    {/* View Details hover helper for screen readers / touch users */}
                    <button
                      onClick={() => {
                        setSelectedProductById(product.id);
                        setView("product-detail");
                      }}
                      className="absolute bottom-4 left-4 right-4 bg-black/95 text-white text-[10px] tracking-widest font-sans uppercase py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none flex items-center justify-center gap-2"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View Details
                    </button>
                  </div>

                  {/* Info block */}
                  <div className="mt-6 flex justify-between items-start">
                    <div>
                      <h3 
                        onClick={() => {
                          setSelectedProductById(product.id);
                          setView("product-detail");
                        }}
                        className="font-headline text-xl font-light cursor-pointer group-hover:opacity-70 transition-opacity"
                      >
                        {product.title}
                      </h3>
                      <p className="font-sans text-[10px] uppercase tracking-widest text-neutral-400 mt-1">
                        {product.material}
                      </p>
                    </div>
                    <span className="font-sans text-sm font-medium text-neutral-800">
                      ${product.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="py-24 text-center bg-neutral-50 border border-neutral-200/50 mt-12">
          <p className="font-headline text-2xl italic text-neutral-400">No items match your curation.</p>
          <button
            onClick={handleResetFilters}
            className="mt-4 bg-black text-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-neutral-800 focus:outline-none"
          >
            Clear Selected Filters
          </button>
        </div>
      )}

      {/* Discover More pagination loader simulation */}
      <div className="mt-36 flex flex-col items-center">
        <button 
          onClick={() => {
            // Simulated collection expansions
            alert("This boutique is fully updated with the entire Collection 004 / L'Essence catalogs.");
          }}
          className="px-12 py-5 bg-black hover:bg-neutral-800 text-white font-sans text-xs uppercase tracking-[0.3em] font-medium transition-colors focus:outline-none"
          id="btn-discover-more-catalog"
        >
          Discover More
        </button>
      </div>

      {/* Sleek Dynamic Sticky Filter Menu */}
      <div className="fixed bottom-20 left-0 w-full z-40 bg-white/95 backdrop-blur-md border-t border-black/10 px-6 py-4 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-black/60" />
              <span className="font-sans text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Filters:</span>
            </div>

            {/* Size Dropdown Toggle */}
            <div className="relative">
              <button
                onClick={() => setActiveFilterDropdown(activeFilterDropdown === "size" ? null : "size")}
                className="font-sans text-xs font-semibold hover:text-neutral-500 flex items-center gap-1 uppercase tracking-wider focus:outline-none"
                id="filter-size-dropdown-btn"
              >
                <span className="text-[10px] text-neutral-400 font-medium">Size:</span>
                <span>{filters.size}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {activeFilterDropdown === "size" && (
                <div className="absolute bottom-full mb-2 left-0 bg-white border border-neutral-200 shadow-xl p-2 z-50 min-w-[120px] rounded-none">
                  {sizeOptions.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => {
                        setFilters({ ...filters, size: sz });
                        setActiveFilterDropdown(null);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs uppercase tracking-wider hover:bg-neutral-100 flex items-center justify-between"
                    >
                      <span>{sz}</span>
                      {filters.size === sz && <Check className="w-3 h-3 text-black" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Color Dropdown Toggle */}
            <div className="relative">
              <button
                onClick={() => setActiveFilterDropdown(activeFilterDropdown === "color" ? null : "color")}
                className="font-sans text-xs font-semibold hover:text-neutral-500 flex items-center gap-1 uppercase tracking-wider focus:outline-none"
                id="filter-color-dropdown-btn"
              >
                <span className="text-[10px] text-neutral-400 font-medium">Color:</span>
                <span className="flex items-center gap-1.5">
                  {filters.color === "Monochrome" && <span className="w-2.5 h-2.5 bg-black border border-black/15 inline-block" />}
                  {filters.color === "Beige" && <span className="w-2.5 h-2.5 bg-[#dfd7ca] border border-black/15 inline-block" />}
                  {filters.color}
                </span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {activeFilterDropdown === "color" && (
                <div className="absolute bottom-full mb-2 left-0 bg-white border border-neutral-200 shadow-xl p-2 z-50 min-w-[140px] rounded-none">
                  {colorOptions.map((cl) => (
                    <button
                      key={cl}
                      onClick={() => {
                        setFilters({ ...filters, color: cl });
                        setActiveFilterDropdown(null);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs uppercase tracking-wider hover:bg-neutral-100 flex items-center justify-between"
                    >
                      <span className="flex items-center gap-1.5">
                        {cl === "Monochrome" && <span className="w-2.5 h-2.5 bg-black border border-black/15 inline-block" />}
                        {cl === "Beige" && <span className="w-2.5 h-2.5 bg-[#dfd7ca] border border-black/15 inline-block" />}
                        {cl}
                      </span>
                      {filters.color === cl && <Check className="w-3 h-3 text-black" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Fabric Dropdown Toggle */}
            <div className="relative">
              <button
                onClick={() => setActiveFilterDropdown(activeFilterDropdown === "fabric" ? null : "fabric")}
                className="font-sans text-xs font-semibold hover:text-neutral-500 flex items-center gap-1 uppercase tracking-wider focus:outline-none"
                id="filter-fabric-dropdown-btn"
              >
                <span className="text-[10px] text-neutral-400 font-medium">Fabric:</span>
                <span>{filters.fabric}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {activeFilterDropdown === "fabric" && (
                <div className="absolute bottom-full mb-2 left-0 bg-white border border-neutral-200 shadow-xl p-2 z-50 min-w-[140px] rounded-none">
                  {fabricOptions.map((fb) => (
                    <button
                      key={fb}
                      onClick={() => {
                        setFilters({ ...filters, fabric: fb });
                        setActiveFilterDropdown(null);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs uppercase tracking-wider hover:bg-neutral-100 flex items-center justify-between"
                    >
                      <span>{fb}</span>
                      {filters.fabric === fb && <Check className="w-3 h-3 text-black" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:block">
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-semibold">
              {filteredProducts.length} Items Found Under This Curation
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
