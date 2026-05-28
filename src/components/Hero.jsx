import React from "react";
import { motion } from "framer-motion";
import { RiArrowRightLine, RiPlayLine } from "react-icons/ri";

export default function Hero() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    }
  };

  const textVariants = {
    initial: { y: 60, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const cardContainerVariants = {
    initial: { scale: 0.85, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-28 md:pt-0 grid-bg">
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-accent-mint/10 blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[10%] right-[15%] w-[450px] h-[450px] rounded-full bg-emerald-500/10 blur-[130px] animate-glow-slow pointer-events-none" />
      <div className="absolute top-[40%] right-[5%] w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
        <motion.div 
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="lg:col-span-7 flex flex-col items-start text-left space-y-8"
        >
          <motion.div variants={textVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
            <span className="font-space-grotesk text-xs uppercase tracking-widest text-zinc-400">CRED members club</span>
          </motion.div>

          <motion.h1 
            variants={textVariants}
            className="font-outfit text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white"
          >
            rewards for the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-accent-mint glow-text-mint">
              ones who pay.
            </span>
          </motion.h1>

          <motion.p 
            variants={textVariants}
            className="font-plus-jakarta text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            CRED is an exclusive members-only club that rewards individuals for their high credit score and financial discipline. Pay your bills, manage cards, and unlock unparalleled luxuries.
          </motion.p>

          <motion.div 
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button className="neopop-btn-mint group flex items-center justify-center gap-2 px-8 py-4 font-space-grotesk text-sm uppercase tracking-wider">
              Download CRED
              <RiArrowRightLine className="text-base group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="neopop-btn-black group flex items-center justify-center gap-2 px-8 py-4 font-space-grotesk text-sm uppercase tracking-wider">
              Explore Rewards
              <RiPlayLine className="text-base group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            variants={textVariants}
            className="pt-6 border-t border-white/5 flex gap-8 w-full"
          >
            <div>
              <div className="font-space-grotesk text-2xl font-bold text-white">4.8</div>
              <div className="font-plus-jakarta text-xs text-zinc-500 uppercase tracking-wider">App Store Rating</div>
            </div>
            <div>
              <div className="font-space-grotesk text-2xl font-bold text-white">12M+</div>
              <div className="font-plus-jakarta text-xs text-zinc-500 uppercase tracking-wider">Active Members</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={cardContainerVariants}
          initial="initial"
          animate="animate"
          className="lg:col-span-5 relative flex items-center justify-center h-[400px] sm:h-[450px]"
        >
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [-14, -13, -14],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[240px] h-[360px] sm:w-[260px] sm:h-[390px] rounded-2xl p-6 flex flex-col justify-between border border-white/20 shadow-2xl origin-bottom bg-gradient-to-tr from-purple-900/40 via-emerald-800/40 to-slate-900/40 backdrop-blur-xl -translate-x-12 z-10"
            style={{
              transform: "rotate3d(1, 1, 1, -15deg) rotate(-14deg)",
            }}
          >
            <div className="flex justify-between items-start">
              <span className="font-space-grotesk text-lg tracking-[0.2em] font-extrabold text-white">PRIME</span>
              <div className="w-8 h-8 rounded bg-gradient-to-tr from-accent-mint to-cyan-400 opacity-60" />
            </div>
            <div className="space-y-4">
              <div className="font-space-grotesk text-sm tracking-wider text-zinc-400">•••• •••• •••• 9012</div>
              <div className="flex justify-between items-center text-xs tracking-widest text-zinc-500 uppercase">
                <span>CRED MEMBER</span>
                <span>05/29</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [8, 9, 8],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[240px] h-[360px] sm:w-[260px] sm:h-[390px] rounded-2xl p-6 flex flex-col justify-between border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] origin-bottom bg-gradient-to-b from-zinc-800 to-black z-20 translate-x-12"
            style={{
              transform: "rotate3d(1, 1, 1, 15deg) rotate(8deg)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-2xl pointer-events-none" />

            <div className="flex justify-between items-start">
              <span className="font-space-grotesk text-lg tracking-[0.2em] font-black text-white">SELECT</span>
              <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest border border-zinc-800 px-2 py-0.5 rounded">METAL</span>
            </div>

            <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-75">
              <rect width="34" height="28" rx="4" fill="#d4af37" fillOpacity="0.4" />
              <rect x="2" y="2" width="30" height="24" rx="2" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.6" />
              <path d="M2 14H32M10 2V26M24 2V26" stroke="#d4af37" strokeWidth="0.5" strokeOpacity="0.5" />
            </svg>

            <div className="space-y-4">
              <div className="font-space-grotesk text-sm tracking-widest text-zinc-300">•••• •••• •••• 4056</div>
              <div className="flex justify-between items-center">
                <div className="text-[10px] tracking-wider text-zinc-500 uppercase">
                  <div className="text-[8px] text-zinc-600">holder</div>
                  <span className="font-medium text-zinc-300">VETRI SELVAN</span>
                </div>
                <div className="text-[10px] tracking-wider text-zinc-500 uppercase text-right">
                  <div className="text-[8px] text-zinc-600">expires</div>
                  <span className="font-medium text-zinc-300">12/30</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
