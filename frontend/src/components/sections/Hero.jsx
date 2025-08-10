import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  ArrowRight,
  Smartphone,
  Star,
  Zap,
  Users,
  Award,
  Clock,
  CheckCircle,
} from "lucide-react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl";
  const variants = {
    primary:
      "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105",
    secondary:
      "bg-gray-800/50 text-white border border-gray-600 hover:bg-gray-700/50 hover:border-purple-500/50 backdrop-blur-sm",
  };
  const sizes = {
    md: "px-6 py-3 text-sm",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Rotating words for "responsibly"
  const rotatingWords = [
    "responsibly",
    "safely",
    "smartly",
    "efficiently",
    "confidently",
    "sustainably",
  ];

  const stats = [
    { value: "1000+", label: "Beta Users", icon: Users },
    { value: "50+", label: "Partners", icon: Award },
    { value: "24/7", label: "Support", icon: Clock },
  ];

  const features = [
    "Real-time driving analytics",
    "Reward tracking system",
    "Partner integrations",
    "Gamified challenges",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Word rotation effect
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500); // Change word every 2.5 seconds
    return () => clearInterval(wordInterval);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden pt-20"
    >
      {/* Grid Background Pattern with Gradient to Black */}
      <div className="absolute inset-0">
        {/* Base gradient background that fades to black at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-vehnicate-purple/5 via-vehnicate-pink/5 to-black"></div>

        {/* Animated grid pattern */}
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

        {/* Enhanced radial gradients that also fade to black */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.1)_0%,rgba(147,51,234,0.05)_50%,transparent_70%)]"></div>

        {/* Animated mesh background with fade to black */}
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

        {/* Strong gradient to black at the bottom for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>

      {/* Enhanced floating elements */}
      <motion.div
        animate={{
          y: [-15, 15, -15],
          rotate: [0, 5, 0, -5, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-10 w-20 h-20 border-2 border-purple-500/30 rounded-2xl flex items-center justify-center backdrop-blur-md bg-gradient-to-br from-purple-600/10 to-pink-600/10"
      >
        <Zap className="text-pink-400" size={24} />
      </motion.div>

      <motion.div
        animate={{
          y: [15, -15, 15],
          rotate: [0, -5, 0, 5, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-10 w-18 h-18 border-2 border-pink-500/30 rounded-full flex items-center justify-center backdrop-blur-md bg-gradient-to-br from-pink-600/10 to-purple-600/10"
      >
        <Star className="text-purple-400" size={20} />
      </motion.div>

      {/* Additional floating elements */}
      <motion.div
        animate={{
          y: [10, -10, 10],
          x: [0, 5, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/4 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Enhanced Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-left space-y-8"
          >
            {/* Announcement badge */}
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

            {/* Enhanced main heading - SMALLER TEXT SIZES + WORD ROTATION ON "RESPONSIBLY" */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[0.9] tracking-tight"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-white mb-2"
              >
                Empowering the nation to drive more
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8, type: "spring" }}
                className="relative"
              >
                {/* ROTATING WORDS ON "RESPONSIBLY" */}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{
                      opacity: 0,
                      y: 20,
                      filter: "blur(4px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      y: -20,
                      filter: "blur(4px)",
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent inline-block"
                  >
                    {rotatingWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>

                {/* DIVIDER LINE WITH MORE GAP */}
                <motion.div
                  animate={{ scaleX: [0, 1] }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full origin-left"
                />
              </motion.div>
            </motion.h1>

            {/* Enhanced description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Where every mile earns rewards, every safe turn builds your
                reputation, and every journey brings you closer to exclusive
                benefits.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                Join thousands of drivers already earning real rewards for safe
                driving.
              </p>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="primary"
                size="md"
                onClick={scrollToAbout}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform relative z-10"
                  size={18}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button variant="secondary" size="md" className="group relative">
                <Play
                  className="mr-2 group-hover:scale-110 transition-transform"
                  size={18}
                />
                <span>Watch Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>

            {/* Enhanced animated stats */}
          </motion.div>

          {/* Right side - Enhanced App Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* REDUCED glow effects */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur-xl opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-2xl blur-lg"></div>

              {/* Enhanced main card */}
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative backdrop-blur-xl border-2 border-purple-500/30 rounded-3xl p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 shadow-2xl"
              >
                {/* Rest of your card content remains the same */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full"
                  />
                </div>

                <div className="relative z-10">
                  {/* Enhanced app icon */}
                  <div className="flex justify-center mb-8">
                    <motion.div
                      animate={{
                        rotate: [0, 3, -3, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="relative"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/30">
                        <Smartphone className="text-white" size={32} />
                      </div>
                      {/* REDUCED app icon glow */}
                      <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/15 to-pink-600/15 rounded-3xl blur-md -z-10"></div>
                    </motion.div>
                  </div>

                  {/* Enhanced app info */}
                  <div className="text-center space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        vehnicate App
                      </h3>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                        <p className="text-pink-400 font-semibold">
                          Coming Soon to PlayStore
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      Join our exclusive waitlist and be the first to experience
                      the revolution in gamified driving.
                    </p>

                    {/* Enhanced waitlist button */}
                    <Button
                      variant="primary"
                      size="md"
                      className="w-full group relative overflow-hidden"
                    >
                      <span className="relative z-10">Join Waitlist</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="ml-2 relative z-10"
                      >
                        <ArrowRight size={16} />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Button>

                    {/* Enhanced features list */}
                    <div className="space-y-3 pt-4">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        Coming Features
                      </h4>
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.2 + index * 0.1 }}
                          className="flex items-center text-sm text-gray-300 group"
                        >
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-3 group-hover:text-pink-400 transition-colors" />
                          <span className="group-hover:text-white transition-colors">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced scroll indicator */}
      </div>
    </section>
  );
};

export default Hero;
