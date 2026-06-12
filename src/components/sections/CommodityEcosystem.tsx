"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { commodityCategories } from "@/data/commodities"
import { SectionReveal } from "@/components/ui/SectionReveal"
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer"

const categoryImages: Record<string, string> = {
  spices: "/images/spice-bazaar.png",
  pulses: "/images/pulses-wholesale.png",
  "oil-seeds": "/images/groundnut-farming.png",
  cotton: "/images/cotton-bales.png",
}

export function CommodityEcosystem() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <section className="py-section-lg bg-white">
      <div className="container-premium">
        <SectionReveal className="text-center mb-16">
          <span className="label mb-4 block">Our Network</span>
          <h2 className="text-display-2 text-text mb-6">
            Commodity Ecosystem
          </h2>
          <p className="text-body-lg text-text-light max-w-2xl mx-auto">
            Four categories. Hundreds of suppliers. One trusted network connecting 
            India's finest agricultural produce with buyers worldwide.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commodityCategories.map((category) => (
            <StaggerItem key={category.id}>
              <motion.div
                onMouseEnter={() => setActiveCategory(category.id)}
                onMouseLeave={() => setActiveCategory(null)}
                className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer h-full border border-border/60"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={categoryImages[category.id]} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white/80 text-xs font-medium uppercase tracking-wider">
                      {category.count} Commodities
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <Link
                    href={`/commodities/${category.slug}/`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary group/link"
                  >
                    Explore {category.name}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeCategory === category.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <SectionReveal delay={0.4} className="text-center mt-12">
          <Link
            href="/commodities/"
            className="btn-secondary"
          >
            View All Commodities
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </SectionReveal>
      </div>
    </section>
  )
}
