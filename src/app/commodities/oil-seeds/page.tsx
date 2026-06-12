"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, Layers, Beaker, ArrowRight } from "lucide-react"
import { commodities } from "@/data/commodities"
import { SectionReveal } from "@/components/ui/SectionReveal"
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer"

export default function OilSeedsPage() {
  const categoryCommodities = commodities.filter(c => c.category === "oil-seeds")

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/commodities/"
              className="inline-flex items-center gap-2 text-text-light hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Commodities
            </Link>
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">Category</span>
            <h1 className="text-4xl md:text-6xl font-bold text-text mt-4 mb-6">Oil Seeds</h1>
            <p className="text-lg text-text-light max-w-2xl leading-relaxed">
              Black Sesame, White Sesame, and Cotton Seed. Gujarat's signature commodities 
              with high oil content and strong demand from Indian export markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Commodities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {categoryCommodities.map((commodity) => (
              <StaggerItem key={commodity.id}>
                <div className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={commodity.image}
                      alt={commodity.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">{commodity.name}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-text-light text-sm leading-relaxed mb-6">
                      {commodity.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-text-light">Origin: {commodity.origin.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-text-light">Season: {commodity.seasonality}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Layers className="w-4 h-4 text-primary" />
                        <span className="text-text-light">Varieties: {commodity.varieties.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Beaker className="w-4 h-4 text-primary" />
                        <span className="text-text-light">{commodity.specifications}</span>
                      </div>
                    </div>

                    <Link
                      href="/buyer-request/"
                      className="flex items-center justify-center w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors"
                    >
                      Request Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="text-3xl font-bold text-text mb-4">Need Oil Seeds for Export?</h2>
            <p className="text-text-light mb-8">
              We connect Indian exporters with verified oil seed suppliers across Gujarat, Rajasthan, and Madhya Pradesh.
            </p>
            <Link
              href="/buyer-request/"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors"
            >
              Submit Buyer Request
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
