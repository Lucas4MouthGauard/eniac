'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { VacuumTube } from './VacuumTube'

const loadingSteps = [
  {
    id: 'tube-warmup',
    title: 'TUBE WARM-UP',
    subtitle: 'heater current stable',
    duration: 2000,
    progress: 25,
    color: '#F59E0B'
  },
  {
    id: 'tokenization',
    title: 'TOKENIZATION',
    subtitle: 'tokens aligned',
    duration: 2000,
    progress: 50,
    color: '#10B981'
  },
  {
    id: 'parameter-shuffle',
    title: 'PARAMETER SHUFFLE',
    subtitle: 'weights staged',
    duration: 2500,
    progress: 75,
    color: '#8B5CF6'
  },
  {
    id: 'attention-routing',
    title: 'ATTENTION ROUTING',
    subtitle: 'routes latched',
    duration: 1500,
    progress: 100,
    color: '#EF4444'
  }
]

export function LoadingSequence() {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentStep >= loadingSteps.length) {
      setIsComplete(true)
      return
    }

    const step = loadingSteps[currentStep]
    const startTime = Date.now()
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const stepProgress = Math.min((elapsed / step.duration) * 100, 100)
      
      setProgress(stepProgress)
      
      if (elapsed >= step.duration) {
        setCurrentStep(prev => prev + 1)
        setProgress(0)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [currentStep])

  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex flex-col items-center justify-center bg-eniac-black"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center"
        >
          <div className="text-8xl mb-6">🚀</div>
          <h1 className="text-6xl font-orbitron font-bold text-eniac-green text-glow mb-4">
            LLM ONLINE
          </h1>
          <p className="text-2xl text-eniac-white/80">
            ENIAC successfully loaded with modern AI capabilities
          </p>
        </motion.div>
      </motion.div>
    )
  }

  const currentStepData = loadingSteps[currentStep]
  const overallProgress = ((currentStep * 100) + progress) / loadingSteps.length

  return (
    <div className="min-h-screen bg-eniac-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background tubes */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <VacuumTube
            key={i}
            className={`absolute animate-breathe`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Step title */}
        <motion.h1
          key={currentStepData.id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-orbitron font-bold text-eniac-green mb-6 text-glow"
        >
          {currentStepData.title}
        </motion.h1>

        {/* Step subtitle */}
        <motion.p
          key={`subtitle-${currentStepData.id}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-xl md:text-2xl text-eniac-white/80 mb-12"
        >
          {currentStepData.subtitle}
        </motion.p>

        {/* Progress indicators */}
        <div className="space-y-8 mb-12">
          {/* Overall progress bar */}
          <div className="w-full max-w-2xl mx-auto">
            <div className="flex justify-between text-sm text-eniac-white/60 mb-2">
              <span>OVERALL PROGRESS</span>
              <span>{Math.round(overallProgress)}%</span>
            </div>
            <div className="w-full bg-eniac-dark rounded-full h-3 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-eniac-green to-eniac-amber rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${overallProgress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Step progress bar */}
          <div className="w-full max-w-2xl mx-auto">
            <div className="flex justify-between text-sm text-eniac-white/60 mb-2">
              <span>{currentStepData.title}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-eniac-dark rounded-full h-3 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: currentStepData.color }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </div>

        {/* Step details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {loadingSteps.map((step, index) => (
            <div key={step.id} className="text-center">
              <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${
                index < currentStep 
                  ? 'bg-eniac-green text-eniac-black' 
                  : index === currentStep 
                  ? 'bg-eniac-amber text-eniac-black animate-pulse'
                  : 'bg-eniac-dark text-eniac-white/40'
              }`}>
                {index < currentStep ? '✓' : index === currentStep ? '⚡' : (index + 1)}
              </div>
              <div className="text-xs text-eniac-white/60">
                {step.title.split(' ')[0]}
              </div>
            </div>
          ))}
        </div>

        {/* Technical specs */}
        <div className="mt-16 text-sm text-eniac-white/40 space-y-2">
          <div>THROUGHPUT: {Math.round(progress * 17.468)} tubes/sec</div>
          <div>ATTN ROUTES: {Math.round(progress * 150)} kW</div>
          <div>TUBE TEMP: {Math.round(progress * 5000)}°K</div>
          <div>PARAM MB LOADED: {Math.round(progress * 100)} MB</div>
        </div>
      </div>

      {/* Floating elements based on current step */}
      <AnimatePresence mode="wait">
        {currentStep === 0 && (
          <motion.div
            key="warmup-elements"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-1/4 left-1/4 text-eniac-amber text-6xl animate-pulse">🔥</div>
            <div className="absolute top-1/3 right-1/4 text-eniac-amber text-4xl animate-bounce">⚡</div>
          </motion.div>
        )}
        
        {currentStep === 1 && (
          <motion.div
            key="tokenization-elements"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-1/4 left-1/4 text-eniac-green text-5xl animate-pulse">🔤</div>
            <div className="absolute top-1/3 right-1/4 text-eniac-green text-4xl animate-bounce">📝</div>
          </motion.div>
        )}
        
        {currentStep === 2 && (
          <motion.div
            key="parameter-elements"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-1/4 left-1/4 text-purple-400 text-5xl animate-pulse">⚙️</div>
            <div className="absolute top-1/3 right-1/4 text-purple-400 text-4xl animate-bounce">🔧</div>
          </motion.div>
        )}
        
        {currentStep === 3 && (
          <motion.div
            key="attention-elements"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-1/4 left-1/4 text-red-400 text-5xl animate-pulse">🧠</div>
            <div className="absolute top-1/3 right-1/4 text-red-400 text-4xl animate-bounce">🎯</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
