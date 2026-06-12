import Link from "next/link"

const sitemapLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Commodities", href: "/commodities/" },
  { label: "Spices", href: "/commodities/spices/" },
  { label: "Pulses", href: "/commodities/pulses/" },
  { label: "Oil Seeds", href: "/commodities/oil-seeds/" },
  { label: "Cotton", href: "/commodities/cotton/" },
  { label: "Market Intelligence", href: "/market-intelligence/" },
  { label: "Knowledge Center", href: "/knowledge-center/" },
  { label: "Case Studies", href: "/case-studies/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact", href: "/contact/" },
  { label: "Buyer Request", href: "/buyer-request/" },
  { label: "Supplier Request", href: "/supplier-request/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms of Service", href: "/terms-of-service/" },
]

export default function SitemapPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-premium">
          <span className="label mb-4 block">Navigation</span>
          <h1 className="font-display text-display-1 font-bold text-text mb-6">
            Sitemap
          </h1>
        </div>
      </section>
      <section className="py-section-lg bg-white">
        <div className="container-premium max-w-2xl">
          <ul className="space-y-3">
            {sitemapLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="flex items-center gap-3 p-4 bg-secondary rounded-xl hover:bg-primary hover:text-white transition-all group"
                >
                  <span className="w-2 h-2 rounded-full bg-primary group-hover:bg-white transition-colors" />
                  <span className="font-medium">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
