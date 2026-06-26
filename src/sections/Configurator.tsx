import React, { useState, useEffect } from "react";
import { ShoppingBag, ChevronRight, Sliders, Check } from "lucide-react";
import { Product } from "../types";
import { PRODUCTS } from "../data";
import ConfiguratorCanvas from "../components/3D/ConfiguratorCanvas";

interface ConfiguratorProps {
  selectedProductId: string;
  onSelectProductId: (id: string) => void;
  onAddToCart: (product: Product, wood: string, color: string, fabric: string) => void;
  onToggleWishlist: (id: string) => void;
  wishlistIds: string[];
}

export default function Configurator({
  selectedProductId,
  onSelectProductId,
  onAddToCart,
  onToggleWishlist,
  wishlistIds
}: ConfiguratorProps) {
  // Extract active product details
  const activeProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  // Configurator selections state
  const [selectedWood, setSelectedWood] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedFabric, setSelectedFabric] = useState("");

  // Sync state when active product changes
  useEffect(() => {
    if (activeProduct) {
      setSelectedWood(activeProduct.woods && activeProduct.woods.length > 0 ? activeProduct.woods[0] : "None");
      setSelectedColor(activeProduct.colors && activeProduct.colors.length > 0 ? activeProduct.colors[0] : "None");
      setSelectedFabric(activeProduct.fabrics && activeProduct.fabrics.length > 0 ? activeProduct.fabrics[0] : "None");
    }
  }, [activeProduct]);

  const handleAddToCart = () => {
    onAddToCart(activeProduct, selectedWood, selectedColor, selectedFabric);
  };

  const isWishlisted = wishlistIds.includes(activeProduct.id);

  return (
    <section id="configurator" className="py-24 bg-[#fbfbfa] border-y border-[#EAEAEA] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 select-none gap-4">
          <div className="space-y-3">
            <p className="text-[10px] tracking-[0.3em] font-mono text-[#777777] uppercase">
              Bespoke Configurator
            </p>
            <h2 className="text-[2rem] md:text-[3rem] font-light text-black tracking-tight leading-none">
              Customize Your Piece
            </h2>
          </div>

          {/* Quick Product Switcher */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-[#777777] font-mono uppercase">Select Model:</span>
            <select
              value={selectedProductId}
              onChange={(e) => onSelectProductId(e.target.value)}
              className="bg-white border border-[#EAEAEA] rounded-md px-3 py-1.5 text-xs text-black font-medium tracking-wide focus:outline-none focus:border-black"
            >
              {PRODUCTS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Configurator Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Panel: 3D Canvas Box */}
          <div className="lg:col-span-7 h-[400px] md:h-[500px] lg:h-[620px] rounded-xl overflow-hidden border border-[#EAEAEA] shadow-sm relative bg-[#fbfbfa]">
            <ConfiguratorCanvas
              productId={activeProduct.id}
              color={selectedColor}
              fabric={selectedFabric}
              wood={selectedWood}
            />

            {/* Quick Helper HUD overlays */}
            <div className="absolute top-4 left-4 bg-white/70 backdrop-blur-md px-3 py-1.5 border border-[#EAEAEA] rounded text-[9px] text-black font-mono tracking-widest pointer-events-none select-none">
              REAL-TIME 3D PREVIEW
            </div>
            
            <div className="absolute bottom-4 left-4 bg-white/70 backdrop-blur-md px-3 py-1.5 border border-[#EAEAEA] rounded text-[9px] text-[#777777] font-mono tracking-wide pointer-events-none select-none">
              Orbit: Left Click + Drag | Pan: Right Click | Zoom: Scroll
            </div>
          </div>

          {/* Right Panel: Configurations Options & Checkout */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-white border border-[#EAEAEA] rounded-xl p-8 shadow-sm">
            
            {/* Upper Details */}
            <div className="space-y-4">
              <div className="flex justify-between items-start select-none">
                <div>
                  <span className="text-[9px] uppercase tracking-widest font-mono text-[#777777]">
                    {activeProduct.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-light text-black tracking-wide">
                    {activeProduct.title}
                  </h3>
                  <p className="text-[10px] text-[#777777] font-mono tracking-wider mt-0.5">
                    {activeProduct.collection}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-mono font-medium text-black">
                    ${activeProduct.price.toLocaleString()}
                  </span>
                  <p className="text-[9px] text-[#777777] uppercase tracking-widest mt-1">COMPLIMENTARY DELIVERY</p>
                </div>
              </div>

              <p className="text-xs text-[#5f5e5e] font-light leading-relaxed">
                {activeProduct.description}
              </p>
            </div>

            {/* Configuration Selectors */}
            <div className="space-y-6">
              
              {/* Wood Finishes (if exists) */}
              {activeProduct.woods && activeProduct.woods[0] !== "None" && (
                <div className="space-y-2">
                  <span className="text-[10px] tracking-widest font-mono text-[#777777] uppercase block">
                    1. Wood Finish: <span className="text-black font-semibold">{selectedWood}</span>
                  </span>
                  <div className="flex items-center space-x-2">
                    {activeProduct.woods.map((wood) => {
                      const isActive = selectedWood === wood;
                      // Map wood options to background colors for preview dots
                      let bg = "bg-[#D8B899]";
                      if (wood === "Walnut") bg = "bg-[#4B3621]";
                      if (wood === "Matte Black Maple" || wood === "Blackened Oak" || wood === "Ebonized Ash") bg = "bg-[#1E1E1E]";
                      if (wood === "Dark Stained Oak") bg = "bg-[#2B2625]";
                      if (wood === "Natural Maple") bg = "bg-[#E6C2A0]";
                      return (
                        <button
                          key={wood}
                          onClick={() => setSelectedWood(wood)}
                          className={`w-7 h-7 rounded-full ${bg} relative border ${
                            isActive ? "ring-2 ring-black ring-offset-2 scale-110" : "border-[#EAEAEA]"
                          } transition-all duration-300`}
                          title={wood}
                        >
                          {isActive && <Check className="w-3.5 h-3.5 text-white absolute inset-0 m-auto" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Fabric Choices (if exists) */}
              {activeProduct.colors && activeProduct.colors[0] !== "None" && (
                <div className="space-y-2">
                  <span className="text-[10px] tracking-widest font-mono text-[#777777] uppercase block">
                    2. Fabric Upholstery: <span className="text-black font-semibold">{selectedColor}</span>
                  </span>
                  <div className="flex items-center space-x-2">
                    {activeProduct.colors.map((colorName) => {
                      const isActive = selectedColor === colorName;
                      // Color previews
                      let bgStyle = { backgroundColor: "#FAF9F6" };
                      if (colorName === "Warm Sand") bgStyle = { backgroundColor: "#E8DCCF" };
                      if (colorName === "Charcoal Gray") bgStyle = { backgroundColor: "#3D3D3D" };
                      if (colorName === "Rust Velvet") bgStyle = { backgroundColor: "#A65B46" };
                      if (colorName === "Soft Cream Velvet") bgStyle = { backgroundColor: "#F5EFE6" };
                      if (colorName === "Royal Navy Velvet") bgStyle = { backgroundColor: "#1E293B" };
                      if (colorName === "Sage Green") bgStyle = { backgroundColor: "#8F9779" };

                      return (
                        <button
                          key={colorName}
                          onClick={() => {
                            setSelectedColor(colorName);
                            // Auto map fabrics to match if possible
                            if (activeProduct.fabrics) {
                              if (colorName.includes("Velvet")) {
                                setSelectedFabric("Royal Velvet");
                              } else if (colorName.includes("Sand") || colorName.includes("Sage")) {
                                setSelectedFabric(activeProduct.fabrics[1] || activeProduct.fabrics[0]);
                              } else {
                                setSelectedFabric(activeProduct.fabrics[0]);
                              }
                            }
                          }}
                          className={`w-7 h-7 rounded-full relative border ${
                            isActive ? "ring-2 ring-black ring-offset-2 scale-110" : "border-[#EAEAEA]"
                          } transition-all duration-300`}
                          style={bgStyle}
                          title={colorName}
                        >
                          {isActive && (
                            <Check
                              className={`w-3.5 h-3.5 absolute inset-0 m-auto ${
                                colorName === "Alabaster Cream" || colorName === "Soft Cream Velvet"
                                  ? "text-black"
                                  : "text-white"
                              }`}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Specifications Details Box */}
            <div className="border-t border-[#EAEAEA] pt-6 space-y-3">
              <div className="grid grid-cols-2 gap-4 text-[11px] font-sans">
                <div>
                  <span className="text-[#777777] uppercase tracking-wider block">Dimensions:</span>
                  <span className="text-black font-medium">{activeProduct.dimensions}</span>
                </div>
                <div>
                  <span className="text-[#777777] uppercase tracking-wider block">Origin:</span>
                  <span className="text-black font-medium">{activeProduct.origin}</span>
                </div>
                <div>
                  <span className="text-[#777777] uppercase tracking-wider block">Core Structure:</span>
                  <span className="text-black font-medium line-clamp-1">{activeProduct.material}</span>
                </div>
                <div>
                  <span className="text-[#777777] uppercase tracking-wider block">Eco-Cert:</span>
                  <span className="text-black font-medium line-clamp-1">FSC Hardwoods, OEKO-TEX®</span>
                </div>
              </div>

              {/* Special Features Bullets */}
              {activeProduct.features && (
                <div className="bg-[#FAF9F6] p-3.5 rounded-lg border border-[#EAEAEA]/60 mt-3 select-none">
                  <span className="text-[9px] font-mono text-[#777777] uppercase tracking-widest block mb-1">DESIGN HIGHLIGHTS:</span>
                  <ul className="text-[10px] text-[#5f5e5e] list-disc list-inside space-y-0.5">
                    {activeProduct.features.map((feat, idx) => (
                      <li key={idx} className="line-clamp-1">{feat}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Add to Cart Actions */}
            <div className="flex space-x-3 pt-6 border-t border-[#EAEAEA]">
              <button
                onClick={handleAddToCart}
                className="flex-grow bg-black text-white hover:bg-black/90 py-3.5 px-6 rounded-md text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2 shadow-md transform active:scale-[0.98]"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ADD TO CART</span>
              </button>

              <button
                onClick={() => onToggleWishlist(activeProduct.id)}
                className={`py-3.5 px-5 rounded-md border transition-all duration-300 text-xs font-semibold tracking-widest ${
                  isWishlisted
                    ? "bg-red-50 border-red-200 text-red-500 hover:bg-red-100"
                    : "border-[#C6C6C6] hover:border-black text-black bg-transparent"
                }`}
              >
                {isWishlisted ? "SAVED" : "SAVE TO WISHLIST"}
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
