"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
          style={{ backgroundImage: "url('/images/spice-bazaar.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container-premium pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Trusted Since 2008
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-display-1 text-text mb-6"
            >
              The Network Behind{" "}
              <span className="text-gradient">India's Agricultural Trade</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-body-lg text-text-light mb-8 leading-relaxed"
            >
              Connecting buyers with verified suppliers across spices, pulses, oil seeds, and cotton. 
              17+ years of trusted brokerage from Rajkot, Gujarat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-3"
            >
              <Link
                href="/buyer-request/"
                className="btn-primary group"
              >
                Request Sourcing Match
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/commodities/"
                className="btn-secondary"
              >
                Explore Commodities
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 pt-8 border-t border-border/60"
            >
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-2xl font-bold text-text">17+</div>
                  <div className="text-xs text-text-muted mt-0.5">Years Experience</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <div className="text-2xl font-bold text-text">500+</div>
                  <div className="text-xs text-text-muted mt-0.5">Verified Suppliers</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <div className="text-2xl font-bold text-text">15+</div>
                  <div className="text-xs text-text-muted mt-0.5">States Covered</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
                <img 
                  src="/images/agri-handshake.png" 
                  alt="Agricultural trade partnership"
                  className="w-full h-[420px] object-cover"
                />
              </div>

              {/* Floating Card 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl shadow-black/10 p-4 border border-border/60"
              >
                <div className="flex items-center gap-3">
                  <img src="/images/sesame-seeds.png" alt="Sesame" className="w-12 h-12 rounded-lg object-cover" />
                  <div>
                    <p className="text-xs text-text-muted">Sesame Seeds</p>
                    <p className="font-bold text-sm text-text">₹8,200/qtl</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl shadow-black/10 p-4 border border-border/60"
              >
                <div className="flex items-center gap-3">
                  <img src="/images/cumin-fennel.png" alt="Spices" className="w-12 h-12 rounded-lg object-cover" />
                  <div>
                    <p className="text-xs text-text-muted">Cumin Export</p>
                    <p className="font-bold text-sm text-text">Grade A Quality</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-text-muted"
        >
          <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
