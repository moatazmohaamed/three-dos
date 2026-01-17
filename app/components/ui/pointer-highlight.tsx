"use client";
import { cn } from "~/lib/utils";
import { motion } from "motion/react";
import { useRef, useEffect, useState } from "react";

export function PointerHighlight({
  children,
  rectangleClassName,
  pointerClassName,
  containerClassName,
}: {
  children: React.ReactNode;
  rectangleClassName?: string;
  pointerClassName?: string;
  containerClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      className={cn("relative w-fit cursor-pointer", containerClassName)}
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 0.3 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Text with enhanced styling */}
      <motion.div
        className="relative z-10"
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>

      {dimensions.width > 0 && dimensions.height > 0 && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 0.95, originX: 0, originY: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Animated border rectangle */}
          <motion.div
            className={cn(
              "absolute inset-0 border-2 rounded-lg",
              rectangleClassName,
            )}
            style={{
              borderColor: isHovered ? "#8b5cf6" : "#6366f1",
              boxShadow: isHovered
                ? "0 0 20px rgba(139, 92, 246, 0.5)"
                : "0 0 10px rgba(99, 102, 241, 0.3)",
            }}
            initial={{
              width: 0,
              height: 0,
            }}
            whileInView={{
              width: dimensions.width,
              height: dimensions.height,
            }}
            animate={{
              borderColor: isHovered ? "#8b5cf6" : "#6366f1",
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          />

          {/* Enhanced pointer with glow */}
          <motion.div
            className="pointer-events-none absolute"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              x: dimensions.width + 8,
              y: dimensions.height + 8,
            }}
            animate={{
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? -85 : -90,
            }}
            transition={{
              opacity: { duration: 0.1, ease: "easeInOut" },
              duration: 1,
              ease: "easeInOut",
              scale: { duration: 0.2 },
              rotate: { duration: 0.2 },
            }}
          >
            <Pointer
              className={cn("h-6 w-6 drop-shadow-lg", pointerClassName)}
              style={{
                color: isHovered ? "#8b5cf6" : "#6366f1",
                filter: isHovered
                  ? "drop-shadow(0 0 8px rgba(139, 92, 246, 0.8))"
                  : "drop-shadow(0 0 4px rgba(99, 102, 241, 0.6))",
              }}
            />
          </motion.div>

          {/* Additional sparkle effects on hover */}
          {isHovered && (
            <>
              <motion.div
                className="absolute w-2 h-2 bg-purple-400 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: dimensions.width * 0.2,
                  y: dimensions.height * 0.3,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              />
              <motion.div
                className="absolute w-1.5 h-1.5 bg-indigo-400 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: dimensions.width * 0.8,
                  y: dimensions.height * 0.2,
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatDelay: 0.8,
                  delay: 0.3,
                }}
              />
              <motion.div
                className="absolute w-1 h-1 bg-pink-400 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: dimensions.width * 0.6,
                  y: dimensions.height * 0.7,
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatDelay: 0.3,
                  delay: 0.6,
                }}
              />
            </>
          )}
        </motion.div>
      )}
    </div>
  );
}

const Pointer = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
    </svg>
  );
};
