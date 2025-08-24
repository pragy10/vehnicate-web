import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Waitlist = () => {
  // This useEffect hook handles loading the Tally widget script
  useEffect(() => {
    // Check if the Tally object already exists (e.g., from navigating between pages)
    if (typeof Tally !== 'undefined') {
      Tally.loadEmbeds();
      return;
    }

    // Check if the script is already in the document
    if (document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
      return;
    }

    // If not, create and append the script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    
    // Define the function to load embeds once the script is ready
    const loadTally = () => {
      if (typeof Tally !== 'undefined') {
        Tally.loadEmbeds();
      }
    };

    script.onload = loadTally;
    script.onerror = () => console.error('Failed to load Tally script.');

    document.body.appendChild(script);

    // Cleanup function to remove the script if the component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []); // The empty array ensures this effect runs only once when the component mounts

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
            Be the first to know when we launch. Get exclusive access, updates, and become part of our founding community.
          </p>

          {/* The Tally form is embedded here */}
          {/* UPDATED: Increased width from max-w-md to max-w-lg */}
          <div className="w-full max-w-lg mx-auto">
            <iframe
              data-tally-src="https://tally.so/embed/mO2ZQp?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="200" // UPDATED: Decreased height from 250 to 200
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Join the Waitlist!"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Waitlist;
