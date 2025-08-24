import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Waitlist = () => {
  const navigate = useNavigate();

  const handleJoinWaitlist = () => {
    navigate('/waitlist');
  };

  return (
    <section id="waitlist" className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden px-4 py-20">
      {/* Background Gradient Patches */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-600/20 to-pink-600/10 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-pink-600/20 to-purple-600/10 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-2xl text-center"
      >
        <div className="bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl shadow-purple-500/10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-lg"
          >
            <Mail className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-alumni font-bold mb-4 text-white">
            Join the <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Waitlist</span>
          </h2>

          <p className="text-lg text-gray-300 max-w-md mx-auto mb-8 font-ledger">
            Be the first to know when we launch. Get exclusive access, updates, and become part of the hn ecosystem
          </p>

          <motion.button
            onClick={handleJoinWaitlist}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            <span>Join Waitlist</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            
            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Waitlist;
