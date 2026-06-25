/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, ShoppingBag, Heart, Trash2 } from "lucide-react";
import { Product, ViewType } from "../types";
import { PRODUCTS } from "../data";

interface WishlistViewProps {
  setView: (view: ViewType) => void;
  setSelectedProductById: (id: string) => void;
  wishlistIds: string[];
  toggleWishlist: (id: string) => void;
  addToCart: (product: Product, size: string) => void;
}

export default function WishlistView({
  setView,
  setSelectedProductById,
  wishlistIds,
  toggleWishlist,
  addToCart
}: WishlistViewProps) {
  const [movingProductId, setMovingProductId] = useState<string | null>(null);

  // Retrieve products currently inside the wishlist
  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  // Visual layout configurations mirroring the exact asymmetrical patterns of Screen 4
  const getWishlistLayout = (index: number) => {
    const patterns = [
      { colClass: "md:col-span-7", aspectClass: "aspect-square", mtClass: "" },
      { colClass: "md:col-start-9 md:col-span-4", aspectClass: "aspect-square", mtClass: "md:mt-12" },
      { colClass: "md:col-span-5", aspectClass: "aspect-[4/5]", mtClass: "md:-mt-32" },
      { colClass: "md:col-start-7 md:col-span-6", aspectClass: "aspect-square", mtClass: "md:mt-8" }
    ];
    return patterns[index % patterns.length];
  };

  const handleMoveToBag = (product: Product) => {
    setMovingProductId(product.id);
    addToCart(product, "S"); // Default size selection for quick move
    setTimeout(() => {
      toggleWishlist(product.id); // Removes from wishlist once added
      setMovingProductId(null);
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-24 pb-40 px-6 max-w-7xl mx-auto"
    >
      {/* Header Section */}
      <header className="mb-16">
        <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-2 font-medium">
          Curated Selection
        </p>
        <h2 className="font-headline text-4xl md:text-6xl italic font-light leading-tight">
          Wishlist
        </h2>
      </header>

      {/* Wishlist Grid: Asymmetric Magazine Layout */}
      {wishlistProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12">
          <AnimatePresence>
            {wishlistProducts.map((product, idx) => {
              const layout = getWishlistLayout(idx);
              const isMoving = movingProductId === product.id;

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className={`${layout.colClass} ${layout.mtClass} group flex flex-col justify-between`}
                  id={`wishlist-card-${product.id}`}
                >
                  <div>
                    {/* Media container */}
                    <div className="relative overflow-hidden bg-neutral-100 mb-6 aspect-square">
                      <div 
                        onClick={() => {
                          setSelectedProductById(product.id);
                          setView("product-detail");
                        }}
                        className="w-full h-full cursor-pointer"
                      >
                        <img
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-103"
                          src={product.image}
                          alt={product.title}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      
                      {/* Delete action */}
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-none text-black/60 hover:text-black hover:scale-105 active:scale-95 transition-all focus:outline-none border border-black/5"
                        aria-label="Remove from Wishlist"
                        id={`btn-wishlist-remove-${product.id}`}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Meta info with Move to Bag Actions */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                      <div className="space-y-1">
                        <h3 
                          onClick={() => {
                            setSelectedProductById(product.id);
                            setView("product-detail");
                          }}
                          className="font-headline text-2xl font-light cursor-pointer hover:opacity-70 transition-opacity"
                        >
                          {product.title}
                        </h3>
                        <p className="font-sans text-xs uppercase tracking-widest text-neutral-400">
                          {product.collection}
                        </p>
                        <p className="text-lg font-light text-neutral-800 mt-2">
                          ${product.price.toLocaleString()}.00
                        </p>
                      </div>

                      <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 sm:gap-4">
                        <button
                          onClick={() => handleMoveToBag(product)}
                          disabled={isMoving}
                          className="bg-black hover:bg-neutral-800 text-white disabled:bg-neutral-300 px-6 py-3.5 font-sans text-xs uppercase tracking-widest font-semibold transition-colors focus:outline-none flex items-center gap-2"
                          id={`btn-wishlist-move-${product.id}`}
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          {isMoving ? "Moving..." : "Move to Bag"}
                        </button>
                        
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="text-neutral-400 hover:text-black font-sans text-[10px] uppercase tracking-widest font-bold pb-1 border-b border-transparent hover:border-black transition-all focus:outline-none"
                          id={`btn-wishlist-text-remove-${product.id}`}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      ) : (
        <div className="py-24 text-center max-w-lg mx-auto bg-neutral-50 border border-neutral-150">
          <Heart className="w-10 h-10 stroke-[1] mx-auto text-neutral-300 mb-4" />
          <p className="font-headline text-xl italic text-neutral-500 font-light">
            Your curated wishlist is empty.
          </p>
          <p className="text-xs text-neutral-400 mt-2 font-sans uppercase tracking-widest">
            Browse our winter anthology and save favorites.
          </p>
          <button
            onClick={() => setView("shop")}
            className="mt-6 bg-black text-white px-8 py-4 text-xs tracking-widest uppercase hover:bg-neutral-800 focus:outline-none font-semibold"
          >
            Explore Catalog
          </button>
        </div>
      )}

      {/* Pagination progress footer context */}
      <div className="mt-40 border-t border-black/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-neutral-400 font-medium">
          Viewing {wishlistProducts.length} of {wishlistProducts.length} saved items
        </p>
        <button 
          onClick={() => alert("All saved lookbook items are loaded.")}
          className="font-sans text-xs uppercase tracking-widest py-2 border-b border-black hover:opacity-60 transition-opacity focus:outline-none font-bold"
        >
          Load More Saved Items
        </button>
      </div>
    </motion.div>
  );
}
