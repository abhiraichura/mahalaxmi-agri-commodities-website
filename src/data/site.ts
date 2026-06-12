export const siteConfig = {
  name: "Mahalaxmi Agri Commodities",
  tagline: "The Trusted Network Behind India's Agricultural Trade",
  description: "India's premier agricultural commodity brokerage connecting buyers with verified suppliers across spices, pulses, oil seeds, and cotton. Based in Rajkot, Gujarat.",
  url: "https://mahalaxmiagri.com",
  founder: "Kishan Raichura",
  location: {
    city: "Rajkot",
    state: "Gujarat",
    country: "India",
    marketing: "Tower A-118 New Marketing Yard, Rajkot Morbi Highway, Bedi, Rajkot (Gujarat) 360 003",
    main: "408-Star Plaza, Phulchhab Chowk, Rajkot (Gujarat) 360 001",
  },
  contact: {
    phone: ["+91 90330 00032", "+91 98255 00032"],
    email: "mahalaxmiagricommodities@gmail.com",
    website: "www.mahalaxmiagri.com",
  },
  social: {
    linkedin: "https://linkedin.com/company/mahalaxmi-agri-commodities",
    twitter: "https://twitter.com/mahalaxmiagri",
    facebook: "https://facebook.com/mahalaxmiagricommodities",
  },
  established: 2008,
  employees: "3-10",
  businessType: "Wholesale Import and Export / Commodity Brokerage",
}

export const navigation = {
  main: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/" },
    { label: "Services", href: "/services/" },
    {
      label: "Commodities",
      href: "/commodities/",
      children: [
        { label: "Spices", href: "/commodities/spices/" },
        { label: "Pulses", href: "/commodities/pulses/" },
        { label: "Oil Seeds", href: "/commodities/oil-seeds/" },
        { label: "Cotton", href: "/commodities/cotton/" },
      ],
    },
    { label: "Market Intelligence", href: "/market-intelligence/" },
    { label: "Knowledge Center", href: "/knowledge-center/" },
    { label: "Contact", href: "/contact/" },
  ],
  cta: [
    { label: "Request Sourcing Match", href: "/supplier-request/" },
    { label: "Buyer Inquiry", href: "/buyer-request/" },
  ],
}

export const trustMetrics = [
  {
    label: "Years of Experience",
    value: 17,
    suffix: "+",
    description: "Deep market expertise since 2008",
  },
  {
    label: "Transactions Facilitated",
    value: 2500,
    suffix: "+",
    description: "Successful trade connections made",
  },
  {
    label: "Supplier Network",
    value: 500,
    suffix: "+",
    description: "Verified suppliers across India",
  },
  {
    label: "Commodity Categories",
    value: 4,
    suffix: "",
    description: "Spices, Pulses, Oil Seeds, Cotton",
  },
  {
    label: "States Covered",
    value: 15,
    suffix: "+",
    description: "Pan-India sourcing capability",
  },
]

export const networkSteps = [
  {
    number: "01",
    title: "Supplier Discovery",
    description: "We identify and verify suppliers matching your exact commodity, quantity, and quality requirements from our extensive network across India's agricultural belts.",
    icon: "Search",
  },
  {
    number: "02",
    title: "Quality Matching",
    description: "Rigorous quality assessment including sample evaluation, laboratory testing, and farm-level verification ensures suppliers meet your specifications.",
    icon: "CheckCircle",
  },
  {
    number: "03",
    title: "Negotiation Support",
    description: "Leverage our market intelligence and volume relationships to secure optimal pricing, favorable payment terms, and delivery schedules.",
    icon: "Handshake",
  },
  {
    number: "04",
    title: "Transaction Facilitation",
    description: "End-to-end coordination including contract structuring, documentation, logistics planning, and payment security mechanisms.",
    icon: "FileCheck",
  },
  {
    number: "05",
    title: "Successful Trade",
    description: "Delivery confirmation, quality acceptance, and ongoing relationship management to ensure repeat business and long-term partnerships.",
    icon: "Trophy",
  },
]

export const whyChooseUs = [
  {
    title: "Deep Relationships",
    description: "Built over 17 years in Rajkot's agricultural markets, our relationships with suppliers, processors, and exporters span generations. We know who delivers and who doesn't.",
    icon: "Users",
  },
  {
    title: "Network Access",
    description: "Access to 500+ verified suppliers across 15 states that would take years to build independently. Our network includes small farmers, FPOs, processors, and large traders.",
    icon: "Network",
  },
  {
    title: "Market Knowledge",
    description: "Real-time intelligence on prices, seasonal trends, crop forecasts, and demand signals. We monitor APMC markets daily and track international commodity movements.",
    icon: "Brain",
  },
  {
    title: "Negotiation Expertise",
    description: "Our volume relationships and market positioning give us leverage that individual buyers cannot match. We secure better terms because we bring consistent business.",
    icon: "Target",
  },
  {
    title: "Trust & Transparency",
    description: "Every transaction is documented, every quality claim is verified, and every dispute is resolved fairly. Our reputation is built on 17 years of honest dealing.",
    icon: "Shield",
  },
  {
    title: "Speed & Reliability",
    description: "From inquiry to delivery, we move fast. Our established processes and local presence mean we can execute transactions in days, not weeks.",
    icon: "Zap",
  },
]

export const tradeRoutes = [
  {
    from: "Rajkot, Gujarat",
    to: "Mundra Port",
    commodity: "Groundnut, Cotton",
    distance: "180 km",
    time: "4-5 hours",
  },
  {
    from: "Rajkot, Gujarat",
    to: "Kandla Port",
    commodity: "Cumin, Fennel",
    distance: "220 km",
    time: "5-6 hours",
  },
  {
    from: "Rajasthan",
    to: "Rajkot, Gujarat",
    commodity: "Cumin, Fennel, Moong",
    distance: "400-600 km",
    time: "8-12 hours",
  },
  {
    from: "Maharashtra",
    to: "Mundra Port",
    commodity: "Tur, Cotton",
    distance: "500-700 km",
    time: "10-14 hours",
  },
  {
    from: "Madhya Pradesh",
    to: "Rajkot, Gujarat",
    commodity: "Urad, Chana, Sesame",
    distance: "600-800 km",
    time: "12-16 hours",
  },
]

export const caseStudies = [
  {
    id: "1",
    title: "Export-Grade Cumin Procurement for Middle Eastern Buyer",
    client: "Al-Rashid Spices LLC, Dubai",
    commodity: "Cumin",
    challenge: "The client required 50 MT of export-grade cumin with specific volatile oil content (min 3.5%) and color specifications. Previous suppliers had inconsistent quality, leading to rejected shipments and financial losses.",
    solution: "We identified 3 verified suppliers in Gujarat's Unjha market, conducted pre-shipment sampling and laboratory testing, and negotiated favorable terms including quality guarantees and penalty clauses for non-compliance.",
    result: "100% quality acceptance rate, 15% cost reduction compared to previous sourcing, and establishment of a recurring quarterly supply contract. The client has since expanded procurement to fennel and sesame through our network.",
    slug: "cumin-export-middle-east",
  },
  {
    id: "2",
    title: "Groundnut Supply Chain for Oil Mill Expansion",
    client: "Shree Krishna Oil Mills, Maharashtra",
    commodity: "Groundnut",
    challenge: "The oil mill was expanding capacity from 50 MT/day to 150 MT/day and needed reliable supply of 3,000 MT groundnut kernels annually. Direct farm procurement was proving inconsistent in quality and quantity.",
    solution: "We structured a multi-supplier arrangement across Gujarat's Saurashtra region, implementing a rotating procurement schedule aligned with harvest cycles. Quality parameters were standardized, and warehouse facilities were coordinated near Rajkot APMC.",
    result: "Consistent supply of 250 MT/month with 98% quality compliance. The mill achieved 12% reduction in raw material costs through optimized procurement timing and reduced wastage. Expanded to sesame procurement within 6 months.",
    slug: "groundnut-oil-mill-expansion",
  },
  {
    id: "3",
    title: "Cotton Export Facilitation for Bangladesh Textile Mill",
    client: "Dhaka Textile Industries Ltd.",
    commodity: "Cotton",
    challenge: "First-time import of Indian cotton required navigating complex documentation, quality certification, and logistics. The client needed 100 bales of Shankar-6 with specific staple length and micronaire requirements.",
    solution: "We managed the entire export process: supplier identification in Gujarat's cotton belt, pre-shipment quality testing, APEDA registration, phytosanitary certification, container booking, and customs clearance coordination.",
    result: "Seamless first import completed within 21 days from order placement. Quality matched specifications exactly, and the client placed a follow-up order for 500 bales. Established a trusted long-term supply relationship.",
    slug: "cotton-export-bangladesh",
  },
]
