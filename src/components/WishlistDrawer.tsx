import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Heart, Eye } from "lucide-react";
import { PRODUCTS } from "../data";

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  toggleWishlist: (id: string) => void;
  onSelectProduct: (id: string) => void;
}

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistIds,
  toggleWishlist,
  onSelectProduct
}: WishlistDrawerProps) {
  const wishlistedProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[990]"
          />

          {/* Wishlist Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-[450px] bg-white/95 backdrop-blur-md border-l border-[#EAEAEA] shadow-2xl z-[991] flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#EAEAEA] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-black fill-black" />
                <span className="text-lg font-light tracking-widest text-black">SAVED CREATIONS</span>
                <span className="text-xs bg-black text-white px-2 py-0.5 rounded-full font-mono">
                  {wishlistIds.length}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-[#FAF9F6] rounded-full transition-colors group"
                aria-label="Close wishlist"
              >
                <X className="w-5 h-5 text-[#777777] group-hover:text-black transition-colors" />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6 hide-scrollbar">
              {wishlistedProducts.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full border border-dashed border-[#outline-variant] flex items-center justify-center">
                    <Heart className="w-5 h-5 text-[#777777]" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-black tracking-wider">Wishlist is Empty</p>
                    <p className="text-xs text-[#777777] max-w-[200px]">
                      Bookmark items that capture your design imagination.
                    </p>
                  </div>
                </div>
              ) : (
                wishlistedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex space-x-4 border-b border-[#FAF9F6] pb-6 last:border-0 last:pb-0"
                  >
                    {/* Image */}
                    <div className="w-20 h-24 bg-[#FAF9F6] overflow-hidden rounded-md border border-[#EAEAEA]">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm font-medium tracking-wide text-black line-clamp-1">
                            {product.title}
                          </h4>
                          <span className="text-sm font-mono font-medium text-black">
                            ${product.price.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-[10px] text-[#777777] tracking-wider mt-0.5">
                          {product.collection}
                        </p>
                        <p className="text-xs text-[#777777] line-clamp-2 mt-2 leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center space-x-3 mt-3">
                        <button
                          onClick={() => {
                            onSelectProduct(product.id);
                            onClose();
                          }}
                          className="flex items-center space-x-1.5 bg-black text-white text-[10px] tracking-widest px-3 py-1.5 rounded hover:bg-[#1a1a1a] transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>CONFIGURE PIECE</span>
                        </button>
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="text-[#777777] hover:text-black text-[10px] tracking-widest hover:underline transition-colors px-2 py-1"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Close */}
            <div className="p-6 border-t border-[#EAEAEA] bg-[#FAF9F6] text-center">
              <button
                onClick={onClose}
                className="w-full border border-black text-black hover:bg-black hover:text-white py-3 text-xs font-medium tracking-widest uppercase transition-all duration-300 rounded-md"
              >
                CONTINUE EXPLORING
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
