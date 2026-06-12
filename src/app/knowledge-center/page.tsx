"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Search, ExternalLink, RefreshCw, Newspaper } from "lucide-react"
import { SectionReveal } from "@/components/ui/SectionReveal"
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer"
import { useState, useEffect } from "react"

interface NewsItem {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  slug: string
  readTime: string
  source?: string
  url?: string
}

const categories = ["All", "Spices", "Oil Seeds", "Pulses", "Cotton", "Market News"]

// Fallback static data in case API fails
const fallbackInsights: NewsItem[] = [
  {
    id: "1",
    title: "Cumin Market Outlook: Price Trends and Supply Forecast",
    excerpt: "Analysis of cumin production trends in Gujarat and Rajasthan, with price forecasts for the upcoming season based on sowing area and weather patterns.",
    content: "Detailed market analysis...",
    category: "Spices",
    date: new Date().toISOString(),
    slug: "cumin-market-outlook",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Sesame Export Demand Rising from Middle East",
    excerpt: "Growing demand for Indian sesame seeds in UAE, Saudi Arabia, and other Gulf markets. Black and white sesame both seeing strong orders.",
    content: "Export market analysis...",
    category: "Oil Seeds",
    date: new Date().toISOString(),
    slug: "sesame-export-demand",
    readTime: "4 min read",
  },
  {
    id: "3",
    title: "Chickpeas Procurement Guide for Exporters",
    excerpt: "Best practices for sourcing quality chickpeas from Madhya Pradesh and Rajasthan for export markets.",
    content: "Procurement guide...",
    category: "Pulses",
    date: new Date().toISOString(),
    slug: "chickpeas-procurement-guide",
    readTime: "6 min read",
  },
  {
    id: "4",
    title: "Cotton Ginning Season Update: Gujarat",
    excerpt: "Real-time analysis of Gujarat's cotton market, covering ginning rates, quality assessments, and price trends for Shankar-6 and other premium varieties.",
    content: "Cotton market update...",
    category: "Cotton",
    date: new Date().toISOString(),
    slug: "cotton-ginning-update",
    readTime: "5 min read",
  },
  {
    id: "5",
    title: "Fennel and Fenugreek Export Opportunities",
    excerpt: "Emerging markets in Europe and Southeast Asia showing increased demand for Indian fennel and fenugreek seeds.",
    content: "Export opportunities...",
    category: "Spices",
    date: new Date().toISOString(),
    slug: "fennel-fenugreek-export",
    readTime: "4 min read",
  },
]

function categorizeNews(title: string): string {
  const t = title.toLowerCase()
  if (t.includes('cumin') || t.includes('coriander') || t.includes('fennel') || t.includes('fenugreek') || t.includes('spice') || t.includes('nigella')) return 'Spices'
  if (t.includes('sesame') || t.includes('cotton seed') || t.includes('oil') || t.includes('groundnut')) return 'Oil Seeds'
  if (t.includes('mung') || t.includes('chickpea') || t.includes('pulse') || t.includes('dal') || t.includes('gram')) return 'Pulses'
  if (t.includes('cotton') || t.includes('ginning') || t.includes('staple')) return 'Cotton'
  return 'Market News'
}

export default function KnowledgeCenterPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [insights, setInsights] = useState<NewsItem[]>(fallbackInsights)
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

  useEffect(() => {
    loadNews()

    // Auto-refresh every 6 hours
    const interval = setInterval(loadNews, 6 * 60 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  async function loadNews() {
    setLoading(true)
    try {
      // Try to fetch from RSS feeds via rss2json API
      const rssUrls = [
        'https://www.agriculture.com/rss/news',
        'https://www.farms.com/rss/news.aspx',
        'https://feeds.reuters.com/reuters/commoditiesnews'
      ]

      // For now, simulate with enriched data + try actual fetch
      // In production, you should set up a serverless function or backend API
      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrls[0])}&count=10`,
        { cache: 'no-store' }
      )

      if (response.ok) {
        const data = await response.json()
        if (data.items && data.items.length > 0) {
          const newsItems = data.items.slice(0, 10).map((item: any, index: number) => ({
            id: `news-${index}`,
            title: item.title,
            excerpt: item.description?.replace(/<[^>]*>/g, '').substring(0, 150) + '...' || 'Latest agricultural market update.',
            content: item.description || '',
            category: categorizeNews(item.title),
            date: item.pubDate || new Date().toISOString(),
            slug: `news-${index}`,
            readTime: `${Math.ceil((item.description?.length || 1000) / 1000)} min read`,
            source: item.author || 'Agriculture.com',
            url: item.link,
          }))
          setInsights(newsItems)
        } else {
          setInsights(fallbackInsights)
        }
      } else {
        setInsights(fallbackInsights)
      }
    } catch (error) {
      console.error('News fetch error:', error)
      setInsights(fallbackInsights)
    } finally {
      setLastUpdated(new Date())
      setLoading(false)
    }
  }

  const filtered = insights.filter(i => {
    const matchCategory = activeCategory === "All" || i.category === activeCategory
    const matchSearch = i.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      i.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

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
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              <Newspaper className="w-4 h-4 inline mr-2" />
              Market Intelligence
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">Knowledge Center</h1>
            <p className="text-lg text-text-light max-w-2xl leading-relaxed">
              Expert insights, procurement guides, and market analysis. 
              News updates automatically fetched from agricultural sources.
            </p>

            <div className="flex items-center gap-4 mt-6 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Last updated: {lastUpdated.toLocaleTimeString()}
              </div>
              <button 
                onClick={loadNews}
                disabled={loading}
                className="text-primary hover:underline flex items-center gap-1 disabled:opacity-50"
              >
                Refresh now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b border-border sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? 'bg-primary text-white'
                      : 'bg-secondary text-text-light hover:bg-border'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <RefreshCw className="w-8 h-8 animate-spin text-primary" />
              <span className="ml-3 text-text-light">Fetching latest news...</span>
            </div>
          ) : (
            <>
              <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
                {filtered.map((insight) => (
                  <StaggerItem key={insight.id}>
                    <article className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                      <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                        <Image
                          src={`/images/news/${insight.category.toLowerCase().replace(' ', '-')}.jpg`}
                          alt={insight.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/news/default.jpg'
                          }}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-medium rounded-full">
                            {insight.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {insight.readTime}
                          </span>
                          <span>
                            {new Date(insight.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
                          </span>
                          {insight.source && (
                            <span className="text-primary">via {insight.source}</span>
                          )}
                        </div>

                        <h3 className="text-lg font-bold text-text mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {insight.title}
                        </h3>

                        <p className="text-text-light text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                          {insight.excerpt}
                        </p>

                        {insight.url ? (
                          <a 
                            href={insight.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary font-medium text-sm hover:underline mt-auto"
                          >
                            Read Full Article
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        ) : (
                          <Link 
                            href={`/knowledge-center/${insight.slug}/`}
                            className="inline-flex items-center text-primary font-medium text-sm hover:underline mt-auto"
                          >
                            Read Article
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        )}
                      </div>
                    </article>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {filtered.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-text-light text-lg">No articles found matching your criteria.</p>
                  <button 
                    onClick={() => {setSearchQuery(''); setActiveCategory('All')}}
                    className="mt-4 text-primary hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}
