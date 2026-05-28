import React, { useState } from "react";
import { motion } from "framer-motion";
import { RiCheckDoubleLine, RiArrowRightUpLine, RiCopperCoinLine, RiSmartphoneLine } from "react-icons/ri";

export default function NeoPopSection() {
  const [activeCard, setActiveCard] = useState(null);

  const containerVariants = {
    initial: {},
    animate: {
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
    <section id="rewards" className="relative py-24 sm:py-32 bg-[#111111] overflow-hidden border-b border-white/5">
      <div className="absolute top-[20%] left-[30%] w-[350px] h-[350px] rounded-full bg-accent-mint/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-emerald-800/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col text-left space-y-8 max-w-xl"
        >
          <span className="font-space-grotesk text-xs uppercase tracking-widest text-accent-mint font-semibold">
            design system
          </span>
          
          <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-none">
            NeoPOP interface. <br />
            tactile. responsive. <br />
            <span className="text-zinc-500 font-light">beautifully bold.</span>
          </h2>

          <p className="font-plus-jakarta text-zinc-400 text-base leading-relaxed">
            Inspired by the classic physical interactions of keypads, games, and industrial modules. NeoPOP uses solid 3D shadows, bold borders, and vibrant colors to make every click feel satisfying and real. No fake gradients, just raw modern design.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button className="neopop-btn-mint px-6 py-3.5 font-space-grotesk text-xs uppercase tracking-widest">
              Mint Pill Button
            </button>
            <button className="neopop-btn-black px-6 py-3.5 font-space-grotesk text-xs uppercase tracking-widest">
              Dark Slate Button
            </button>
          </div>

          <div className="flex items-center gap-4 text-xs font-plus-jakarta text-zinc-500">
            <span className="flex items-center gap-1.5"><RiCheckDoubleLine className="text-accent-mint" /> Pixel perfect layouts</span>
            <span className="flex items-center gap-1.5"><RiCheckDoubleLine className="text-accent-mint" /> 3D hardware physics</span>
          </div>
        </motion.div>

        <div className="flex items-center justify-center relative min-h-[420px] sm:min-h-[480px]">
          <motion.div
            style={{ zIndex: activeCard === 0 ? 30 : 20 }}
            onHoverStart={() => setActiveCard(0)}
            onHoverEnd={() => setActiveCard(null)}
            animate={{
              x: activeCard === 0 ? -15 : 0,
              y: activeCard === 0 ? -25 : -40,
              rotate: activeCard === 0 ? -2 : -6,
              scale: activeCard === 0 ? 1.05 : 0.98,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute w-[280px] sm:w-[320px] p-6 rounded neopop-card-white cursor-pointer select-none"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="font-space-grotesk text-[10px] tracking-wider uppercase font-bold text-zinc-500">Transaction Status</span>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <div className="space-y-2 mb-6">
              <div className="text-2xl font-bold font-space-grotesk text-black flex items-center justify-between">
                <span>₹12,500.00</span>
                <span className="text-xs text-emerald-600 font-semibold px-2 py-0.5 bg-emerald-50 border border-emerald-200">PAID</span>
              </div>
              <div className="text-[11px] font-medium text-zinc-500">Credited to Citibank Visa Account</div>
            </div>

            <div className="border-t border-zinc-200 pt-4 flex justify-between items-center text-xs text-zinc-600">
              <span className="flex items-center gap-1"><RiSmartphoneLine /> UPI Direct</span>
              <span className="font-semibold text-black flex items-center gap-0.5">Success <RiArrowRightUpLine /></span>
            </div>
          </motion.div>

          <motion.div
            style={{ zIndex: activeCard === 1 ? 30 : 15 }}
            onHoverStart={() => setActiveCard(1)}
            onHoverEnd={() => setActiveCard(null)}
            animate={{
              x: activeCard === 1 ? 25 : 20,
              y: activeCard === 1 ? -5 : 10,
              rotate: activeCard === 1 ? 4 : 2,
              scale: activeCard === 1 ? 1.05 : 0.96,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute w-[280px] sm:w-[320px] p-6 rounded neopop-card-black cursor-pointer select-none"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-1.5">
                <RiCopperCoinLine className="text-yellow-500 text-lg" />
                <span className="font-space-grotesk text-[10px] tracking-wider uppercase font-bold text-zinc-400">Coins Ledger</span>
              </div>
              <span className="text-[9px] font-bold tracking-wider text-accent-mint bg-accent-mint/10 border border-accent-mint/20 px-1.5 py-0.5 rounded">EARNED</span>
            </div>

            <div className="space-y-1 mb-6">
              <div className="text-3xl font-black font-space-grotesk text-white">45,820</div>
              <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-widest">Available CRED coins</div>
            </div>

            <div className="border-t border-zinc-800 pt-4 flex justify-between items-center">
              <span className="text-xs text-zinc-500">Burn to redeem gifts</span>
              <span className="text-xs text-accent-mint font-semibold flex items-center gap-0.5 hover:underline">Claim <RiArrowRightUpLine /></span>
            </div>
          </motion.div>

          <motion.div
            style={{ zIndex: activeCard === 2 ? 30 : 10 }}
            onHoverStart={() => setActiveCard(2)}
            onHoverEnd={() => setActiveCard(null)}
            animate={{
              x: activeCard === 2 ? -20 : -10,
              y: activeCard === 2 ? 40 : 60,
              rotate: activeCard === 2 ? -4 : 8,
              scale: activeCard === 2 ? 1.05 : 0.92,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute w-[280px] sm:w-[320px] p-6 rounded bg-neutral-900 border border-zinc-800 shadow-[8px_8px_0px_#f43f5e] cursor-pointer select-none"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="font-space-grotesk text-sm font-bold text-white uppercase tracking-wider">Jackpot Claimed</h4>
                <p className="text-[10px] text-zinc-500">Redeemed via coin burn</p>
              </div>
              <span className="text-[9px] font-bold text-rose-500 border border-rose-500/20 px-2 py-0.5 bg-rose-500/5">CLAIMED</span>
            </div>

            <div className="space-y-2 text-zinc-300">
              <div className="text-lg font-bold font-outfit text-white">Marshall Major IV</div>
              <div className="text-xs text-zinc-400">Premium Wireless On-Ear Headphones</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
