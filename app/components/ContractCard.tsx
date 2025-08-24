'use client'

import { motion } from 'framer-motion'
import { Copy, ExternalLink, Users, FileText } from 'lucide-react'

export function ContractCard() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-orbitron font-bold text-eniac-green mb-8 text-center">
        Contract & Community
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contract Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-eniac-dark border border-eniac-green/30 rounded-lg p-6"
        >
          <h3 className="text-lg font-orbitron font-semibold text-eniac-green mb-4">
            Smart Contract
          </h3>
          
          <div className="space-y-4">
            <div>
              <div className="text-sm text-eniac-white/60 mb-2">Contract Address</div>
              <div className="bg-eniac-black/50 p-3 rounded border border-eniac-green/20">
                <code className="font-jetbrains text-eniac-green break-all">
                  0x1234567890abcdef1234567890abcdef12345678
                </code>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-eniac-white/60 mb-1">Network</div>
                <div className="text-eniac-white font-semibold">Ethereum</div>
              </div>
              <div>
                <div className="text-sm text-eniac-white/60 mb-1">Token Standard</div>
                <div className="text-eniac-white font-semibold">ERC-20</div>
              </div>
              <div>
                <div className="text-sm text-eniac-white/60 mb-1">Total Supply</div>
                <div className="text-eniac-white font-semibold">1,000,000,000</div>
              </div>
              <div>
                <div className="text-sm text-eniac-white/60 mb-1">Decimals</div>
                <div className="text-eniac-white font-semibold">18</div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => copyToClipboard('0x1234567890abcdef1234567890abcdef12345678')}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-eniac-green text-eniac-black rounded font-semibold hover:bg-eniac-green/80 transition-colors"
              >
                <Copy size={16} />
                Copy Address
              </button>
              <button
                onClick={() => window.open('https://etherscan.io/address/0x1234567890abcdef1234567890abcdef12345678', '_blank')}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-eniac-amber text-eniac-black rounded font-semibold hover:bg-eniac-amber/80 transition-colors"
              >
                <ExternalLink size={16} />
                View on Explorer
              </button>
            </div>
          </div>
        </motion.div>

        {/* Community Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-eniac-dark border border-eniac-green/30 rounded-lg p-6"
        >
          <h3 className="text-lg font-orbitron font-semibold text-eniac-green mb-4">
            Join the Community
          </h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3">
              <button
                onClick={() => window.open('https://discord.gg/eniac-llm', '_blank')}
                className="flex items-center gap-3 p-4 bg-eniac-black/50 border border-eniac-green/20 rounded hover:border-eniac-green/40 transition-colors group"
              >
                <div className="w-10 h-10 bg-[#5865F2] rounded-full flex items-center justify-center">
                  <Users className="text-white" size={20} />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-eniac-white group-hover:text-eniac-green transition-colors">
                    Join Discord
                  </div>
                  <div className="text-sm text-eniac-white/60">
                    Connect with fellow ENIAC enthusiasts
                  </div>
                </div>
                <ExternalLink className="ml-auto text-eniac-white/40 group-hover:text-eniac-green transition-colors" size={16} />
              </button>
              
              <button
                onClick={() => window.open('https://twitter.com/eniac_llm', '_blank')}
                className="flex items-center gap-3 p-4 bg-eniac-black/50 border border-eniac-green/20 rounded hover:border-eniac-green/40 transition-colors group"
              >
                <div className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">𝕏</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-eniac-white group-hover:text-eniac-green transition-colors">
                    Follow on X
                  </div>
                  <div className="text-sm text-eniac-white/60">
                    Get the latest updates and memes
                  </div>
                </div>
                <ExternalLink className="ml-auto text-eniac-white/40 group-hover:text-eniac-green transition-colors" size={16} />
              </button>
              
              <button
                onClick={() => window.open('https://t.me/eniac_llm', '_blank')}
                className="flex items-center gap-3 p-4 bg-eniac-black/50 border border-eniac-green/20 rounded hover:border-eniac-green/40 transition-colors group"
              >
                <div className="w-10 h-10 bg-[#0088cc] rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">📱</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-eniac-white group-hover:text-eniac-green transition-colors">
                    Telegram Channel
                  </div>
                  <div className="text-sm text-eniac-white/60">
                    Stay connected on mobile
                  </div>
                </div>
                <ExternalLink className="ml-auto text-eniac-white/40 group-hover:text-eniac-green transition-colors" size={16} />
              </button>
            </div>
            
            <div className="pt-4 border-t border-eniac-green/20">
              <button
                onClick={() => window.open('/litepaper.pdf', '_blank')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-eniac-green/10 border border-eniac-green/30 rounded text-eniac-green hover:bg-eniac-green/20 transition-colors"
              >
                <FileText size={16} />
                Read Litepaper
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
