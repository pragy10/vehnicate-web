import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Reusable glassmorphism card for causes grid
const Card = ({ children, className = "" }) => (
  <div
    className={`relative rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 shadow-lg shadow-purple-500/5 ${className}`}
  >
    {/* Animated gradient border */}
    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-500/40 transition-all duration-500"></div>
    {/* Subtle light streak */}
    <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
    {children}
  </div>
);

const slides = [
  {
    text: `" On an average, India loses a person once in every 3 minutes and 3% of its GDP to road chaos. Chaos caused by the nation’s driving attitude. "`,
    image: "/road_accident.jpg", // replace with your image path
  },
  {
    text: `" In first six months of 2025, over 29,000 die in national highway accidents, more than 50% of last year. "`,
    image: "/road_accident2.png", // replace with your image path
  },
];

const causes = [
  "Overspeeding",
  "Reckless Driving",
  "Poor Infrastructure",
  "Human Factors",
  "Enforcement Issues",
  "Vehicle Failure  ",
];

const WhyDoIt = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="why"
      className="py-16 bg-gradient-to-b from-black via-purple-900/5 to-black relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-72 h-72 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-gradient-to-l from-pink-600/10 to-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-ledger font-bold mb-4 sm:mb-6 text-white leading-tight">
            The Big{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Problem...
            </span>
          </h2>
        </motion.div>

        {/* Sliding cards (transparent, no glassy effect) */}
        <div className="relative w-full h-[350px] sm:h-[400px] lg:h-[450px] mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col lg:flex-row"
            >
              {/* Left content */}
              <div className="flex-1 flex items-center justify-center p-6 sm:p-10 text-center lg:text-left">
                <p className="text-lg sm:text-xl lg:text-4xl font-ledger text-gray-200 leading-relaxed">
                  {slides[current].text}
                </p>
              </div>
              {/* Right image */}
              <div className="flex-1">
                <img
                  src={slides[current].image}
                  alt="Road safety"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Causes Section - Split layout */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          {/* Left: Cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {causes.map((cause, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-6 text-center group hover:scale-[1.03] transition-transform duration-500">
                  <h3 className="text-lg sm:text-xl font-semibold font-ledger text-white mb-2">
                    {cause}
                  </h3>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Right: "Caused by" heading */}
          <div className="flex-1 flex items-center justify-center">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold font-ledger text-white text-center"
            >
              ...boils down to these factors
            </motion.h3>
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-lg sm:text-xl lg:text-3xl text-gray-300 font-ledger leading-relaxed">
            Small driving actions create huge outcomes. <br />
            That’s why we gamify every movement using
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {" "}
              IMU + camera{" "}
            </span>
            insights, something no one else can.<br></br>
            <br></br>
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent ">
              One product to tackle them all
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDoIt;
