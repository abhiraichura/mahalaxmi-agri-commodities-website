"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, Layers, Beaker, ChevronRight, ArrowRight } from "lucide-react"
import { commodities } from "@/data/commodities"
import { SectionReveal } from "@/components/ui/SectionReveal"
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer"

export default function SpicesPage() {
  const categoryCommodities = commodities.filter(c => c.category === "spices")

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

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Category
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">Spices</h1>
            <p className="text-lg text-text-light max-w-2xl leading-relaxed">
              Premium Indian spices including Cumin, Coriander, Fennel, Fenugreek, and Nigella. 
              Sourced from Gujarat and Rajasthan's finest growing regions for export markets worldwide.
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
                <motion.div 
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={commodity.image}
                      alt={commodity.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { (e.target as HTMLImageElement).src = '/images/commodities/placeholder.jpg' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">{commodity.name}</h3>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-text-light text-sm leading-relaxed mb-6">
                      {commodity.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm">
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-text-light">Origin: {commodity.origin.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-text-light">Season: {commodity.seasonality}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Layers className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-text-light">Varieties: {commodity.varieties.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Beaker className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-text-light">{commodity.specifications}</span>
                      </div>
                    </div>

                    <Link
                      href="/buyer-request/"
                      className="flex items-center justify-center w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors mt-auto"
                    >
                      Request Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="text-3xl font-bold text-text mb-4">Need a Specific Spice Variety?</h2>
            <p className="text-text-light mb-8">
              We can source custom varieties and grades based on your specific export requirements. 
              Tell us what you need and we'll find the right supplier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/buyer-request/"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors"
              >
                Submit Buyer Request
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-text rounded-xl font-medium border border-border hover:border-primary transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
