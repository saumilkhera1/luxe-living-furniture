/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { CATEGORIES } from "../data";
import { ViewType } from "../types";

interface HomeViewProps {
  setView: (view: ViewType) => void;
  setSelectedCategory: (category: string) => void;
  setSelectedProductById: (id: string) => void;
}

export default function HomeView({ setView, setSelectedCategory, setSelectedProductById }: HomeViewProps) {
  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setView("shop");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-16 pb-32"
    >
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <img 
          alt="Seasonal Editorial Collection" 
          className="w-full h-full object-cover grayscale-xs"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhsDE-a4ChHKniOaaSNcJGPUiAdooTqSGn6fs5OmpH-pIThHIJWCHdhMMsW3NDq6O1MsCGlsibX93KZfnQmsKII5u1P6V1rGrn0cbJWU3bzLFDYaEkDTzK61-AtJhX0daktTP2p3VEEGsNsGI1jL0GTXj_Oo6g_Ic5V7Z8dPfTtmn8mbTQ60ezZUmB5bWeNAhKioDnbb2BOvxuHdMPIbymFzKG1Ll1gUbRL1p5QS03fyMngE3KuDmTpGXK9wbwSXQ9ieLQzbKN4vg"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 text-center px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="font-sans text-xs uppercase tracking-[0.4em] text-white/80 mb-3 block">
              Autumn / Winter Anthology
            </span>
            <h2 className="font-headline text-5xl md:text-7xl text-white mb-8 leading-[1.1] font-light">
              The Winter <br /> Anthology
            </h2>
          </motion.div>
          <motion.button 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            onClick={() => {
              // Direct navigation to the hero outfit: Fluid Silk Slip Dress!
              setSelectedProductById("fluid-silk-slip-dress");
              setView("product-detail");
            }}
            className="bg-black hover:bg-neutral-800 text-white px-10 py-5 text-xs tracking-[0.2em] font-medium transition-all duration-300 border border-neutral-800 focus:outline-none focus:ring-1 focus:ring-white"
            id="hero-shop-look-btn"
          >
            SHOP THE LOOK
          </motion.button>
        </div>
      </section>

      {/* Category Carousel */}
      <section className="mt-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 border-b border-black/5 pb-4">
          <h3 className="font-headline text-2xl font-light">Collections</h3>
          <button 
            onClick={() => {
              setSelectedCategory("All");
              setView("shop");
            }}
            className="font-sans text-xs uppercase tracking-widest border-b border-black pb-1 hover:opacity-60 transition-opacity focus:outline-none"
            id="view-all-collections-btn"
          >
            VIEW ALL
          </button>
        </div>

        <div className="flex overflow-x-auto hide-scrollbar gap-10 md:gap-16 pb-4 -mx-6 px-6">
          {CATEGORIES.map((cat, idx) => (
            <motion.button
              key={cat.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              onClick={() => handleCategorySelect(cat.name)}
              className="flex flex-col items-center flex-shrink-0 group focus:outline-none"
              id={`category-item-${cat.name.toLowerCase()}`}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border border-black/10 p-1 mb-4 group-hover:border-black/50 transition-colors duration-300">
                <img 
                  alt={cat.name} 
                  className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500 scale-102 group-hover:scale-108"
                  src={cat.image}
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-sans text-xs tracking-[0.15em] uppercase text-black/70 group-hover:text-black font-medium transition-colors">
                {cat.name}
              </span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Featured Editorial Grid */}
      <section className="mt-28 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12">
        <div className="col-span-12 mb-4">
          <p className="font-sans text-[10px] tracking-[0.4em] text-neutral-400 uppercase font-medium">
            Issue No. 04 — Essentialism
          </p>
        </div>

        {/* Left Column: Wide Portrait */}
        <div className="col-span-12 md:col-span-7 pr-4 group">
          <div 
            onClick={() => {
              setSelectedProductById("the-monolith-coat");
              setView("product-detail");
            }}
            className="bg-neutral-100 aspect-[4/5] w-full overflow-hidden cursor-pointer"
          >
            <img 
              alt="The Monolith Coat Editorial" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-103"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjT8Yi2sesfMugzSPwC2ObE0tGGPcdSRc-qH5uSTeIwN9n7fN-C9Kww-kbi0cAEK0Swc2vufkOyFs800ecT0kAQcD5_r_7W-076YQZ-Cp6fMb9So3fOpUkq_Sc1445QxNR6oCn6V6yf5ZOorFaQjDvXeCIiQxuzWFVYilA-ge7QA2b1-M7eARcfDTGnngddVpTQPuG-STk8NvmpQi57GNLAgNAnZkFrgX8UOzS9ljZOKlOFbI264Jf7yf-jXE2fTDNjN5Hpi4t98k"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="mt-6 max-w-lg">
            <h4 className="font-headline text-2xl font-light mb-2 group-hover:opacity-80 transition-opacity">The Monolith Coat</h4>
            <p className="font-sans text-sm text-neutral-600 leading-relaxed font-light">
              Structural integrity meets raw silk. A study in architectural volume for the modern nomad.
            </p>
            <button 
              onClick={() => {
                setSelectedProductById("the-monolith-coat");
                setView("product-detail");
              }}
              className="mt-3 font-sans text-xs uppercase tracking-widest border-b border-black pb-0.5 hover:opacity-60 transition-opacity focus:outline-none"
            >
              DETAILS
            </button>
          </div>
        </div>

        {/* Right Column: Tall Vertical Detail */}
        <div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-24 group">
          <div 
            onClick={() => {
              setSelectedCategory("All");
              setView("shop");
            }}
            className="bg-neutral-100 aspect-[2/3] w-full overflow-hidden cursor-pointer"
          >
            <img 
              alt="Leaf Shadows Detail" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-103"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3qwjL2PuB2ZO_9Bh-m0J3PSRBVhmxsw-Xlhfzb57zurw9NZbsHXwrpaDtxPzij28CCUTaF7j2hIj-tScbOY9oSZRoKo47Go6clWeidbYUf7Tu5g3_lCd-mKioWqdZ2oUkiSVX1RZTxl9WKj-AJqmIWwLTCv9n5g_Ypzr10XitLOwAu-ugwJ_pZvrQqkamydJitPn5ZHbPRNOKCroUI9jsguKBrrnpZoebRRhjHpM7NY3MLTRDORDmEyZO-SG9I-YaHcsr-zga17c"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="mt-6">
            <button 
              onClick={() => {
                setSelectedCategory("All");
                setView("shop");
              }}
              className="font-sans text-[10px] tracking-[0.2em] text-black border-b border-black pb-1 hover:opacity-60 transition-opacity focus:outline-none uppercase font-semibold inline-flex items-center gap-2"
              id="discover-issue-btn"
            >
              DISCOVER FULL CATALOG
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </section>

      {/* Quote / Brand Statement */}
      <section className="my-36 px-6 text-center max-w-4xl mx-auto">
        <p className="font-headline italic text-2xl md:text-3xl leading-relaxed text-black/80 max-w-2xl mx-auto font-light">
          "Fashion is the most powerful art we have. It is how we present our souls to the world."
        </p>
        <div className="h-16 w-px bg-black/10 mx-auto mt-12 opacity-40"></div>
      </section>

      {/* Floating Action Button (FAB) */}
      <div className="fixed bottom-24 right-6 z-40">
        <button 
          onClick={() => {
            setSelectedCategory("All");
            setView("shop");
          }}
          className="bg-black hover:bg-neutral-800 text-white w-14 h-14 rounded-none shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all focus:outline-none"
          title="Browse all products"
          id="fab-browse-products"
        >
          <Sparkles className="w-5 h-5 stroke-[1.25]" />
        </button>
      </div>
    </motion.div>
  );
}
