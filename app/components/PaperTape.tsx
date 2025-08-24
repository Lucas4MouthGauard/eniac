'use client'

import { motion } from 'framer-motion'

export function PaperTape() {
  const holes = Array.from({ length: 50 }, (_, i) => i)
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 pointer-events-none">
      <motion.div
        className="flex items-center h-8 bg-eniac-dark/80 border-t border-eniac-green/20"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        {holes.map((_, index) => (
          <div key={index} className="flex flex-col items-center mx-1">
            {/* Paper tape */}
            <div className="w-2 h-6 bg-eniac-white/20 rounded-sm border border-eniac-white/30" />
            
            {/* Holes - some random, some forming "LLM" */}
            <div className="relative w-2 h-6">
              {/* Random holes */}
              {Math.random() > 0.7 && (
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-eniac-black rounded-full" />
              )}
              {Math.random() > 0.7 && (
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-eniac-black rounded-full" />
              )}
              {Math.random() > 0.7 && (
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-eniac-black rounded-full" />
              )}
              
              {/* Strategic holes for "LLM" pattern */}
              {index % 10 === 0 && (
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-eniac-black rounded-full" />
              )}
              {index % 10 === 3 && (
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-eniac-black rounded-full" />
              )}
              {index % 10 === 6 && (
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-eniac-black rounded-full" />
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
