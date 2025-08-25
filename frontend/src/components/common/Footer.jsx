import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Instagram, Mail, MapPin, Phone, ArrowUp, Heart } from 'lucide-react'
import { COMPANY_INFO, NAVIGATION } from '../../utils/constants' // Assuming NAVIGATION is available for consistency

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Re-using the navigation constants for consistency if they match
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'How It Works', href: '#working' },
      { name: 'Our Team', href: '#team' },
      { name: 'Community', href: '#community' }
    ],
    product: [
      { name: 'vehnicate App', href: '#' },
      { name: 'RPS System', href: '#' },
      { name: 'For Business', href: '#' },
      { name: 'API Docs', href: '#' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Support Center', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  }

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="relative bg-black pt-24 pb-12 overflow-hidden">
      {/* BACKGROUND GRADIENTS AND PATCHES - CONSISTENT WITH OTHER SECTIONS */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 -left-48 w-96 h-96 bg-gradient-to-r from-pink-600/15 to-purple-600/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 -right-48 w-80 h-80 bg-gradient-to-l from-purple-600/15 to-pink-600/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER - CONSISTENT WITH OTHER SECTIONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-8xl font-ledger font-bold mb-6 text-white">
            Finding the <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> calm </span> <br></br>in the chaos
          </h2>
          
        </motion.div>

        {/* MAIN FOOTER CONTENT IN A GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-900/40 backdrop-blur-lg rounded-3xl border border-white/10 p-8 md:p-12 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="font-ledger text-3xl font-bold text-white mb-4">
                  vehnicate
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Building a gamified ecosystem that rewards safe and efficient driving, powered by cutting-edge data analytics.
                </p>
              </div>
              <div className="flex space-x-3">
                <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }} href={COMPANY_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple-600/50 transition-all duration-300">
                  <Linkedin size={18} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }} href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-pink-600/50 transition-all duration-300">
                  <Instagram size={18} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }} href={`mailto:${COMPANY_INFO.email}`} className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple-600/50 transition-all duration-300">
                  <Mail size={18} />
                </motion.a>
              </div>
            </div>

            {/* Link Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-ledger text-lg font-semibold text-white mb-6 capitalize relative">
                  {category}
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 transition-all duration-300 font-medium hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left"
        >
          <p className="text-gray-400 text-sm mb-4 sm:mb-0 flex items-center">
            © {currentYear} vehnicate. Built with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
              className="mx-1.5 text-pink-400"
            >
              <Heart size={14} className="fill-current" />
            </motion.span>
            by vehnicate team .
          </p>
          <motion.button
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}


export default Footer
