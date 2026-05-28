import React from "react";
import { motion } from "framer-motion";
import { FEATURES_DATA } from "../data/mockData";

export default function Features() {
  const containerVariants = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const handleMouseMove = (e, id) => {
    const card = document.getElementById(id);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="features" className="relative py-24 sm:py-32 bg-[#0f0f0f] overflow-hidden">
      <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-accent-mint/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-space-grotesk text-xs uppercase tracking-widest text-accent-mint font-semibold">
            what we offer
          </span>
          <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            financial control, <br className="sm:hidden" /> refined.
          </h2>
          <p className="font-plus-jakarta text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Explore the products crafted to simplify your financial routine and unlock premium benefits tailored just for you.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {FEATURES_DATA.map((feat) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.id}
                id={feat.id}
                variants={cardVariants}
                onMouseMove={(e) => handleMouseMove(e, feat.id)}
                className="group relative rounded-2xl p-8 glass-card glass-card-hover overflow-hidden flex flex-col justify-between min-h-[320px] cursor-default"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255,255,255,0.04), transparent 80%)`
                  }}
                />

                <div className="space-y-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-500 group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${feat.color}0a`, 
                      borderColor: `${feat.color}33`, 
                      color: feat.color 
                    }}
                  >
                    <Icon className="text-2xl" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-outfit text-xl font-bold text-white tracking-wide">
                      {feat.title}
                    </h3>
                    <p className="font-plus-jakarta text-zinc-400 text-sm leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6 flex justify-between items-center">
                  <span className="font-space-grotesk text-[10px] uppercase tracking-widest text-zinc-500">
                    benefit status
                  </span>
                  <span 
                    className="font-space-grotesk text-[11px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-zinc-300 transition-colors group-hover:text-accent-mint"
                  >
                    {feat.accentText}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
