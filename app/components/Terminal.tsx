'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Copy, ExternalLink, Terminal as TerminalIcon } from 'lucide-react'

interface Command {
  command: string
  output: string
  timestamp: Date
}

const commands = {
  help: `Available commands:
  help     - Show this help message
  X        - Get social media links
  CA       - Get contract address
  warmup   - Replay warmup animation
  clear    - Clear terminal
  about    - About ENIAC LLM
  status   - System status`,
  
  X: `Social Media:
  🐦 Twitter: @eniac_llm
  💬 Discord: discord.gg/eniac-llm
  📱 Telegram: t.me/eniac_llm`,
  
  CA: `Contract Address:
  0x1234567890abcdef1234567890abcdef12345678
  
  [Copy] [View on Explorer]`,
  
  about: `ENIAC LLM - Historical Comedy Meets AI
  ===========================================
  
  ENIAC (Electronic Numerical Integrator and Computer)
  was the first general-purpose electronic computer,
  operational from 1946-1955.
  
  This project humorously imagines what it would be
  like to load a modern Large Language Model onto
  the 17,468 vacuum tubes of ENIAC.
  
  It's not financial advice. It's historical comedy.`,
  
  status: `ENIAC LLM System Status:
  ==============================
  
  🟢 Tubes: 17,468/17,468 online
  🟢 Power: 150 kW stable
  🟢 Temperature: 5,000°K optimal
  🟢 Memory: 100 MB loaded
  🟢 LLM: GPT-4 equivalent active
  
  All systems operational.`,
  
  warmup: `Initiating tube warmup sequence...
  Heater current rising...
  Vacuum pressure stable...
  Ready for LLM loading.`
}

export function Terminal() {
  const [input, setInput] = useState('')
  const [commandHistory, setCommandHistory] = useState<Command[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Add initial welcome message
    if (commandHistory.length === 0) {
      setCommandHistory([{
        command: 'welcome',
        output: `Welcome to ENIAC LLM Terminal v1.0.0
Type 'help' for available commands.
Type 'CA' for contract, 'X' for socials.`,
        timestamp: new Date()
      }])
    }
  }, [commandHistory.length])

  useEffect(() => {
    // Auto-scroll to bottom
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commandHistory])

  const executeCommand = async (cmd: string) => {
    if (!cmd.trim()) return

    setIsProcessing(true)
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const lowerCmd = cmd.toLowerCase().trim()
    let output = ''

    if (lowerCmd === 'clear') {
      setCommandHistory([])
      setIsProcessing(false)
      return
    }

    if (lowerCmd === 'warmup') {
      output = commands.warmup
    } else if (lowerCmd === 'x') {
      output = commands.X
    } else if (lowerCmd === 'ca') {
      output = commands.CA
    } else if (lowerCmd === 'help') {
      output = commands.help
    } else if (lowerCmd === 'about') {
      output = commands.about
    } else if (lowerCmd === 'status') {
      output = commands.status
    } else {
      output = `Tube failed. Command '${cmd}' not found. Try 'help'.`
    }

    setCommandHistory(prev => [...prev, {
      command: cmd,
      output,
      timestamp: new Date()
    }])

    setIsProcessing(false)
    setInput('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && !isProcessing) {
      executeCommand(input)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const formatOutput = (output: string) => {
    if (output.includes('Contract Address:')) {
      const lines = output.split('\n')
      const contractLine = lines[1]
      const buttonLine = lines[3]
      
      return (
        <div>
          {lines[0]}
          <br />
          <span className="font-jetbrains text-eniac-green">{contractLine}</span>
          <br />
          <br />
          <div className="flex gap-2">
            <button
              onClick={() => copyToClipboard(contractLine)}
              className="flex items-center gap-2 px-3 py-1 bg-eniac-green text-eniac-black rounded text-sm hover:bg-eniac-green/80 transition-colors"
            >
              <Copy size={14} />
              Copy
            </button>
            <button
              onClick={() => window.open('https://etherscan.io/address/0x1234567890abcdef1234567890abcdef12345678', '_blank')}
              className="flex items-center gap-2 px-3 py-1 bg-eniac-amber text-eniac-black rounded text-sm hover:bg-eniac-amber/80 transition-colors"
            >
              <ExternalLink size={14} />
              Explorer
            </button>
          </div>
        </div>
      )
    }
    
    return output.split('\n').map((line, i) => (
      <span key={i}>
        {line}
        {i < output.split('\n').length - 1 && <br />}
      </span>
    ))
  }

  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <TerminalIcon className="text-eniac-green" size={24} />
        <h2 className="text-2xl font-orbitron font-bold text-eniac-green">
          ENIAC Terminal
        </h2>
      </div>

      <div className="bg-eniac-dark border border-eniac-green/30 rounded-lg overflow-hidden">
        {/* Terminal header */}
        <div className="bg-eniac-green/10 border-b border-eniac-green/30 px-4 py-2 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-sm text-eniac-white/60">eniac@lab:~$</span>
        </div>

        {/* Terminal content */}
        <div 
          ref={terminalRef}
          className="h-96 overflow-y-auto p-4 font-jetbrains text-sm"
        >
          {commandHistory.map((cmd, index) => (
            <div key={index} className="mb-4">
              {/* Command input */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-eniac-green">eniac@lab:~$</span>
                <span className="text-eniac-white">{cmd.command}</span>
              </div>
              
              {/* Command output */}
              <div className="text-eniac-white/80 ml-4 whitespace-pre-wrap">
                {formatOutput(cmd.output)}
              </div>
            </div>
          ))}
          
          {/* Processing indicator */}
          {isProcessing && (
            <div className="flex items-center gap-2 text-eniac-amber">
              <div className="w-2 h-2 bg-eniac-amber rounded-full animate-pulse"></div>
              <span>Processing...</span>
            </div>
          )}
        </div>

        {/* Input area */}
        <form onSubmit={handleSubmit} className="border-t border-eniac-green/30 p-4">
          <div className="flex items-center gap-2">
            <span className="text-eniac-green">eniac@lab:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter command..."
              className="terminal-input flex-1 bg-transparent"
              disabled={isProcessing}
            />
          </div>
        </form>
      </div>

      {/* Quick commands */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => executeCommand('help')}
          className="px-3 py-1 bg-eniac-dark border border-eniac-green/30 rounded text-sm text-eniac-white hover:bg-eniac-green/20 transition-colors"
        >
          help
        </button>
        <button
          onClick={() => executeCommand('X')}
          className="px-3 py-1 bg-eniac-dark border border-eniac-green/30 rounded text-sm text-eniac-white hover:bg-eniac-green/20 transition-colors"
        >
          X
        </button>
        <button
          onClick={() => executeCommand('CA')}
          className="px-3 py-1 bg-eniac-dark border border-eniac-green/30 rounded text-sm text-eniac-white hover:bg-eniac-green/20 transition-colors"
        >
          CA
        </button>
        <button
          onClick={() => executeCommand('status')}
          className="px-3 py-1 bg-eniac-dark border border-eniac-green/30 rounded text-sm text-eniac-white hover:bg-eniac-green/20 transition-colors"
        >
          status
        </button>
      </div>
    </div>
  )
}
