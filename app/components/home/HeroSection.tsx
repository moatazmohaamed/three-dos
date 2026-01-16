import { Button } from "../ui/Button";
import Beams from "../ui/Beams";
import Navbar from "./Navbar";
import { Link } from "react-router";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* LightRays Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Navbar />
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Beams
            beamWidth={3}
            beamHeight={50}
            beamNumber={20}
            lightColor="#E598DA"
            speed={5}
            noiseIntensity={0.8}
            scale={0.2}
            rotation={35}
          />
        </div>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32 text-center w-full">
        <div className="space-y-5">
          {/* Hero Title */}
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white animate-fade-in">
              WE ARE THE GAME CHANGERS
            </h1>
            <p className="text-white/50">
              ThreeDOS is a student's not-for-profit organization launched from
              BIS, Helwan university,
            </p>
          </div>

          {/* CTAs */}
          <div className="flex gap-6 justify-center flex-wrap pt-8 animate-fade-in [animation-delay:0.3s] [animation-fill-mode:backwards]">
            <Link to="/councils">
              <Button variant="primary">Explore Councils</Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary">Join ThreeDOS</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
