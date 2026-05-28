import React from "react";
import { motion } from "framer-motion";
import { SECURITY_DATA } from "../data/mockData";
import { RiShieldKeyholeLine } from "react-icons/ri";

export default function SecuritySection() {
  const containerVariants = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="security" className="relative py-24 sm:py-32 bg-[#0c0c0c] overflow-hidden border-t border-white/5">
      <div className="absolute top-[50%] left-[5%] w-[450px] h-[450px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-accent-mint/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 flex flex-col items-center justify-center text-center space-y-6">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] flex items-center justify-center border border-white/5 rounded-full"
          >
            <div className="absolute inset-4 rounded-full border border-accent-mint/10 border-dashed animate-pulse" />
            <div className="absolute inset-10 rounded-full border border-dashed border-zinc-800" />
            
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 20px rgba(110, 231, 183, 0.1)",
                  "0 0 40px rgba(110, 231, 183, 0.25)",
                  "0 0 20px rgba(110, 231, 183, 0.1)"
                ]
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full bg-neutral-900 border border-accent-mint/35 flex items-center justify-center z-10"
            >
              <RiShieldKeyholeLine className="text-5xl sm:text-6xl text-accent-mint animate-pulse" />
            </motion.div>
          </motion.div>

          <div className="space-y-2">
            <span className="font-space-grotesk text-xs uppercase tracking-widest text-zinc-500">certified network</span>
            <h3 className="font-outfit text-xl font-bold text-white tracking-wide">PCI-DSS Compliant</h3>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 flex flex-col justify-center text-left space-y-12"
        >
          <div className="space-y-4">
            <span className="font-space-grotesk text-xs uppercase tracking-widest text-accent-mint font-semibold">
              security
            </span>
            <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-none">
              we protect what is <br />
              important to you.
            </h2>
            <p className="font-plus-jakarta text-zinc-400 text-sm sm:text-base max-w-xl">
              CRED keeps your bank account details, card credentials, and transactions secure under military-grade security frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {SECURITY_DATA.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  className="p-6 rounded-xl glass-card transition-all duration-300 hover:border-accent-mint/25 group hover:shadow-[0_0_20px_rgba(110,231,183,0.06)]"
                >
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center text-accent-mint text-xl mb-4 group-hover:scale-115 transition-transform duration-300">
                    <Icon />
                  </div>
                  <h4 className="font-outfit text-base font-bold text-white tracking-wide mb-2">
                    {item.title}
                  </h4>
                  <p className="font-plus-jakarta text-zinc-400 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
