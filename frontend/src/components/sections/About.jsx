import React from 'react'
import { motion } from 'framer-motion'
import { Database, Award, Handshake, Target } from 'lucide-react'

const Card = ({ children, className = '' }) => (
  <div className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl ${className}`}>
    {children}
  </div>
)

const About = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Acquisition & Analysis",
      description: "Advanced algorithms to acquire and analyze vehicle movement data with precision.",
      number: "01"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "vehnicate Reward Penalty System (RPS)",
      description: "Quantify driving behavior with our innovative reward and penalty system.",
      number: "02"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Strategic Partnerships",
      description: "Collaborating with insurance companies, service centers, government, and fleet owners.",
      number: "03"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "RPS Incentivization",
      description: "Creating meaningful incentives based on our comprehensive reward penalty system.",
      number: "04"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-purple-900/5 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-gradient-to-l from-pink-600/10 to-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section with improved layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-500"></div>
            <span className="mx-4 text-sm font-medium text-purple-400 uppercase tracking-wider">Our Mission</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-pink-500"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
              About
            </span>{' '}
            <span className="text-white relative">
              vehnicate
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
              We build an ecosystem to support{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                gamified driving
              </span>.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              From acquiring & analyzing data on vehicle movements to quantifying driving behavior with the vehnicate Reward Penalty System (RPS) 
              to partnering with insurance companies, vehicle service centers, government, and fleet owners 
              to incentivize the RPS.
            </p>
          </div>
        </motion.div>

        {/* Features Grid with innovative layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-[1.02] hover:border-purple-500/30">
                <div className="relative p-8">
                  {/* Step number */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-gray-800/30 group-hover:text-purple-500/20 transition-colors duration-300">
                    {feature.number}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-shadow duration-300">
                          <div className="text-white">
                            {feature.icon}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300 leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About