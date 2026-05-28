import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCreative } from "swiper/modules";
import { RiDoubleQuotesR, RiStarFill } from "react-icons/ri";
import { TESTIMONIALS_DATA, STATS_DATA } from "../data/mockData";

import "swiper/css";
import "swiper/css/pagination";

function AnimatedCounter({ value, duration = 1.5, suffix = "", isDecimal = false }) {
  const [count, setCount] = useState(0);
  const [hasRun, setHasRun] = useState(false);

  return (
    <motion.span
      whileInView={() => {
        if (!hasRun) {
          setHasRun(true);
          const start = 0;
          const end = value;
          const steps = 50;
          const stepTime = (duration * 1000) / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const currentVal = start + (end - start) * progress;

            if (currentStep >= steps) {
              clearInterval(timer);
              setCount(end);
            } else {
              setCount(isDecimal ? parseFloat(currentVal.toFixed(1)) : Math.floor(currentVal));
            }
          }, stepTime);
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {count}
      {suffix}
    </motion.span>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0f0f0f] overflow-hidden">
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-accent-mint/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center divide-y md:divide-y-0 md:divide-x divide-white/5">
          {STATS_DATA.map((stat) => (
            <div key={stat.id} className="pt-8 md:pt-0 md:px-6 space-y-2">
              <div className="font-outfit text-5xl sm:text-6xl font-black text-white tracking-tight">
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  isDecimal={stat.id === "app-rating"}
                />
              </div>
              <div className="font-space-grotesk text-xs uppercase tracking-widest text-zinc-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="font-space-grotesk text-xs uppercase tracking-widest text-accent-mint font-semibold">
            feedback
          </span>
          <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            trusted by the pioneers.
          </h2>
          <p className="font-plus-jakarta text-zinc-400 text-sm max-w-md mx-auto">
            Read what our exclusive club members say about their financial experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <Swiper
            modules={[Autoplay, Pagination, EffectCreative]}
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-10%", 0, -1],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-zinc-700 !opacity-50",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-accent-mint !opacity-100",
            }}
            className="pb-16"
          >
            {TESTIMONIALS_DATA.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="rounded-2xl p-8 sm:p-12 glass-card flex flex-col justify-between relative text-left select-none min-h-[280px]">
                  <RiDoubleQuotesR className="absolute right-8 top-8 text-white/5 text-7xl sm:text-9xl pointer-events-none" />

                  <div className="flex gap-1 text-yellow-500 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <RiStarFill key={i} className="text-sm" />
                    ))}
                  </div>

                  <p className="font-plus-jakarta text-white text-lg sm:text-xl font-light leading-relaxed mb-8 relative z-10">
                    "{testimonial.comment}"
                  </p>

                  <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border border-white/10"
                    />
                    <div>
                      <div className="font-outfit text-sm font-bold text-white tracking-wide">
                        {testimonial.name}
                      </div>
                      <div className="font-space-grotesk text-xs text-zinc-500 uppercase tracking-wider">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
