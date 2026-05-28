import React from "react";
import { motion } from "framer-motion";

export default function TrustSection() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    initial: { y: 40, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#0c0c0c] overflow-hidden border-y border-white/5">
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-accent-mint/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col text-left space-y-6 max-w-xl"
        >
          <motion.span 
            variants={itemVariants} 
            className="font-space-grotesk text-xs uppercase tracking-widest text-accent-mint font-semibold"
          >
            members-only club
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="font-outfit text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
          >
            the club of the premium & disciplined.
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="font-plus-jakarta text-zinc-400 text-base sm:text-lg leading-relaxed"
          >
            CRED is not for everyone. It is a curated ecosystem built exclusively for individuals who value financial integrity and maintain credit discipline. By admitting only high-credit individuals, we forge a circle of trust that institutions respect.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="font-plus-jakarta text-zinc-500 text-sm leading-relaxed"
          >
            Our members enjoy direct perks, zero-effort credit tracking, security from hidden charges, and elite experiences from global brands. It's a luxury you earned.
          </motion.p>

          <motion.div 
            variants={itemVariants} 
            className="pt-4"
          >
            <div className="inline-block p-0.5 bg-gradient-to-r from-zinc-700 to-zinc-900 shadow-xl">
              <div className="bg-black px-6 py-3 font-space-grotesk text-xs uppercase tracking-widest text-zinc-300">
                membership score benchmark: <span className="text-white font-bold">750+</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex items-center justify-center lg:justify-end">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow" />
            <div className="absolute inset-4 rounded-full border-2 border-dashed border-zinc-800/60 animate-spin-slow" style={{ animationDirection: "reverse" }} />

            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-full bg-gradient-to-r from-zinc-900 via-neutral-800 to-zinc-700 p-[1.5px] shadow-[0_0_50px_rgba(255,255,255,0.05),inset_0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-[8px] rounded-full bg-black flex flex-col items-center justify-center border border-zinc-800">
                <span className="font-outfit text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-yellow-500 via-amber-200 to-yellow-600 tracking-wider">C</span>
                <span className="font-space-grotesk text-[8px] sm:text-[10px] tracking-[0.3em] text-zinc-500 uppercase mt-2">EXCLUSIVE</span>
              </div>

              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
