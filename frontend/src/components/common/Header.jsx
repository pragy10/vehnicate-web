import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAVIGATION } from '../../utils/constants'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10' 
          : 'bg-transparent'
      }`}
    >
      {/* BACKGROUND PATCHES FOR HEADER */}
      {isScrolled && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-20 w-40 h-20 bg-gradient-to-r from-purple-600/15 to-pink-600/10 rounded-full blur-2xl opacity-60" />
          <div className="absolute top-0 -right-20 w-40 h-20 bg-gradient-to-l from-pink-600/15 to-purple-600/10 rounded-full blur-2xl opacity-60" />
        </div>
      )}

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('#hero')}
          >
            <motion.span 
              // 1. ADDED 'font-alumni' TO THE LOGO
              className="font-ledger text-3xl text-white"
              
              transition={{ duration: 0.3 }}
            >
              vehnicate
            </motion.span>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:block">
            {/* 2. ADDED 'font-alumni' TO THE PARENT DIV FOR NAVIGATION LINKS */}
            <div className="flex items-center space-x-8 font-alumni font-bold text-2xl">
              {NAVIGATION.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  // Note: font-medium is still useful for selecting the font weight (e.g., 500)
                  className="text-gray-300 transition-all duration-300 relative group font-medium hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent"
                >
                  {item.name}
                  
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* ... rest of the component remains the same ... */}
          
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isMobileMenuOpen 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0, y: -20 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0,
            y: isMobileMenuOpen ? 0 : -20
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <motion.div 
            className="relative mt-4 mx-2"
            initial={{ scale: 0.95 }}
            animate={{ scale: isMobileMenuOpen ? 1 : 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
              <div className="absolute top-0 -left-10 w-32 h-16 bg-gradient-to-r from-purple-600/20 to-pink-600/15 rounded-full blur-xl opacity-50" />
              <div className="absolute bottom-0 -right-10 w-32 h-16 bg-gradient-to-l from-pink-600/20 to-purple-600/15 rounded-full blur-xl opacity-50" />
            </div>
            
            {/* THIS PART WAS ALREADY CORRECT! It will now work. */}
            <div className="relative z-10 px-6 py-4 space-y-2 font-alumni">
              {NAVIGATION.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : -20 
                  }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 rounded-xl transition-all duration-300 font-medium relative group"
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.02 }}
                  />
                </motion.button>
              ))}
              
              <motion.div 
                className="pt-4 mt-4 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <p className="text-center text-gray-400 text-sm">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-medium">
                    vehnicate
                  </span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </nav>
    </motion.header>
  )
}

export default Header