import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Security", href: "#security" },
  { label: "Rewards", href: "#rewards" },
  { label: "Download App", href: "#download" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled 
            ? "py-4 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-white/5 shadow-lg" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="font-outfit text-2xl font-black tracking-[0.2em] text-white flex items-center gap-1">
            CRED
            <span className="w-1.5 h-1.5 rounded-full bg-accent-mint animate-pulse" />
          </a>

          <div className="hidden md:flex items-center space-x-2">
            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative px-4 py-2 font-space-grotesk text-sm font-medium tracking-wide text-zinc-300 hover:text-white transition-colors duration-300"
              >
                {hoveredIdx === idx && (
                  <motion.span
                    layoutId="nav-glow-pill"
                    className="absolute inset-0 bg-white/5 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <button className="neopop-btn-mint px-5 py-2 font-space-grotesk text-xs tracking-wider uppercase">
              Login
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl text-white hover:text-accent-mint transition-colors p-1"
          >
            {isMobileMenuOpen ? <RiCloseLine /> : <RiMenu4Line />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 pt-28 pb-8 px-6 bg-black/95 backdrop-blur-xl md:hidden flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-6">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-outfit text-3xl font-light tracking-wide text-zinc-300 hover:text-white hover:pl-2 transition-all duration-300 border-b border-white/5 pb-4"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 mt-8"
            >
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="neopop-btn-mint w-full py-4 text-center font-space-grotesk text-sm tracking-widest uppercase"
              >
                Login
              </button>
              <p className="text-center font-plus-jakarta text-xs text-zinc-500 tracking-wider">
                rewards for the ones who pay.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
