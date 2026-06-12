"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, TrendingUp, Calendar, BarChart3, Globe } from "lucide-react"
import { SectionReveal } from "@/components/ui/SectionReveal"
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer"

const features = [
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Market Insights",
    description: "Daily price tracking from APMC markets across India with trend analysis and forecasting.",
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Seasonal Opportunities",
    description: "Crop calendar intelligence to time your procurement for optimal pricing and quality.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Procurement Intelligence",
    description: "Data-driven recommendations on when, where, and how much to buy for maximum value.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Supply Chain Understanding",
    description: "Deep knowledge of logistics, storage, and transportation across India's agricultural belts.",
  },
]

export function MarketIntelligence() {
  return (
    <section className="py-section-lg bg-white overflow-hidden">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionReveal>
              <span className="label mb-4 block">Expertise</span>
              <h2 className="text-display-2 text-text mb-6">
                Market Intelligence That Drives Decisions
              </h2>
              <p className="text-body-lg text-text-light mb-8 leading-relaxed">
                In agricultural commodity trading, information is currency. Our market intelligence 
                services provide the data, analysis, and insights you need to make informed procurement 
                decisions and stay ahead of market movements.
              </p>
            </SectionReveal>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <div className="group p-4 rounded-xl bg-secondary hover:bg-white hover:shadow-md hover:shadow-black/5 transition-all duration-300 border border-transparent hover:border-border/60">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-text text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-text-light leading-relaxed">{feature.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <SectionReveal delay={0.4} className="mt-8">
              <Link
                href="/market-intelligence/"
                className="btn-primary"
              >
                Explore Market Intelligence
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </SectionReveal>
          </div>

          <SectionReveal direction="left" className="relative">
            <div className="relative">
              <img 
                src="/images/logistics-warehouse.png" 
                alt="Agricultural logistics and warehousing"
                className="rounded-2xl shadow-xl shadow-black/10 w-full h-[400px] object-cover"
              />

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg shadow-black/10 p-3 border border-border/60"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-text-muted">Groundnut</p>
                    <p className="font-bold text-sm text-text">₹8,750/qtl</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg shadow-black/10 p-3 border border-border/60"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] text-text-muted">Cotton Season</p>
                    <p className="font-bold text-sm text-text">Peak Arrivals</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
