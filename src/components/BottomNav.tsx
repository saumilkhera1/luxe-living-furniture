/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Home, Store, Heart, ShoppingCart } from "lucide-react";
import { ViewType } from "../types";

interface BottomNavProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
  cartCount: number;
  wishlistCount: number;
}

export default function BottomNav({ currentView, setView, cartCount, wishlistCount }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/70 backdrop-blur-xl border-t border-black/5 h-20 px-6 pb-2">
      <div className="max-w-md mx-auto h-full flex justify-between items-center">
        <button
          onClick={() => setView("home")}
          className={`flex flex-col items-center justify-center space-y-1 w-16 focus:outline-none group ${
            currentView === "home" ? "text-black font-semibold" : "text-black/40 hover:text-black/70"
          }`}
          id="btn-nav-home"
        >
          <Home className={`w-5 h-5 stroke-[1.25] ${currentView === "home" ? "fill-black/5" : ""}`} />
          <span className="text-[10px] uppercase tracking-wider">Home</span>
        </button>

        <button
          onClick={() => setView("shop")}
          className={`flex flex-col items-center justify-center space-y-1 w-16 focus:outline-none group ${
            currentView === "shop" || currentView === "product-detail"
              ? "text-black font-semibold"
              : "text-black/40 hover:text-black/70"
          }`}
          id="btn-nav-shop"
        >
          <Store className={`w-5 h-5 stroke-[1.25] ${currentView === "shop" ? "fill-black/5" : ""}`} />
          <span className="text-[10px] uppercase tracking-wider">Shop</span>
        </button>

        <button
          onClick={() => setView("wishlist")}
          className={`flex flex-col items-center justify-center space-y-1 w-16 focus:outline-none group relative ${
            currentView === "wishlist" ? "text-black font-semibold" : "text-black/40 hover:text-black/70"
          }`}
          id="btn-nav-wishlist"
        >
          <Heart className={`w-5 h-5 stroke-[1.25] ${currentView === "wishlist" ? "fill-black" : ""}`} />
          <span className="text-[10px] uppercase tracking-wider">Wishlist</span>
          {wishlistCount > 0 && (
            <span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-black rounded-full" />
          )}
        </button>

        <button
          onClick={() => setView("profile-cart")}
          className={`flex flex-col items-center justify-center space-y-1 w-16 focus:outline-none group relative ${
            currentView === "profile-cart" ? "text-black font-semibold" : "text-black/40 hover:text-black/70"
          }`}
          id="btn-nav-cart"
        >
          <ShoppingCart className="w-5 h-5 stroke-[1.25]" />
          <span className="text-[10px] uppercase tracking-wider">Bag</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-black text-white font-mono text-[8px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
