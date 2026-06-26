import React from "react";
import { motion } from "motion/react";
import { Award, Leaf, Truck, Sliders } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: <Award className="w-6 h-6 text-black" />,
      title: "Premium Materials",
      description: "We source only the finest Italian velvets, Belgian linens, heavy-weight bouclés, and solid handwaxed timbers, selected for their tactile feel and lifetime longevity."
    },
    {
      icon: <Leaf className="w-6 h-6 text-black" />,
      title: "Sustainable Wood",
      description: "Crafted exclusively from FSC-certified wind-fallen local timber. Finished with non-toxic, organic plant-based oils that respect the natural environment."
    },
    {
      icon: <Truck className="w-6 h-6 text-black" />,
      title: "Complimentary Delivery",
      description: "Our dedicated delivery team ensures your hand-crafted pieces are brought to your room of choice, assembled, and polished to perfection at no extra cost."
    },
    {
      icon: <Sliders className="w-6 h-6 text-black" />,
      title: "Custom Tailoring",
      description: "Modify dimensions, alter fabrics, or configure customized wood finishes. Each piece is made to order to reflect the unique geometry of your home."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#E8DCCF]/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-xl mb-16 space-y-4 select-none text-center lg:text-left">
          <p className="text-[10px] tracking-[0.3em] font-mono text-[#777777] uppercase">
            Designed to Endure
          </p>
          <h2 className="text-[2rem] md:text-[3rem] font-light text-black leading-tight tracking-tight">
            The LuxeLiving Promise
          </h2>
          <p className="text-xs md:text-sm text-[#5f5e5e] font-light leading-relaxed">
            We believe furniture should be sculptural, structural, and sustainable. Here is how we redefine the modern home experience.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/60 backdrop-blur-md border border-[#EAEAEA] rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col space-y-6"
            >
              {/* Floating Icon Container */}
              <motion.div
                animate={{
                  y: [0, -6, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
                className="w-12 h-12 bg-[#F5EFE6] rounded-full flex items-center justify-center border border-white shadow-inner"
              >
                {feat.icon}
              </motion.div>

              {/* Title & Desc */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium tracking-wide text-black uppercase">
                  {feat.title}
                </h3>
                <p className="text-xs text-[#5f5e5e] font-light leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
