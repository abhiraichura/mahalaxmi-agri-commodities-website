"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Globe, ArrowUpRight } from "lucide-react"
import { siteConfig, navigation } from "@/data/site"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-text text-white">
      {/* Main Footer */}
      <div className="container-premium py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DE2A72" />
                        <stop offset="100%" stopColor="#D8A463" />
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="45" fill="none" stroke="url(#footerLogoGrad)" strokeWidth="2" />
                    <path
                      d="M50 15 C35 25, 25 40, 25 55 C25 75, 40 85, 50 85 C60 85, 75 75, 75 55 C75 40, 65 25, 50 15Z"
                      fill="url(#footerLogoGrad)"
                      opacity="0.9"
                    />
                    <path
                      d="M50 25 C40 32, 35 42, 35 52 C35 65, 42 72, 50 72 C58 72, 65 65, 65 52 C65 42, 60 32, 50 25Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white leading-tight">MAHALAXMI</span>
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-primary uppercase">
                    Agri Commodities
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              {siteConfig.tagline}. Connecting India's agricultural supply chain through 
              trusted relationships, market intelligence, and strategic brokerage since 2008.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`tel:${siteConfig.contact.phone[0].replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.contact.phone[0]}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone[1].replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.contact.phone[1]}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.contact.email}
              </a>
              <span className="flex items-center gap-3 text-white/70">
                <Globe className="w-4 h-4" />
                {siteConfig.contact.website}
              </span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {["About", "Services", "Contact", "FAQ"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}/`}
                    className="text-sm text-white/60 hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Commodities
            </h4>
            <ul className="flex flex-col gap-3">
              {["Spices", "Pulses", "Oil Seeds", "Cotton"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/commodities/${item.toLowerCase().replace(" ", "-")}/`}
                    className="text-sm text-white/60 hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Resources
            </h4>
            <ul className="flex flex-col gap-3">
              {["Market Intelligence", "Knowledge Center", "Case Studies", "Trade Resources"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(/\s/g, "-")}/`}
                      className="text-sm text-white/60 hover:text-primary transition-colors flex items-center gap-1 group"
                    >
                      {item}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Locations
            </h4>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs font-semibold text-primary uppercase mb-1">Marketing Office</p>
                <p className="text-sm text-white/60 leading-relaxed">
                  {siteConfig.location.marketing}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-primary uppercase mb-1">Main Office</p>
                <p className="text-sm text-white/60 leading-relaxed">
                  {siteConfig.location.main}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-premium py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy/" className="text-sm text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service/" className="text-sm text-white/40 hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap/" className="text-sm text-white/40 hover:text-white/70 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
