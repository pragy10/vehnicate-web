import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
// Step 1: Uncomment the import for useNavigate
import { useNavigate } from 'react-router-dom';

const Waitlist = () => {
  // Step 2: Uncomment the hook initialization
  const navigate = useNavigate();

  const handleJoinWaitlist = () => {
    // Step 3: Use the navigate function to change the route
    navigate('/waitlist');
  };

  // Animation variants for the main container to orchestrate children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // This will make each child animate in with a 0.2s delay
        duration: 0.5,
      },
    },
  };

  // Animation variants for individual items inside the card
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // A nice easing function
      },
    },
  };


  return (
    <section id="waitlist" className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden px-4 py-20 font-sans">
      {/* Background Gradient Patches */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-600/20 to-pink-600/10 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-pink-600/20 to-purple-600/10 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main animated container */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }} // Animates when it enters the viewport
        viewport={{ once: true, amount: 0.5 }} // Animation triggers when 50% is visible, and only once
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-2xl text-center"
      >
        {/* The card itself, which will now orchestrate its children's animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Use whileInView here as well for the staggering effect
          viewport={{ once: true, amount: 0.5 }}
          className="bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl shadow-purple-500/10"
        >
          {/* Each child element is now a motion component with the itemVariants */}
          <motion.div
            variants={itemVariants}
            className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-lg"
          >
            <Mail className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-6xl font-bold mb-4 text-white font-ledger"
          >
            Join the <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Waitlist</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-md mx-auto mb-8 font-ledger"
          >
            Be the first to know when we launch. Get exclusive access, updates, and become part of the hn ecosystem.
          </motion.p>

          <motion.div variants={itemVariants}>
            <motion.button
              onClick={handleJoinWaitlist}
              whileHover={{ scale: 1.05, y: -2, boxShadow: '0 10px 30px -10px rgba(192, 132, 252, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative inline-flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all duration-300"
            >
              {/* This span holds the text content */}
              <span className="relative z-10 font-ledger">Let's go!</span>
              <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
              
              {/* Shiny hover effect */}
              <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Waitlist;
