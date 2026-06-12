"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle, Target, Lightbulb, Trophy } from "lucide-react"
import { caseStudies } from "@/data/site"
import { SectionReveal } from "@/components/ui/SectionReveal"
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer"

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-premium">
          <SectionReveal>
            <span className="label mb-4 block">Success Stories</span>
            <h1 className="font-display text-display-1 font-bold text-text mb-6 max-w-4xl">
              Case Studies
            </h1>
            <p className="text-body-lg text-text-light max-w-2xl leading-relaxed">
              Real results from real clients. See how Mahalaxmi Agri Commodities has helped 
              businesses optimize their procurement and expand their trade networks.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-section-lg bg-white">
        <div className="container-premium">
          <StaggerContainer className="space-y-12">
            {caseStudies.map((study, index) => (
              <StaggerItem key={study.id}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl 
                             hover:shadow-black/5 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Left - Overview */}
                    <div className="p-8 bg-secondary lg:border-r border-border">
                      <span className="text-caption font-bold text-primary mb-4 block">
                        CASE STUDY {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-text mb-4">
                        {study.title}
                      </h3>
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="text-text-muted">Client:</span>
                          <p className="font-medium text-text">{study.client}</p>
                        </div>
                        <div>
                          <span className="text-text-muted">Commodity:</span>
                          <p className="font-medium text-text">{study.commodity}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right - Details */}
                    <div className="lg:col-span-2 p-8">
                      <div className="space-y-6">
                        <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                            <Target className="w-5 h-5 text-red-500" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-text mb-1">Challenge</h4>
                            <p className="text-sm text-text-light leading-relaxed">{study.challenge}</p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                            <Lightbulb className="w-5 h-5 text-blue-500" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-text mb-1">Solution</h4>
                            <p className="text-sm text-text-light leading-relaxed">{study.solution}</p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                            <Trophy className="w-5 h-5 text-green-500" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-text mb-1">Result</h4>
                            <p className="text-sm text-text-light leading-relaxed">{study.result}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
