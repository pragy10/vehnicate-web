import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  ...props 
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center'
  
  const variants = {
    primary: 'bg-vehnicate-gradient hover:bg-vehnicate-gradient-reverse text-white hover:shadow-xl hover:shadow-vehnicate-purple/30',
    secondary: 'border-2 border-vehnicate-pink text-vehnicate-pink hover:bg-vehnicate-pink hover:text-white',
    outline: 'border-2 border-white/20 text-white hover:border-vehnicate-pink hover:text-vehnicate-pink'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
