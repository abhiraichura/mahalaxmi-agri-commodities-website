"use client"

import { motion } from "framer-motion"
import { Users, Network, Brain, Target, Shield, Zap } from "lucide-react"
import { whyChooseUs } from "@/data/site"
import { SectionReveal } from "@/components/ui/SectionReveal"
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer"

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-5 h-5" />,
  Network: <Network className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  Target: <Target className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
}

export function WhyChooseUs() {
  return (
    <section className="py-section-lg bg-white">
      <div className="container-premium">
        <SectionReveal className="text-center mb-16">
          <span className="label mb-4 block">Why Mahalaxmi</span>
          <h2 className="text-display-2 text-text mb-6">
            Why Choose Mahalaxmi
          </h2>
          <p className="text-body-lg text-text-light max-w-2xl mx-auto">
            We're not just another commodity broker. We're your strategic partner in 
            navigating India's complex agricultural supply chain.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((feature, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group p-6 rounded-2xl bg-secondary hover:bg-white hover:shadow-lg hover:shadow-black/5 
                           border border-transparent hover:border-border/60 transition-all duration-300 h-full"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 
                                group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {iconMap[feature.icon]}
                </div>

                <h3 className="text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed">
                  {feature.description}
                </p>

                <span className="absolute top-6 right-6 text-5xl font-bold text-text/[0.03] 
                                 group-hover:text-primary/[0.05] transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
