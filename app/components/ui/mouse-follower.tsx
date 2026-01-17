"use client";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export const MouseFollower = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Use spring animation for smooth following
  const springX = useSpring(mouseX, {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  });
  const springY = useSpring(mouseY, {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: springX,
        y: springY,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      transition={{
        opacity: { duration: 0.2 },
        scale: { duration: 0.2, ease: "backOut" },
      }}
    >
      {/* Main circle */}
      <motion.div
        className="relative -translate-x-1/2 -translate-y-1/2"
        whileHover={{ scale: 1.5 }}
        transition={{ duration: 0.2 }}
      >
        {/* Outer glow */}
        <div className="absolute inset-0 w-6 h-6 rounded-full bg-purple-500/30 blur-sm animate-pulse" />

        {/* Main circle */}
        <div className="hidden md:block w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 shadow-lg shadow-purple-500/50 relative overflow-hidden">
          {/* Inner shine */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/40 to-transparent" />
        </div>
      </motion.div>
    </motion.div>
  );
};
