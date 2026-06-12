"use client"

import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { trustMetrics } from "@/data/site"

export function TrustMetrics() {
  return (
    <section className="relative py-20 lg:py-24 bg-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative container-premium">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center lg:text-left"
            >
              <div className="mb-2">
                <span className="text-4xl lg:text-5xl font-display font-bold text-text">
                  <AnimatedCounter
                    end={metric.value}
                    suffix={metric.suffix}
                    duration={2500}
                  />
                </span>
              </div>
              <h3 className="text-sm font-semibold text-text mb-1">{metric.label}</h3>
              <p className="text-xs text-text-muted">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
