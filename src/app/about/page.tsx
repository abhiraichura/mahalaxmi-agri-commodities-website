"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Phone, Mail, Calendar, Users, Target, Award, TrendingUp, ChevronRight, Sparkles, Handshake, Eye } from "lucide-react"
import { siteConfig } from "@/data/site"
import { SectionReveal } from "@/components/ui/SectionReveal"
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/10">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern-grid.svg')] opacity-5" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6"
            >
              About Us
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-text mb-6 leading-tight"
            >
              The Trusted Network Behind<br />
              <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">India's Agricultural Trade</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-text-light max-w-3xl mx-auto leading-relaxed"
            >
              Since 2002, Mahalaxmi Agri Commodities has been connecting Indian export buyers 
              with quality suppliers across spices, pulses, oil seeds, and cotton from our base in Rajkot, Gujarat.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div className="relative">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src="/images/team/founder.jpg"
                    alt="Kishan Raichura - Founder"
                    fill
                    className="object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder-team.jpg' }}
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl"
                >
                  <div className="text-4xl font-bold">23+</div>
                  <div className="text-sm opacity-90">Years of Excellence</div>
                </motion.div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-text mt-3 mb-6">
                From Local Market to<br />National Network
              </h2>
              <div className="space-y-4 text-text-light leading-relaxed">
                <p>
                  Founded in <strong className="text-text">2002</strong> by <strong className="text-text">Kishan Raichura</strong>, Mahalaxmi Agri Commodities 
                  began as a small trading operation in Rajkot's bustling agricultural market. Over two decades, 
                  we've grown into a trusted brokerage connecting Indian export buyers with the finest suppliers 
                  across the country.
                </p>
                <p>
                  We don't deal with foreign importers directly. Our expertise lies in helping <strong className="text-text">Indian exporters</strong> 
                  find the right quality suppliers within India. When lab testing is needed, the exporter's own 
                  lab tester handles it—we simply bridge the gap between quality supply and export demand.
                </p>
                <p>
                  Today, our network spans <strong className="text-text">15+ states</strong>, <strong className="text-text">500+ verified suppliers</strong>, and has facilitated <strong className="text-text">2,500+ successful transactions</strong>. 
                  But our core remains unchanged: honest dealing, deep relationships, and unmatched market knowledge.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 p-4 bg-secondary rounded-xl">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-text text-lg">Kishan Raichura</div>
                  <div className="text-sm text-text-light">Founder & Managing Director</div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mt-3">Our Core Values</h2>
            <p className="text-text-light mt-4 max-w-2xl mx-auto">
              The principles that have guided us for over two decades in India's agricultural markets.
            </p>
          </SectionReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {[
              {
                icon: Target,
                title: "Supplier-First Matching",
                desc: "We connect export buyers with verified Indian suppliers who match exact quality and quantity requirements."
              },
              {
                icon: Eye,
                title: "No False Promises",
                desc: "We don't do lab testing or financing. We focus on what we do best: finding the right supplier for the right buyer."
              },
              {
                icon: TrendingUp,
                title: "Market Intelligence",
                desc: "Daily monitoring of APMC markets, crop forecasts, and price trends to give our clients the best advantage."
              },
              {
                icon: Handshake,
                title: "Relationship Deep",
                desc: "Built over 23 years in Rajkot's markets. Our supplier relationships span generations, not just transactions."
              }
            ].map((value, i) => (
              <StaggerItem key={i}>
                <motion.div 
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group h-full"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <value.icon className="w-7 h-7 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text mb-3">{value.title}</h3>
                  <p className="text-text-light leading-relaxed text-sm">{value.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern-dots.svg')]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center" staggerDelay={0.15}>
            {[
              { value: "2002", label: "Established", suffix: "" },
              { value: "2500", label: "Transactions Facilitated", suffix: "+" },
              { value: "500", label: "Verified Suppliers", suffix: "+" },
              { value: "15", label: "States Covered", suffix: "+" },
            ].map((stat, i) => (
              <StaggerItem key={i}>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="p-6"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}{stat.suffix}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mt-3">How We Work</h2>
            <p className="text-text-light mt-4 max-w-2xl mx-auto">
              Simple, transparent, and efficient. We handle the complexity so you can focus on your business.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Share Requirements", desc: "Tell us what commodity, quantity, quality, and timeline you need for export." },
              { step: "02", title: "We Find Suppliers", desc: "Our team identifies and verifies matching Indian suppliers from our network." },
              { step: "03", title: "Quality Matching", desc: "Samples evaluated, your lab tester confirms specs, terms negotiated." },
              { step: "04", title: "Trade Executed", desc: "Contract signed, delivery coordinated, long-term relationship established." },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.15}>
                <div className="relative text-center">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-primary/20"
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="text-lg font-bold text-text mb-2">{item.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
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

      {/* Location & Contact */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <SectionReveal>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-bold text-text mt-3 mb-8">Visit Our Offices</h2>

              <div className="space-y-8">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text mb-1">Main Office</h3>
                    <p className="text-text-light">{siteConfig.location.main}</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text mb-1">Marketing Yard Office</h3>
                    <p className="text-text-light">{siteConfig.location.marketing}</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text mb-1">Phone</h3>
                    <div className="space-y-1">
                      {siteConfig.contact.phone.map((p, i) => (
                        <a key={i} href={`tel:${p.replace(/\s/g, '')}`} className="block text-text-light hover:text-primary transition-colors">
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text mb-1">Email</h3>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-text-light hover:text-primary transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </motion.div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="bg-white rounded-2xl p-8 h-full flex flex-col justify-center shadow-sm">
                <div className="mb-6">
                  <Sparkles className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-text mb-2">Ready to Connect?</h3>
                  <p className="text-text-light leading-relaxed">
                    Whether you're an Indian exporter looking for quality suppliers or a supplier 
                    wanting to reach export buyers, we're here to bridge that gap.
                  </p>
                </div>

                <div className="space-y-4">
                  <Link 
                    href="/buyer-request/"
                    className="flex items-center justify-between w-full p-4 bg-primary text-white rounded-xl hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold">I'm an Exporter</div>
                        <div className="text-sm opacity-80">Find suppliers for export</div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link 
                    href="/supplier-request/"
                    className="flex items-center justify-between w-full p-4 bg-secondary text-text rounded-xl hover:shadow-lg transition-all group border border-border"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold">I'm a Supplier</div>
                        <div className="text-sm text-text-light">Connect with export buyers</div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  )
}
