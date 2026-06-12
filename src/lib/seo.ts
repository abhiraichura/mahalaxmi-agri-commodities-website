import { Metadata } from "next"

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
  noIndex?: boolean
}

export function generateSEO({
  title,
  description,
  keywords = [],
  ogImage = "/images/og-image.jpg",
  canonical,
  noIndex = false,
}: SEOProps): Metadata {
  const baseTitle = "Mahalaxmi Agri Commodities"
  const fullTitle = title === baseTitle ? title : `${title} | ${baseTitle}`

  return {
    title: fullTitle,
    description,
    keywords: [
      "agricultural commodity broker",
      "commodity sourcing India",
      "spice procurement India",
      "oil seed suppliers India",
      "pulse sourcing India",
      "agricultural trade network",
      "supplier discovery India",
      "procurement support India",
      "Rajkot commodity broker",
      "Gujarat agricultural trade",
      ...keywords,
    ],
    authors: [{ name: "Mahalaxmi Agri Commodities" }],
    creator: "Mahalaxmi Agri Commodities",
    publisher: "Mahalaxmi Agri Commodities",
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: canonical || "https://mahalaxmiagri.com",
      siteName: baseTitle,
      title: fullTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonical || "https://mahalaxmiagri.com",
    },
    verification: {
      google: "your-google-verification-code",
    },
  }
}
