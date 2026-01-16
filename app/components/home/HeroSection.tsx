import Plasma from "../ui/Plasma";
import SplitText from "../ui/SplitText";
import { Button } from "../ui/Button";
import Navbar from "./Navbar";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Plasma Background - Lower z-index */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Navbar></Navbar>
        <Plasma
          color="#CBAEF6"
          speed={0.4}
          direction="forward"
          scale={1.3}
          opacity={0.8}
          mouseInteractive={false}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32 text-center w-full">
        <div className="space-y-8">
          {/* Hero Title with Split Text Animation */}
          <div className="max-w-5xl mx-auto flex">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight inline-flex flex-wrap justify-center gap-x-3 gap-y-2">
              <SplitText
                text="Empowering the Next Generation of Tech Leaders"
                tag="span"
                className="text-white inline-block"
                delay={50}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </h1>
          </div>

          {/* CTAs */}
          <div className="flex gap-6 justify-center flex-wrap pt-8">
            <Button variant="primary">Explore Councils</Button>
            <Button variant="secondary">Join ThreeDOS</Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
