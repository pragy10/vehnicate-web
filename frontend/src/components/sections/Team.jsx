import React, { useState, useRef } from 'react'
import { Github, Linkedin, Mail, Twitter, ChevronLeft, ChevronRight, Users, Award, Clock } from 'lucide-react'

const Team = () => {
  const [activeTab, setActiveTab] = useState('leaders')
  const leadersRef = useRef(null)
  const engineersRef = useRef(null)

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

  // Enhanced smooth scroll function
  const scroll = (direction, ref) => {
    if (ref.current) {
      const container = ref.current
      const cardWidth = 320 // Width of card (280) + gap (40) 
      const scrollAmount = cardWidth * 2 // Scroll 2 cards at a time for better UX
      
      // Calculate current position and target
      const currentScroll = container.scrollLeft
      const targetScroll = direction === 'left' 
        ? Math.max(0, currentScroll - scrollAmount)
        : currentScroll + scrollAmount
      
      // Enhanced smooth scrolling with custom easing
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      })
    }
  }

  const TeamCard = ({ member }) => (
    // Added proper spacing with p-4 to prevent cut-off during scaling
    <div className="flex-shrink-0 w-80 p-4 group">
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden group-hover:border-purple-500/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
        {/* Image */}
        <div className="relative h-64 bg-gradient-to-br from-purple-600/20 to-pink-600/20">
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
            <div className="text-6xl text-gray-600 group-hover:scale-110 transition-transform duration-300">👤</div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Enhanced Social Links */}
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

        {/* Info */}
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

  return (
    <section id="team" className="py-20 bg-black relative overflow-hidden">
      {/* GRADIENT CONTINUATION FROM PREVIOUS SECTION */}
      <div className="absolute inset-0">
        {/* Main background gradient - continues from previous section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/3 to-purple-900/8"></div>
        
        {/* Secondary gradient layer for smooth continuation */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/2 to-pink-600/5"></div>
        
        {/* Bottom gradient for next section transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>

      {/* Background Patches - ENHANCED VISIBILITY */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-right patch - MUCH MORE VISIBLE */}
        <div className="absolute top-10 -right-32 w-[500px] h-[500px] bg-gradient-to-l from-purple-600/30 to-pink-600/20 rounded-full blur-3xl opacity-40" />
        
        {/* Bottom-left patch - MUCH MORE VISIBLE */}
        <div className="absolute bottom-10 -left-32 w-[600px] h-[600px] bg-gradient-to-r from-pink-600/30 to-purple-600/20 rounded-full blur-3xl opacity-40" />
        
        {/* Center patch - MUCH MORE VISIBLE */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-purple-600/15 to-pink-600/15 rounded-full blur-2xl opacity-40" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          

          <h2 className="text-8xl font-alumni font-bold mb-8 text-white">
            Meet Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Team</span>
          </h2>
          
          {/* Toggle Switch */}
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

        {/* Leaders Carousel */}
        {activeTab === 'leaders' && (
          <div className="relative">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold font-ledger text-white">Leadership Team</h3>
              <div className="ml-auto flex gap-2">
                <button
                  onClick={() => scroll('left', leadersRef)}
                  className="p-3 bg-gray-800/50 hover:bg-purple-600/20 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-gray-400 hover:text-white hover:scale-110"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => scroll('right', leadersRef)}
                  className="p-3 bg-gray-800/50 hover:bg-purple-600/20 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-gray-400 hover:text-white hover:scale-110"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            {/* Enhanced scrolling container with proper spacing */}
            <div
              ref={leadersRef}
              className="flex gap-2 overflow-x-auto scrollbar-hide py-4 px-4 -mx-4"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                scrollBehavior: 'smooth',
                scrollSnapType: 'x mandatory'
              }}
            >
              {leaders.map((member) => (
                <div key={member.id} style={{ scrollSnapAlign: 'start' }}>
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Engineers Carousel */}
        {activeTab === 'engineers' && (
          <div className="relative">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold font-ledger text-white">Engineering Team</h3>
              <div className="ml-auto flex gap-2">
                <button
                  onClick={() => scroll('left', engineersRef)}
                  className="p-3 bg-gray-800/50 hover:bg-purple-600/20 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-gray-400 hover:text-white hover:scale-110"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => scroll('right', engineersRef)}
                  className="p-3 bg-gray-800/50 hover:bg-purple-600/20 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-gray-400 hover:text-white hover:scale-110"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            {/* Enhanced scrolling container with proper spacing */}
            <div
              ref={engineersRef}
              className="flex gap-2 overflow-x-auto scrollbar-hide py-4 px-4 -mx-4"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                scrollBehavior: 'smooth',
                scrollSnapType: 'x mandatory'
              }}
            >
              {engineers.map((member) => (
                <div key={member.id} style={{ scrollSnapAlign: 'start' }}>
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      <style jsx>{`
        .scrollbar-hide {
          -webkit-scrollbar: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Enhanced smooth scrolling */
        .scrollbar-hide {
          scroll-padding: 1rem;
          scroll-timeline: --carousel;
        }
        
        /* Smooth scroll snap points */
        @supports (scroll-snap-type: x mandatory) {
          .scrollbar-hide {
            scroll-snap-type: x mandatory;
          }
        }
      `}</style>
    </section>
  )
}

export default Team
