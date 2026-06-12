"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Search, CheckCircle, Handshake, FileCheck, Trophy } from "lucide-react"
import { networkSteps } from "@/data/site"
import { SectionReveal } from "@/components/ui/SectionReveal"

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="w-6 h-6" />,
  CheckCircle: <CheckCircle className="w-6 h-6" />,
  Handshake: <Handshake className="w-6 h-6" />,
  FileCheck: <FileCheck className="w-6 h-6" />,
  Trophy: <Trophy className="w-6 h-6" />,
}

export function NetworkProcess() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"])

  return (
    <section ref={containerRef} className="py-section-lg bg-white overflow-hidden">
      <div className="container-premium">
        {/* Section Header */}
        <SectionReveal className="text-center mb-20">
          <span className="label mb-4 block">How We Work</span>
          <h2 className="font-display text-display-2 font-bold text-text mb-6">
            How the Network Works
          </h2>
          <p className="text-body-lg text-text-light max-w-2xl mx-auto">
            From discovery to delivery, our five-step process ensures every trade 
            connection is built on quality, transparency, and trust.
          </p>
        </SectionReveal>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary to-accent"
            />
          </div>

          {networkSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className={`flex-1 lg:text-${index % 2 === 0 ? "right" : "left"} pl-20 lg:pl-0`}>
                <div className={`${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}>
                  <span className="text-caption font-bold text-primary mb-2 block">
                    STEP {step.number}
                  </span>
                  <h3 className="font-display text-heading-1 font-bold text-text mb-3">
                    {step.title}
                  </h3>
                  <p className="text-body text-text-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Icon Node */}
              <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 flex items-center justify-center">
                <motion.div
                  whileInView={{ scale: [0.5, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary shadow-lg shadow-primary/10 z-10"
                >
                  {iconMap[step.icon]}
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden lg:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
