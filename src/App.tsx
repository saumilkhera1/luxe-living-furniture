/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import HomeView from "./components/HomeView";
import ShopView from "./components/ShopView";
import ProductDetailView from "./components/ProductDetailView";
import WishlistView from "./components/WishlistView";
import CartBagView from "./components/CartBagView";
import { PRODUCTS } from "./data";
import { ViewType, Product, CartItem } from "./types";

export default function App() {
  const [currentView, setView] = useState<ViewType>("home");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProductId, setSelectedProductId] = useState<string>("fluid-silk-slip-dress");
  
  // Pre-populate with the 4 luxury items from Screen 4 to make the wishlist view instantly gorgeous
  const [wishlistIds, setWishlistIds] = useState<string[]>([
    "sculpted-silk-gown",
    "archive-clutch",
    "structured-blazer",
    "lumiere-trench"
  ]);

  // Active shopping bag items
  const [cart, setCart] = useState<CartItem[]>([]);

  // Smooth scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as any });
  }, [currentView]);

  // Extract selected product object
  const selectedProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  const toggleWishlist = (id: string) => {
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addToCart = (product: Product, size: string) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.selectedSize === size
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, selectedSize: size, quantity: 1 }];
    });
  };

  const updateCartQuantity = (productId: string, size: string, change: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.selectedSize === size) {
            return { ...item, quantity: Math.max(0, item.quantity + change) };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId: string, size: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.selectedSize === size))
    );
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-black selection:bg-black selection:text-white flex flex-col justify-between">
      {/* Top sticky bar */}
      <Navbar 
        currentView={currentView} 
        setView={setView} 
        cartCount={cartCount} 
      />

      {/* Main active layout */}
      <main className="flex-grow">
        {currentView === "home" && (
          <HomeView
            setView={setView}
            setSelectedCategory={setSelectedCategory}
            setSelectedProductById={setSelectedProductId}
          />
        )}

        {currentView === "shop" && (
          <ShopView
            setView={setView}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setSelectedProductById={setSelectedProductId}
            wishlistIds={wishlistIds}
            toggleWishlist={toggleWishlist}
          />
        )}

        {currentView === "product-detail" && (
          <ProductDetailView
            setView={setView}
            product={selectedProduct}
            setSelectedProductById={setSelectedProductId}
            wishlistIds={wishlistIds}
            toggleWishlist={toggleWishlist}
            addToCart={addToCart}
          />
        )}

        {currentView === "wishlist" && (
          <WishlistView
            setView={setView}
            setSelectedProductById={setSelectedProductId}
            wishlistIds={wishlistIds}
            toggleWishlist={toggleWishlist}
            addToCart={addToCart}
          />
        )}

        {currentView === "profile-cart" && (
          <CartBagView
            setView={setView}
            cart={cart}
            updateCartQuantity={updateCartQuantity}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
        )}
      </main>

      {/* Bottom Nav Bar */}
      <BottomNav
        currentView={currentView}
        setView={setView}
        cartCount={cartCount}
        wishlistCount={wishlistIds.length}
      />
    </div>
  );
}
