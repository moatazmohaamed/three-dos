import BlurText from "../ui/BlurText";
import SpotlightCard from "../ui/SpotlightCard";

export function VisionMission() {
  return (
    <section className="relative py-32 px-6" id="about">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/30 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center flex flex-col justify-center items-center mb-20">
          <BlurText
            text="Our Core Values "
            animateBy="words"
            direction="top"
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          />
          <BlurText
            text="Building a generation of role models to lead the renaissance"
            animateBy="words"
            direction="bottom"
            delay={50}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <SpotlightCard
            className="p-8"
            spotlightColor="rgba(139, 92, 246, 0.3)"
          >
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              <p className="text-md md:text-lg text-gray-300 leading-relaxed">
                Besides establishing a well-based ethical community, being a
                leading organization working on creating a generation of role
                models that are able to lead the community, which we work on
                through our three aspects.
              </p>
            </div>
          </SpotlightCard>

          {/* Mission Card */}
          <SpotlightCard
            className="p-8"
            spotlightColor="rgba(6, 182, 212, 0.3)"
          >
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              <p className="text-md md:text-lg  text-gray-300 leading-relaxed">
                Working on individuals to attain professionalism by developing
                personal and technical skills, like leadership and other
                essential foundations. We focus on our three main dimensions
                (Soul - Brain - Academic) in parallel to maintain idealism and
                promote development among youth.
              </p>
            </div>
          </SpotlightCard>
        </div>

        {/* About Us Section */}
        <div className="mt-16">
          <SpotlightCard
            className="p-12"
            spotlightColor="rgba(168, 85, 247, 0.3)"
          >
            <div className="space-y-6 text-center">
              <h3 className="text-4xl font-bold text-white">About ThreeDOS</h3>
              <p className="text-md md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto ">
                ThreeDOS is a student's not-for-profit organization launched
                from the Faculty of Commerce and Business Administration BIS
                department, Helwan University. We focus on three main aspects
                Soul Rebuild , Brain Refill , and Academic Committee . Through
                these dimensions, we believe we can create a generation that
                will carry on their shoulders the renaissance of this country,
                putting it in the place it deserves and leading the developed
                community.
              </p>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
