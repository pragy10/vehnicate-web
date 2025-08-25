import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Car, Trophy, Building } from "lucide-react";

const Working = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [carPosition, setCarPosition] = useState(0);
  const [carVisible, setCarVisible] = useState(true);
  const [lastPosition, setLastPosition] = useState(0);

  const CarSVG = ({ color = "#ec4899" }) => (
    <svg
      width="48"
      height="20"
      viewBox="0 0 48 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-4 sm:w-10 sm:h-5 md:w-12 md:h-6"
    >
      {/* Body */}
      <path
        d="M6 10 Q10 2 18 2 H30 Q38 2 42 10 V14 H6 V10 Z"
        fill={color}
      />
      {/* Wheels */}
      <circle cx="14" cy="16" r="3" fill="#1a1a1a" />
      <circle cx="34" cy="16" r="3" fill="#1a1a1a" />
    </svg>
  );

  const steps = [
    {
      icon: <User className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />,
      title: "Meet Samprisha",
      description:
        "A daily commuter who loves driving but struggles with traffic and fuel costs.",
    },
    {
      icon: <Car className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />,
      title: "Smart Driving",
      description:
        "She uses vehnicate to track driving patterns and optimize routes.",
    },
    {
      icon: <Trophy className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />,
      title: "Earn Rewards",
      description: "Through our RPS system, she earns points for safe driving.",
    },
    {
      icon: <Building className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />,
      title: "Real Benefits",
      description:
        "Insurance discounts, service deals, and government incentives.",
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
            How it <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-ledger max-w-4xl mx-auto px-4 sm:px-0">
            Follow{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
              Samprisha's journey
            </span>{" "}
            as she transforms her daily commute.
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

            {/* Car */}
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
                  className="w-8 h-6 sm:w-10 sm:h-7 md:w-12 md:h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-md sm:rounded-lg shadow-lg relative transform -translate-x-1/2"
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
                  style={{
                    filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.5))",
                  }}
                >
                  <CarSVG color="#9333ea" />
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Ghost number */}
              <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-bold text-white/5 group-hover:text-purple-500/10 transition-colors duration-500 select-none z-0">
                {index + 1}
              </div>

              {/* Card */}
              <motion.div
                animate={{
                  scale: activeStep === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.5, type: "spring" }}
                className={`relative bg-white/5 backdrop-blur-md border rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full z-10 overflow-visible 
                ${
                  activeStep === index
                    ? "border-transparent"
                    : "border-gray-700/50"
                }`}
                style={{
                  backgroundImage:
                    activeStep === index
                      ? "linear-gradient(#1f1f1f, #1f1f1f), linear-gradient(90deg, #9333ea, #ec4899)"
                      : undefined,
                  backgroundOrigin:
                    activeStep === index ? "border-box" : undefined,
                  backgroundClip:
                    activeStep === index
                      ? "padding-box, border-box"
                      : undefined,
                }}
              >
                {/* Floating icon */}
                <motion.div
                  animate={{
                    y: activeStep === index ? [-5, 0, -5] : 0,
                  }}
                  transition={{
                    repeat: activeStep === index ? Infinity : 0,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 sm:-top-8 lg:-top-10 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg"
                >
                  <div className="text-white">{step.icon}</div>
                </motion.div>

                <h3 className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl font-bold text-white font-ledger leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm mt-2 sm:mt-3 font-ledger leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Working;
