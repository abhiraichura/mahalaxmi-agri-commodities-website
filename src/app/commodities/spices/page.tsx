"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, Layers, Beaker } from "lucide-react"
import { commodities } from "@/data/commodities"
import { SectionReveal } from "@/components/ui/SectionReveal"
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer"

export default function SpicesPage() {{
  const categoryCommodities = commodities.filter(c => c.category === "spices")
  const categoryInfo = {{
    spices: {{ name: "Spices", description: "Premium Indian spices including cumin, fennel, and more. Sourced from Gujarat and Rajasthan's finest growing regions.", icon: "🌿" }},
    pulses: {{ name: "Pulses", description: "Essential protein sources including tur, moong, urad, and chana. Connecting buyers with India's largest pulse producing regions.", icon: "🫘" }},
    "oil-seeds": {{ name: "Oil Seeds", description: "Groundnut, sesame, and cotton seeds. Gujarat's signature commodities with high oil content and international demand.", icon: "🥜" }},
    cotton: {{ name: "Cotton", description: "Raw cotton and cotton seeds from India's premier cotton belt. Connecting ginners, spinners, and exporters.", icon: "☁️" }},
  }}
  const info = categoryInfo["spices"]

  return (
    <>
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-premium">
          <SectionReveal>
            <Link href="/commodities/" className="inline-flex items-center gap-2 text-sm text-text-light hover:text-primary mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Commodities
            </Link>
            <span className="label mb-4 block">Category</span>
            <h1 className="font-display text-display-1 font-bold text-text mb-6">
              {info.name}
            </h1>
            <p className="text-body-lg text-text-light max-w-2xl leading-relaxed">
              {info.description}
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-section-lg bg-white">
        <div className="container-premium">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categoryCommodities.map((commodity) => (
              <StaggerItem key={commodity.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl 
                             hover:shadow-black/5 transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="font-display text-3xl font-bold text-text">{commodity.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-body text-text-light mb-6">{commodity.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-secondary rounded-xl">
                        <div className="flex items-center gap-2 text-primary mb-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-xs font-semibold uppercase">Origin</span>
                        </div>
                        <p className="text-sm text-text">{commodity.origin.join(", ")}</p>
                      </div>
                      <div className="p-4 bg-secondary rounded-xl">
                        <div className="flex items-center gap-2 text-primary mb-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-xs font-semibold uppercase">Seasonality</span>
                        </div>
                        <p className="text-sm text-text">{commodity.seasonality}</p>
                      </div>
                      <div className="p-4 bg-secondary rounded-xl">
                        <div className="flex items-center gap-2 text-primary mb-2">
                          <Layers className="w-4 h-4" />
                          <span className="text-xs font-semibold uppercase">Varieties</span>
                        </div>
                        <p className="text-sm text-text">{commodity.varieties.join(", ")}</p>
                      </div>
                      <div className="p-4 bg-secondary rounded-xl">
                        <div className="flex items-center gap-2 text-primary mb-2">
                          <Beaker className="w-4 h-4" />
                          <span className="text-xs font-semibold uppercase">Specifications</span>
                        </div>
                        <p className="text-sm text-text">{commodity.specifications}</p>
                      </div>
                    </div>

                    <Link
                      href="/buyer-request/"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl 
                                 hover:bg-primary-dark transition-all"
                    >
                      Request Quote
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}}
