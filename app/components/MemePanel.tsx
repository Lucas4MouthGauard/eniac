'use client'

import { motion } from 'framer-motion'
import { Building2, Code, Laugh } from 'lucide-react'

export function MemePanel() {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-orbitron font-bold text-eniac-green mb-8 text-center">
        ENIAC LLM Meme Station
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Museum Mode */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-eniac-dark border border-eniac-green/30 rounded-lg p-6 hover:border-eniac-green/50 transition-colors"
        >
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="text-eniac-amber" size={24} />
            <h3 className="text-lg font-orbitron font-semibold text-eniac-amber">
              Museum Mode
            </h3>
          </div>
          
          <div className="space-y-4 text-sm text-eniac-white/80">
            <div className="bg-eniac-black/50 p-3 rounded border border-eniac-green/20">
              <div className="text-eniac-green font-semibold mb-2">ENIAC Facts</div>
              <div className="space-y-2 text-xs">
                <div>• Built: 1946-1955</div>
                <div>• Size: 30 tons, 680 sq ft</div>
                <div>• Power: 150 kW</div>
                <div>• Tubes: 17,468 vacuum tubes</div>
                <div>• Speed: 5,000 additions/sec</div>
                <div>• Memory: 20 accumulators</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-2">🖥️</div>
              <div className="text-xs text-eniac-white/60">
                "The first general-purpose electronic computer"
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hacker Mode */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-eniac-dark border border-eniac-green/30 rounded-lg p-6 hover:border-eniac-green/50 transition-colors"
        >
          <div className="flex items-center gap-3 mb-4">
            <Code className="text-eniac-green" size={24} />
            <h3 className="text-lg font-orbitron font-semibold text-eniac-green">
              Hacker Mode
            </h3>
          </div>
          
          <div className="space-y-4 text-sm text-eniac-white/80">
            <div className="bg-eniac-black/50 p-3 rounded border border-eniac-green/20">
              <div className="text-eniac-green font-semibold mb-2">Transformer → Relay Speak</div>
              <div className="space-y-2 text-xs font-jetbrains">
                <div>• Self-Attention → "线路切换矩阵"</div>
                <div>• Multi-Head → "多头继电器组"</div>
                <div>• Feed Forward → "前馈放大器"</div>
                <div>• Layer Norm → "层级标准化器"</div>
                <div>• Residual → "残差连接器"</div>
                <div>• Positional → "位置编码器"</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <div className="text-xs text-eniac-white/60">
                "Modern AI concepts in vintage terms"
              </div>
            </div>
          </div>
        </motion.div>

        {/* Meme Mode */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-eniac-dark border border-eniac-green/30 rounded-lg p-6 hover:border-eniac-green/50 transition-colors"
        >
          <div className="flex items-center gap-3 mb-4">
            <Laugh className="text-eniac-amber" size={24} />
            <h3 className="text-lg font-orbitron font-semibold text-eniac-amber">
              Meme Mode
            </h3>
          </div>
          
          <div className="space-y-4 text-sm text-eniac-white/80">
            <div className="bg-eniac-black/50 p-3 rounded border border-eniac-green/20">
              <div className="text-eniac-green font-semibold mb-2">Viral Content</div>
              <div className="space-y-2 text-xs">
                <div>• "Old tubes, new tokens"</div>
                <div>• "Vacuum-powered AI"</div>
                <div>• "1946 hardware, 2025 software"</div>
                <div>• "Tube-based attention"</div>
                <div>• "Analog transformer"</div>
                <div>• "Retro-futuristic AI"</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-4 h-8 bg-gradient-to-r from-eniac-white to-eniac-green rounded-full"></div>
                <span className="text-2xl">+</span>
                <div className="w-6 h-6 bg-eniac-amber rounded-full animate-pulse"></div>
              </div>
              <div className="text-xs text-eniac-white/60">
                "Pill + Vacuum Tube = FOMO"
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
