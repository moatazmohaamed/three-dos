import { Timeline } from "../ui/timeline";

const OurJourney = () => {
  const timelineData = [
    {
      title: "September 2012",
      content: (
        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-colors">
          <h3 className="font-bold text-xl mb-2 text-white">Inception</h3>
          <p className="text-sm text-gray-300">
            Founded by a group of 5 passionate students in a dorm room.
          </p>
        </div>
      ),
    },
    {
      title: "March 2015",
      content: (
        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-colors">
          <h3 className="font-bold text-xl mb-2 text-white">
            First Major Event
          </h3>
          <p className="text-sm text-gray-300">
            Hosted our first major event with over 200 participants.
          </p>
        </div>
      ),
    },
    {
      title: "December 2023",
      content: (
        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-colors">
          <h3 className="font-bold text-xl mb-2 text-white">
            National Recognition
          </h3>
          <p className="text-sm text-gray-300">
            Awarded "Best Student Chapter" at the National Tech Summit.
          </p>
        </div>
      ),
    },
    {
      title: "2025 & Beyond",
      content: (
        <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-xl p-6 rounded-3xl border border-indigo-500/50">
          <h3 className="font-bold text-xl mb-2 text-white">
            Leading the Renaissance
          </h3>
          <p className="text-sm text-gray-200">
            Expanding our reach and empowering thousands of students.
          </p>
        </div>
      ),
    },
  ];

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

        {/* New Timeline Component */}
        <div className="bg-black">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
