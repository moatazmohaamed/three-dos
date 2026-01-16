const Footer = () => {
  return (
    <footer className="relative min-h-[60vh] flex items-center justify-center overflow-hidden w-full bg-gradient-to-b from-black via-purple-950/20 to-black">
      {/* Simple animated text - no heavy PixelBlast */}
      <div className="relative z-20 w-full text-center">
        <h2 className="text-[5rem] md:text-[10rem] font-bold text-purple-500/30">
          THREEDOS
        </h2>
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
              <p>© 2024 ThreeDOS. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
