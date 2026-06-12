"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Clock, Search } from "lucide-react"
import { insights } from "@/data/insights"
import { SectionReveal } from "@/components/ui/SectionReveal"
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer"
import { useState } from "react"

const categories = ["All", "Spices", "Oil Seeds", "Pulses", "Cotton", "Regulatory"]

export default function KnowledgeCenterPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = insights.filter(i => {
    const matchCategory = activeCategory === "All" || i.category === activeCategory
    const matchSearch = i.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        i.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <>
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-premium">
          <SectionReveal>
            <span className="label mb-4 block">Resources</span>
            <h1 className="font-display text-display-1 font-bold text-text mb-6 max-w-4xl">
              Knowledge Center
            </h1>
            <p className="text-body-lg text-text-light max-w-2xl leading-relaxed">
              Expert insights, procurement guides, and market analysis to help you navigate 
              India's agricultural commodity landscape.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-section-lg bg-white">
        <div className="container-premium">
          {/* Search & Filter */}
          <SectionReveal className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary 
                             focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeCategory === cat
                        ? "bg-primary text-white"
                        : "bg-secondary text-text-light hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Articles Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((insight) => (
              <StaggerItem key={insight.id}>
                <Link href={`/knowledge-center/${insight.slug}/`}>
                  <motion.article
                    whileHover={{ y: -5 }}
                    className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl 
                               hover:shadow-black/5 transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 relative">
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
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
                          Read Article <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-muted">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
