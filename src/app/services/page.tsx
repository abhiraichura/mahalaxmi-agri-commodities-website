"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Search, ShoppingCart, TrendingUp, Globe, ShieldCheck, Users, CheckCircle2, Sparkles, Zap, BarChart3 } from "lucide-react"
import { services } from "@/data/services"
import { SectionReveal } from "@/components/ui/SectionReveal"
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer"

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="w-8 h-8" />,
  ShoppingCart: <ShoppingCart className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-accent/10 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6"
            >
              What We Do
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-text mb-6"
            >
              Comprehensive <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Brokerage</span> Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-text-light leading-relaxed"
            >
              From supplier discovery to export coordination, we provide end-to-end support 
              for every stage of your agricultural commodity procurement journey in India.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
            {services.map((service, index) => (
              <StaggerItem key={service.id}>
                <motion.div 
                  whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-2xl border border-border p-8 hover:border-primary/20 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {iconMap[service.icon]}
                  </div>

                  <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-text-light text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">Key Features:</p>
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-text-light">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/buyer-request/"
                    className="inline-flex items-center text-primary font-medium text-sm hover:underline mt-auto"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mt-3">Our Brokerage Process</h2>
            <p className="text-text-light mt-4 max-w-2xl mx-auto">
              Simple, transparent, and efficient. We handle the complexity so you can focus on your business.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Share Requirements", desc: "Tell us what commodity, quantity, quality, and timeline you need.", icon: Search },
              { step: "02", title: "We Find Suppliers", desc: "Our team identifies and verifies matching suppliers from our network.", icon: Users },
              { step: "03", title: "Quality Matching", desc: "Samples evaluated, specifications confirmed, terms negotiated.", icon: ShieldCheck },
              { step: "04", title: "Trade Executed", desc: "Contract signed, delivery coordinated, relationship established.", icon: Zap },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.15}>
                <div className="relative text-center">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-primary/20"
                  >
                    <item.icon className="w-8 h-8" />
                  </motion.div>
                  <div className="text-3xl font-bold text-primary/20 mb-2">{item.step}</div>
                  <h3 className="text-lg font-bold text-text mb-2">{item.title}</h3>
                  <p className="text-text-light text-sm">{item.desc}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-full">
                      <ArrowRight className="w-6 h-6 text-primary/30" />
                    </div>
                  )}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Advantages</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mt-3">Why Choose Mahalaxmi?</h2>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: "23+ Years Experience", desc: "Deep market knowledge built since 2002 in Rajkot's agricultural markets." },
              { icon: Users, title: "500+ Verified Suppliers", desc: "Access to a pan-India network of reliable suppliers across 15+ states." },
              { icon: Zap, title: "Fast Execution", desc: "From inquiry to delivery in days, not weeks. Our processes are optimized for speed." },
              { icon: ShieldCheck, title: "Quality Coordination", desc: "We coordinate quality checks with your lab tester, ensuring specifications are met." },
              { icon: TrendingUp, title: "Market Intelligence", desc: "Daily APMC price tracking, crop forecasts, and export demand analysis." },
              { icon: Globe, title: "Export Focus", desc: "We specialize in helping Indian exporters find the right domestic suppliers." },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="flex items-start gap-4 p-6 bg-secondary rounded-xl"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text mb-1">{item.title}</h3>
                    <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern-dots.svg')]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionReveal>
            <Sparkles className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Let us understand your requirements and match you with the right suppliers 
              from our verified network across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/buyer-request/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-xl font-medium hover:bg-white/90 transition-colors"
              >
                Request Sourcing Match
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-dark text-white rounded-xl font-medium border border-white/20 hover:bg-primary-dark/80 transition-colors"
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
