'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal } from './components/Terminal'
import { LoadingSequence } from './components/LoadingSequence'
import { MemePanel } from './components/MemePanel'
import { ContractCard } from './components/ContractCard'
import { VacuumTube } from './components/VacuumTube'
import { PaperTape } from './components/PaperTape'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [showTerminal, setShowTerminal] = useState(false)

  const handleLaunch = () => {
    setIsLoading(true)
    // Simulate loading sequence
    setTimeout(() => {
      setIsLoading(false)
      setShowTerminal(true)
    }, 8000) // 8 seconds total
  }

  return (
    <div className="min-h-screen bg-eniac-black relative overflow-hidden">
      {/* Noise overlay */}
      <div className="noise-overlay fixed inset-0 pointer-events-none z-0" />
      
      {/* CRT scan lines */}
      <div className="crt-scan fixed inset-0 pointer-events-none z-0" />
      
      {/* Paper tape scroll */}
      <PaperTape />
      
      {/* Main content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {!isLoading && !showTerminal && (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen flex flex-col items-center justify-center px-4"
            >
              {/* Hero Section */}
              <div className="text-center max-w-4xl mx-auto">
                {/* Title */}
                <motion.h1 
                  className="text-6xl md:text-8xl font-orbitron font-bold text-eniac-green mb-6 text-glow"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  ENIAC loads LLM
                </motion.h1>
                
                {/* Subtitle */}
                <motion.p 
                  className="text-xl md:text-2xl text-eniac-white mb-8 max-w-3xl mx-auto leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  Vacuum tubes from 1946 are booting a 2025-grade LLM
                </motion.p>
                
                {/* Stats */}
                <motion.div 
                  className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-eniac-white/70"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <span>17,468 tubes online</span>
                  <span>•</span>
                  <span>150 kW</span>
                  <span>•</span>
                  <span>5000 adds/s</span>
                </motion.div>
                
                {/* Launch Button */}
                <motion.button
                  onClick={handleLaunch}
                  className="pill-button px-12 py-4 text-lg font-semibold text-eniac-black hover:scale-105 transition-all duration-300"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LAUNCH LLM
                </motion.button>
                
                {/* Additional subtitle */}
                <motion.p 
                  className="text-lg text-eniac-white/60 mt-8 max-w-2xl mx-auto"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  Wiring 20th-century glow into a 21st-century language engine
                </motion.p>
              </div>
              
              {/* Floating vacuum tubes */}
              <div className="absolute inset-0 pointer-events-none">
                <VacuumTube className="absolute top-20 left-10 animate-breathe" />
                <VacuumTube className="absolute top-40 right-20 animate-breathe" style={{ animationDelay: '0.5s' }} />
                <VacuumTube className="absolute bottom-40 left-20 animate-breathe" style={{ animationDelay: '1s' }} />
                <VacuumTube className="absolute bottom-20 right-10 animate-breathe" style={{ animationDelay: '1.5s' }} />
              </div>
            </motion.div>
          )}
          
          {isLoading && (
            <LoadingSequence />
          )}
          
          {showTerminal && (
            <motion.div
              key="main-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="min-h-screen"
            >
              {/* Navigation */}
              <nav className="fixed top-0 left-0 right-0 z-50 bg-eniac-dark/80 backdrop-blur-sm border-b border-eniac-green/20">
                <div className="max-w-7xl mx-auto px-4 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                      <span className="text-eniac-green font-orbitron text-xl">ENIAC×PILL</span>
                      <button 
                        onClick={() => setShowTerminal(false)}
                        className="text-eniac-white hover:text-eniac-green transition-colors"
                      >
                        Home
                      </button>
                      <button 
                        onClick={() => setShowTerminal(true)}
                        className="text-eniac-green font-semibold"
                      >
                        Terminal
                      </button>
                      <a 
                        href="https://x.com/eniac_llm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-eniac-white hover:text-eniac-green transition-colors flex items-center gap-2"
                      >
                        <span className="text-xl">𝕏</span>
                        Twitter
                      </a>
                    </div>
                    <button 
                      onClick={() => setIsLoading(true)}
                      className="pill-button px-6 py-2 text-sm font-semibold text-eniac-black"
                    >
                      Reload
                    </button>
                  </div>
                </div>
              </nav>
              
              {/* Main content area */}
              <div className="pt-24 pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                  {/* Terminal Section */}
                  <Terminal />
                  
                  {/* Meme Panel */}
                  <MemePanel />
                  
                  {/* Contract & Community */}
                  <ContractCard />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 bg-eniac-dark/80 backdrop-blur-sm border-t border-eniac-green/20">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <p className="text-center text-sm text-eniac-white/60">
            This is not financial advice. It's historical comedy.
          </p>
        </div>
      </footer>
    </div>
  )
}
