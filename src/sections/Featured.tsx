import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Eye, ArrowRight } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "../data";

interface FeaturedProps {
  wishlistIds: string[];
  toggleWishlist: (id: string) => void;
  onSelectProduct: (id: string) => void;
}

export default function Featured({
  wishlistIds,
  toggleWishlist,
  onSelectProduct
}: FeaturedProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProducts = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const categoriesWithAll = ["All", ...CATEGORIES.map((c) => c.name)];

  return (
    <section id="featured" className="py-24 bg-white relative">
      {/* Subtle background graphic */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FAF9F6] blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Editorial Title */}
        <div className="text-center space-y-4 max-w-xl mx-auto mb-16 select-none">
          <p className="text-[10px] tracking-[0.3em] font-mono text-[#777777] uppercase">
            Curated Spaces
          </p>
          <h2 className="text-[2rem] md:text-[3rem] font-light text-black leading-tight tracking-tight">
            The Featured Collection
          </h2>
          <p className="text-xs md:text-sm text-[#777777] font-light leading-relaxed">
            An editing of our most celebrated works. Architectural lines meet heirloom-quality hand craftsmanship.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16">
          {categoriesWithAll.map((catName) => {
            const isActive = activeCategory === catName;
            return (
              <button
                key={catName}
                onClick={() => setActiveCategory(catName)}
                className={`px-6 py-2.5 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 ${
                  isActive
                    ? "bg-black text-white shadow-md scale-105"
                    : "bg-[#FAF9F6] text-[#777777] hover:bg-[#EAEAEA] hover:text-black"
                }`}
              >
                {catName}
              </button>
            );
          })}
        </div>

        {/* Products Grid with AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  key={product.id}
                  className="group relative bg-[#FAF9F6] rounded-xl overflow-hidden border border-[#EAEAEA]/40 hover:border-black/15 transition-all duration-500 hover:shadow-xl flex flex-col justify-between"
                >
                  {/* Image Display */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FAF9F6] select-none">
                    {/* Primary Image */}
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-0"
                    />
                    
                    {/* Hover Image */}
                    {product.hoverImage && (
                      <img
                        src={product.hoverImage}
                        alt={`${product.title} Alternate`}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                      />
                    )}

                    {/* Glow Overlay on Card Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Wishlist Heart Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product.id);
                      }}
                      className="absolute top-4 right-4 p-2.5 rounded-full bg-white/70 backdrop-blur-md hover:bg-white border border-[#EAEAEA] shadow-sm transition-all duration-300 transform active:scale-90 group/btn"
                      aria-label="Add to wishlist"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 transition-colors ${
                          isWishlisted
                            ? "text-red-500 fill-red-500"
                            : "text-[#777777] group-hover/btn:text-black"
                        }`}
                      />
                    </button>

                    {/* Floating Configure Hint */}
                    <div className="absolute bottom-4 left-4 right-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <button
                        onClick={() => onSelectProduct(product.id)}
                        className="w-full bg-white text-black py-2.5 text-[10px] tracking-widest font-semibold rounded-md shadow-lg hover:bg-black hover:text-white transition-colors uppercase flex items-center justify-center space-x-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>INTERACTIVE 3D VIEW</span>
                      </button>
                    </div>
                  </div>

                  {/* Copy details */}
                  <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-1">
                      <div className="flex justify-between items-start">
                        <span className="text-[9px] uppercase tracking-widest font-mono text-[#777777]">
                          {product.category}
                        </span>
                        <span className="text-xs font-mono font-medium text-black">
                          ${product.price.toLocaleString()}
                        </span>
                      </div>
                      <h3 className="text-sm font-medium tracking-wide text-black group-hover:text-[#777777] transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-[10px] text-[#777777] font-mono tracking-wider mt-0.5">
                        {product.collection}
                      </p>
                    </div>

                    <p className="text-xs text-[#777777] font-light leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    <button
                      onClick={() => onSelectProduct(product.id)}
                      className="text-[10px] font-semibold tracking-widest text-black hover:text-[#777777] uppercase flex items-center space-x-1.5 transition-colors pt-2 border-t border-[#FAF9F6] w-fit"
                    >
                      <span>CONFIGURE PIECE</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
