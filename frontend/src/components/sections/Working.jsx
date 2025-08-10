import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { User, Car, Trophy, Building } from 'lucide-react'
import carImage from '/car.png'

const GradientText = ({ children, className = '' }) => (
  <span className={`bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
)

const Working = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [carPosition, setCarPosition] = useState(0)
  const [carVisible, setCarVisible] = useState(true)

  const steps = [
    {
      icon: <User className="w-6 h-6" />,
      title: "Meet Samprisha",
      description: "A daily commuter who loves driving but struggles with traffic and fuel costs."
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Smart Driving", 
      description: "She uses vehnicate to track driving patterns and optimize routes."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Earn Rewards",
      description: "Through our RPS system, she earns points for safe driving."
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Real Benefits",
      description: "Insurance discounts, service deals, and government incentives."
    }
  ]

  // Road stop positions (percentages along the horizontal road)
  const roadStops = [15, 35, 65, 85]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => {
        const nextStep = (prev + 1) % steps.length
        
        // If we're going back to step 0, hide car, reset position, then show car
        if (nextStep === 0) {
          setCarVisible(false)
          setTimeout(() => {
            setCarPosition(0)
            setTimeout(() => {
              setCarVisible(true)
            }, 200)
          }, 300)
        }
        
        return nextStep
      })
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Update car position when active step changes
    setCarPosition(roadStops[activeStep])
  }, [activeStep])

  return (
    <section id="working" className="py-20 bg-gradient-to-b from-black via-purple-900/5 to-black relative overflow-hidden">
      {/* ENHANCED Background Patches - Much More Visible */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-right patch - More visible */}
        <div className="absolute top-20 -right-32 w-96 h-96 bg-gradient-to-l from-purple-600/25 to-pink-600/15 rounded-full blur-3xl opacity-80" />
        
        {/* Bottom-left patch - More visible */}
        <div className="absolute bottom-20 -left-32 w-80 h-80 bg-gradient-to-r from-pink-600/25 to-purple-600/15 rounded-full blur-3xl opacity-80" />
        
        {/* Center patch - More visible */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-2xl opacity-70" />
        
        {/* Additional subtle patches for depth */}
        <div className="absolute top-32 left-1/4 w-48 h-48 bg-gradient-to-br from-purple-400/15 to-transparent rounded-full blur-2xl opacity-60" />
        <div className="absolute bottom-32 right-1/4 w-56 h-56 bg-gradient-to-bl from-pink-400/15 to-transparent rounded-full blur-2xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-500"></div>
            <span className="mx-4 text-sm font-medium text-purple-400 uppercase tracking-wider">The Journey</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-pink-500"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <GradientText>How It Works</GradientText>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow Samprisha's journey as she transforms her daily commute
          </p>
        </motion.div>

        {/* Road Container - Simplified for PNG Car */}
        <div className="relative mb-12">
          <div className="flex items-center justify-center">
            <svg
              width="100%"
              height="120"
              viewBox="0 0 1000 120"
              className="max-w-5xl"
            >
              {/* Simple Road */}
              <rect
                x="50"
                y="55"
                width="900"
                height="20"
                fill="rgba(107, 114, 128, 0.8)"
                rx="10"
                className="drop-shadow-lg"
              />
              
              {/* Road Center Line */}
              <line
                x1="50"
                y1="65"
                x2="950"
                y2="65"
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="2"
                strokeDasharray="15,10"
                strokeLinecap="round"
              />
              
              {/* Road Stop Points */}
              {roadStops.map((stop, index) => {
                const xPos = 50 + (900 * stop / 100)
                return (
                  <g key={index}>
                    {/* Stop Point Circle */}
                    <motion.circle
                      cx={xPos}
                      cy="35"
                      r="8"
                      fill={activeStep === index ? "url(#activeGradient)" : "rgba(107, 114, 128, 0.8)"}
                      stroke="white"
                      strokeWidth="2"
                      animate={{
                        scale: activeStep === index ? [1, 1.3, 1] : 1,
                        r: activeStep === index ? [8, 12, 8] : 8
                      }}
                      transition={{ duration: 1, repeat: activeStep === index ? Infinity : 0 }}
                      className="drop-shadow-lg"
                    />
                    
                    {/* Step Number */}
                    <text
                      x={xPos}
                      y="40"
                      textAnchor="middle"
                      fill="white"
                      fontSize="10"
                      fontWeight="bold"
                    >
                      {index + 1}
                    </text>

                    {/* Connection line */}
                    <line
                      x1={xPos}
                      y1="43"
                      x2={xPos}
                      y2="55"
                      stroke={activeStep === index ? "#ec4899" : "rgba(107, 114, 128, 0.5)"}
                      strokeWidth="2"
                      strokeDasharray="3,2"
                    />
                  </g>
                )
              })}
              
              {/* Gradient Definitions */}
              <defs>
                <radialGradient id="activeGradient">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#9333ea" />
                </radialGradient>
              </defs>
            </svg>

            {/* PNG Car - Replace SVG with Image */}
            {carVisible && (
              <motion.img
                src={carImage} // Replace with your car PNG path
                alt="Car"
                className="absolute w-12 h-auto pointer-events-none z-10"
                style={{
                  top: '45px', // Align with road
                  left: '50px'
                }}
                animate={{
                  x: (900 * carPosition / 100)
                }}
                transition={{ 
                  duration: 2.5, 
                  ease: "easeInOut"
                }}
              />
            )}
          </div>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                animate={{
                  scale: activeStep === index ? 1.05 : 1,
                  y: activeStep === index ? -8 : 0
                }}
                transition={{ duration: 0.5, type: "spring" }}
                className="bg-gray-900/50 backdrop-blur-sm border-2 rounded-2xl p-6 h-full transition-all duration-500 relative overflow-hidden"
                style={{
                  borderColor: activeStep === index ? 'rgba(236, 72, 153, 0.8)' : 'rgba(75, 85, 99, 0.5)',
                  boxShadow: activeStep === index ? '0 0 30px rgba(236, 72, 153, 0.3)' : 'none'
                }}
              >
                {/* Active glow */}
                {activeStep === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl"
                  />
                )}
                
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: activeStep === index ? 1.2 : 1,
                      rotate: activeStep === index ? [0, 10, -10, 0] : 0
                    }}
                    transition={{ duration: 0.8 }}
                    className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg"
                  >
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Active indicator */}
                  {activeStep === index && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "3rem" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mt-4"
                    />
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom indicator */}
        
      </div>
    </section>
  )
}

export default Working
