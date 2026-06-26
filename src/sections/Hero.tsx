import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import HeroCanvas from "../components/3D/HeroCanvas";

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const handleScrollDown = () => {
    const featuredEl = document.getElementById("featured");
    if (featuredEl) {
      featuredEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-[#FAF9F6] flex flex-col justify-center items-center overflow-hidden pt-20"
    >
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* Background Soft Glows */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-[#E8DCCF]/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[450px] h-[450px] rounded-full bg-[#F5EFE6]/35 blur-[120px] pointer-events-none" />

      {/* Main Split Grid */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 flex-grow items-center z-10 py-12">
        
        {/* Left Side: Luxury Copy & CTAs */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 flex flex-col justify-center space-y-8 select-none order-2 lg:order-1 text-center lg:text-left"
        >
          {/* Collection Tag */}
          <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start space-x-2">
            <span className="h-[1px] w-8 bg-black"></span>
            <span className="text-[10px] tracking-[0.3em] text-[#777777] uppercase font-mono font-medium">
              Autumn Collection 2026
            </span>
          </motion.div>

          {/* Headline Reveal */}
          <motion.h1 
            variants={itemVariants} 
            className="text-[2.25rem] md:text-[3.5rem] xl:text-[4rem] font-light leading-[1.1] text-black tracking-tight font-sans"
          >
            Transform Your Space <br className="hidden md:inline" />
            with <span className="font-extralight italic serif">Timeless</span> Furniture
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={itemVariants} 
            className="text-[#5f5e5e] text-sm md:text-base font-light tracking-wide max-w-[450px] mx-auto lg:mx-0 leading-relaxed font-sans"
          >
            Discover handcrafted luxury furniture designed to elevate modern living. Crafted in Italy, curated for you.
          </motion.p>

          {/* Call-to-actions */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button
              onClick={() => {
                const configEl = document.getElementById("configurator");
                if (configEl) configEl.scrollIntoView({ behavior: "smooth" });
              }}
              className="group bg-black text-white hover:bg-black/90 py-3.5 px-8 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center space-x-2 shadow-lg"
            >
              <span>EXPLORE PIECES</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={() => alert("Playing LuxeLiving brand film in mock modal.")}
              className="group border border-[#C6C6C6] hover:border-black py-3.5 px-8 rounded-full text-xs font-semibold tracking-widest text-black uppercase transition-all duration-300 flex items-center space-x-2 bg-transparent"
            >
              <Play className="w-3 h-3 text-black fill-black group-hover:scale-110 transition-transform" />
              <span>WATCH STORY</span>
            </button>
          </motion.div>

          {/* Micro stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 border-t border-[#EAEAEA] pt-6 mt-8 max-w-[400px] mx-auto lg:mx-0"
          >
            <div>
              <p className="text-sm font-semibold font-mono text-black">100%</p>
              <p className="text-[10px] text-[#777777] uppercase tracking-wider">Sustainable</p>
            </div>
            <div>
              <p className="text-sm font-semibold font-mono text-black">12+</p>
              <p className="text-[10px] text-[#777777] uppercase tracking-wider">Collections</p>
            </div>
            <div>
              <p className="text-sm font-semibold font-mono text-black">Italian</p>
              <p className="text-[10px] text-[#777777] uppercase tracking-wider">Artisanship</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive 3D Sofa model */}
        <div className="lg:col-span-7 h-[350px] md:h-[500px] lg:h-[600px] w-full order-1 lg:order-2 rounded-2xl overflow-hidden relative">
          <HeroCanvas />

          {/* Interactive Hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/70 backdrop-blur-md border border-[#EAEAEA] rounded-full px-4 py-1.5 text-[9px] text-[#777777] font-mono tracking-widest pointer-events-none select-none">
            DRAG TO ROTATE EXPERIENCE
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.0, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 flex flex-col items-center cursor-pointer group z-20"
      >
        <span className="text-[9px] text-[#777777] tracking-[0.2em] uppercase font-mono group-hover:text-black transition-colors mb-2">
          Scroll to explore
        </span>
        <ChevronDown className="w-4 h-4 text-[#777777] group-hover:text-black transition-colors" />
      </motion.button>
    </section>
  );
}
