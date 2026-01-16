import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlurText from "../ui/BlurText";

gsap.registerPlugin(ScrollTrigger);

const OurJourney = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    const cards = timelineRef.current.querySelectorAll(".timeline-card");
    const circles = timelineRef.current.querySelectorAll(".timeline-circle");
    const line = timelineRef.current.querySelector(".timeline-line");

    // Animate the center line
    gsap.fromTo(
      line,
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      }
    );

    // Animate each timeline item
    cards.forEach((card, index) => {
      const circle = circles[index];
      const isLeft = index % 2 === 0;

      // Animate circle
      gsap.fromTo(
        circle,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate card
      gsap.fromTo(
        card,
        {
          x: isLeft ? -100 : 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top center+=150",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-32 relative overflow-hidden bg-black" id="journey">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col justify-center items-center mb-20">
          <BlurText
            text="Our Journey"
            animateBy="words"
            direction="top"
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          />
          <BlurText
            text="Building the future, one milestone at a time"
            animateBy="words"
            direction="bottom"
            className="text-xl text-gray-400"
          />
        </div>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Center Line */}
          <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent"></div>

          {/* Timeline Item 1 - Left */}
          <div className="relative mb-16 flex justify-between items-center w-full group">
            <div className="w-5/12 hidden md:block"></div>

            {/* Center Circle */}
            <div className="timeline-circle z-20 flex items-center justify-center bg-black shadow-xl w-12 h-12 rounded-full border-2 border-indigo-500 group-hover:border-purple-500 transition-colors">
              <span className="font-bold text-sm text-indigo-400 group-hover:text-purple-400 transition-colors">
                12
              </span>
            </div>

            {/* Content Card */}
            <div className="timeline-card order-1 w-full md:w-5/12 pl-8 md:pl-0">
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 relative group-hover:-translate-y-1">
                <div className="absolute top-1/2 -left-3 w-6 h-6 bg-white/5 border-b border-l border-white/10 transform rotate-45 -translate-y-1/2"></div>
                <span className="text-indigo-400 font-bold text-sm tracking-wider uppercase mb-3 block">
                  September 2012
                </span>
                <h3 className="font-bold text-2xl mb-3 text-white">
                  Inception
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  Founded by a group of 5 passionate students in a dorm room.
                  The first "Hello World" commit was pushed to our repo.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Item 2 - Right */}
          <div className="relative mb-16 flex justify-between items-center w-full flex-row-reverse group">
            <div className="w-5/12 hidden md:block"></div>

            {/* Center Circle */}
            <div className="timeline-circle z-20 flex items-center justify-center bg-black shadow-xl w-12 h-12 rounded-full border-2 border-cyan-500 group-hover:border-purple-500 transition-colors">
              <span className="font-bold text-sm text-cyan-400 group-hover:text-purple-400 transition-colors">
                15
              </span>
            </div>

            {/* Content Card */}
            <div className="timeline-card order-1 w-full md:w-5/12 pr-8 md:pr-0 text-left md:text-right">
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 relative group-hover:-translate-y-1">
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 bg-white/5 border-t border-r border-white/10 transform rotate-45 -translate-y-1/2"></div>
                <span className="text-cyan-400 font-bold text-sm tracking-wider uppercase mb-3 block">
                  March 2015
                </span>
                <h3 className="font-bold text-2xl mb-3 text-white">
                  m3rfsh hassal eh walahy
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  hena el content
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Item 3 - Left */}
          <div className="relative mb-16 flex justify-between items-center w-full group">
            <div className="w-5/12 hidden md:block"></div>

            {/* Center Circle */}
            <div className="timeline-circle z-20 flex items-center justify-center bg-black shadow-xl w-12 h-12 rounded-full border-2 border-purple-500 group-hover:border-pink-500 transition-colors">
              <span className="font-bold text-sm text-purple-400 group-hover:text-pink-400 transition-colors">
                23
              </span>
            </div>

            {/* Content Card */}
            <div className="timeline-card order-1 w-full md:w-5/12 pl-8 md:pl-0">
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 relative group-hover:-translate-y-1">
                <div className="absolute top-1/2 -left-3 w-6 h-6 bg-white/5 border-b border-l border-white/10 transform rotate-45 -translate-y-1/2"></div>
                <span className="text-purple-400 font-bold text-sm tracking-wider uppercase mb-3 block">
                  December 2023
                </span>
                <h3 className="font-bold text-2xl mb-3 text-white">
                  m3rfsh hassal eh walahy
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  hena el content
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Item 4 - Right (Current/Future) */}
          <div className="relative flex justify-between items-center w-full flex-row-reverse group">
            <div className="w-5/12 hidden md:block"></div>

            {/* Center Circle - Glowing for current */}
            <div className="timeline-circle z-20 flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 shadow-xl shadow-purple-500/50 w-12 h-12 rounded-full border-2 border-white/50 animate-pulse">
              <span className="font-bold text-sm text-white">25</span>
            </div>

            {/* Content Card */}
            <div className="timeline-card order-1 w-full md:w-5/12 pr-8 md:pr-0 text-left md:text">
              <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-xl p-8 rounded-3xl border border-indigo-500/50 shadow-2xl shadow-indigo-500/20 relative">
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 bg-indigo-600/20 border-t border-r border-indigo-500/50 transform rotate-45 -translate-y-1/2"></div>
                <span className="text-indigo-300 font-bold text-sm tracking-wider uppercase mb-3 block">
                  2026 & Beyond
                </span>
                <h3 className="font-bold text-2xl mb-3 text-white">
                  Where the legacy begun
                </h3>
                <p className="text-base text-gray-200 leading-relaxed">
                  3ashan ana feha wkeda haha
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
