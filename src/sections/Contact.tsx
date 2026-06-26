import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleFocus = (field: string) => {
    setFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string, value: string) => {
    if (!value) {
      setFocused((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}. Our concierge team will reach out within 24 hours.`);
    setForm({ name: "", email: "", message: "" });
    setFocused({ name: false, email: false, message: false });
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Modern Form */}
          <div className="lg:col-span-6 bg-[#FAF9F6] border border-[#EAEAEA] rounded-xl p-8 md:p-10 shadow-sm">
            <div className="space-y-3 mb-8 select-none">
              <p className="text-[10px] tracking-[0.3em] font-mono text-[#777777] uppercase">
                Concierge desk
              </p>
              <h3 className="text-xl md:text-2xl font-light text-black tracking-wide">
                Enquire About a Creation
              </h3>
              <p className="text-xs text-[#777777] font-light leading-relaxed">
                Connect with our design concierge to book a private consultation, request fabric swatches, or configure custom sizing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative border-b border-[#C6C6C6] focus-within:border-black transition-colors duration-300 py-2">
                <label
                  className={`absolute left-0 bottom-2 text-xs text-[#777777] tracking-wider transition-all duration-300 pointer-events-none ${
                    focused.name || form.name ? "-translate-y-6 text-[10px] text-black font-semibold" : ""
                  }`}
                >
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onFocus={() => handleFocus("name")}
                  onBlur={() => handleBlur("name", form.name)}
                  className="w-full bg-transparent text-xs text-black border-none focus:outline-none focus:ring-0 pt-2"
                />
              </div>

              {/* Email Field */}
              <div className="relative border-b border-[#C6C6C6] focus-within:border-black transition-colors duration-300 py-2">
                <label
                  className={`absolute left-0 bottom-2 text-xs text-[#777777] tracking-wider transition-all duration-300 pointer-events-none ${
                    focused.email || form.email ? "-translate-y-6 text-[10px] text-black font-semibold" : ""
                  }`}
                >
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onFocus={() => handleFocus("email")}
                  onBlur={() => handleBlur("email", form.email)}
                  className="w-full bg-transparent text-xs text-black border-none focus:outline-none focus:ring-0 pt-2"
                />
              </div>

              {/* Message Field */}
              <div className="relative border-b border-[#C6C6C6] focus-within:border-black transition-colors duration-300 py-2">
                <label
                  className={`absolute left-0 top-2 text-xs text-[#777777] tracking-wider transition-all duration-300 pointer-events-none ${
                    focused.message || form.message ? "-translate-y-5 text-[10px] text-black font-semibold" : ""
                  }`}
                >
                  TELL US ABOUT YOUR SPACE
                </label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={() => handleFocus("message")}
                  onBlur={() => handleBlur("message", form.message)}
                  className="w-full bg-transparent text-xs text-black border-none focus:outline-none focus:ring-0 pt-2 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-black text-white hover:bg-black/90 py-3.5 px-6 rounded-md text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2 shadow-md transform active:scale-[0.98] mt-8"
              >
                <span>SEND INQUIRY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right Side: Coordinates & Grayscale Map */}
          <div className="lg:col-span-6 space-y-10">
            {/* Contacts Info */}
            <div className="space-y-6 select-none">
              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 rounded-full bg-[#FAF9F6] border border-[#EAEAEA] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-black uppercase tracking-wider">
                    Florence Atelier
                  </h4>
                  <p className="text-xs text-[#777777] font-light leading-relaxed mt-1">
                    Piazza della Signoria, 5, 50122 Firenze FI, Italy
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 rounded-full bg-[#FAF9F6] border border-[#EAEAEA] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-black uppercase tracking-wider">
                    Concierge Line
                  </h4>
                  <p className="text-xs text-[#777777] font-light leading-relaxed mt-1">
                    +39 055 27681 (Mon - Fri, 9am - 6pm CET)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 rounded-full bg-[#FAF9F6] border border-[#EAEAEA] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-black uppercase tracking-wider">
                    Digital Concierge
                  </h4>
                  <p className="text-xs text-[#777777] font-light leading-relaxed mt-1">
                    concierge@luxeliving.com
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map with Luxury Grayscale Styling */}
            <div className="w-full h-[250px] md:h-[300px] rounded-xl overflow-hidden border border-[#EAEAEA] shadow-inner relative group select-none">
              {/* Map Iframe */}
              <iframe
                title="LuxeLiving Florence Atelier Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.087428807952!2d11.254131583091993!3d43.769865615707786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5401df4f6e37%3A0xc4aa0e37bc67bd0a!2sPiazza%20della%20Signoria%2C%20Firenze!5e0!3m2!1sen!2sit!4v1700000000000!5m2!1sen!2sit"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 border border-[#EAEAEA]/80 rounded-xl pointer-events-none" />
            </div>

            {/* Social Coordinates */}
            <div className="flex items-center space-x-6 select-none pt-2">
              <span className="text-[10px] tracking-widest font-mono text-[#777777] uppercase">
                Follow Us:
              </span>
              <div className="flex items-center space-x-4">
                {["Instagram", "Pinterest", "Journal", "LinkedIn"].map((social) => (
                  <a
                    key={social}
                    href={`#${social.toLowerCase()}`}
                    className="text-xs text-[#777777] hover:text-black transition-colors uppercase tracking-wider font-light"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
