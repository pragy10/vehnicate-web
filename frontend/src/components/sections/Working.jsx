import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Car, Trophy, Building } from "lucide-react";

// Reusable glassmorphism card (copied from About.jsx)
const Card = ({ children, className = '', isActive = false }) => (
  <div className={`relative rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 shadow-lg shadow-purple-500/5 ${className}`}>
    {/* Animated gradient border */}
    <div className={`absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 ${isActive || 'group-hover:border-purple-500/40'} ${isActive && 'border-purple-500/40'}`}></div>
    {/* Subtle light streak */}
    <div className={`absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl transition-transform duration-700 ${isActive || 'group-hover:scale-150'} ${isActive && 'scale-150'}`}></div>
    {children}
  </div>
)

const Working = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [carPosition, setCarPosition] = useState(0);
  const [carVisible, setCarVisible] = useState(true);
  const [lastPosition, setLastPosition] = useState(0);

  // Updated CarImage component that accepts an image src
  const CarImage = ({ src, alt = "Car", className = "w-8 h-6 sm:w-10 sm:h-7 md:w-12 md:h-8" }) => (
    <div className={`${className} relative transform -translate-x-1/2`}>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-contain"
        style={{
          filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.5))",
        }}
      />
    </div>
  );

  const steps = [
    {
      icon: <User className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />,
      title: "Meet Samprisha",
      description:
        "A daily commuter who loves driving but struggles with traffic and fuel costs.",
      number: "01"
    },
    {
      icon: <Car className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />,
      title: "Smart Driving",
      description:
        "She uses vehnicate to track driving patterns and optimize routes.",
      number: "02"
    },
    {
      icon: <Trophy className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />,
      title: "Earn Rewards",
      description: "Through our RPS system, she earns points for safe driving.",
      number: "03"
    },
    {
      icon: <Building className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />,
      title: "Real Benefits",
      description:
        "Insurance discounts, service deals, and government incentives.",
      number: "04"
    },
  ];

  const roadStops = [10, 35, 65, 90];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const nextStep = (prev + 1) % steps.length;
        if (nextStep === 0) {
          setCarVisible(false);
          setTimeout(() => {
            setCarPosition(0);
            setTimeout(() => setCarVisible(true), 300);
          }, 400);
        }
        return nextStep;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carVisible) {
      setLastPosition(carPosition);
      setCarPosition(roadStops[activeStep]);
    }
  }, [activeStep, carVisible]);

  return (
    <section id="working" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black via-purple-900/5 to-black relative overflow-hidden">
      {/* Background light blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-16 sm:-right-24 lg:-right-32 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-l from-purple-600/25 to-pink-600/15 rounded-full blur-3xl opacity-80" />
        <div className="absolute bottom-20 -left-16 sm:-left-24 lg:-left-32 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-pink-600/25 to-purple-600/15 rounded-full blur-3xl opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-ledger font-bold mb-4 sm:mb-6 lg:mb-8 text-white leading-tight">
            How Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Ecosystem</span> Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-ledger max-w-4xl mx-auto px-4 sm:px-0">
            Follow Samprisha's journey as she transforms her daily commute.
          </p>
        </motion.div>

        {/* Road */}
        <div className="relative mb-12 sm:mb-16 lg:mb-20 w-full">
          <div className="relative h-20 sm:h-24 md:h-28 lg:h-32 flex items-center w-full">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="roadGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4a4a4a" />
                  <stop offset="20%" stopColor="#2e2e2e" />
                  <stop offset="80%" stopColor="#1a1a1a" />
                  <stop offset="100%" stopColor="#0a0a0a" />
                </linearGradient>
              </defs>
              {/* Road base */}
              <rect
                x="0"
                y="3"
                width="100"
                height="6"
                fill="url(#roadGradient)"
                rx="3"
              />
              {/* Center dashed line */}
              <motion.line
                x1="0"
                y1="6"
                x2="100"
                y2="6"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="0.3"
                strokeDasharray="2, 1.5"
                strokeLinecap="round"
                animate={{ strokeDashoffset: [0, -7] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
            </svg>

            {/* Checkpoints */}
            {roadStops.map((stop, index) => (
              <div
                key={index}
                className="absolute"
                style={{
                  left: `${stop}%`,
                  top: "15px",
                  transform: "translateX(-50%)",
                }}
              >
                {activeStep === index && (
                  <motion.div
                    className="absolute inset-0 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(236,72,153,0.8) 0%, rgba(147,51,234,0.4) 70%, transparent 100%)",
                      filter: "blur(4px)",
                    }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
                <motion.div
                  className={`relative w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full border border-white sm:border-2 z-10 ${
                    activeStep === index
                      ? "bg-gradient-to-br from-white via-pink-400 to-purple-600"
                      : "bg-gray-400/70"
                  }`}
                  animate={{
                    scale: activeStep === index ? [1, 1.4, 1] : 1,
                    boxShadow:
                      activeStep === index
                        ? [
                            "0 0 10px rgba(236,72,153,0.5)",
                            "0 0 25px rgba(236,72,153,0.8)",
                            "0 0 10px rgba(236,72,153,0.5)",
                          ]
                        : "0 0 0px rgba(236,72,153,0)",
                  }}
                  transition={{
                    duration: 2,
                    repeat: activeStep === index ? Infinity : 0,
                  }}
                />
              </div>
            ))}

            {/* Car - Updated to use image */}
            {carVisible && (
              <motion.div
                className="absolute z-20"
                style={{ top: "25px", left: "0%" }}
                animate={{ left: `${carPosition}%` }}
                transition={{
                  duration: 3,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -3, 0],
                    rotateY:
                      carPosition > lastPosition
                        ? [0, 2, 0]
                        : carPosition < lastPosition
                        ? [0, -2, 0]
                        : 0,
                  }}
                  transition={{
                    y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                    rotateY: { duration: 1.5, ease: "easeInOut" },
                  }}
                >
                  {/* Replace with your image source */}
                  <CarImage 
                    src="/car.png" 
                    alt="Car moving along the road"
                    className="w-12 h-10 sm:w-16 sm:h-12 md:w-20 md:h-16"
                  />
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card 
                className={`h-full group transition-transform duration-500 ${
                  activeStep === index ? 'scale-[1.03]' : 'hover:scale-[1.03]'
                }`}
                isActive={activeStep === index}
              >
                <div className="relative p-4 sm:p-6 lg:p-8">
                  {/* Step number */}
                  <div className={`absolute top-2 right-2 sm:top-4 sm:right-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold transition-colors duration-500 ${
                    activeStep === index 
                      ? 'text-purple-500/20' 
                      : 'text-gray-700/10 group-hover:text-purple-500/20'
                  }`}>
                    {step.number}
                  </div>

                  {/* Floating icon */}
                  <div className={`absolute -top-4 sm:-top-6 lg:-top-8 left-4 sm:left-6 lg:left-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl shadow-purple-500/30 transform transition-all duration-500 ${
                    activeStep === index 
                      ? 'rotate-6 scale-110' 
                      : 'group-hover:rotate-6 group-hover:scale-110'
                  }`}>
                    <div className="text-white">{step.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="mt-8 sm:mt-10 lg:mt-12">
                    <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 transition-colors duration-300 font-ledger leading-tight ${
                      activeStep === index 
                        ? 'text-purple-300' 
                        : 'text-white group-hover:text-purple-300'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm sm:text-base transition-colors duration-300 font-ledger leading-relaxed ${
                      activeStep === index 
                        ? 'text-gray-200' 
                        : 'text-gray-400 group-hover:text-gray-200'
                    }`}>
                      {step.description}
                    </p>
                  </div>

                  {/* Hover overlay */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 transition-opacity duration-500 ${
                    activeStep === index 
                      ? 'opacity-100' 
                      : 'opacity-0 group-hover:opacity-100'
                  }`}></div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Working;