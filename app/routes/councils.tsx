import { useState } from "react";
import type { Route } from "./+types/councils";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import LightRays from "../components/ui/LightRays";
import { CouncilCard } from "../components/ui/CouncilCard";
import {
  FaServer,
  FaCode,
  FaBullhorn,
  FaUserTie,
  FaChartLine,
  FaDollarSign,
  FaBullseye,
  FaProjectDiagram,
  FaUsers,
  FaHeart,
  FaGraduationCap,
  FaVideo,
  FaInstagram,
  FaPalette,
} from "react-icons/fa";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Councils" },
    {
      name: "description",
      content:
        "Explore ThreeDOS's three main councils: Technology, Business, and Community",
    },
  ];
}

const councilCategories = {
  academic: [
    {
      icon: <FaServer />,
      title: "Backend Development",
      description:
        "Build robust server-side applications and APIs. Focus on database design, system architecture, and scalable solutions that power modern applications.",
      activities: [
        "Server-side programming and APIs",
        "Database design and optimization",
        "System architecture and scalability",
        "DevOps and deployment strategies",
      ],
      gradientFrom: "from-cyan-500",
      gradientTo: "to-teal-500",
      spotlightColor: "rgba(6, 182, 212, 0.3)",
      accentColor: "text-cyan-400",
    },
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description:
        "Create engaging user interfaces and experiences. Master modern frameworks, responsive design, and interactive web applications that users love.",
      activities: [
        "UI/UX figma implementation",
        "Modern JavaScript frameworks",
        "Responsive web design",
        "Performance optimization",
      ],
      gradientFrom: "from-violet-500",
      gradientTo: "to-purple-500",
      spotlightColor: "rgba(139, 92, 246, 0.3)",
      accentColor: "text-purple-400",
    },
    {
      icon: <FaBullhorn />,
      title: "Marketing",
      description:
        "Master digital marketing strategies, brand building, and customer engagement. Learn to create compelling campaigns and drive business growth through effective marketing techniques.",
      activities: [
        "Digital marketing campaigns",
        "Brand strategy and development",
        "Social media marketing",
        "Content creation and analytics",
      ],
      gradientFrom: "from-orange-500",
      gradientTo: "to-red-500",
      spotlightColor: "rgba(249, 115, 22, 0.3)",
      accentColor: "text-orange-400",
    },
    {
      icon: <FaUserTie />,
      title: "CEO",
      description:
        "The driving force that connects vision with action. Leads the team with clarity and direction, ensuring that every idea is transformed into real results.",
      activities: [
        "Strategic planning and vision setting",
        "Team leadership and coordination",
        "Decision making and problem solving",
        "Stakeholder management",
      ],
      gradientFrom: "from-indigo-500",
      gradientTo: "to-blue-500",
      spotlightColor: "rgba(99, 102, 241, 0.3)",
      accentColor: "text-indigo-400",
    },
    {
      icon: <FaChartLine />,
      title: "Stock",
      description:
        "Learn investment strategies, market analysis, and financial planning. Develop skills in portfolio management and understand market dynamics for informed trading decisions.",
      activities: [
        "Market analysis and research",
        "Investment portfolio management",
        "Trading strategies and techniques",
        "Financial planning workshops",
      ],
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-500",
      spotlightColor: "rgba(34, 197, 94, 0.3)",
      accentColor: "text-green-400",
    },
  ],
  operational: [
    {
      icon: <FaBullseye />,
      title: "Public Relations",
      description:
        "Manage external communications and build strong relationships with stakeholders. Focus on brand reputation, media relations, and strategic communication.",
      activities: [
        "Media relations and press releases",
        "Crisis communication management",
        "Stakeholder engagement",
        "Brand reputation building",
      ],
      gradientFrom: "from-blue-500",
      gradientTo: "to-indigo-500",
      spotlightColor: "rgba(59, 130, 246, 0.3)",
      accentColor: "text-blue-400",
    },
    {
      icon: <FaDollarSign />,
      title: "Fundraising",
      description:
        "Drive financial sustainability through strategic fundraising initiatives. Develop donor relationships and create compelling campaigns to support organizational goals.",
      activities: [
        "Donor relationship management",
        "Fundraising campaign development",
        "Grant writing and proposals",
        "Event fundraising coordination",
      ],
      gradientFrom: "from-emerald-500",
      gradientTo: "to-green-500",
      spotlightColor: "rgba(16, 185, 129, 0.3)",
      accentColor: "text-emerald-400",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Coordination",
      description:
        "Ensure seamless operations and effective collaboration across all teams. Focus on project management, resource allocation, and organizational efficiency.",
      activities: [
        "Project coordination and planning",
        "Resource management",
        "Team collaboration facilitation",
        "Operational efficiency optimization",
      ],
      gradientFrom: "from-yellow-500",
      gradientTo: "to-orange-500",
      spotlightColor: "rgba(234, 179, 8, 0.3)",
      accentColor: "text-yellow-400",
    },
    {
      icon: <FaUsers />,
      title: "HR",
      description:
        "Manage human resources, talent acquisition, and organizational development. Focus on building strong teams, employee engagement, and creating positive workplace culture.",
      activities: [
        "Training and development programs",
        "Talent recruitment and onboarding",
        "Performance management",
        "Workplace culture initiatives",
      ],
      gradientFrom: "from-amber-500",
      gradientTo: "to-yellow-500",
      spotlightColor: "rgba(245, 158, 11, 0.3)",
      accentColor: "text-amber-400",
    },
    {
      icon: <FaHeart />,
      title: "Soul",
      description:
        "Our charity council dedicated to making a positive impact in the community. Focus on social responsibility, volunteer work, and creating meaningful change through compassionate action.",
      activities: [
        "Community outreach programs",
        "Charity fundraising events",
        "Volunteer coordination",
        "Social impact initiatives",
      ],
      gradientFrom: "from-pink-500",
      gradientTo: "to-rose-500",
      spotlightColor: "rgba(236, 72, 153, 0.3)",
      accentColor: "text-pink-400",
    },
    {
      icon: <FaGraduationCap />,
      title: "Juniors",
      description:
        "Develop the next generation of leaders through mentorship and skill-building programs. Focus on youth engagement, training, and leadership development.",
      activities: [
        "Youth mentorship programs",
        "Leadership training workshops",
        "Skill development initiatives",
        "Junior member engagement",
      ],
      gradientFrom: "from-teal-500",
      gradientTo: "to-cyan-500",
      spotlightColor: "rgba(20, 184, 166, 0.3)",
      accentColor: "text-teal-400",
    },
    {
      icon: <FaVideo />,
      title: "Media",
      description:
        "Produce engaging multimedia content and manage digital communications. Focus on video production, content creation, and storytelling across various media platforms.",
      activities: [
        "Video production and editing",
        "Content strategy and creation",
        "Social media management",
        "Digital storytelling workshops",
      ],
      gradientFrom: "from-slate-500",
      gradientTo: "to-gray-500",
      spotlightColor: "rgba(100, 116, 139, 0.3)",
      accentColor: "text-slate-400",
    },
    {
      icon: <FaInstagram />,
      title: "Social Media Marketing",
      description:
        "Drive engagement and growth through strategic social media campaigns. Master platform-specific strategies, content creation, and community management.",
      activities: [
        "Social media strategy development",
        "Content calendar management",
        "Community engagement",
        "Analytics and performance tracking",
      ],
      gradientFrom: "from-rose-500",
      gradientTo: "to-pink-500",
      spotlightColor: "rgba(244, 63, 94, 0.3)",
      accentColor: "text-rose-400",
    },
    {
      icon: <FaPalette />,
      title: "Graphic Design",
      description:
        "Create stunning visual communications and brand identities. Master design principles, typography, and digital tools to craft compelling visual experiences.",
      activities: [
        "Brand identity design",
        "Digital illustration and graphics",
        "Typography and layout design",
        "Creative campaign development",
      ],
      gradientFrom: "from-fuchsia-500",
      gradientTo: "to-pink-500",
      spotlightColor: "rgba(217, 70, 239, 0.3)",
      accentColor: "text-fuchsia-400",
    },
  ],
};

export default function Councils() {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "academic" | "operational"
  >("all");

  const allCouncils = [
    ...councilCategories.academic,
    ...councilCategories.operational,
  ];

  const getFilteredCouncils = () => {
    if (activeFilter === "all") return allCouncils;
    return councilCategories[activeFilter];
  };

  return (
    <div className=" bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden">
        {/* LightRays Background */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffff"
            raysSpeed={1}
            lightSpread={1.5}
            rayLength={1.8}
            pulsating={false}
            fadeDistance={1.2}
            saturation={0.7}
            followMouse={false}
            mouseInfluence={0.12}
            noiseAmount={0.08}
            distortion={0.03}
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-32 text-center">
          <div className="space-y-8">
            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight">
              <span className="block animate-fade-in">Our Councils</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in [animation-delay:0.2s] [animation-fill-mode:backwards]">
              Two main councils working together to build the future
            </p>

            {/* Stats / Filter Buttons */}
            <div className="flex justify-center gap-4 pt-8 flex-wrap animate-fade-in [animation-delay:0.4s] [animation-fill-mode:backwards]">
              <button
                onClick={() => setActiveFilter("all")}
                className={`relative bg-white/5 backdrop-blur-md rounded-2xl px-6 py-4 border transition-all ${
                  activeFilter === "all"
                    ? "border-white/50 bg-white/10"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                {activeFilter === "all" && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
                <div className="text-3xl font-bold text-white">🌟</div>
                <div className="text-sm text-gray-400 mt-2">All Councils</div>
              </button>
              <button
                onClick={() => setActiveFilter("academic")}
                className={`relative bg-white/5 backdrop-blur-md rounded-2xl px-6 py-4 border transition-all ${
                  activeFilter === "academic"
                    ? "border-indigo-400/50 bg-indigo-500/10"
                    : "border-white/10 hover:border-indigo-400/30"
                }`}
              >
                {activeFilter === "academic" && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-400 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
                <div className="text-3xl font-bold text-indigo-400">🎓</div>
                <div className="text-sm text-gray-400 mt-2">
                  Academic Councils
                </div>
              </button>
              <button
                onClick={() => setActiveFilter("operational")}
                className={`relative bg-white/5 backdrop-blur-md rounded-2xl px-6 py-4 border transition-all ${
                  activeFilter === "operational"
                    ? "border-cyan-400/50 bg-cyan-500/10"
                    : "border-white/10 hover:border-cyan-400/30"
                }`}
              >
                {activeFilter === "operational" && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
                <div className="text-3xl font-bold text-cyan-400">⚙️</div>
                <div className="text-sm text-gray-400 mt-2">
                  Operations Councils
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Councils Grid */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/20 to-black"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredCouncils().map((council, index) => (
              <CouncilCard key={index} {...council} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
