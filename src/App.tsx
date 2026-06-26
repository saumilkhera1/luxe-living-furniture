import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Featured from "./sections/Featured";
import WhyChoose from "./sections/WhyChoose";
import Configurator from "./sections/Configurator";
import Testimonials from "./sections/Testimonials";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import CartDrawer from "./components/CartDrawer";
import WishlistDrawer from "./components/WishlistDrawer";
import { Product, CartItem } from "./types";

export default function App() {
  // Pre-loader state
  const [isLoading, setIsLoading] = useState(true);

  // Drawer toggles
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Configuration state
  const [selectedProductId, setSelectedProductId] = useState("emerson-boucle-sofa");

  // User list selections state
  const [wishlistIds, setWishlistIds] = useState<string[]>([
    "emerson-boucle-sofa",
    "aurelia-velvet-bed"
  ]);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Smooth scroll to top on first boot
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as any });
  }, []);

  const handleSelectProduct = (id: string) => {
    setSelectedProductId(id);
    const element = document.getElementById("configurator");
    if (element) {
      // Small timeout to allow state rendering
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  const handleToggleWishlist = (id: string) => {
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (product: Product, wood: string, color: string, fabric: string) => {
    setCart((prev) => {
      // Look for identical configurations in the existing cart list
      const existingIdx = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedWood === wood &&
          item.selectedColor === color &&
          item.selectedFabric === fabric
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      }

      return [
        ...prev,
        {
          product,
          selectedWood: wood,
          selectedColor: color,
          selectedFabric: fabric,
          quantity: 1
        }
      ];
    });

    // Auto trigger the cart drawer slide-out for interactive feedback
    setIsCartOpen(true);
  };

  const updateCartQuantity = (
    productId: string,
    wood: string,
    color: string,
    fabric: string,
    change: number
  ) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (
            item.product.id === productId &&
            item.selectedWood === wood &&
            item.selectedColor === color &&
            item.selectedFabric === fabric
          ) {
            return { ...item, quantity: Math.max(0, item.quantity + change) };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId: string, wood: string, color: string, fabric: string) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.selectedWood === wood &&
            item.selectedColor === color &&
            item.selectedFabric === fabric
          )
      )
    );
  };

  const clearCart = () => setCart([]);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {/* Luxury Loading Screen Overlay */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div className="min-h-screen bg-[#FAF9F6] text-black selection:bg-black selection:text-white flex flex-col justify-between overflow-x-hidden">
        {/* Sticky Header Nav */}
        <Navbar
          cartCount={totalCartCount}
          wishlistCount={wishlistIds.length}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenWishlist={() => setIsWishlistOpen(true)}
        />

        {/* Website Content Sections */}
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero />

          {/* Featured Collections Masonry Grid */}
          <Featured
            wishlistIds={wishlistIds}
            toggleWishlist={handleToggleWishlist}
            onSelectProduct={handleSelectProduct}
          />

          {/* Value Pillars List */}
          <WhyChoose />

          {/* 3D Configurator Workshop */}
          <Configurator
            selectedProductId={selectedProductId}
            onSelectProductId={setSelectedProductId}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
          />

          {/* Customer Reviews Slider */}
          <Testimonials />

          {/* Storytelling Heritage Block */}
          <About />

          {/* Interactive Enquiry Form & Coordinates */}
          <Contact />
        </main>

        {/* Brand Footer */}
        <Footer />

        {/* Slide-out Panels */}
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          updateCartQuantity={updateCartQuantity}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />

        <WishlistDrawer
          isOpen={isWishlistOpen}
          onClose={() => setIsWishlistOpen(false)}
          wishlistIds={wishlistIds}
          toggleWishlist={handleToggleWishlist}
          onSelectProduct={handleSelectProduct}
        />
      </div>
    </>
  );
}
