import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { CartItem } from "../types";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  updateCartQuantity: (
    productId: string,
    wood: string,
    color: string,
    fabric: string,
    change: number
  ) => void;
  removeFromCart: (productId: string, wood: string, color: string, fabric: string) => void;
  clearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  updateCartQuantity,
  removeFromCart,
  clearCart
}: CartDrawerProps) {
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

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

          {/* Cart Panel */}
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
                <ShoppingBag className="w-5 h-5 text-black" />
                <span className="text-lg font-light tracking-widest text-black">YOUR SELECTIONS</span>
                <span className="text-xs bg-black text-white px-2 py-0.5 rounded-full font-mono">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-[#FAF9F6] rounded-full transition-colors group"
                aria-label="Close cart"
              >
                <X className="w-5 h-5 text-[#777777] group-hover:text-black transition-colors" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6 hide-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full border border-dashed border-[#outline-variant] flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-[#777777]" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-black tracking-wider">Cart is Empty</p>
                    <p className="text-xs text-[#777777] max-w-[200px]">
                      Discover curated luxury pieces to begin your space transformation.
                    </p>
                  </div>
                </div>
              ) : (
                cart.map((item, index) => (
                  <div
                    key={`${item.product.id}-${item.selectedWood}-${item.selectedColor}-${item.selectedFabric}-${index}`}
                    className="flex space-x-4 border-b border-[#FAF9F6] pb-6 last:border-0 last:pb-0"
                  >
                    {/* Product Image */}
                    <div className="w-20 h-24 bg-[#FAF9F6] overflow-hidden rounded-md border border-[#EAEAEA]">
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm font-medium tracking-wide text-black line-clamp-1">
                            {item.product.title}
                          </h4>
                          <span className="text-sm font-mono font-medium text-black">
                            ${(item.product.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                        <p className="text-[10px] text-[#777777] tracking-wider mt-0.5">
                          {item.product.collection}
                        </p>

                        {/* Configurations */}
                        <div className="mt-2 flex flex-wrap gap-1">
                          {item.selectedWood !== "None" && (
                            <span className="text-[9px] bg-[#FAF9F6] text-[#777777] px-2 py-0.5 border border-[#EAEAEA] rounded">
                              Wood: {item.selectedWood}
                            </span>
                          )}
                          {item.selectedColor !== "None" && (
                            <span className="text-[9px] bg-[#FAF9F6] text-[#777777] px-2 py-0.5 border border-[#EAEAEA] rounded">
                              Color: {item.selectedColor}
                            </span>
                          )}
                          {item.selectedFabric !== "None" && (
                            <span className="text-[9px] bg-[#FAF9F6] text-[#777777] px-2 py-0.5 border border-[#EAEAEA] rounded">
                              Fabric: {item.selectedFabric}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quantity Toggles */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#EAEAEA] rounded-md overflow-hidden bg-[#FAF9F6]">
                          <button
                            onClick={() =>
                              updateCartQuantity(
                                item.product.id,
                                item.selectedWood,
                                item.selectedColor,
                                item.selectedFabric,
                                -1
                              )
                            }
                            className="p-1 px-2.5 hover:bg-[#EAEAEA] transition-colors"
                          >
                            <Minus className="w-3 h-3 text-[#777777]" />
                          </button>
                          <span className="px-3 text-xs font-mono font-semibold text-black">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateCartQuantity(
                                item.product.id,
                                item.selectedWood,
                                item.selectedColor,
                                item.selectedFabric,
                                1
                              )
                            }
                            className="p-1 px-2.5 hover:bg-[#EAEAEA] transition-colors"
                          >
                            <Plus className="w-3 h-3 text-[#777777]" />
                          </button>
                        </div>

                        <button
                          onClick={() =>
                            removeFromCart(
                              item.product.id,
                              item.selectedWood,
                              item.selectedColor,
                              item.selectedFabric
                            )
                          }
                          className="text-[#777777] hover:text-red-500 transition-colors p-1.5 rounded-full hover:bg-[#ffdad6]"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-[#EAEAEA] bg-[#FAF9F6] space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-[#777777] tracking-wider">
                    <span>SHIPPING & DELIVERY</span>
                    <span className="font-semibold text-black">COMPLIMENTARY</span>
                  </div>
                  <div className="flex justify-between text-base font-light text-black">
                    <span className="tracking-widest">SUBTOTAL</span>
                    <span className="font-mono font-semibold">${subtotal.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => alert("Checkout flow is simulated in this production preview.")}
                    className="w-full bg-black text-white hover:bg-[#1a1a1a] py-3 text-xs font-medium tracking-widest uppercase transition-colors rounded-md shadow-md"
                  >
                    PROCEED TO CHECKOUT
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full text-center text-xs text-[#777777] hover:text-black hover:underline py-1"
                  >
                    Clear All Selections
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
