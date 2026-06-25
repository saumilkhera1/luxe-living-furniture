/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Menu, ShoppingBag, X, Info, MapPin, Feather, Heart } from "lucide-react";
import { ViewType } from "../types";

interface NavbarProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
  cartCount: number;
}

export default function Navbar({ setView, cartCount }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-black/5 h-16 flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 -ml-2 text-black hover:opacity-60 transition-opacity focus:outline-none"
            aria-label="Toggle Navigation Menu"
            id="burger-menu-btn"
          >
            <Menu className="w-5 h-5 stroke-[1.25]" />
          </button>
        </div>

        <button 
          onClick={() => setView("home")}
          className="font-headline text-lg md:text-2xl tracking-[0.3em] font-bold text-black focus:outline-none cursor-pointer hover:opacity-80 transition-opacity"
          id="brand-logo-btn"
        >
          LUMIERE
        </button>

        <div className="flex items-center">
          <button 
            onClick={() => setView("profile-cart")}
            className="p-2 -mr-2 text-black hover:opacity-60 transition-opacity focus:outline-none relative"
            aria-label="Open Shopping Bag"
            id="shopping-bag-btn"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.25]" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-black text-white font-mono text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Side Navigation Menu Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-full max-w-sm bg-white h-full flex flex-col justify-between p-8 shadow-2xl z-10 transition-transform duration-300">
            <div>
              <div className="flex items-center justify-between mb-12">
                <span className="font-headline text-lg tracking-[0.2em] font-light">LUMIERE</span>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1 hover:opacity-60 transition-opacity"
                  id="close-menu-btn"
                >
                  <X className="w-5 h-5 stroke-[1.5]" />
                </button>
              </div>

              <nav className="flex flex-col space-y-6">
                <button 
                  onClick={() => {
                    setView("home");
                    setIsMenuOpen(false);
                  }}
                  className="text-left font-headline text-2xl hover:italic hover:translate-x-2 transition-all duration-200"
                >
                  The Anthology Home
                </button>
                <button 
                  onClick={() => {
                    setView("shop");
                    setIsMenuOpen(false);
                  }}
                  className="text-left font-headline text-2xl hover:italic hover:translate-x-2 transition-all duration-200"
                >
                  Browse Catalog
                </button>
                <button 
                  onClick={() => {
                    setView("wishlist");
                    setIsMenuOpen(false);
                  }}
                  className="text-left font-headline text-2xl hover:italic hover:translate-x-2 transition-all duration-200"
                >
                  Curated Wishlist
                </button>
                <button 
                  onClick={() => {
                    setView("profile-cart");
                    setIsMenuOpen(false);
                  }}
                  className="text-left font-headline text-2xl hover:italic hover:translate-x-2 transition-all duration-200"
                >
                  Active Shopping Bag
                </button>
              </nav>

              <div className="h-px bg-black/10 my-8" />

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-black/60">
                  <Feather className="w-4 h-4 stroke-[1.25]" />
                  <span>Issue No. 04 — Essentialism</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-black/60">
                  <MapPin className="w-4 h-4 stroke-[1.25]" />
                  <span>Milan • Paris • Kyoto</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-black/60">
                  <Info className="w-4 h-4 stroke-[1.25]" />
                  <span>Certified OEKO-TEX® Silks</span>
                </div>
              </div>
            </div>

            <div className="text-black/40 text-[10px] tracking-widest uppercase">
              © {new Date().getFullYear()} LUMIERE Atelier.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
