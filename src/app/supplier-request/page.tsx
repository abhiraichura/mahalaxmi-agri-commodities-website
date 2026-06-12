"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, Building2, ArrowRight } from "lucide-react"
import { SectionReveal } from "@/components/ui/SectionReveal"
import Link from "next/link"

export default function SupplierRequestPage() {
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
    origin: "",
    price: "",
    availability: "",
    details: "",
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
            <span className="label mb-4 block">For Suppliers</span>
            <h1 className="font-display text-display-1 font-bold text-text mb-6 max-w-4xl">
              List Your Commodities
            </h1>
            <p className="text-body-lg text-text-light max-w-2xl leading-relaxed">
              Have quality agricultural commodities to sell? Connect with serious buyers — 
              exporters, processors, and large-scale procurement teams through our network.
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
                Listing Submitted!
              </h2>
              <p className="text-text-light mb-8 max-w-md mx-auto">
                Thank you for listing your commodities. Our team will verify your details 
                and connect you with matching buyers within 48 hours.
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
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h2 className="font-display text-xl font-bold text-text">Commodity Details</h2>
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
                      <label className="block text-sm font-medium text-text mb-2">Available Quantity *</label>
                      <div className="flex gap-2">
                        <input
                          required
                          type="text"
                          value={formData.quantity}
                          onChange={e => setFormData({...formData, quantity: e.target.value})}
                          className="flex-1 px-4 py-3 bg-white rounded-xl border border-border focus:border-primary 
                                     focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="e.g., 100"
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
                      <label className="block text-sm font-medium text-text mb-2">Origin/Location *</label>
                      <input
                        required
                        type="text"
                        value={formData.origin}
                        onChange={e => setFormData({...formData, origin: e.target.value})}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-border focus:border-primary 
                                   focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="City, State"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Expected Price Range</label>
                      <input
                        type="text"
                        value={formData.price}
                        onChange={e => setFormData({...formData, price: e.target.value})}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-border focus:border-primary 
                                   focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="e.g., ₹180-200/kg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Availability *</label>
                      <select
                        required
                        value={formData.availability}
                        onChange={e => setFormData({...formData, availability: e.target.value})}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-border focus:border-primary 
                                   focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      >
                        <option value="">Select availability</option>
                        <option value="immediate">Immediate</option>
                        <option value="1-week">Within 1 Week</option>
                        <option value="2-weeks">Within 2 Weeks</option>
                        <option value="1-month">Within 1 Month</option>
                        <option value="seasonal">Seasonal</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Additional Details</label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={e => setFormData({...formData, details: e.target.value})}
                      className="w-full px-4 py-3 bg-white rounded-xl border border-border focus:border-primary 
                                 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Certifications, packaging details, moisture content, etc."
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
                      <label className="block text-sm font-medium text-text mb-2">Company/Farm Name *</label>
                      <input
                        required
                        type="text"
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-border focus:border-primary 
                                   focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Company or farm name"
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
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white 
                             font-semibold rounded-xl hover:bg-accent-light transition-all"
                >
                  <Send className="w-4 h-4" />
                  Submit Commodity Listing
                </button>
              </form>
            </SectionReveal>
          )}
        </div>
      </section>
    </>
  )
}
