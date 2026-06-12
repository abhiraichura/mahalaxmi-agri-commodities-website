"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Building2, ShoppingCart } from "lucide-react"
import { SectionReveal } from "@/components/ui/SectionReveal"

export function PowerCTA() {
  return (
    <section className="py-section-lg bg-text text-white overflow-hidden relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/images/farmer-handshake.png" 
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-text via-text/95 to-text/90" />

      <div className="container-premium relative z-10">
        <SectionReveal className="text-center mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary mb-4 block">
            Get Started
          </span>
          <h2 className="text-display-2 text-white mb-6">
            Ready to Connect?
          </h2>
          <p className="text-body-lg text-white/60 max-w-2xl mx-auto">
            Whether you're looking for reliable suppliers or seeking buyers for your produce, 
            our network is ready to facilitate your next trade.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            whileHover={{ y: -4 }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6">
              <ShoppingCart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Looking for the Right Supplier?
            </h3>
            <p className="text-white/60 mb-6 text-sm leading-relaxed">
              Tell us what you need — commodity, quantity, quality specifications, and timeline. 
              We'll match you with verified suppliers from our network.
            </p>
            <Link
              href="/buyer-request/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-semibold rounded-lg 
                         hover:bg-primary-light transition-all text-sm"
            >
              Submit Buyer Inquiry
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent mb-6">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Need a Trusted Buyer?
            </h3>
            <p className="text-white/60 mb-6 text-sm leading-relaxed">
              List your available commodities and specifications. We'll connect you with 
              serious buyers — exporters, processors, and large-scale procurement teams.
            </p>
            <Link
              href="/supplier-request/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-semibold rounded-lg 
                         hover:bg-accent-light transition-all text-sm"
            >
              List Your Commodities
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
