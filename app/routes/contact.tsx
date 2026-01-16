import type { Route } from "./+types/contact";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import LightRays from "../components/ui/LightRays";

export function meta() {
  return [
    { title: "Contact Us" },
    {
      name: "description",
      content:
        "Get in touch with ThreeDOS. Find our location, email, and social links.",
    },
  ];
}

export default function Contact() {
  return (
    <div className="bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
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

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 md:py-32 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight">
            <span className="block animate-fade-in">Get in Touch</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mt-4 md:mt-6 animate-fade-in [animation-delay:0.2s] [animation-fill-mode:backwards]">
            We'd love to hear from you. Reach out through any of our channels.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative py-16 md:py-32 px-4 md:px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/20 to-black"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-6 md:space-y-8">
              {/* Email */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 hover:border-indigo-500/50 transition-colors">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 md:w-7 md:h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Email Us
                    </h3>
                    <a
                      href="mailto:frontendhead.threedos26@gmail.com"
                      className="text-sm md:text-base text-indigo-400 hover:text-indigo-300 transition-colors break-all"
                    >
                      frontendhead.threedos26@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Linktree */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 hover:border-purple-500/50 transition-colors">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 md:w-7 md:h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      All Our Links
                    </h3>
                    <a
                      href="https://linktr.ee/threedos?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn0XEf_cUy3wYVl2e28H_nMmwvWrvoA04AbUAVcGcclfF8g48TnoeqtVRQi_0_aem_Xcripnj7ufcYyUJLg3iVUA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm md:text-base text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-2 break-all"
                    >
                      linktr.ee/threedos
                      <svg
                        className="w-4 h-4 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 hover:border-cyan-500/50 transition-colors">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 md:w-7 md:h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Visit Us
                    </h3>
                    <p className="text-sm md:text-base text-gray-300">
                      Faculty of Commerce & Business Administration
                      <br />
                      Helwan University, Cairo, Egypt
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Map */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-3 md:p-4 border border-white/10 overflow-hidden h-[400px] md:h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.7845430409257!2d31.21837171141571!3d30.071709817173236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840fc5cf0dcfb%3A0x5c8b8a3b52b6bcbc!2sFaculty%20of%20Commerce%20and%20Business%20Administration%20Helwan%20University!5e0!3m2!1sen!2seg!4v1768596702897!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ThreeDOS Location"
                className="rounded-xl md:rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
