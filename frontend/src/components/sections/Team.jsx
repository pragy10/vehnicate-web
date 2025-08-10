import React, { useState, useRef } from 'react'
import { Github, Linkedin, Mail, Twitter, ChevronLeft, ChevronRight, Users, Award, Clock } from 'lucide-react'

const Team = () => {
  const [activeTab, setActiveTab] = useState('leaders')
  const leadersRef = useRef(null)
  const engineersRef = useRef(null)

  const leaders = [
    {
      id: 1,
      name: "Alexandra Chen",
      role: "Chief Executive Officer",
      image: "/api/placeholder/300/400",
      social: {
        github: "https://github.com/alexandra-chen",
        linkedin: "https://linkedin.com/in/alexandra-chen",
        twitter: "https://twitter.com/alexandra_chen",
        email: "alexandra@vehnicate.com"
      }
    },
    {
      id: 2,
      name: "Marcus Rodriguez", 
      role: "Chief Technology Officer",
      image: "/api/placeholder/300/400",
      social: {
        github: "https://github.com/marcus-rodriguez",
        linkedin: "https://linkedin.com/in/marcus-rodriguez",
        twitter: "https://twitter.com/marcus_tech",
        email: "marcus@vehnicate.com"
      }
    },
    {
      id: 3,
      name: "Dr. Sarah Kim",
      role: "Chief Financial Officer",
      image: "/api/placeholder/300/400",
      social: {
        github: "https://github.com/sarah-kim",
        linkedin: "https://linkedin.com/in/sarah-kim-cfo",
        twitter: "https://twitter.com/sarahkim_cfo",
        email: "sarah@vehnicate.com"
      }
    },
    {
      id: 4,
      name: "Dr. Rajesh Patel",
      role: "Chief Product Officer",
      image: "/api/placeholder/300/400",
      social: {
        github: "https://github.com/rajesh-patel",
        linkedin: "https://linkedin.com/in/rajesh-patel-product",
        twitter: "https://twitter.com/rajesh_product",
        email: "rajesh@vehnicate.com"
      }
    }
  ]

  const engineers = [
    {
      id: 5,
      name: "Emma Thompson",
      role: "Senior Mobile Developer",
      image: "/api/placeholder/300/400",
      social: {
        github: "https://github.com/emma-thompson",
        linkedin: "https://linkedin.com/in/emma-thompson-dev",
        twitter: "https://twitter.com/emma_mobile",
        email: "emma@vehnicate.com"
      }
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Machine Learning Engineer",
      image: "/api/placeholder/300/400",
      social: {
        github: "https://github.com/james-wilson",
        linkedin: "https://linkedin.com/in/james-wilson-ml",
        twitter: "https://twitter.com/james_ai",
        email: "james@vehnicate.com"
      }
    },
    {
      id: 7,
      name: "Lisa Park",
      role: "Backend Engineer",
      image: "/api/placeholder/300/400",
      social: {
        github: "https://github.com/lisa-park",
        linkedin: "https://linkedin.com/in/lisa-park-backend",
        twitter: "https://twitter.com/lisa_backend",
        email: "lisa@vehnicate.com"
      }
    },
    {
      id: 8,
      name: "Michael Chang",
      role: "DevOps Engineer",
      image: "/api/placeholder/300/400",
      social: {
        github: "https://github.com/michael-chang",
        linkedin: "https://linkedin.com/in/michael-chang-devops",
        twitter: "https://twitter.com/michael_devops",
        email: "michael@vehnicate.com"
      }
    },
    {
      id: 9,
      name: "David Kim",
      role: "UI/UX Designer",
      image: "/api/placeholder/300/400",
      social: {
        github: "https://github.com/david-kim",
        linkedin: "https://linkedin.com/in/david-kim-design",
        twitter: "https://twitter.com/david_design",
        email: "david@vehnicate.com"
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
            <a href={member.social.linkedin} className="p-2 bg-black/70 backdrop-blur-sm rounded-lg text-gray-300 hover:text-white hover:bg-purple-600/50 transition-all duration-200 hover:scale-110">
              <Linkedin size={16} />
            </a>
            <a href={member.social.twitter} className="p-2 bg-black/70 backdrop-blur-sm rounded-lg text-gray-300 hover:text-white hover:bg-purple-600/50 transition-all duration-200 hover:scale-110">
              <Twitter size={16} />
            </a>
            <a href={`mailto:${member.social.email}`} className="p-2 bg-black/70 backdrop-blur-sm rounded-lg text-gray-300 hover:text-white hover:bg-pink-600/50 transition-all duration-200 hover:scale-110">
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Info */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
            {member.name}
          </h3>
          <p className="text-gray-400 text-sm group-hover:text-purple-300 transition-colors duration-300">
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
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-500"></div>
            <span className="mx-4 text-sm font-medium text-purple-400 uppercase tracking-wider">Our Team</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-pink-500"></div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Meet Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Team</span>
          </h2>
          
          {/* Toggle Switch */}
          <div className="inline-flex bg-gray-800/50 backdrop-blur-sm rounded-full p-1 border border-gray-700/50 mb-8">
            <button
              onClick={() => setActiveTab('leaders')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'leaders'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Leadership
            </button>
            <button
              onClick={() => setActiveTab('engineers')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
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
          <div className="relative mb-16">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-white">Leadership Team</h3>
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
          <div className="relative mb-16">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-white">Engineering Team</h3>
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
