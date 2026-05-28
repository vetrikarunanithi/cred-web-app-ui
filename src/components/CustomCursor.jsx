import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("interactive") ||
        target.closest(".interactive");

      setIsHovered(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          width: isHovered ? 64 : isClicking ? 28 : 40,
          height: isHovered ? 64 : isClicking ? 28 : 40,
          backgroundColor: isHovered ? "rgba(110, 231, 183, 0.05)" : "transparent",
          borderColor: isHovered ? "#6ee7b7" : "rgba(255, 255, 255, 0.3)",
          borderWidth: isHovered ? 1.5 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
        className="fixed pointer-events-none z-50 rounded-full border border-white/30 bg-transparent"
      />

      <motion.div
        style={{
          left: cursorX,
          top: cursorY,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: isHovered ? 1.8 : isClicking ? 0.6 : 1,
          backgroundColor: isHovered ? "#6ee7b7" : "#ffffff",
        }}
        className="fixed pointer-events-none z-50 w-2 h-2 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
      />
    </>
  );
}
