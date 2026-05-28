import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onFinished }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2800);
    const finishTimer = setTimeout(() => {
      if (onFinished) onFinished();
    }, 3600);

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [onFinished]);

  const containerVariants = {
    exit: {
      y: "-100vh",
      transition: {
        duration: 0.85,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.15
      }
    }
  };

  const textContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.2 }
    }
  };

  const wordVariant = {
    initial: { y: 30, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  const barVariant = {
    initial: { width: 0 },
    animate: { 
      width: "120px",
      transition: { duration: 1.1, ease: "easeInOut", delay: 1.1 } 
    }
  };

  const words = ["rewards", "for", "the", "ones", "who", "pay."];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black select-none"
        >
          <div className="absolute w-[500px] h-[500px] rounded-full bg-accent-mint/5 blur-[120px] pointer-events-none" />

          <motion.div
            variants={textContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center space-y-6 text-center"
          >
            <motion.div 
              variants={wordVariant}
              className="font-outfit text-4xl sm:text-5xl font-black tracking-[0.25em] text-white"
            >
              CRED
            </motion.div>

            <div className="flex flex-wrap justify-center gap-x-2 font-space-grotesk text-sm sm:text-base tracking-[0.15em] text-zinc-500 uppercase font-light">
              {words.map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={wordVariant}
                  className={idx === words.length - 1 ? "text-accent-mint font-medium" : ""}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            <motion.div 
              variants={barVariant}
              className="h-[1.5px] bg-accent-mint shadow-[0_0_8px_#6ee7b7]"
            />
          </motion.div>

          <div className="absolute bottom-10 font-plus-jakarta text-xs text-zinc-600 tracking-wider">
            CRED CLONE &bull; PREMIUM EXPERIENCE
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
