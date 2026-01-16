const OurJourney = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-black" id="journey">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col justify-center items-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Journey
          </h2>
          <p className="text-xl text-gray-400">
            Building the future, one milestone at a time
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-12">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent hidden md:block"></div>

          {/* Timeline Item 1 */}
          <div className="relative flex flex-col md:flex-row justify-between items-center w-full group">
            <div className="w-full md:w-5/12 mb-4 md:mb-0">
              <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-colors">
                <span className="text-indigo-400 font-bold text-sm tracking-wider uppercase mb-2 block">
                  September 2012
                </span>
                <h3 className="font-bold text-xl mb-2 text-white">Inception</h3>
                <p className="text-sm text-gray-300">
                  Founded by a group of 5 passionate students in a dorm room.
                </p>
              </div>
            </div>
            <div className="hidden md:flex z-20 items-center justify-center bg-black w-10 h-10 rounded-full border-2 border-indigo-500">
              <span className="font-bold text-xs text-indigo-400">12</span>
            </div>
            <div className="w-full md:w-5/12"></div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative flex flex-col md:flex-row-reverse justify-between items-center w-full group">
            <div className="w-full md:w-5/12 mb-4 md:mb-0">
              <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-colors">
                <span className="text-cyan-400 font-bold text-sm tracking-wider uppercase mb-2 block">
                  March 2015
                </span>
                <h3 className="font-bold text-xl mb-2 text-white">
                  First Major Event
                </h3>
                <p className="text-sm text-gray-300">
                  Hosted our first major event with over 200 participants.
                </p>
              </div>
            </div>
            <div className="hidden md:flex z-20 items-center justify-center bg-black w-10 h-10 rounded-full border-2 border-cyan-500">
              <span className="font-bold text-xs text-cyan-400">15</span>
            </div>
            <div className="w-full md:w-5/12"></div>
          </div>

          {/* Timeline Item 3 */}
          <div className="relative flex flex-col md:flex-row justify-between items-center w-full group">
            <div className="w-full md:w-5/12 mb-4 md:mb-0">
              <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-colors">
                <span className="text-purple-400 font-bold text-sm tracking-wider uppercase mb-2 block">
                  December 2023
                </span>
                <h3 className="font-bold text-xl mb-2 text-white">
                  National Recognition
                </h3>
                <p className="text-sm text-gray-300">
                  Awarded "Best Student Chapter" at the National Tech Summit.
                </p>
              </div>
            </div>
            <div className="hidden md:flex z-20 items-center justify-center bg-black w-10 h-10 rounded-full border-2 border-purple-500">
              <span className="font-bold text-xs text-purple-400">23</span>
            </div>
            <div className="w-full md:w-5/12"></div>
          </div>

          {/* Timeline Item 4 - Current */}
          <div className="relative flex flex-col md:flex-row-reverse justify-between items-center w-full group">
            <div className="w-full md:w-5/12 mb-4 md:mb-0">
              <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-xl p-6 rounded-3xl border border-indigo-500/50">
                <span className="text-indigo-300 font-bold text-sm tracking-wider uppercase mb-2 block">
                  2025 & Beyond
                </span>
                <h3 className="font-bold text-xl mb-2 text-white">
                  Leading the Renaissance
                </h3>
                <p className="text-sm text-gray-200">
                  Expanding our reach and empowering thousands of students.
                </p>
              </div>
            </div>
            <div className="hidden md:flex z-20 items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 w-10 h-10 rounded-full border-2 border-white/50">
              <span className="font-bold text-xs text-white">25</span>
            </div>
            <div className="w-full md:w-5/12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
