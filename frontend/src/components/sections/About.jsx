import React from 'react'
import { motion } from 'framer-motion'
import { Database, Award, Handshake, Target } from 'lucide-react'

// Reusable glassmorphism card
const Card = ({ children, className = '' }) => (
  <div className={`relative rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 shadow-lg shadow-purple-500/5 ${className}`}>
    {/* Animated gradient border */}
    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-500/40 transition-all duration-500"></div>
    {/* Subtle light streak */}
    <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
    {children}
  </div>
)

const About = () => {
  const features = [
    {
      icon: <Database className="w-6 sm:w-8 md:w-10 lg:w-10 h-6 sm:h-8 md:h-10 lg:h-10" />,
      title: "Data Acquisition & Analysis",
      description: "Advanced algorithms to acquire and analyze vehicle movement data with precision.",
      number: "01"
    },
    {
      icon: <Award className="w-6 sm:w-8 md:w-10 lg:w-10 h-6 sm:h-8 md:h-10 lg:h-10" />,
      title: "vehnicate Reward Penalty System (RPS)",
      description: "Quantify driving behavior with our innovative reward and penalty system.",
      number: "02"
    },
    {
      icon: <Handshake className="w-6 sm:w-8 md:w-10 lg:w-10 h-6 sm:h-8 md:h-10 lg:h-10" />,
      title: "Strategic Partnerships",
      description: "Collaborating with insurance companies, service centers, government, and fleet owners.",
      number: "03"
    },
    {
      icon: <Target className="w-6 sm:w-8 md:w-10 lg:w-10 h-6 sm:h-8 md:h-10 lg:h-10" />,
      title: "RPS Incentivization",
      description: "Creating meaningful incentives based on our comprehensive reward penalty system.",
      number: "04"
    }
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black via-purple-900/5 to-black relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 sm:-left-48 lg:-left-64 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 sm:-right-48 lg:-right-64 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-l from-pink-600/10 to-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight font-ledger">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
              About
            </span>{' '}
            <span className="text-white relative">
              vehnicate
              <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            </span>
          </h2>

          <div className="max-w-4xl mx-auto font-ledger">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-4 sm:mb-6 px-4 sm:px-0">
              We build an ecosystem to support{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                gamified driving
              </span>.
            </p>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed px-4 sm:px-0">
              From acquiring & analyzing data on vehicle movements to quantifying driving behavior with the vehnicate Reward Penalty System (RPS)
              to partnering with insurance companies, vehicle service centers, government, and fleet owners
              to incentivize the RPS.
            </p>
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full group hover:scale-[1.03] transition-transform duration-500">
                <div className="relative p-4 sm:p-6 lg:p-8">
                  {/* Step number */}
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-700/10 group-hover:text-purple-500/20 transition-colors duration-500">
                    {feature.number}
                  </div>

                  {/* Floating icon */}
                  <div className="absolute -top-4 sm:-top-6 lg:-top-8 left-4 sm:left-6 lg:left-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl shadow-purple-500/30 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                    <div className="text-white">{feature.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="mt-8 sm:mt-10 lg:mt-12">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 text-white group-hover:text-purple-300 transition-colors duration-300 font-ledger leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-200 transition-colors duration-300 font-ledger leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-purple-500/5 to-pink-500/5 transition-opacity duration-500"></div>
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
