'use client'

import { motion } from 'framer-motion'

interface VacuumTubeProps {
  className?: string
  style?: React.CSSProperties
}

export function VacuumTube({ className = '', style }: VacuumTubeProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={style}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      {/* Tube body */}
      <div className="w-8 h-12 bg-gradient-to-b from-eniac-white/20 to-eniac-white/10 rounded-full border border-eniac-green/30 relative overflow-hidden">
        {/* Inner glow */}
        <div className="absolute inset-1 bg-eniac-green/20 rounded-full animate-pulse" />
        
        {/* Filament */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-eniac-amber rounded-full animate-flicker" />
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-eniac-amber rounded-full animate-flicker" style={{ animationDelay: '0.1s' }} />
        
        {/* Plate */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 border border-eniac-green/40 rounded-full" />
        
        {/* Grid */}
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-3 h-2 border border-eniac-green/30 rounded" />
        
        {/* Cathode */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-eniac-green/60 rounded-full" />
      </div>
      
      {/* Base pins */}
      <div className="flex justify-center gap-1 mt-1">
        <div className="w-1 h-2 bg-eniac-white/40 rounded-full" />
        <div className="w-1 h-2 bg-eniac-white/40 rounded-full" />
        <div className="w-1 h-2 bg-eniac-white/40 rounded-full" />
        <div className="w-1 h-2 bg-eniac-white/40 rounded-full" />
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 w-8 h-12 rounded-full tube-glow opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}
