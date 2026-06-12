"use client"

import { motion } from "framer-motion"
import { SectionReveal } from "@/components/ui/SectionReveal"
import { tradeRoutes } from "@/data/site"

export function TradeNetwork() {
  return (
    <section className="py-section-lg bg-text text-white overflow-hidden">
      <div className="container-premium">
        {/* Section Header */}
        <SectionReveal className="text-center mb-16">
          <span className="text-caption font-semibold uppercase tracking-widest text-primary mb-4 block">
            Our Reach
          </span>
          <h2 className="font-display text-display-2 font-bold text-white mb-6">
            India Trade Network
          </h2>
          <p className="text-body-lg text-white/60 max-w-2xl mx-auto">
            From Gujarat's APMC markets to international ports, our network spans 
            India's key agricultural regions and trade corridors.
          </p>
        </SectionReveal>

        {/* Network Visualization */}
        <div className="relative">
          {/* Map Placeholder - Stylized Network */}
          <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="networkGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#networkGrid)" />
              </svg>
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
              {/* Animated connection lines */}
              <motion.path
                d="M 200 300 Q 350 200 500 280"
                fill="none"
                stroke="url(#lineGrad1)"
                strokeWidth="2"
                strokeDasharray="8 4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5 }}
              />
              <motion.path
                d="M 500 280 Q 650 350 800 300"
                fill="none"
                stroke="url(#lineGrad2)"
                strokeWidth="2"
                strokeDasharray="8 4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 1 }}
              />
              <motion.path
                d="M 350 150 Q 450 220 500 280"
                fill="none"
                stroke="url(#lineGrad3)"
                strokeWidth="2"
                strokeDasharray="8 4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 1.5 }}
              />
              <defs>
                <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DE2A72" />
                  <stop offset="100%" stopColor="#D8A463" />
                </linearGradient>
                <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D8A463" />
                  <stop offset="100%" stopColor="#DE2A72" />
                </linearGradient>
                <linearGradient id="lineGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DE2A72" />
                  <stop offset="100%" stopColor="#D8A463" />
                </linearGradient>
              </defs>
            </svg>

            {/* Nodes */}
            {[
              { x: "20%", y: "50%", label: "Rajkot", role: "Hub", size: "lg" },
              { x: "50%", y: "47%", label: "Mundra Port", role: "Export", size: "md" },
              { x: "80%", y: "50%", label: "Kandla Port", role: "Export", size: "md" },
              { x: "35%", y: "25%", label: "Rajasthan", role: "Source", size: "sm" },
              { x: "45%", y: "65%", label: "Maharashtra", role: "Source", size: "sm" },
              { x: "60%", y: "35%", label: "Madhya Pradesh", role: "Source", size: "sm" },
            ].map((node, index) => (
              <motion.div
                key={node.label}
                className="absolute"
                style={{ left: node.x, top: node.y, transform: "translate(-50%, -50%)" }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              >
                <div className={`relative ${
                  node.size === "lg" ? "w-20 h-20" : node.size === "md" ? "w-16 h-16" : "w-12 h-12"
                }`}>
                  {/* Pulse Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/20"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  />
                  {/* Core */}
                  <div className={`absolute inset-0 rounded-full flex items-center justify-center ${
                    node.size === "lg" 
                      ? "bg-primary text-white" 
                      : node.size === "md"
                      ? "bg-accent text-white"
                      : "bg-white/10 text-white border border-white/20"
                  }`}>
                    <span className={`font-bold ${
                      node.size === "lg" ? "text-lg" : node.size === "md" ? "text-sm" : "text-xs"
                    }`}>
                      {node.label.slice(0, 2)}
                    </span>
                  </div>
                </div>
                {/* Label */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-center whitespace-nowrap">
                  <p className="text-xs font-semibold text-white">{node.label}</p>
                  <p className="text-[10px] text-white/50">{node.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Route Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {tradeRoutes.slice(0, 3).map((route, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm text-white/70">{route.from}</span>
                </div>
                <div className="ml-1 w-px h-6 bg-white/20" />
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-white/70">{route.to}</span>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                  <span className="text-xs text-white/50">{route.commodity}</span>
                  <span className="text-xs text-primary font-medium">{route.distance}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
