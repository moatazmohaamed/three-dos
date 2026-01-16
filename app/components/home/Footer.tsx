import ScrollFloat from "../ui/ScrollFloat";
import PixelBlast from "../ui/PixelBlast";

const Footer = () => {
  return (
    <footer className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* PixelBlast Background - Lower z-index */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#B19EEF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* ScrollFloat Text - Higher z-index */}
      <div className="relative z-20 w-full">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          THREEDOS
        </ScrollFloat>
      </div>

      {/* Footer Links - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-30 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/60 text-sm">
            <div className="flex gap-6">
              <a
                href="#about"
                className="hover:text-purple-400 transition-colors"
              >
                About
              </a>
              <a
                href="#councils"
                className="hover:text-purple-400 transition-colors"
              >
                Councils
              </a>
              <a
                href="#journey"
                className="hover:text-purple-400 transition-colors"
              >
                Journey
              </a>
              <a
                href="#contact"
                className="hover:text-purple-400 transition-colors"
              >
                Contact
              </a>
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
