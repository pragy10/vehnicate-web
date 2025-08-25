import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Star, Users, Award, Clock } from "lucide-react";

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const rotatingWords = [
    "responsibly",
    "safely",
    "smartly",
    "efficiently",
    "confidently",
    "sustainably",
  ];

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(wordInterval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-black relative overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-vehnicate-purple/5 via-vehnicate-pink/5 to-black"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(236, 72, 153, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 72, 153, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
          }}
        >
          <motion.div
            animate={{
              backgroundPosition: [
                "0px 0px, 0px 0px, 0px 0px, 0px 0px",
                "100px 100px, 100px 100px, 20px 20px, 20px 20px",
              ],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(147, 51, 234, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(147, 51, 234, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px, 50px 50px",
            }}
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.1)_0%,rgba(147,51,234,0.05)_50%,transparent_70%)]"></div>
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(147,51,234,0.1) 0%, transparent 40%), linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.8) 100%)",
              "radial-gradient(circle at 80% 50%, rgba(236,72,153,0.1) 0%, transparent 40%), linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.8) 100%)",
              "radial-gradient(circle at 40% 70%, rgba(147,51,234,0.1) 0%, transparent 40%), linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.8) 100%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between min-h-[60vh] gap-10">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8 max-w-2xl text-left"
          >
            {/* Announcement */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">
                Now in Beta • Join the Revolution
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[0.9] tracking-tight"
            >
              <div className="font-ledger text-white mb-2 text-7xl">
                Empowering the nation to drive more
              </div>
              <div className="relative text-9xl py">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="font-ledger text-9xl bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent inline-block"
                  >
                    {rotatingWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-300 leading-relaxed max-w-xl font-ledger"
            >
              Where every movement is quantified, every humane act is paid off,
              and every journey becomes an experience.
            </motion.p>
          </motion.div>

          {/* RIGHT SIDE - IMAGE CONTAINER */}
          {/* Step 1: Add a relative container to hold both images */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative">
            {/* Base Image (the original one) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.5, scale: 2 }}
              transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
              className="w-full flex justify-center"
            >
              <img
                src="/gggyrate.svg"
                alt="Hero Illustration Background"
                className="max-w-full h-auto rounded-2xl shadow-lg"
              />
            </motion.div>

            {/* Step 2: Add the new overlay image, positioned absolutely */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.2 }}
              transition={{ delay: 1.2, duration: 1, type: "spring", stiffness: 100 }}
              className="absolute inset-0 flex justify-center items-center"
            >
              {/* You can change the src of this image to your own */}
              <img
                src="/car_dam.png"
                alt="Hero Illustration Overlay"
                className="w-full" // Example styling, adjust as needed
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/000000/FFFFFF?text=Image+Error'; }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
