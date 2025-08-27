import React, { useState, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ChevronLeft,
  ChevronRight,
  Users,
  Award,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Team = () => {
  const [activeTab, setActiveTab] = useState("leaders");
  const leadersRef = useRef(null);
  const engineersRef = useRef(null);

  const leaders = [
    {
      id: 1,
      name: "Sai Siddharth S.E",
      role: "Co founder & CEO",
      image: "/siddharth.jpg",
      social: {
        github: "https://github.com/hn-sottallu",
        linkedin: "https://in.linkedin.com/in/sai-siddharth-sottallu-5b570628a",
        email: "ss.sottallu@gmail.com",
      },
    },
    {
      id: 2,
      name: "Hari Karan R",
      role: "Co founder & CFO",
      image: "/api/placeholder/300/400",
      social: {
        github: "https://github.com/HARIKARANhn",
        linkedin: "https://www.linkedin.com/in/hari-karan-r-936921291/",
        email: "harikaran.hn2005@gmail.com",
      },
    },
    {
      id: 3,
      name: "Pragya Sekar",
      role: "Co founder",
      image: "/pragya.jpg",
      social: {
        github: "https://github.com/pragy10",
        linkedin: "https://www.linkedin.com/in/pragya-sekar/",
        email: "pragya.skr10@gmail.com",
      },
    },
    {
      id: 4,
      name: "Mythrayi M R",
      role: "Chief Advisor",
      image: "/mythrayi.jpg",
      social: {
        github: "https://github.com/Mythrayi-M-R",
        linkedin: "https://www.linkedin.com/in/mythrayi-m-r/",
        email: "mrmythrayi@gmail.com",
      },
    },
  ];

  const engineers = [
    {
      id: 5,
      name: "Dhruv Samuel",
      role: "Mobile App Developer",
      image: "/dhruv.jpg",
      social: {
        github: "https://github.com/Embontooth",
        linkedin: "https://www.linkedin.com/in/dhruv-john-samuel/",
        email: "dhruvsamuel05@gmail.com",
      },
    },
    {
      id: 6,
      name: "Harishankar R",
      role: "Mobile App Developer",
      image: "/harishankar.jpg",
      social: {
        github: "https://github.com/xponent-dmg",
        linkedin: "https://linkedin.com/in/james-wilson-ml",
        email: "harishankar.r2102@gmail.com",
      },
    },
    {
      id: 7,
      name: "Maria Hashmi",
      role: "hn RPS Architect",
      image: "/maria.jpg",
      social: {
        github: "https://github.com/mariahashmii",
        linkedin: "https://www.linkedin.com/in/maria0hashmi/",
        email: "maria.hashmi292006@gmail.com",
      },
    },
    {
      id: 8,
      name: "Prathish Dev",
      role: "Finance & Strategic Partnerships",
      image: "/prathish.jpg",
      social: {
        github: "https://github.com/michael-chang",
        linkedin: "https://www.linkedin.com/in/prathish-dev-a9686a331/",
        email: "michael@vehnicate.com",
      },
    },
    {
      id: 9,
      name: "Rahul R",
      role: "Technical Member, hn RPS",
      image: "/api/placeholder/300/400",
      social: {
        github: "https://github.com/Rahul2671",
        linkedin: "https://www.linkedin.com/in/rahul-r-9886a232a/",
        email: "rahulsubha1983@gmail.com",
      },
    },
  ];

  // Updated responsive scroll function
  const scroll = (direction, ref) => {
    if (ref.current) {
      const container = ref.current;
      const cardWidth =
        window.innerWidth < 640 ? 280 : window.innerWidth < 1024 ? 300 : 320;
      const scrollAmount = cardWidth * (window.innerWidth < 640 ? 1 : 2);

      const currentScroll = container.scrollLeft;
      const targetScroll =
        direction === "left"
          ? Math.max(0, currentScroll - scrollAmount)
          : currentScroll + scrollAmount;

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  // Updated responsive TeamCard component
  const TeamCard = ({ member }) => (
    <div className="flex-shrink-0 w-72 sm:w-80 lg:w-80 p-2 sm:p-4 group">
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden group-hover:border-purple-500/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
        <div className="relative h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-purple-600/20 to-pink-600/20">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex gap-1 sm:gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <a
              href={member.social.github}
              className="p-1.5 sm:p-2 bg-black/70 backdrop-blur-sm rounded-lg text-gray-300 hover:text-white hover:bg-purple-600/50 transition-all duration-200 hover:scale-110"
            >
              <Github size={14} className="sm:w-4 sm:h-4" />
            </a>
            <a
              href={member.social.linkedin}
              className="p-1.5 sm:p-2 bg-black/70 backdrop-blur-sm rounded-lg text-gray-300 hover:text-white hover:bg-pink-600/50 transition-all duration-200 hover:scale-110"
            >
              <Linkedin size={14} className="sm:w-4 sm:h-4" />
            </a>
            <a
              href={`mailto:${member.social.email}`}
              className="p-1.5 sm:p-2 bg-black/70 backdrop-blur-sm rounded-lg text-gray-300 hover:text-white hover:bg-purple-600/50 transition-all duration-200 hover:scale-110"
            >
              <Mail size={14} className="sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-bold font-ledger text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 leading-tight">
            {member.name}
          </h3>
          <p className="text-gray-400 font-ledger text-xs sm:text-sm group-hover:text-purple-300 transition-colors duration-300 leading-relaxed">
            {member.role}
          </p>
        </div>
      </div>
    </div>
  );

  // Animation variants
  const carouselVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="team"
      className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden"
    >
      {/* Background elements - made responsive */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/3 to-purple-900/8"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/2 to-pink-600/5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 -right-16 sm:-right-24 lg:-right-32 w-64 h-64 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] bg-gradient-to-l from-purple-600/30 to-pink-600/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-10 -left-16 sm:-left-24 lg:-left-32 w-72 h-72 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] bg-gradient-to-r from-pink-600/30 to-purple-600/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] bg-gradient-to-br from-purple-600/15 to-pink-600/15 rounded-full blur-2xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header and Toggle Switch - made responsive */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-ledger font-bold mb-4 sm:mb-6 lg:mb-8 text-white leading-tight text-center"
          >
            Meet Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Team
            </span>
          </motion.h2>

          <div className="inline-flex">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-0.5 sm:p-1 border border-gray-700/50 mt-4"
            >
              <button
                onClick={() => setActiveTab("leaders")}
                className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transition-all duration-300 ${
                  activeTab === "leaders"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Leadership
              </button>
              <button
                onClick={() => setActiveTab("engineers")}
                className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transition-all duration-300 ${
                  activeTab === "engineers"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Engineers
              </button>
            </motion.div>
          </div>
        </div>

        {/* Animated carousel sections */}
        <AnimatePresence mode="wait">
          {activeTab === "leaders" && (
            <motion.div
              key="leaders"
              variants={carouselVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="relative"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-ledger text-white">
                  Leadership Team
                </h3>
                <div className="ml-auto flex gap-1 sm:gap-2">
                  <button
                    onClick={() => scroll("left", leadersRef)}
                    className="p-2 sm:p-3 bg-gray-800/50 hover:bg-purple-600/20 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-gray-400 hover:text-white hover:scale-110"
                  >
                    <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={() => scroll("right", leadersRef)}
                    className="p-2 sm:p-3 bg-gray-800/50 hover:bg-purple-600/20 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-gray-400 hover:text-white hover:scale-110"
                  >
                    <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              <div
                ref={leadersRef}
                className="flex gap-1 sm:gap-2 overflow-x-auto scrollbar-hide py-2 sm:py-4 px-2 sm:px-4 -mx-2 sm:-mx-4"
              >
                {leaders.map((member) => (
                  <motion.div
                    key={member.id}
                    variants={cardVariants}
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <TeamCard member={member} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "engineers" && (
            <motion.div
              key="engineers"
              variants={carouselVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="relative"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-ledger text-white">
                  Engineering Team
                </h3>
                <div className="ml-auto flex gap-1 sm:gap-2">
                  <button
                    onClick={() => scroll("left", engineersRef)}
                    className="p-2 sm:p-3 bg-gray-800/50 hover:bg-purple-600/20 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-gray-400 hover:text-white hover:scale-110"
                  >
                    <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={() => scroll("right", engineersRef)}
                    className="p-2 sm:p-3 bg-gray-800/50 hover:bg-purple-600/20 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-gray-400 hover:text-white hover:scale-110"
                  >
                    <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              <div
                ref={engineersRef}
                className="flex gap-1 sm:gap-2 overflow-x-auto scrollbar-hide py-2 sm:py-4 px-2 sm:px-4 -mx-2 sm:-mx-4"
              >
                {engineers.map((member) => (
                  <motion.div
                    key={member.id}
                    variants={cardVariants}
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <TeamCard member={member} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -webkit-scrollbar: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Team;
