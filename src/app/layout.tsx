import type { Metadata } from "next"
import "@/styles/globals.css"
import { Barlow, Cormorant_Garamond } from "next/font/google"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { SmoothScroll } from "@/components/layout/SmoothScroll"
import { siteConfig } from "@/data/site"

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "agricultural commodity broker",
    "commodity sourcing India",
    "spice procurement India",
    "oil seed suppliers India",
    "pulse sourcing India",
    "commodity brokerage services",
    "agricultural trade network India",
    "supplier discovery India",
    "procurement support India",
    "Rajkot commodity broker",
    "Gujarat agricultural trade",
    "cumin suppliers Gujarat",
    "groundnut exporters India",
    "cotton trade Gujarat",
    "sesame seeds India",
  ],
  authors: [{ name: siteConfig.founder }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${cormorant.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              alternateName: "Mahalaxmi Agri",
              url: siteConfig.url,
              logo: `${siteConfig.url}/images/logo.png`,
              founder: {
                "@type": "Person",
                name: siteConfig.founder,
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: siteConfig.contact.phone[0],
                contactType: "sales",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi", "Gujarati"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.location.marketing,
                addressLocality: siteConfig.location.city,
                addressRegion: siteConfig.location.state,
                addressCountry: "IN",
              },
              sameAs: [
                siteConfig.social.linkedin,
                siteConfig.social.twitter,
                siteConfig.social.facebook,
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: siteConfig.name,
              url: siteConfig.url,
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
