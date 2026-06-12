"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { testimonials } from "@/data/testimonials"
import { SectionReveal } from "@/components/ui/SectionReveal"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const current = testimonials[currentIndex]

  return (
    <section className="py-section-lg bg-secondary overflow-hidden">
      <div className="container-premium">
        <SectionReveal className="text-center mb-16">
          <span className="label mb-4 block">Testimonials</span>
          <h2 className="text-display-2 text-text mb-6">
            Trusted by Industry Leaders
          </h2>
        </SectionReveal>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-border/60">
            <Quote className="w-10 h-10 text-primary/10 absolute top-6 left-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < current.rating ? "text-accent fill-accent" : "text-border"
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="text-lg lg:text-xl text-text leading-relaxed mb-6 italic font-medium">
                  "{current.content}"
                </blockquote>

                <div>
                  <p className="font-bold text-text text-sm">{current.name}</p>
                  <p className="text-xs text-text-light">
                    {current.role}, {current.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center 
                           text-text hover:bg-primary hover:text-white hover:border-primary transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-6 bg-primary"
                        : "w-1.5 bg-border hover:bg-text-light"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center 
                           text-text hover:bg-primary hover:text-white hover:border-primary transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
