import type { Route } from "./+types/home";
import Navbar from "../components/home/Navbar";
import { HeroSection } from "../components/home/HeroSection";
import { VisionMission } from "../components/home/VisionMission";
import OurJourney from "../components/home/OurJorney";
import Footer from "../components/home/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ThreeDOS - Building a Generation to Lead the Renaissance" },
    {
      name: "description",
      content:
        "A dynamic tech community empowering students through Technology, Business, and Community",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <VisionMission />
      <OurJourney />
      <Footer />
    </div>
  );
}
