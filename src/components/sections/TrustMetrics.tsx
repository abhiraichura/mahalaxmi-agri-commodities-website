"use client"

import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { trustMetrics } from "@/data/site"

export function TrustMetrics() {
  return (
    <section className="relative py-16 lg:py-20 bg-secondary overflow-hidden">
      <div className="container-premium">
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
                <span className="text-3xl lg:text-4xl font-bold text-text tracking-tight">
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
