import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Waitlist = () => {
  const navigate = useNavigate();

  const handleJoinWaitlist = () => {
    navigate("/waitlist");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center bg-black relative overflow-hidden px-4 py-12 sm:py-16 md:py-20 font-sans">
      {/* Left: Waitlist Card */}
      <motion.div
        className="relative z-10 w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="bg-gray-900/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 p-6 sm:p-8 md:p-12 shadow-2xl shadow-purple-500/10 w-full max-w-sm sm:max-w-lg"
        >
          <motion.div
            variants={itemVariants}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg"
          >
            <Mail className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 text-white font-ledger leading-tight"
          >
            Join the{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Waitlist
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-6 sm:mb-8 font-ledger leading-relaxed px-2 sm:px-0"
          >
            Be the first to know when we launch. Get exclusive access, updates,
            and become part of the hn ecosystem.
          </motion.p>

          <motion.div variants={itemVariants}>
            <motion.button
              onClick={handleJoinWaitlist}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 10px 30px -10px rgba(192, 132, 252, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative inline-flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-lg transition-all duration-300 w-full sm:w-auto"
            >
              <span className="relative z-10 font-ledger">Let's go!</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
              <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right: Images */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center">
        {/* Background Image */}
        <motion.img
          src="/gggyrate.svg" // placeholder
          alt="Background"
          className="w-full h-auto object-cover"
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Top Image */}
        <motion.img
          src="/phone.png" // placeholder
          alt="Overlay"
          className="absolute w-2/3 lg:w-1/2 rounded-xl object-contain"
          style={{
            top: "20%", // move down from top
            left: "25%", // move right from left
            transform: "translate(-10%, -5%)",
          }}
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </section>
  );
};

export default Waitlist;
