import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Instagram, Mail, MapPin, Phone, ExternalLink, ArrowUp, Heart } from 'lucide-react'
import { COMPANY_INFO } from '../../utils/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'How It Works', href: '#working' },
      { name: 'Our Team', href: '#team' },
      { name: 'Contact', href: '#contact' }
    ],
    product: [
      { name: 'vehnicate App', href: '#' },
      { name: 'RPS System', href: '#' },
      { name: 'Analytics', href: '#' },
      { name: 'API Documentation', href: '#' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Community', href: '#community' },
      { name: 'Support', href: '#' },
      { name: 'Privacy Policy', href: '#' }
    ]
  }

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.open(href, '_blank')
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden">
      {/* LINEAR VERTICAL GRADIENT BACKGROUND - Black → Purple → Pink */}
      <div className="absolute inset-0" style={{
      background: 'linear-gradient(to bottom, black 0%, black 40%, rgba(147, 51, 234, 0.2) 70%, rgba(236, 72, 153, 0.2) 100%)'
      }}></div>
      
      {/* SUBTLE BACKGROUND PATCHES ON TOP OF GRADIENT */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Bottom center glow - subtle like other sections */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-purple-600/20 to-pink-600/15 rounded-full blur-3xl opacity-60" />
        
        {/* Top corners - matching your other sections */}
        <div className="absolute top-0 -left-32 w-[400px] h-[200px] bg-gradient-to-br from-pink-600/15 to-purple-600/10 rounded-full blur-2xl opacity-50" />
        <div className="absolute top-0 -right-32 w-[400px] h-[200px] bg-gradient-to-bl from-purple-600/15 to-pink-600/10 rounded-full blur-2xl opacity-50" />
      </div>

      <div className="relative z-10 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-400"></div>
              <span className="mx-4 text-sm font-medium text-purple-300 uppercase tracking-wider">Stay Connected</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-pink-400"></div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Ready to Transform Your </span>
              <span className="bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">Drive?</span>
            </h3>
            <p className="text-gray-200 max-w-2xl mx-auto text-lg">
              Join the vehnicate community and turn every mile into a rewarding experience
            </p>
          </motion.div>

          {/* Main Footer Content - NO CARDS, CLEAN LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Company Info - Clean, No Card */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <motion.h3 
                    whileHover={{ scale: 1.05 }}
                    className="text-3xl font-bold mb-4 cursor-pointer"
                  >
                    {/* FIXED: Full gradient for entire company name */}
                    <span className="bg-gradient-to-r from-purple-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">vehnicate</span>
                  </motion.h3>
                  <p className="text-gray-200 leading-relaxed max-w-md">
                    Building an ecosystem to support gamified driving. From data analysis to reward systems, 
                    we're transforming how people drive and get rewarded for it.
                  </p>
                </div>

                {/* Contact Info - Clean Icons */}
                <div className="space-y-4 mb-6">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-200 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                      <Mail className="w-4 h-4 text-purple-300" />
                    </div>
                    <span>hello@vehnicate.com</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-200 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                      <Phone className="w-4 h-4 text-purple-300" />
                    </div>
                    <span>+91 XXXXX XXXXX</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-200 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                      <MapPin className="w-4 h-4 text-purple-300" />
                    </div>
                    <span>Bangalore, India</span>
                  </motion.div>
                </div>

                {/* Social Links - Clean Style */}
                <div>
                  <p className="text-gray-300 text-sm mb-3 font-medium">Follow Us</p>
                  <div className="flex space-x-3">
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      href={COMPANY_INFO.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white hover:shadow-lg hover:shadow-purple-400/50 transition-all duration-300"
                    >
                      <Linkedin size={18} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      href={COMPANY_INFO.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-white hover:shadow-lg hover:shadow-pink-400/50 transition-all duration-300"
                    >
                      <Instagram size={18} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      href="mailto:hello@vehnicate.com"
                      className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white hover:shadow-lg hover:shadow-purple-400/50 transition-all duration-300"
                    >
                      <Mail size={18} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Link Sections - Clean, No Cards */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <div key={category}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (categoryIndex + 1) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-white font-bold mb-6 text-lg capitalize relative">
                    {category}
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <motion.li 
                        key={index}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-gray-200 hover:text-purple-200 transition-all duration-200 flex items-center group text-left"
                        >
                          <span className="relative">
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                          </span>
                          {link.href.startsWith('http') && (
                            <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Bottom Section - Clean Divider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-gray-600/50 pt-8"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row items-center mb-6 lg:mb-0">
                <p className="text-gray-300 text-sm mb-2 md:mb-0 md:mr-4 flex items-center">
                  © {currentYear} vehnicate. All rights reserved. Built with 
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    className="mx-1 text-red-400"
                  >
                    <Heart size={14} className="fill-current" />
                  </motion.span>
                  for better driving.
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex space-x-6 text-sm">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-200 hover:text-purple-200 transition-colors relative group"
                  >
                    Privacy Policy
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-200 hover:text-purple-200 transition-colors relative group"
                  >
                    Terms of Service
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-200 hover:text-purple-200 transition-colors relative group"
                  >
                    Cookie Policy
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                  </motion.button>
                </div>
                
                {/* Back to Top Button */}
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:shadow-purple-400/50 transition-all duration-300 group"
                >
                  <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
