import React from "react";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for joining our private registry. We will send you exclusive collection previews.");
  };

  return (
    <footer className="bg-[#FAF9F6] border-t border-[#EAEAEA] py-16 md:py-20 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Upper Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-16">
          
          {/* Col 1: Brand details */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-lg font-light tracking-[0.25em] text-black block">
              LUXELIVING
            </span>
            <p className="text-xs text-[#777777] font-light leading-relaxed max-w-sm">
              Crafting contemporary furniture with heirloom longevity. We combine traditional Italian woodworking joinery with modern design aesthetics to create spaces of presence and peace.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-semibold tracking-widest text-black uppercase font-mono">
              Collections
            </h4>
            <div className="flex flex-col space-y-2.5">
              {["Modern Sofas", "Dining Tables", "Luxury Beds", "Office Furniture", "New Releases"].map((link) => (
                <a
                  key={link}
                  href="#featured"
                  className="text-xs text-[#777777] hover:text-black transition-colors font-light"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Assistance */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-semibold tracking-widest text-black uppercase font-mono">
              Registry
            </h4>
            <div className="flex flex-col space-y-2.5">
              {["Private Showroom", "Book Consultation", "Care & Maintenance", "Swatch Requests", "Atelier FAQ"].map((link) => (
                <a
                  key={link}
                  href="#contact"
                  className="text-xs text-[#777777] hover:text-black transition-colors font-light"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[10px] font-semibold tracking-widest text-black uppercase font-mono">
              Atelier Registry
            </h4>
            <p className="text-xs text-[#777777] font-light leading-relaxed">
              Subscribe to receive private collection previews, archival sales, and interior stories.
            </p>
            <form onSubmit={handleSubscribe} className="flex items-center border-b border-[#C6C6C6] py-1.5 focus-within:border-black transition-colors duration-300">
              <input
                type="email"
                required
                placeholder="YOUR EMAIL"
                className="w-full bg-transparent border-none text-xs text-black focus:outline-none focus:ring-0 placeholder:text-[#777777]/60"
              />
              <button
                type="submit"
                className="p-1 hover:translate-x-1 transition-transform"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#EAEAEA] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[10px] text-[#777777] tracking-wider text-center md:text-left">
            © 2026 LUXELIVING FURNITURE. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex items-center space-x-6">
            {["Terms of Use", "Privacy Policy", "Ecological Ledger"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[10px] text-[#777777] hover:text-black transition-colors uppercase tracking-wider font-light"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
