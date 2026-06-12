"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, ShoppingCart, ArrowRight } from "lucide-react"
import { SectionReveal } from "@/components/ui/SectionReveal"
import Link from "next/link"

export default function BuyerRequestPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    commodity: "",
    quantity: "",
    unit: "",
    quality: "",
    timeline: "",
    destination: "",
    requirements: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-premium">
          <SectionReveal>
            <span className="label mb-4 block">For Buyers</span>
            <h1 className="font-display text-display-1 font-bold text-text mb-6 max-w-4xl">
              Request a Sourcing Match
            </h1>
            <p className="text-body-lg text-text-light max-w-2xl leading-relaxed">
              Tell us what you need and we'll match you with verified suppliers from our network. 
              Complete the form below and our team will respond within 24 hours.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-section-lg bg-white">
        <div className="container-premium max-w-3xl">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="font-display text-3xl font-bold text-text mb-4">
                Request Received!
              </h2>
              <p className="text-text-light mb-8 max-w-md mx-auto">
                Thank you for your inquiry. Our sourcing team will review your requirements 
                and contact you within 24 hours with supplier matches.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl 
                           hover:bg-primary-dark transition-all"
              >
                Back to Home
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ) : (
            <SectionReveal>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-secondary rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <ShoppingCart className="w-5 h-5" />
                    </div>
                    <h2 className="font-display text-xl font-bold text-text">Your Requirements</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Commodity *</label>
                      <select
                        required
                        value={formData.commodity}
                        onChange={e => setFormData({...formData, commodity: e.target.value})}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-border focus:border-primary 
                                   focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      >
                        <option value="">Select commodity</option>
                        <option value="cumin">Cumin</option>
                        <option value="fennel">Fennel</option>
                        <option value="sesame">Sesame</option>
                        <option value="groundnut">Groundnut</option>
                        <option value="cotton">Cotton</option>
                        <option value="tur">Tur (Pigeon Pea)</option>
                        <option value="moong">Moong (Green Gram)</option>
                        <option value="urad">Urad (Black Gram)</option>
                        <option value="chana">Chana (Bengal Gram)</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Quantity *</label>
                      <div className="flex gap-2">
                        <input
                          required
                          type="text"
                          value={formData.quantity}
                          onChange={e => setFormData({...formData, quantity: e.target.value})}
                          className="flex-1 px-4 py-3 bg-white rounded-xl border border-border focus:border-primary 
                                     focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="e.g., 50"
                        />
                        <select
                          value={formData.unit}
                          onChange={e => setFormData({...formData, unit: e.target.value})}
                          className="px-4 py-3 bg-white rounded-xl border border-border focus:border-primary 
                                     focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        >
                          <option value="mt">MT</option>
                          <option value="kg">KG</option>
                          <option value="quintal">Quintal</option>
                          <option value="bales">Bales</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Quality Grade</label>
                      <input
                        type="text"
                        value={formData.quality}
                        onChange={e => setFormData({...formData, quality: e.target.value})}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-border focus:border-primary 
                                   focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="e.g., Bold, Export Grade"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Timeline *</label>
                      <select
                        required
                        value={formData.timeline}
                        onChange={e => setFormData({...formData, timeline: e.target.value})}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-border focus:border-primary 
                                   focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (within 1 week)</option>
                        <option value="short">Short Term (1-4 weeks)</option>
                        <option value="medium">Medium Term (1-3 months)</option>
                        <option value="long">Long Term (3+ months)</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-text mb-2">Delivery Destination</label>
                    <input
                      type="text"
                      value={formData.destination}
                      onChange={e => setFormData({...formData, destination: e.target.value})}
                      className="w-full px-4 py-3 bg-white rounded-xl border border-border focus:border-primary 
                                 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="City, State or Port for export"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Additional Requirements</label>
                    <textarea
                      rows={3}
                      value={formData.requirements}
                      onChange={e => setFormData({...formData, requirements: e.target.value})}
                      className="w-full px-4 py-3 bg-white rounded-xl border border-border focus:border-primary 
                                 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Any specific requirements, certifications needed, etc."
                    />
                  </div>
                </div>

                <div className="bg-secondary rounded-2xl p-8">
                  <h2 className="font-display text-xl font-bold text-text mb-6">Your Contact Details</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-border focus:border-primary 
                                   focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Company *</label>
                      <input
                        required
                        type="text"
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-border focus:border-primary 
                                   focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Email *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-border focus:border-primary 
                                   focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Phone *</label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-border focus:border-primary 
                                   focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="+91 ..."
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white 
                             font-semibold rounded-xl hover:bg-primary-dark transition-all"
                >
                  <Send className="w-4 h-4" />
                  Submit Sourcing Request
                </button>
              </form>
            </SectionReveal>
          )}
        </div>
      </section>
    </>
  )
}
