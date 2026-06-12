"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, TrendingUp, TrendingDown, Calendar, Bell, FileText, BarChart3, ArrowUpRight, ArrowDownRight, RefreshCw, AlertCircle } from "lucide-react"
import { SectionReveal } from "@/components/ui/SectionReveal"
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer"
import { useState, useEffect } from "react"

interface PriceData {
  commodity: string
  current: number
  unit: string
  change: number
  trend: "up" | "down" | "stable"
  location: string
  season: string
  history: number[]
  high: number
  low: number
}

const marketData: PriceData[] = [
  {
    commodity: "Cumin Seed",
    current: 195,
    unit: "Rs/kg",
    change: 5.2,
    trend: "up",
    location: "Unjha APMC, Gujarat",
    season: "In Season (Feb-Apr)",
    history: [165, 170, 168, 175, 172, 178, 180, 185, 182, 188, 190, 195],
    high: 210,
    low: 160,
  },
  {
    commodity: "Coriander Seed",
    current: 85,
    unit: "Rs/kg",
    change: -1.5,
    trend: "down",
    location: "Rajkot APMC, Gujarat",
    season: "Peak Arrivals (Mar-May)",
    history: [90, 88, 92, 89, 87, 91, 88, 86, 89, 87, 88, 85],
    high: 95,
    low: 78,
  },
  {
    commodity: "Fennel Seed",
    current: 142,
    unit: "Rs/kg",
    change: 2.1,
    trend: "up",
    location: "Rajkot APMC, Gujarat",
    season: "In Season (Mar-May)",
    history: [130, 132, 128, 135, 138, 134, 136, 140, 138, 142, 140, 142],
    high: 155,
    low: 125,
  },
  {
    commodity: "Black Sesame",
    current: 128,
    unit: "Rs/kg",
    change: 3.8,
    trend: "up",
    location: "Gondal APMC, Gujarat",
    season: "Harvest (Sep-Nov)",
    history: [115, 118, 116, 120, 122, 119, 121, 124, 125, 126, 127, 128],
    high: 140,
    low: 110,
  },
  {
    commodity: "White Sesame",
    current: 135,
    unit: "Rs/kg",
    change: 1.2,
    trend: "up",
    location: "Gondal APMC, Gujarat",
    season: "Harvest (Sep-Nov)",
    history: [125, 127, 126, 128, 130, 129, 131, 132, 133, 134, 134, 135],
    high: 145,
    low: 120,
  },
  {
    commodity: "Mung (Green Gram)",
    current: 72,
    unit: "Rs/kg",
    change: -0.8,
    trend: "stable",
    location: "Indore APMC, MP",
    season: "New Arrivals (Mar-May)",
    history: [75, 74, 76, 73, 74, 75, 73, 72, 73, 74, 73, 72],
    high: 80,
    low: 65,
  },
  {
    commodity: "Chickpeas",
    current: 58,
    unit: "Rs/kg",
    change: -2.3,
    trend: "down",
    location: "Mandsaur APMC, MP",
    season: "Peak Arrivals (Mar-May)",
    history: [65, 64, 66, 63, 62, 64, 61, 60, 62, 60, 59, 58],
    high: 70,
    low: 52,
  },
  {
    commodity: "Cotton (Shankar-6)",
    current: 63500,
    unit: "Rs/candy",
    change: 1.5,
    trend: "up",
    location: "Rajkot APMC, Gujarat",
    season: "Ginning Season (Oct-Mar)",
    history: [62000, 61800, 62200, 62500, 62800, 63000, 62900, 63100, 63200, 63300, 63400, 63500],
    high: 65000,
    low: 60000,
  },
]

const marketReports = [
  {
    id: "1",
    title: "Cumin Market Weekly: Prices Firm on Reduced Sowing",
    category: "Spices",
    date: "2026-06-12",
    readTime: "5 min",
    excerpt: "Gujarat cumin sowing area down 12% YoY. Export demand from Middle East remains strong. Prices expected to firm further.",
    trend: "up",
  },
  {
    id: "2",
    title: "Sesame Export Outlook: Strong Demand from Gulf Markets",
    category: "Oil Seeds",
    date: "2026-06-10",
    readTime: "4 min",
    excerpt: "Black and white sesame both seeing increased orders from UAE and Saudi Arabia. Gujarat arrivals picking up pace.",
    trend: "up",
  },
  {
    id: "3",
    title: "Chickpea Procurement Window: Best Time to Buy",
    category: "Pulses",
    date: "2026-06-08",
    readTime: "6 min",
    excerpt: "Madhya Pradesh arrivals at peak. Prices softening 2-3% weekly. Ideal window for bulk procurement before monsoon.",
    trend: "down",
  },
  {
    id: "4",
    title: "Cotton Ginning Update: Gujarat Output Quality Improves",
    category: "Cotton",
    date: "2026-06-05",
    readTime: "5 min",
    excerpt: "Shankar-6 staple length averaging 29.2mm this season. Micronaire in ideal range. Export inquiries from Bangladesh rising.",
    trend: "up",
  },
  {
    id: "5",
    title: "Fennel & Fenugreek: European Export Demand Rising",
    category: "Spices",
    date: "2026-06-03",
    readTime: "4 min",
    excerpt: "New EU organic certification requirements creating opportunities for certified suppliers. Premium prices available.",
    trend: "up",
  },
]

function MiniChart({ data, trend }: { data: number[]; trend: string }) {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * 100
    const y = 100 - ((val - min) / range) * 100
    return `${x},${y}`
  }).join(" ")

  const color = trend === "up" ? "#DE2A72" : trend === "down" ? "#EF4444" : "#8A8A8A"

  return (
    <svg viewBox="0 0 100 100" className="w-full h-20" preserveAspectRatio="none">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        points={points}
        vectorEffect="non-scaling-stroke"
      />
      <polygon
        fill={color}
        fillOpacity="0.1"
        points={`0,100 ${points} 100,100`}
      />
    </svg>
  )
}

export default function MarketIntelligencePage() {
  const [activeTab, setActiveTab] = useState("all")
  const [lastUpdated, setLastUpdated] = useState(new Date())

  const filteredData = activeTab === "all" 
    ? marketData 
    : marketData.filter(d => {
        if (activeTab === "spices") return ["Cumin Seed", "Coriander Seed", "Fennel Seed"].includes(d.commodity)
        if (activeTab === "oil-seeds") return ["Black Sesame", "White Sesame"].includes(d.commodity)
        if (activeTab === "pulses") return ["Mung (Green Gram)", "Chickpeas"].includes(d.commodity)
        if (activeTab === "cotton") return d.commodity === "Cotton (Shankar-6)"
        return true
      })

  const tabs = [
    { id: "all", label: "All Commodities" },
    { id: "spices", label: "Spices" },
    { id: "oil-seeds", label: "Oil Seeds" },
    { id: "pulses", label: "Pulses" },
    { id: "cotton", label: "Cotton" },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-accent/10 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              <BarChart3 className="w-4 h-4 inline mr-2" />
              Live Market Data
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
              Market <span className="text-primary">Intelligence</span> Center
            </h1>
            <p className="text-lg text-text-light leading-relaxed">
              Real-time APMC market prices, seasonal insights, and procurement intelligence 
              to help Indian exporters make informed sourcing decisions.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-text-muted">
              <span className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Updated: {lastUpdated.toLocaleTimeString("en-IN")}
              </span>
              <span className="flex items-center gap-1 text-primary">
                <AlertCircle className="w-4 h-4" />
                Daily APMC Updates
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Price Dashboard */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-secondary text-text-light hover:bg-border"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
            {filteredData.map((item) => (
              <StaggerItem key={item.commodity}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                  className="bg-white rounded-2xl border border-border p-6 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-text">{item.commodity}</h3>
                      <p className="text-xs text-text-muted mt-1">{item.location}</p>
                    </div>
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      item.trend === "up" ? "bg-green-50 text-green-600" :
                      item.trend === "down" ? "bg-red-50 text-red-600" :
                      "bg-gray-50 text-gray-600"
                    }`}>
                      {item.trend === "up" ? <ArrowUpRight className="w-3 h-3" /> :
                       item.trend === "down" ? <ArrowDownRight className="w-3 h-3" /> :
                       <TrendingUp className="w-3 h-3" />}
                      {item.change > 0 ? "+" : ""}{item.change}%
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-3xl font-bold text-text">
                      {item.unit === "Rs/candy" ? `Rs${(item.current/1000).toFixed(1)}K` : `Rs${item.current}`}
                      <span className="text-sm font-normal text-text-muted ml-1">{item.unit.replace("Rs", "")}</span>
                    </div>
                  </div>

                  <MiniChart data={item.history} trend={item.trend} />

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border text-xs text-text-muted">
                    <span>H: Rs{item.high}</span>
                    <span className="px-2 py-0.5 bg-secondary rounded-full">{item.season}</span>
                    <span>L: Rs{item.low}</span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Market Reports */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Analysis</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mt-3">Latest Market Reports</h2>
            <p className="text-text-light mt-4 max-w-2xl mx-auto">
              Weekly analysis and procurement recommendations for Indian exporters.
            </p>
          </SectionReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {marketReports.map((report) => (
              <StaggerItem key={report.id}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FileText className="w-16 h-16 text-primary/20" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        report.trend === "up" ? "bg-green-100 text-green-700" :
                        report.trend === "down" ? "bg-red-100 text-red-700" :
                        "bg-blue-100 text-blue-700"
                      }`}>
                        {report.trend === "up" ? "Bullish" : report.trend === "down" ? "Bearish" : "Stable"}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-medium rounded-full">
                        {report.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
                      <Calendar className="w-3 h-3" />
                      {new Date(report.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
                      <span className="text-text-muted">.</span>
                      <span>{report.readTime} read</span>
                    </div>

                    <h3 className="text-lg font-bold text-text mb-3 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                      {report.title}
                    </h3>

                    <p className="text-text-light text-sm leading-relaxed mb-4 flex-grow">
                      {report.excerpt}
                    </p>

                    <button className="inline-flex items-center text-primary font-medium text-sm hover:underline mt-auto">
                      Read Full Report
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Seasonal Calendar */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Planning</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mt-3">Seasonal Procurement Calendar</h2>
            <p className="text-text-light mt-4 max-w-2xl mx-auto">
              Optimal buying windows for each commodity to maximize value and quality.
            </p>
          </SectionReveal>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-bold text-text">Commodity</th>
                  <th className="text-left py-4 px-4 font-bold text-text">Sowing</th>
                  <th className="text-left py-4 px-4 font-bold text-text">Harvest</th>
                  <th className="text-left py-4 px-4 font-bold text-text">Peak Arrivals</th>
                  <th className="text-left py-4 px-4 font-bold text-text">Best Buy Window</th>
                  <th className="text-left py-4 px-4 font-bold text-text">Price Trend</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { commodity: "Cumin Seed", sowing: "Nov-Dec", harvest: "Feb-Mar", arrivals: "Feb-Apr", buy: "Feb-Mar", trend: "Lowest prices" },
                  { commodity: "Coriander Seed", sowing: "Oct-Nov", harvest: "Mar-Apr", arrivals: "Mar-May", buy: "Mar-Apr", trend: "Fresh stock" },
                  { commodity: "Fennel Seed", sowing: "Oct-Nov", harvest: "Mar-Apr", arrivals: "Mar-May", buy: "Mar-Apr", trend: "Best quality" },
                  { commodity: "Black/White Sesame", sowing: "Jul-Aug", harvest: "Sep-Oct", arrivals: "Sep-Nov", buy: "Oct-Nov", trend: "Post-harvest low" },
                  { commodity: "Mung (Green Gram)", sowing: "Jul-Aug", harvest: "Mar-Apr", arrivals: "Mar-May", buy: "Mar-Apr", trend: "New crop arrival" },
                  { commodity: "Chickpeas", sowing: "Oct-Nov", harvest: "Mar-Apr", arrivals: "Mar-May", buy: "Apr-May", trend: "Peak arrivals" },
                  { commodity: "Cotton", sowing: "May-Jun", harvest: "Oct-Nov", arrivals: "Oct-Mar", buy: "Nov-Dec", trend: "Ginning season" },
                ].map((row, i) => (
                  <motion.tr
                    key={row.commodity}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-border hover:bg-secondary/50 transition-colors"
                  >
                    <td className="py-4 px-4 font-medium text-text">{row.commodity}</td>
                    <td className="py-4 px-4 text-text-light text-sm">{row.sowing}</td>
                    <td className="py-4 px-4 text-text-light text-sm">{row.harvest}</td>
                    <td className="py-4 px-4 text-text-light text-sm">{row.arrivals}</td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {row.buy}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-text-light text-sm">{row.trend}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <Bell className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Daily Price Alerts</h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Stay ahead of market movements. Receive daily price updates and procurement 
              recommendations directly to your WhatsApp or email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-xl font-medium hover:bg-white/90 transition-colors"
              >
                Subscribe to Alerts
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/buyer-request/"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-dark text-white rounded-xl font-medium border border-white/20 hover:bg-primary-dark/80 transition-colors"
              >
                Submit Sourcing Request
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
