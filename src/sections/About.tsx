import React from "react";
import { motion } from "motion/react";

export default function About() {
  const textBlocks = [
    {
      title: "Our Heritage",
      content: "Founded in Florence, Italy, LuxeLiving began as a small collective of timber artisans. Today, we bridge centuries-old joinery traditions with modern architectural sensibilities, creating statement pieces that command presence."
    },
    {
      title: "Honest Craftsmanship",
      content: "No staples, no cheap veneers, and no shortcuts. Every joint is locked using traditional mortise-and-tenon techniques. Every contour is hand-carved and hand-waxed, ensuring that no two pieces are identical."
    },
    {
      title: "Ecological Responsibility",
      content: "We believe luxury shouldn't cost the Earth. We construct using wind-fallen local hardwoods and certified sustainable groves. For every piece created, we plant ten native trees in partnershop with local forestry agencies."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-[#E8DCCF]/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Elegant Imagery */}
          <div className="lg:col-span-6 relative group select-none">
            {/* Outline highlight frame */}
            <div className="absolute inset-4 border border-white/40 rounded-xl z-20 pointer-events-none" />

            {/* Solid accent background offset */}
            <div className="absolute top-6 left-6 -right-6 -bottom-6 bg-[#E8DCCF]/40 rounded-xl -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />

            {/* Main Image */}
            <div className="aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5] rounded-xl overflow-hidden shadow-lg border border-[#EAEAEA]/80">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
                alt="LuxeLiving Carpentry Workshop"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Float badge */}
            <div className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-md border border-[#EAEAEA] rounded-lg p-5 shadow-lg max-w-[200px]">
              <span className="text-[9px] tracking-widest font-mono text-[#777777] uppercase block mb-1">
                HANDCRAFTED IN
              </span>
              <span className="text-xs font-semibold text-black tracking-wider uppercase block">
                FLORENCE, ITALY
              </span>
              <p className="text-[10px] text-[#5f5e5e] font-light mt-1.5 leading-relaxed">
                Using wind-fallen native European timbers.
              </p>
            </div>
          </div>

          {/* Right Side: Editorial Storytelling */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 flex flex-col justify-center space-y-10"
          >
            {/* Header info */}
            <motion.div variants={textVariants} className="space-y-4 text-center lg:text-left select-none">
              <p className="text-[10px] tracking-[0.3em] font-mono text-[#777777] uppercase">
                The Heritage
              </p>
              <h2 className="text-[2rem] md:text-[3rem] font-light text-black leading-tight tracking-tight">
                Quiet Luxury, <br className="hidden md:inline" />
                Designed to Outlast
              </h2>
            </motion.div>

            {/* Story Blocks */}
            <div className="space-y-8">
              {textBlocks.map((block, idx) => (
                <motion.div
                  key={idx}
                  variants={textVariants}
                  className="space-y-2 border-l border-[#EAEAEA] pl-6 hover:border-black transition-colors duration-300"
                >
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-black">
                    {block.title}
                  </h3>
                  <p className="text-xs text-[#5f5e5e] font-light leading-relaxed">
                    {block.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
