import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background Soft Gradients */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#FAF9F6] blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#E8DCCF]/15 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-xl mx-auto mb-16 select-none">
          <p className="text-[10px] tracking-[0.3em] font-mono text-[#777777] uppercase">
            Voices of luxury
          </p>
          <h2 className="text-[2rem] md:text-[3rem] font-light text-black leading-tight tracking-tight">
            Client Experiences
          </h2>
          <p className="text-xs md:text-sm text-[#777777] font-light leading-relaxed">
            Read stories of how LuxeLiving helps collectors, designers, and homeowners realize their space's architectural potential.
          </p>
        </div>

        {/* Swiper Slider Wrapper */}
        <div className="pb-12 testimonial-swiper">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            breakpoints={{
              768: {
                slidesPerView: 2
              }
            }}
            className="p-4"
          >
            {TESTIMONIALS.map((test) => (
              <SwiperSlide key={test.id}>
                <div className="h-full bg-[#FAF9F6]/80 backdrop-blur-md border border-[#EAEAEA] rounded-2xl p-8 md:p-10 flex flex-col justify-between space-y-6 hover:shadow-lg transition-shadow duration-300 relative group">
                  
                  {/* Frosted Quote Icon overlay */}
                  <Quote className="absolute top-6 right-8 w-12 h-12 text-[#E8DCCF]/30 pointer-events-none" />

                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 select-none">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-black text-black" />
                    ))}
                  </div>

                  {/* Quote Body */}
                  <p className="text-xs md:text-sm text-[#3C3B3B] font-light leading-relaxed italic">
                    "{test.quote}"
                  </p>

                  {/* Customer Info Card */}
                  <div className="flex items-center space-x-4 border-t border-[#EAEAEA]/60 pt-4 select-none">
                    <img
                      src={test.avatar}
                      alt={test.name}
                      className="w-10 h-10 rounded-full object-cover border border-white shadow-sm"
                    />
                    <div>
                      <h4 className="text-xs font-semibold text-black uppercase tracking-wider">
                        {test.name}
                      </h4>
                      <p className="text-[10px] text-[#777777] font-mono tracking-wide mt-0.5">
                        {test.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Swiper bullet CSS adjustments in style tag */}
      <style>{`
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #000000 !important;
          width: 20px;
          border-radius: 4px;
        }
        .testimonial-swiper .swiper-pagination-bullet {
          background: #777777;
        }
      `}</style>
    </section>
  );
}
