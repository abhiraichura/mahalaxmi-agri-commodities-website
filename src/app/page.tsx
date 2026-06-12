import { Hero } from "@/components/sections/Hero"
import { TrustMetrics } from "@/components/sections/TrustMetrics"
import { NetworkProcess } from "@/components/sections/NetworkProcess"
import { CommodityEcosystem } from "@/components/sections/CommodityEcosystem"
import { MarketIntelligence } from "@/components/sections/MarketIntelligence"
import { TradeNetwork } from "@/components/sections/TradeNetwork"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { Testimonials } from "@/components/sections/Testimonials"
import { KnowledgeHub } from "@/components/sections/KnowledgeHub"
import { PowerCTA } from "@/components/sections/PowerCTA"
import { generateSEO } from "@/lib/seo"
import { Metadata } from "next"

export const metadata: Metadata = generateSEO({
  title: "Mahalaxmi Agri Commodities",
  description: "India's premier agricultural commodity brokerage connecting buyers with verified suppliers across spices, pulses, oil seeds, and cotton. Based in Rajkot, Gujarat since 2008.",
  canonical: "https://mahalaxmiagri.com/",
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <NetworkProcess />
      <CommodityEcosystem />
      <MarketIntelligence />
      <TradeNetwork />
      <WhyChooseUs />
      <Testimonials />
      <KnowledgeHub />
      <PowerCTA />
    </>
  )
}
