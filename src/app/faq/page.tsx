"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Search, MessageCircle } from "lucide-react"
import { faqs } from "@/data/faq"
import { SectionReveal } from "@/components/ui/SectionReveal"
import Link from "next/link"

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFaqs = faqs.filter(f => 
    f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const categories = Array.from(new Set(faqs.map(f => f.category)))

  return (
    <>
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-premium">
          <SectionReveal>
            <span className="label mb-4 block">Support</span>
            <h1 className="font-display text-display-1 font-bold text-text mb-6 max-w-4xl">
              Frequently Asked Questions
            </h1>
            <p className="text-body-lg text-text-light max-w-2xl leading-relaxed">
              Everything you need to know about agricultural commodity brokerage, 
              our services, and how we can help your business.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-section-lg bg-white">
        <div className="container-premium max-w-4xl">
          {/* Search */}
          <SectionReveal className="mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-secondary rounded-xl border border-border focus:border-primary 
                           focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
          </SectionReveal>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="px-2 py-1 bg-primary/5 text-primary text-xs font-medium rounded-md flex-shrink-0 mt-0.5">
                      {faq.category}
                    </span>
                    <span className="font-medium text-text">{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted flex-shrink-0 ml-4 transition-transform ${
                      openId === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-[5.5rem]">
                        <p className="text-text-light leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-muted mb-4">No questions found matching your search.</p>
              <Link href="/contact/" className="text-primary font-medium hover:underline">
                Contact us for more information
              </Link>
            </div>
          )}

          {/* Still have questions */}
          <SectionReveal className="mt-16 text-center">
            <div className="bg-secondary rounded-2xl p-8">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-text mb-2">
                Still have questions?
              </h3>
              <p className="text-text-light mb-6">
                Can't find the answer you're looking for? Please chat with our friendly team.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
