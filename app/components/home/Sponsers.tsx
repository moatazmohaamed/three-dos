import React from "react";
import LogoLoop from "../ui/LogoLoop";

const imageLogos = [
  {
    src: "/logos/company1.png",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/logos/company2.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/logos/company3.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
];

const Sponsers = () => {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold my-5">Our Sponsers</h1>
      <div
        style={{ height: "200px", position: "relative", overflow: "hidden" }}
      >
        {/* Basic horizontal loop */}
        <LogoLoop
          logos={imageLogos}
          speed={60}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#0000"
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
};

export default Sponsers;
