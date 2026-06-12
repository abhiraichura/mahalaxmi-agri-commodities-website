"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, TrendingUp, Calendar, BarChart3, Globe } from "lucide-react"
import { SectionReveal } from "@/components/ui/SectionReveal"
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer"

const features = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Market Insights",
    description: "Daily price tracking from APMC markets across India with trend analysis and forecasting.",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Seasonal Opportunities",
    description: "Crop calendar intelligence to time your procurement for optimal pricing and quality.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Procurement Intelligence",
    description: "Data-driven recommendations on when, where, and how much to buy for maximum value.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Supply Chain Understanding",
    description: "Deep knowledge of logistics, storage, and transportation across India's agricultural belts.",
  },
]

export function MarketIntelligence() {
  return (
    <section className="py-section-lg bg-white overflow-hidden">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <SectionReveal>
              <span className="label mb-4 block">Expertise</span>
              <h2 className="font-display text-display-2 font-bold text-text mb-6">
                Market Intelligence That Drives Decisions
              </h2>
              <p className="text-body-lg text-text-light mb-8 leading-relaxed">
                In agricultural commodity trading, information is currency. Our market intelligence 
                services provide the data, analysis, and insights you need to make informed procurement 
                decisions and stay ahead of market movements.
              </p>
            </SectionReveal>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <div className="group p-5 rounded-xl bg-secondary hover:bg-white hover:shadow-lg hover:shadow-black/5 transition-all duration-300 border border-transparent hover:border-border">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-text mb-2">{feature.title}</h3>
                    <p className="text-sm text-text-light leading-relaxed">{feature.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <SectionReveal delay={0.4} className="mt-8">
              <Link
                href="/market-intelligence/"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-xl 
                           hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                Explore Market Intelligence
                <ArrowRight className="w-5 h-5" />
              </Link>
            </SectionReveal>
          </div>

          {/* Right Visual */}
          <SectionReveal direction="left" className="relative">
            <div className="relative">
              {/* Main Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-2xl shadow-black/10 p-8 border border-border"
              >
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-semibold text-text">Cumin Price Trend</h4>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    +12.5% this month
                  </span>
                </div>

                {/* Chart Visualization */}
                <div className="h-48 flex items-end gap-2 mb-6">
                  {[40, 55, 45, 70, 60, 85, 75, 90, 80, 95, 88, 100].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/20 to-primary"
                    />
                  ))}
                </div>

                <div className="flex justify-between text-xs text-text-muted">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg shadow-black/10 p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Groundnut</p>
                    <p className="font-bold text-text">₹8,750/qtl</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg shadow-black/10 p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Cotton Season</p>
                    <p className="font-bold text-text">Peak Arrivals</p>
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
