/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Trash2, Plus, Minus, CreditCard, ArrowRight, CheckCircle, Package } from "lucide-react";
import { CartItem, Product, ViewType } from "../types";

interface CartBagViewProps {
  setView: (view: ViewType) => void;
  cart: CartItem[];
  updateCartQuantity: (productId: string, size: string, change: number) => void;
  removeFromCart: (productId: string, size: string) => void;
  clearCart: () => void;
}

export default function CartBagView({
  setView,
  cart,
  updateCartQuantity,
  removeFromCart,
  clearCart
}: CartBagViewProps) {
  const [checkoutStep, setCheckoutStep] = useState<"bag" | "shipping" | "success">("bag");
  const [shippingForm, setShippingForm] = useState({
    name: "Saumil Khera",
    email: "saumilkhera1@gmail.com",
    address: "125 Via Montenapoleone",
    city: "Milan",
    postalCode: "20121",
    country: "Italy",
    cardNum: "•••• •••• •••• 9924",
    cardExpiry: "12/28",
    cardCvc: "•••"
  });
  const [orderNumber, setOrderNumber] = useState("");

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const tax = subtotal * 0.08; // 8% luxury apparel tax
  const total = subtotal + tax;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate random luxury tracking order number
    const randNum = Math.floor(10000000 + Math.random() * 90000000);
    setOrderNumber(`LUM-${randNum}-E`);
    setCheckoutStep("success");
    clearCart();
  };

  if (checkoutStep === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="pt-24 pb-40 px-6 max-w-xl mx-auto text-center"
      >
        <div className="bg-neutral-50 border border-neutral-200/50 p-10 md:p-14 space-y-8 shadow-sm">
          <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 stroke-[1.25]" />
          </div>

          <div className="space-y-3">
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold">
              Atelier Confirmation
            </p>
            <h3 className="font-headline text-3xl font-light text-black">
              Order Dispatched
            </h3>
            <p className="font-sans text-xs text-neutral-500 font-light max-w-md mx-auto leading-relaxed">
              Your winter anthology selection has been registered in our Milanese logistics system. A tracking receipt was sent to <strong>{shippingForm.email}</strong>.
            </p>
          </div>

          <div className="h-px bg-black/10 my-6" />

          <div className="space-y-4 text-left font-sans text-xs bg-white p-6 border border-neutral-150">
            <div className="flex justify-between">
              <span className="text-neutral-400">Order Reference:</span>
              <span className="font-mono font-bold text-black">{orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-400">Recipient:</span>
              <span className="text-black font-semibold">{shippingForm.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-400">Delivery Address:</span>
              <span className="text-black text-right max-w-[200px] font-medium">
                {shippingForm.address}, {shippingForm.city} ({shippingForm.postalCode})
              </span>
            </div>
            <div className="flex justify-between border-t border-black/5 pt-3">
              <span className="text-neutral-400 font-semibold">Delivery Class:</span>
              <span className="text-black font-bold uppercase tracking-widest text-[10px] flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5" />
                Complimentary Express
              </span>
            </div>
          </div>

          <button
            onClick={() => setView("home")}
            className="w-full bg-black hover:bg-neutral-800 text-white py-5 font-sans text-xs uppercase tracking-widest font-semibold transition-colors focus:outline-none"
            id="success-back-home-btn"
          >
            Return to Anthology
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-24 pb-40 px-6 max-w-7xl mx-auto"
    >
      <header className="mb-12 border-b border-black/5 pb-6">
        <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-2 font-medium">
          Your Curated Cart
        </p>
        <h2 className="font-headline text-4xl font-light text-black">
          {checkoutStep === "bag" ? "Active Shopping Bag" : "Boutique Checkout"}
        </h2>
      </header>

      {cart.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-16">
          {/* Left panel: Cart Items or Shipping fields */}
          <div className="lg:col-span-7 space-y-8">
            {checkoutStep === "bag" ? (
              <div className="space-y-8 divide-y divide-black/5">
                {cart.map((item, idx) => (
                  <div
                    key={`${item.product.id}-${item.selectedSize}`}
                    className={`pt-8 ${idx === 0 ? "pt-0" : ""} flex gap-6`}
                    id={`cart-row-${item.product.id}`}
                  >
                    <div className="w-24 h-32 md:w-32 md:h-40 bg-neutral-100 flex-shrink-0 overflow-hidden">
                      <img
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        src={item.product.image}
                        alt={item.product.title}
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="space-y-1">
                        <div className="flex justify-between items-start gap-4">
                          <h4 className="font-headline text-lg md:text-xl font-light text-black">
                            {item.product.title}
                          </h4>
                          <span className="font-sans text-sm font-semibold text-neutral-800">
                            ${(item.product.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                        <p className="font-sans text-[10px] uppercase tracking-widest text-neutral-400">
                          Size: <strong className="text-black">{item.selectedSize}</strong>
                        </p>
                        <p className="font-sans text-xs text-neutral-500 italic">
                          {item.product.material}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity adjusting toggle */}
                        <div className="flex items-center border border-black/10 px-2 py-1 bg-white">
                          <button
                            onClick={() => updateCartQuantity(item.product.id, item.selectedSize, -1)}
                            className="p-1 hover:opacity-60 transition-opacity focus:outline-none"
                            aria-label="Decrease Quantity"
                            id={`quantity-decrease-${item.product.id}`}
                          >
                            <Minus className="w-3.5 h-3.5 stroke-[1.5]" />
                          </button>
                          <span className="font-mono text-xs px-3 font-semibold text-black">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateCartQuantity(item.product.id, item.selectedSize, 1)}
                            className="p-1 hover:opacity-60 transition-opacity focus:outline-none"
                            aria-label="Increase Quantity"
                            id={`quantity-increase-${item.product.id}`}
                          >
                            <Plus className="w-3.5 h-3.5 stroke-[1.5]" />
                          </button>
                        </div>

                        {/* Trash trigger */}
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                          className="p-2 text-neutral-400 hover:text-black transition-colors focus:outline-none"
                          aria-label="Delete item from cart"
                          id={`btn-cart-item-delete-${item.product.id}`}
                        >
                          <Trash2 className="w-4 h-4 stroke-[1.5]" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Shipping & Billing Form */
              <form onSubmit={handlePlaceOrder} className="space-y-8" id="checkout-form">
                <div className="space-y-6">
                  <h3 className="font-headline text-2xl font-light text-black border-b border-black/5 pb-2">
                    1. Shipping Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-2">
                        Recipient Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-white border border-black/10 px-4 py-3.5 text-xs tracking-wider rounded-none focus:outline-none focus:border-black"
                        value={shippingForm.name}
                        onChange={(e) => setShippingForm({ ...shippingForm, name: e.target.value })}
                        id="input-shipping-name"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-white border border-black/10 px-4 py-3.5 text-xs tracking-wider rounded-none focus:outline-none focus:border-black"
                        value={shippingForm.email}
                        onChange={(e) => setShippingForm({ ...shippingForm, email: e.target.value })}
                        id="input-shipping-email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-2">
                      Delivery Address
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white border border-black/10 px-4 py-3.5 text-xs tracking-wider rounded-none focus:outline-none focus:border-black"
                      value={shippingForm.address}
                      onChange={(e) => setShippingForm({ ...shippingForm, address: e.target.value })}
                      id="input-shipping-address"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <label className="block text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-white border border-black/10 px-4 py-3.5 text-xs tracking-wider rounded-none focus:outline-none focus:border-black"
                        value={shippingForm.city}
                        onChange={(e) => setShippingForm({ ...shippingForm, city: e.target.value })}
                        id="input-shipping-city"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-2">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-white border border-black/10 px-4 py-3.5 text-xs tracking-wider rounded-none focus:outline-none focus:border-black"
                        value={shippingForm.postalCode}
                        onChange={(e) => setShippingForm({ ...shippingForm, postalCode: e.target.value })}
                        id="input-shipping-postal"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6 pt-6">
                  <h3 className="font-headline text-2xl font-light text-black border-b border-black/5 pb-2">
                    2. Payment Credentials
                  </h3>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-2">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        className="w-full bg-white border border-black/10 pl-11 pr-4 py-3.5 text-xs tracking-wider rounded-none focus:outline-none focus:border-black font-mono"
                        value={shippingForm.cardNum}
                        onChange={(e) => setShippingForm({ ...shippingForm, cardNum: e.target.value })}
                        id="input-shipping-card"
                      />
                      <CreditCard className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        required
                        className="w-full bg-white border border-black/10 px-4 py-3.5 text-xs tracking-wider rounded-none focus:outline-none focus:border-black font-mono"
                        value={shippingForm.cardExpiry}
                        onChange={(e) => setShippingForm({ ...shippingForm, cardExpiry: e.target.value })}
                        id="input-shipping-expiry"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-2">
                        Security Code (CVC)
                      </label>
                      <input
                        type="password"
                        required
                        className="w-full bg-white border border-black/10 px-4 py-3.5 text-xs tracking-wider rounded-none focus:outline-none focus:border-black font-mono"
                        value={shippingForm.cardCvc}
                        onChange={(e) => setShippingForm({ ...shippingForm, cardCvc: e.target.value })}
                        id="input-shipping-cvc"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex gap-4">
                  <button
                    type="button"
                    onClick={() => setCheckoutStep("bag")}
                    className="flex-1 bg-white hover:bg-neutral-50 text-black border border-black/25 py-5 font-sans text-xs uppercase tracking-widest font-semibold focus:outline-none text-center"
                    id="btn-back-to-bag"
                  >
                    Back to Bag
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-black hover:bg-neutral-800 text-white py-5 font-sans text-xs uppercase tracking-widest font-semibold focus:outline-none text-center"
                    id="btn-submit-order"
                  >
                    Place Curated Order
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right panel: Checkout Summary */}
          <div className="lg:col-span-5 bg-neutral-50 p-8 border border-neutral-200/50 self-start">
            <h3 className="font-headline text-2xl font-light mb-6 text-black border-b border-black/5 pb-2">
              Billing Summary
            </h3>

            <div className="space-y-4 font-sans text-xs text-neutral-600">
              <div className="flex justify-between">
                <span>Subtotal ({cart.reduce((acc, i) => acc + i.quantity, 0)} items)</span>
                <span className="font-medium text-black">${subtotal.toLocaleString()}.00</span>
              </div>
              <div className="flex justify-between">
                <span>Express Courier Class</span>
                <span className="font-bold text-black uppercase tracking-wider text-[10px]">Complimentary</span>
              </div>
              <div className="flex justify-between">
                <span>Luxury Apparel Taxes (8%)</span>
                <span className="font-medium text-black">${tax.toLocaleString()}.00</span>
              </div>

              <div className="h-px bg-black/10 my-4" />

              <div className="flex justify-between text-base font-semibold text-black pt-2">
                <span>Estimated Value</span>
                <span className="font-bold">${total.toLocaleString()}.00</span>
              </div>
            </div>

            {checkoutStep === "bag" && (
              <button
                onClick={() => setCheckoutStep("shipping")}
                className="w-full bg-black hover:bg-neutral-800 text-white py-5 font-sans text-xs uppercase tracking-widest font-bold mt-8 flex items-center justify-center gap-2 focus:outline-none shadow-sm"
                id="btn-checkout-proceed"
              >
                Proceed to Checkout
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="py-24 text-center max-w-md mx-auto bg-neutral-50 border border-neutral-150">
          <ShoppingBag className="w-10 h-10 stroke-[1] mx-auto text-neutral-300 mb-4" />
          <p className="font-headline text-xl italic text-neutral-500 font-light">
            Your shopping bag is empty.
          </p>
          <p className="text-xs text-neutral-400 mt-2 font-sans uppercase tracking-widest">
            Curate items to begin your luxury look.
          </p>
          <button
            onClick={() => setView("shop")}
            className="mt-6 bg-black text-white px-8 py-4 text-xs tracking-widest uppercase hover:bg-neutral-800 focus:outline-none font-semibold"
          >
            Explore Collections
          </button>
        </div>
      )}
    </motion.div>
  );
}
