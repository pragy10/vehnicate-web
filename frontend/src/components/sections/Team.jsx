import React, { useState, useRef } from 'react'
import { Github, Linkedin, Mail, Twitter, ChevronLeft, ChevronRight, Users, Award, Clock } from 'lucide-react'
// Step 2.1: Import motion and AnimatePresence from Framer Motion
import { motion, AnimatePresence } from 'framer-motion'

const Team = () => {
  const [activeTab, setActiveTab] = useState('leaders')
  const leadersRef = useRef(null)
  const engineersRef = useRef(null)

  // --- No changes to your data arrays (leaders, engineers) ---
  const leaders = [
    {
      id: 1,
      name: "Sai Siddharth S.E",
      role: "Co founder & CEO",
      image: "/api/placeholder/300/400",
      social: {
        github: "https://github.com/hn-sottallu",
        linkedin: "https://in.linkedin.com/in/sai-siddharth-sottallu-5b570628a",
        email: "ss.sottallu@gmail.com"
      }
    },
    {
      id: 2,
      name: "Hari Karan R", 
      role: "Co founder & CFO",
      image: "/api/placeholder/300/400",
      social: {
        github: "https://github.com/HARIKARANhn",
        linkedin: "https://www.linkedin.com/in/hari-karan-r-936921291/",
        email: "harikaran.hn2005@gmail.com"
      }
    },
    {
      id: 3,
      name: "Pragya Sekar",
      role: "Co founder",
      image: "/api/placeholder/300/400",
      social: {
        github: "https://github.com/pragy10",
        linkedin: "https://www.linkedin.com/in/pragya-sekar/",
        email: "pragya.skr10@gmail.com"
      }
    },
    {
      id: 4,
      name: "Mythrayi M R",
      role: "Chief Advisor",
      image: "/api/placeholder/300/400",
      social: {
        github: "https://github.com/Mythrayi-M-R",
        linkedin: "https://www.linkedin.com/in/mythrayi-m-r/",
        email: "mrmythrayi@gmail.com"
      }
    }
  ]

  const engineers = [
    {
      id: 5,
      name: "Dhruv Samuel",
      role: "Mobile App Developer",
      image: "/api/placeholder/300/400",
      social: {
        github: "https://github.com/Embontooth",
        linkedin: "https://www.linkedin.com/in/dhruv-john-samuel/",
        email: "dhruvsamuel05@gmail.com"
      }
    },
    {
      id: 6,
      name: "Harishankar R",
      role: "Mobile App Developer",
      image: "/api/placeholder/300/400",
      social: {
        github: "https://github.com/xponent-dmg",
        linkedin: "https://linkedin.com/in/james-wilson-ml",
        email: "harishankar.r2102@gmail.com"
      }
    },
    {
      id: 7,
      name: "Maria Hashmi",
      role: "hn RPS Architect",
      image: "/api/placeholder/300/400",
      social: {
        github: "https://github.com/mariahashmii",
        linkedin: "https://www.linkedin.com/in/maria0hashmi/",
        email: "maria.hashmi292006@gmail.com"
      }
    },
    {
      id: 8,
      name: "Prathish Dev",
      role: "Finance & Strategic Partnerships",
      image: "/api/placeholder/300/400",
      social: {
        github: "https://github.com/michael-chang",
        linkedin: "https://www.linkedin.com/in/prathish-dev-a9686a331/",
        email: "michael@vehnicate.com"
      }
    },
    {
      id: 9,
      name: "Rahul R",
      role: "Technical Member, hn RPS",
      image: "/api/placeholder/300/400",
      social: {
        github: "https://github.com/Rahul2671",
        linkedin: "https://www.linkedin.com/in/rahul-r-9886a232a/",
        email: "rahulsubha1983@gmail.com"
      }
    }
  ]
  // --- No changes to your scroll function ---
  const scroll = (direction, ref) => {
    if (ref.current) {
      const container = ref.current
      const cardWidth = 320 
      const scrollAmount = cardWidth * 2 
      
      const currentScroll = container.scrollLeft
      const targetScroll = direction === 'left' 
        ? Math.max(0, currentScroll - scrollAmount)
        : currentScroll + scrollAmount
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      })
    }
  }

  // --- No changes to your TeamCard component ---
  const TeamCard = ({ member }) => (
    <div className="flex-shrink-0 w-80 p-4 group">
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden group-hover:border-purple-500/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
        <div className="relative h-64 bg-gradient-to-br from-purple-600/20 to-pink-600/20">
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
            <div className="text-6xl text-gray-600 group-hover:scale-110 transition-transform duration-300">👤</div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <a href={member.social.github} className="p-2 bg-black/70 backdrop-blur-sm rounded-lg text-gray-300 hover:text-white hover:bg-purple-600/50 transition-all duration-200 hover:scale-110">
              <Github size={16} />
            </a>
            <a href={member.social.linkedin} className="p-2 bg-black/70 backdrop-blur-sm rounded-lg text-gray-300 hover:text-white hover:bg-pink-600/50 transition-all duration-200 hover:scale-110">
              <Linkedin size={16} />
            </a>
            <a href={`mailto:${member.social.email}`} className="p-2 bg-black/70 backdrop-blur-sm rounded-lg text-gray-300 hover:text-white hover:bg-purple-600/50 transition-all duration-200 hover:scale-110">
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold font-ledger text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
            {member.name}
          </h3>
          <p className="text-gray-400 font-ledger text-sm group-hover:text-purple-300 transition-colors duration-300">
            {member.role}
          </p>
        </div>
      </div>
    </div>
  )

  // Step 2.2: Define animation variants
  const carouselVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // This will make each child card animate in one after the other
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 }, // Start slightly down and faded out
    visible: { 
      opacity: 1, 
      y: 0, // Animate to original position and full opacity
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="team" className="py-20 bg-black relative overflow-hidden">
        {/* --- No changes to background elements --- */}
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/3 to-purple-900/8"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/2 to-pink-600/5"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 -right-32 w-[500px] h-[500px] bg-gradient-to-l from-purple-600/30 to-pink-600/20 rounded-full blur-3xl opacity-40" />
            <div className="absolute bottom-10 -left-32 w-[600px] h-[600px] bg-gradient-to-r from-pink-600/30 to-purple-600/20 rounded-full blur-3xl opacity-40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-purple-600/15 to-pink-600/15 rounded-full blur-2xl opacity-40" />
        </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* --- No changes to Header and Toggle Switch --- */}
        <div className="text-center mb-12">
          <h2 className="text-8xl font-ledger font-bold mb-8 text-white">
            Meet Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Team</span>
          </h2>
          
          <div className="inline-flex bg-gray-800/50 backdrop-blur-sm rounded-2xl p-1 border border-gray-700/50">
            <button
              onClick={() => setActiveTab('leaders')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'leaders'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Leadership
            </button>
            <button
              onClick={() => setActiveTab('engineers')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'engineers'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Engineers
            </button>
          </div>
        </div>

        {/* Step 2.3: Wrap the conditional rendering with AnimatePresence */}
        <AnimatePresence mode="wait">
          {activeTab === 'leaders' && (
            // Step 2.4: Convert the container to a motion.div and apply variants
            // The `key` is crucial for AnimatePresence to know this is a new component
            <motion.div
              key="leaders"
              variants={carouselVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="relative"
            >
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-bold font-ledger text-white">Leadership Team</h3>
                <div className="ml-auto flex gap-2">
                  <button onClick={() => scroll('left', leadersRef)} className="p-3 bg-gray-800/50 hover:bg-purple-600/20 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-gray-400 hover:text-white hover:scale-110">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={() => scroll('right', leadersRef)} className="p-3 bg-gray-800/50 hover:bg-purple-600/20 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-gray-400 hover:text-white hover:scale-110">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
              
              <div ref={leadersRef} className="flex gap-2 overflow-x-auto scrollbar-hide py-4 px-4 -mx-4">
                {leaders.map((member) => (
                  // Step 2.5: Wrap each card in a motion.div and apply card variants
                  <motion.div key={member.id} variants={cardVariants} style={{ scrollSnapAlign: 'start' }}>
                    <TeamCard member={member} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'engineers' && (
            // Do the same for the engineers carousel
            <motion.div
              key="engineers"
              variants={carouselVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="relative"
            >
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-bold font-ledger text-white">Engineering Team</h3>
                <div className="ml-auto flex gap-2">
                  <button onClick={() => scroll('left', engineersRef)} className="p-3 bg-gray-800/50 hover:bg-purple-600/20 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-gray-400 hover:text-white hover:scale-110">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={() => scroll('right', engineersRef)} className="p-3 bg-gray-800/50 hover:bg-purple-600/20 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-gray-400 hover:text-white hover:scale-110">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
              
              <div ref={engineersRef} className="flex gap-2 overflow-x-auto scrollbar-hide py-4 px-4 -mx-4">
                {engineers.map((member) => (
                  <motion.div key={member.id} variants={cardVariants} style={{ scrollSnapAlign: 'start' }}>
                    <TeamCard member={member} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* --- No changes to the style tag --- */}
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
  )
}

export default Team