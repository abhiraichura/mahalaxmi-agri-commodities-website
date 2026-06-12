"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { siteConfig } from "@/data/site"
import { SectionReveal } from "@/components/ui/SectionReveal"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    interest: "",
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
            <span className="label mb-4 block">Contact</span>
            <h1 className="font-display text-display-1 font-bold text-text mb-6 max-w-4xl">
              Get in Touch
            </h1>
            <p className="text-body-lg text-text-light max-w-2xl leading-relaxed">
              Ready to discuss your commodity sourcing needs? Reach out to our team 
              and we'll get back to you within 24 hours.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-section-lg bg-white">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <SectionReveal>
                <h2 className="font-display text-2xl font-bold text-text mb-8">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text mb-1">Phone</h3>
                      <a href={`tel:${siteConfig.contact.phone[0].replace(/\s/g, "")}`} 
                         className="text-text-light hover:text-primary transition-colors block">
                        {siteConfig.contact.phone[0]}
                      </a>
                      <a href={`tel:${siteConfig.contact.phone[1].replace(/\s/g, "")}`} 
                         className="text-text-light hover:text-primary transition-colors block">
                        {siteConfig.contact.phone[1]}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text mb-1">Email</h3>
                      <a href={`mailto:${siteConfig.contact.email}`} 
                         className="text-text-light hover:text-primary transition-colors">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text mb-1">Marketing Office</h3>
                      <p className="text-text-light text-sm">{siteConfig.location.marketing}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text mb-1">Main Office</h3>
                      <p className="text-text-light text-sm">{siteConfig.location.main}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text mb-1">Business Hours</h3>
                      <p className="text-text-light text-sm">Monday - Saturday</p>
                      <p className="text-text-light text-sm">10:00 AM - 7:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <SectionReveal>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="font-display text-2xl font-bold text-text mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-text-light">
                      Thank you for reaching out. Our team will contact you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-secondary rounded-2xl p-8">
                    <h2 className="font-display text-2xl font-bold text-text mb-6">
                      Send us a Message
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
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
                        <label className="block text-sm font-medium text-text mb-2">Phone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-3 bg-white rounded-xl border border-border focus:border-primary 
                                     focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="+91 ..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text mb-2">Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={e => setFormData({...formData, company: e.target.value})}
                          className="w-full px-4 py-3 bg-white rounded-xl border border-border focus:border-primary 
                                     focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-text mb-2">I'm interested in *</label>
                      <select
                        required
                        value={formData.interest}
                        onChange={e => setFormData({...formData, interest: e.target.value})}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-border focus:border-primary 
                                   focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      >
                        <option value="">Select an option</option>
                        <option value="sourcing">Sourcing Commodities</option>
                        <option value="selling">Selling Commodities</option>
                        <option value="export">Export Facilitation</option>
                        <option value="market">Market Intelligence</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-text mb-2">Message</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-border focus:border-primary 
                                   focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl 
                                 hover:bg-primary-dark transition-all"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
