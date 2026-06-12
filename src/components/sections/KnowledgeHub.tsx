"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Clock, Tag } from "lucide-react"
import { insights } from "@/data/insights"
import { SectionReveal } from "@/components/ui/SectionReveal"
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer"

const insightImages: Record<string, string> = {
  "1": "/images/spices-export.png",
  "2": "/images/groundnut-farm.png",
  "3": "/images/pulses-wholesale.png",
  "4": "/images/cotton-ginning.png",
  "5": "/images/spice-warehouse.png",
}

export function KnowledgeHub() {
  const latestInsights = insights.slice(0, 3)

  return (
    <section className="py-section-lg bg-white">
      <div className="container-premium">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <SectionReveal>
            <span className="label mb-4 block">Knowledge Hub</span>
            <h2 className="text-display-2 text-text mb-4">
              Latest Insights
            </h2>
            <p className="text-body text-text-light max-w-xl">
              Stay informed with our market analysis, procurement guides, and 
              commodity intelligence reports.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <Link
              href="/knowledge-center/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors mt-6 lg:mt-0"
            >
              View All Insights
              <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionReveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestInsights.map((insight, index) => (
            <StaggerItem key={insight.id}>
              <Link href={`/knowledge-center/${insight.slug}/`}>
                <motion.article
                  whileHover={{ y: -4 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-border/60 hover:shadow-lg hover:shadow-black/5 
                             transition-all duration-300 h-full flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={insightImages[insight.id] || "/images/spice-bazaar.png"} 
                      alt={insight.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-semibold text-primary uppercase tracking-wide">
                        {insight.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-[11px] text-text-muted mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {insight.readTime}
                      </span>
                      <span>{new Date(insight.date).toLocaleDateString("en-IN", { 
                        year: "numeric", 
                        month: "short", 
                        day: "numeric" 
                      })}</span>
                    </div>

                    <h3 className="font-bold text-text text-sm mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {insight.title}
                    </h3>
                    <p className="text-xs text-text-light leading-relaxed line-clamp-3 flex-1">
                      {insight.excerpt}
                    </p>

                    <div className="mt-3 pt-3 border-t border-border/60">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary group-hover:gap-3 transition-all">
                        Read Article
                        <ArrowRight className="w-3 h-3" />
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
  )
}
