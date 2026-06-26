import React, { useState, useEffect } from "react";
import { ShoppingBag, Heart, Menu, X } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
}

export default function Navbar({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll height to toggle transparent to solid background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "Collections", id: "featured" },
    { name: "Configurator", id: "configurator" },
    { name: "About Us", id: "about" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-[#EAEAEA] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="text-lg md:text-xl font-light tracking-[0.25em] text-black hover:opacity-75 transition-opacity font-sans"
          >
            LUXELIVING
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-xs font-normal tracking-widest text-[#777777] hover:text-black transition-colors uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Utilities & CTA */}
          <div className="flex items-center space-x-3 md:space-x-6">
            {/* Wishlist Trigger */}
            <button
              onClick={onOpenWishlist}
              className="p-2 relative hover:bg-[#FAF9F6] rounded-full transition-colors group"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-black text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-mono font-bold">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="p-2 relative hover:bg-[#FAF9F6] rounded-full transition-colors group"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-black text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-mono font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* consultation CTA */}
            <button
              onClick={() => {
                const contactEl = document.getElementById("contact");
                if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
              }}
              className="hidden sm:inline-block bg-black text-white hover:bg-black/85 text-[10px] tracking-widest px-5 py-2.5 rounded-full font-medium transition-all duration-300 transform active:scale-95 shadow-sm"
            >
              BOOK CONSULTATION
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-[#FAF9F6] rounded-full transition-colors"
              aria-label="Toggle Menu"
            >
              <Menu className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 bg-white z-[999] flex flex-col justify-between p-8 transition-transform duration-500 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#EAEAEA] pb-6">
            <span className="text-lg font-light tracking-[0.2em] text-black">LUXELIVING</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-[#FAF9F6] rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-black" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-6 mt-12">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-lg font-light tracking-widest text-[#777777] hover:text-black transition-colors uppercase border-b border-[#FAF9F6] pb-3"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Footer info in menu */}
        <div className="space-y-6">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              const contactEl = document.getElementById("contact");
              if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full bg-black text-white py-3 text-xs tracking-widest font-semibold rounded"
          >
            BOOK CONSULTATION
          </button>
          <div className="text-center text-[10px] text-[#777777] tracking-wider">
            © 2026 LUXELIVING FURNITURE. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </>
  );
}
