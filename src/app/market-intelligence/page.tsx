"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, TrendingUp, Calendar, BarChart3, Bell, Download, Clock, Tag } from "lucide-react"
import { insights } from "@/data/insights"
import { SectionReveal } from "@/components/ui/SectionReveal"
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer"

const features = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Price Tracking",
    description: "Daily updates from APMC markets across India",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Seasonal Calendar",
    description: "Crop cycles and optimal procurement windows",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Market Reports",
    description: "In-depth analysis and forecasting",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Price Alerts",
    description: "Get notified when markets move",
  },
]

export default function MarketIntelligencePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-premium">
          <SectionReveal>
            <span className="label mb-4 block">Intelligence</span>
            <h1 className="font-display text-display-1 font-bold text-text mb-6 max-w-4xl">
              Market Intelligence Center
            </h1>
            <p className="text-body-lg text-text-light max-w-2xl leading-relaxed">
              Real-time market data, seasonal insights, and procurement intelligence 
              to help you make informed trading decisions.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-section-lg bg-white">
        <div className="container-premium">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="p-6 bg-secondary rounded-2xl border border-border hover:bg-white hover:shadow-lg 
                                hover:shadow-black/5 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-text mb-2">{feature.title}</h3>
                  <p className="text-sm text-text-light">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Commodity Dashboard */}
      <section className="py-section-lg bg-secondary">
        <div className="container-premium">
          <SectionReveal className="text-center mb-12">
            <h2 className="font-display text-display-3 font-bold text-text mb-4">
              Commodity Intelligence Dashboard
            </h2>
            <p className="text-body text-text-light max-w-xl mx-auto">
              Track prices, availability, and seasonal trends for key commodities
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Cumin Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl border border-border p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-text">Cumin</h3>
                  <p className="text-xs text-text-muted">Gujarat & Rajasthan</p>
                </div>
                <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                  In Season
                </span>
              </div>
              <div className="h-32 flex items-end gap-1 mb-4">
                {[60, 65, 62, 70, 68, 75, 72, 80, 78, 85, 82, 88].map((h, i) => (
                  <div key={i} className="flex-1 bg-primary/20 rounded-t" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-light">Current: <strong className="text-text">₹195/kg</strong></span>
                <span className="text-green-600 text-xs">+5.2% this week</span>
              </div>
            </motion.div>

            {/* Groundnut Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl border border-border p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-text">Groundnut</h3>
                  <p className="text-xs text-text-muted">Gujarat (Saurashtra)</p>
                </div>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                  Peak Arrivals
                </span>
              </div>
              <div className="h-32 flex items-end gap-1 mb-4">
                {[80, 75, 70, 65, 60, 55, 50, 55, 60, 70, 78, 85].map((h, i) => (
                  <div key={i} className="flex-1 bg-accent/20 rounded-t" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-light">Current: <strong className="text-text">₹8,750/qtl</strong></span>
                <span className="text-red-500 text-xs">-2.1% this week</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Reports */}
      <section className="py-section-lg bg-white">
        <div className="container-premium">
          <SectionReveal className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-display text-display-3 font-bold text-text mb-4">
                Latest Market Reports
              </h2>
            </div>
          </SectionReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight) => (
              <StaggerItem key={insight.id}>
                <Link href={`/knowledge-center/${insight.slug}/`}>
                  <motion.article
                    whileHover={{ y: -5 }}
                    className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl 
                               hover:shadow-black/5 transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 relative">
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 rounded-full text-xs font-medium text-primary">
                          {insight.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {insight.readTime}
                        </span>
                        <span>{new Date(insight.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}</span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors">
                        {insight.title}
                      </h3>
                      <p className="text-sm text-text-light line-clamp-3 flex-1">{insight.excerpt}</p>
                      <div className="mt-4 pt-4 border-t border-border">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                          Read Report <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
