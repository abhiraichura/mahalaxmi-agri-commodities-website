"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Building2, ShoppingCart } from "lucide-react"
import { SectionReveal } from "@/components/ui/SectionReveal"

export function PowerCTA() {
  return (
    <section className="py-section-lg bg-text text-white overflow-hidden">
      <div className="container-premium">
        <SectionReveal className="text-center mb-16">
          <span className="text-caption font-semibold uppercase tracking-widest text-primary mb-4 block">
            Get Started
          </span>
          <h2 className="font-display text-display-2 font-bold text-white mb-6">
            Ready to Connect?
          </h2>
          <p className="text-body-lg text-white/60 max-w-2xl mx-auto">
            Whether you're looking for reliable suppliers or seeking buyers for your produce, 
            our network is ready to facilitate your next trade.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Buyer CTA */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6">
              <ShoppingCart className="w-7 h-7" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Looking for the Right Supplier?
            </h3>
            <p className="text-white/60 mb-6 leading-relaxed">
              Tell us what you need — commodity, quantity, quality specifications, and timeline. 
              We'll match you with verified suppliers from our network.
            </p>
            <Link
              href="/buyer-request/"
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white font-semibold rounded-xl 
                         hover:bg-primary-light transition-all duration-300"
            >
              Submit Buyer Inquiry
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Supplier CTA */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center text-accent mb-6">
              <Building2 className="w-7 h-7" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Need a Trusted Buyer?
            </h3>
            <p className="text-white/60 mb-6 leading-relaxed">
              List your available commodities and specifications. We'll connect you with 
              serious buyers — exporters, processors, and large-scale procurement teams.
            </p>
            <Link
              href="/supplier-request/"
              className="inline-flex items-center gap-3 px-6 py-3 bg-accent text-white font-semibold rounded-xl 
                         hover:bg-accent-light transition-all duration-300"
            >
              List Your Commodities
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
