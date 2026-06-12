"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, MapPin, Calendar, Layers } from "lucide-react"
import { commodities, commodityCategories } from "@/data/commodities"
import { SectionReveal } from "@/components/ui/SectionReveal"
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer"

export default function CommoditiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-premium">
          <SectionReveal>
            <span className="label mb-4 block">Commodities</span>
            <h1 className="font-display text-display-1 font-bold text-text mb-6 max-w-4xl">
              Commodity Network
            </h1>
            <p className="text-body-lg text-text-light max-w-2xl leading-relaxed">
              Four categories of premium agricultural commodities sourced from India's finest 
              growing regions. Each commodity in our network is verified for quality and reliability.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Categories */}
      <section className="py-section-lg bg-white">
        <div className="container-premium">
          <SectionReveal className="text-center mb-16">
            <h2 className="font-display text-display-3 font-bold text-text mb-4">
              Browse by Category
            </h2>
          </SectionReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commodityCategories.map((category) => (
              <StaggerItem key={category.id}>
                <Link href={`/commodities/${category.slug}/`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl 
                               hover:shadow-black/5 transition-all duration-300 h-full"
                  >
                    <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-text/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white font-display text-2xl font-bold">{category.name}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-text-light mb-4">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-primary">{category.count} Commodities</span>
                        <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* All Commodities */}
      <section className="py-section-lg bg-secondary">
        <div className="container-premium">
          <SectionReveal className="text-center mb-16">
            <h2 className="font-display text-display-3 font-bold text-text mb-4">
              All Commodities
            </h2>
          </SectionReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commodities.map((commodity) => (
              <StaggerItem key={commodity.id}>
                <Link href={`/commodities/${commodity.category}/${commodity.slug}/`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group bg-white rounded-2xl border border-border p-6 hover:shadow-xl 
                               hover:shadow-black/5 transition-all duration-300 h-full"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1 bg-primary/5 text-primary text-xs font-medium rounded-full capitalize">
                        {commodity.category.replace("-", " ")}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                      {commodity.name}
                    </h3>
                    <p className="text-sm text-text-light mb-4 line-clamp-2">{commodity.description}</p>
                    <div className="space-y-2 text-xs text-text-muted">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        {commodity.origin.join(", ")}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {commodity.seasonality}
                      </div>
                      <div className="flex items-center gap-2">
                        <Layers className="w-3 h-3" />
                        {commodity.varieties.length} Varieties
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
