import Shuffle from "../ui/Shuffle";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="relative min-h-[60vh] flex items-center justify-center overflow-hidden w-full bg-gradient-to-b from-black via-purple-950/20 to-black">
      {/* Simple animated text - no heavy PixelBlast */}
      <div className="relative z-20 w-full text-center px-4">
        <Shuffle
          text="THREEDOS"
          shuffleDirection="right"
          duration={1}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="back.out(1,1)"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
          loop={true}
          className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[15rem] w-full text-[#AB71A2] leading-none"
          style={{ letterSpacing: "-0.05em" }}
        />
      </div>

      {/* Footer Links - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-30 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/60 text-sm">
            <div className="flex gap-6 flex-wrap justify-center">
              <a
                href="#about"
                className="hover:text-purple-400 transition-colors"
              >
                About
              </a>
              <Link
                to="/councils"
                className="hover:text-purple-400 transition-colors"
              >
                Councils
              </Link>
              <a
                href="#journey"
                className="hover:text-purple-400 transition-colors"
              >
                Journey
              </a>
              <Link
                to="/contact"
                className="hover:text-purple-400 transition-colors"
              >
                Contact
              </Link>
            </div>
            <div className="text-center md:text-right">
              <p>© 2026 ThreeDOS. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
