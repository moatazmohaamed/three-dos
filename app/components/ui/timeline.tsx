"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Define colors for each timeline item
  const timelineColors = [
    {
      dot: "from-indigo-500 to-purple-600",
      glow: "shadow-indigo-500/50",
      border: "border-indigo-400",
    },
    {
      dot: "from-cyan-500 to-blue-600",
      glow: "shadow-cyan-500/50",
      border: "border-cyan-400",
    },
    {
      dot: "from-purple-500 to-pink-600",
      glow: "shadow-purple-500/50",
      border: "border-purple-400",
    },
    {
      dot: "from-emerald-500 to-teal-600",
      glow: "shadow-emerald-500/50",
      border: "border-emerald-400",
    },
  ];

  return (
    <div className="w-full bg-black font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          const colors = timelineColors[index % timelineColors.length];

          return (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                {/* Enhanced Timeline Dot */}
                <motion.div
                  className="h-12 w-12 absolute left-2 md:left-2 rounded-full flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Outer glow ring */}
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${colors.dot} opacity-20 animate-pulse`}
                  />

                  {/* Main dot with gradient */}
                  <motion.div
                    className={`h-8 w-8 rounded-full bg-gradient-to-r ${colors.dot} ${colors.border} border-2 shadow-lg ${colors.glow} relative overflow-hidden`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Inner shine effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 to-transparent" />

                    {/* Center dot */}
                    <div className="absolute inset-2 rounded-full bg-white/20 backdrop-blur-sm" />
                  </motion.div>

                  {/* Animated ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-full border-2 ${colors.border} opacity-60`}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 0.2, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Enhanced Title */}
                <motion.h3
                  className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-white/90 tracking-wide"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h3>
              </div>

              <motion.div
                className="relative pl-20 pr-4 md:pl-4 w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white/90">
                  {item.title}
                </h3>
                {item.content}
              </motion.div>
            </div>
          );
        })}

        {/* Enhanced Timeline Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[3px] bg-gradient-to-b from-transparent via-gray-600 to-transparent rounded-full"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-b from-indigo-500 via-purple-500 via-cyan-500 to-emerald-500 rounded-full shadow-lg"
          />

          {/* Additional glow effect */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[6px] -left-[1.5px] bg-gradient-to-b from-indigo-500/30 via-purple-500/30 via-cyan-500/30 to-emerald-500/30 rounded-full blur-sm"
          />
        </div>
      </div>
    </div>
  );
};
