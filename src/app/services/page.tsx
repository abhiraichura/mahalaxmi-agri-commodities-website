"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Search, ShoppingCart, TrendingUp, Globe, ShieldCheck, Landmark } from "lucide-react"
import { services } from "@/data/services"
import { SectionReveal } from "@/components/ui/SectionReveal"
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer"

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="w-7 h-7" />,
  ShoppingCart: <ShoppingCart className="w-7 h-7" />,
  TrendingUp: <TrendingUp className="w-7 h-7" />,
  Globe: <Globe className="w-7 h-7" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7" />,
  Landmark: <Landmark className="w-7 h-7" />,
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-premium">
          <SectionReveal>
            <span className="label mb-4 block">Our Services</span>
            <h1 className="font-display text-display-1 font-bold text-text mb-6 max-w-4xl">
              Comprehensive Brokerage Services
            </h1>
            <p className="text-body-lg text-text-light max-w-2xl leading-relaxed">
              From supplier discovery to export facilitation, we provide end-to-end support 
              for every stage of your agricultural commodity procurement journey.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-section-lg bg-white">
        <div className="container-premium">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <StaggerItem key={service.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group bg-white rounded-2xl border border-border p-8 hover:shadow-xl hover:shadow-black/5 
                             transition-all duration-300 h-full flex flex-col"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary 
                                    group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                      {iconMap[service.icon]}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-body text-text-light leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-border">
                    <h4 className="text-sm font-semibold text-text mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-lg bg-text text-white">
        <div className="container-premium text-center">
          <SectionReveal>
            <h2 className="font-display text-display-3 font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-body-lg text-white/60 max-w-2xl mx-auto mb-10">
              Let us understand your requirements and match you with the right suppliers 
              from our verified network.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/buyer-request/"
                className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all"
              >
                Request Sourcing Match
              </Link>
              <Link
                href="/contact/"
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl 
                           hover:bg-white hover:text-text transition-all"
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
