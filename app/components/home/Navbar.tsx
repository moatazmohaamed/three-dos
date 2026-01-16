import PillNav from "../ui/PillNav";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <div className="w-full max-w-7xl px-6 py-4 flex justify-center">
        <PillNav
          logo="/log.jpeg"
          logoAlt="ThreeDOS Logo"
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "#about" },
            { label: "Councils", href: "#councils" },
            { label: "Contact", href: "#contact" },
          ]}
          activeHref="/"
          ease="power3.easeOut"
          baseColor="#000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          initialLoadAnimation={true}
        />
      </div>
    </div>
  );
};

export default Navbar;
