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
          <h2 className="font-display text-display-2 font-bold text-text mb-6">
            Trusted by Industry Leaders
          </h2>
        </SectionReveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <Quote className="w-16 h-16 text-primary/10 absolute -top-4 -left-4" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < current.rating ? "text-accent fill-accent" : "text-border"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-display text-2xl lg:text-3xl text-text leading-relaxed mb-8 italic">
                  "{current.content}"
                </blockquote>

                {/* Author */}
                <div>
                  <p className="font-semibold text-text">{current.name}</p>
                  <p className="text-sm text-text-light">
                    {current.role}, {current.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-border bg-white flex items-center justify-center 
                           text-text hover:bg-primary hover:text-white hover:border-primary transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "bg-border hover:bg-text-light"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-border bg-white flex items-center justify-center 
                           text-text hover:bg-primary hover:text-white hover:border-primary transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
