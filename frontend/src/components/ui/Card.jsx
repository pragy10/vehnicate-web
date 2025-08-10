import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ children, className = "", ...props }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`glass-card hover:shadow-2xl hover:shadow-vehnicate-purple/20 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card
