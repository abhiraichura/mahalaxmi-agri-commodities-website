"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig, navigation } from "@/data/site"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-text text-white py-2 text-xs">
        <div className="container-premium flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.contact.phone[0].replace(/\s/g, "")}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">{siteConfig.contact.phone[0]}</span>
            </a>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline text-white/70">
              {siteConfig.location.city}, {siteConfig.location.state}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="hover:text-primary transition-colors hidden sm:block text-xs"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white"
        )}
      >
        <div className="container-premium">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#DE2A72" />
                      <stop offset="100%" stopColor="#D8A463" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="45" fill="none" stroke="url(#logoGrad)" strokeWidth="2" />
                  <path
                    d="M50 15 C35 25, 25 40, 25 55 C25 75, 40 85, 50 85 C60 85, 75 75, 75 55 C75 40, 65 25, 50 15Z"
                    fill="url(#logoGrad)"
                    opacity="0.9"
                  />
                  <path
                    d="M50 25 C40 32, 35 42, 35 52 C35 65, 42 72, 50 72 C58 72, 65 65, 65 52 C65 42, 60 32, 50 25Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-text leading-tight tracking-tight">
                  MAHALAXMI
                </span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-primary uppercase">
                  Agri Commodities
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.main.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-xs font-semibold transition-colors rounded-md flex items-center gap-1",
                      pathname === item.href || pathname.startsWith(item.href)
                        ? "text-primary"
                        : "text-text-light hover:text-primary hover:bg-secondary"
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          "w-3 h-3 transition-transform",
                          activeDropdown === item.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg shadow-black/10 border border-border/60 overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "block px-4 py-2.5 text-xs transition-colors",
                              pathname === child.href
                                ? "text-primary bg-primary/5 font-semibold"
                                : "text-text-light hover:text-primary hover:bg-secondary"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/buyer-request/"
                className="px-4 py-2 text-xs font-semibold text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-all"
              >
                Buyer Inquiry
              </Link>
              <Link
                href="/supplier-request/"
                className="px-4 py-2 text-xs font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-all"
              >
                Request Sourcing
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-text hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="flex flex-col h-full pt-20 pb-8 px-6 overflow-y-auto">
              <nav className="flex flex-col gap-1">
                {navigation.main.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block py-3 text-base font-semibold",
                        pathname === item.href
                          ? "text-primary"
                          : "text-text"
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 flex flex-col gap-1 border-l-2 border-border pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "py-2 text-sm",
                              pathname === child.href
                                ? "text-primary font-semibold"
                                : "text-text-light"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 pt-8 border-t border-border">
                <Link
                  href="/buyer-request/"
                  className="w-full py-3 text-center text-sm font-semibold text-primary border border-primary rounded-lg"
                >
                  Buyer Inquiry
                </Link>
                <Link
                  href="/supplier-request/"
                  className="w-full py-3 text-center text-sm font-semibold text-white bg-primary rounded-lg"
                >
                  Request Sourcing
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
