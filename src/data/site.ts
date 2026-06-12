export const siteConfig = {
  name: "Mahalaxmi Agri Commodities",
  tagline: "The Trusted Network Behind India's Agricultural Trade",
  description: "India's premier agricultural commodity brokerage connecting Indian export buyers with verified domestic suppliers across spices, pulses, oil seeds, and cotton. Based in Rajkot, Gujarat since 2002.",
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
  established: 2002,
  employees: "3-10",
  businessType: "Commodity Brokerage (India Domestic)",
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
    value: 23,
    suffix: "+",
    description: "Deep market expertise since 2002",
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
    description: "We identify and verify Indian suppliers matching your exact commodity, quantity, and quality requirements from our extensive network.",
    icon: "Search",
  },
  {
    number: "02",
    title: "Quality Matching",
    description: "Rigorous quality assessment including sample evaluation. The exporter's own lab tester handles testing—we ensure the right match.",
    icon: "CheckCircle",
  },
  {
    number: "03",
    title: "Negotiation Support",
    description: "Leverage our market intelligence and volume relationships to secure optimal pricing and favorable terms.",
    icon: "Handshake",
  },
  {
    number: "04",
    title: "Transaction Facilitation",
    description: "End-to-end coordination including contract structuring, documentation, and logistics planning.",
    icon: "FileCheck",
  },
  {
    number: "05",
    title: "Successful Trade",
    description: "Delivery confirmation, quality acceptance, and ongoing relationship management for repeat business.",
    icon: "Trophy",
  },
]

export const whyChooseUs = [
  {
    title: "Deep Relationships",
    description: "Built over 23 years in Rajkot's agricultural markets, our relationships with Indian suppliers span generations.",
    icon: "Users",
  },
  {
    title: "Network Access",
    description: "Access to 500+ verified Indian suppliers across 15 states that would take years to build independently.",
    icon: "Network",
  },
  {
    title: "Market Knowledge",
    description: "Real-time intelligence on Indian APMC markets, seasonal trends, crop forecasts, and export demand signals.",
    icon: "Brain",
  },
  {
    title: "Negotiation Expertise",
    description: "Our volume relationships and market positioning give us leverage that individual buyers cannot match.",
    icon: "Target",
  },
  {
    title: "Trust & Transparency",
    description: "Every transaction is documented, every quality claim is verified. Our reputation is built on 23 years of honest dealing.",
    icon: "Shield",
  },
  {
    title: "Speed & Reliability",
    description: "From inquiry to delivery, we move fast. Our established processes mean we can execute transactions in days, not weeks.",
    icon: "Zap",
  },
]

export const tradeRoutes = [
  {
    from: "Rajkot, Gujarat",
    to: "Mundra Port",
    commodity: "Cotton, Spices",
    distance: "180 km",
    time: "4-5 hours",
  },
  {
    from: "Rajkot, Gujarat",
    to: "Kandla Port",
    commodity: "Cumin, Fennel, Coriander",
    distance: "220 km",
    time: "5-6 hours",
  },
  {
    from: "Rajasthan",
    to: "Rajkot, Gujarat",
    commodity: "Cumin, Fennel, Fenugreek, Nigella, Mung",
    distance: "400-600 km",
    time: "8-12 hours",
  },
  {
    from: "Maharashtra",
    to: "Mundra Port",
    commodity: "Cotton, Chickpeas",
    distance: "500-700 km",
    time: "10-14 hours",
  },
  {
    from: "Madhya Pradesh",
    to: "Rajkot, Gujarat",
    commodity: "Chickpeas, Black Sesame, White Sesame",
    distance: "600-800 km",
    time: "12-16 hours",
  },
]

export const caseStudies = [
  {
    id: "1",
    title: "Export-Grade Cumin Procurement for Middle Eastern Buyer",
    client: "Indian Exporter shipping to Dubai",
    commodity: "Cumin",
    challenge: "The Indian exporter required 50 MT of export-grade cumin with specific volatile oil content (min 3.5%). Previous suppliers had inconsistent quality, leading to rejected shipments.",
    solution: "We identified 3 verified suppliers in Gujarat's Unjha market, facilitated sample evaluation by the exporter's lab tester, and negotiated favorable terms with quality guarantees.",
    result: "100% quality acceptance rate, 15% cost reduction compared to previous sourcing, and establishment of a recurring quarterly supply contract. Expanded to coriander and fennel procurement.",
    slug: "cumin-export-middle-east",
  },
  {
    id: "2",
    title: "Chickpea Supply Chain for Domestic Processor",
    client: "Pulse Processing Unit, Maharashtra",
    commodity: "Chickpeas",
    challenge: "The processor needed reliable supply of 2,000 MT chickpeas annually from Madhya Pradesh and Rajasthan. Direct farm procurement was inconsistent in quality and quantity.",
    solution: "We structured a multi-supplier arrangement across Madhya Pradesh, implementing a rotating procurement schedule aligned with harvest cycles. Quality parameters were standardized.",
    result: "Consistent supply of 200 MT/month with 98% quality compliance. The processor achieved 12% reduction in raw material costs through optimized procurement timing.",
    slug: "chickpea-processor-maharashtra",
  },
  {
    id: "3",
    title: "Cotton Export Facilitation via Indian Exporter",
    client: "Indian Cotton Exporter shipping to Bangladesh",
    commodity: "Cotton",
    challenge: "First-time export of Shankar-6 cotton required navigating complex documentation and quality certification for the Bangladesh textile mill.",
    solution: "We managed supplier identification in Gujarat's cotton belt, coordinated with the exporter's lab tester for quality testing, and facilitated APEDA documentation and logistics.",
    result: "Seamless first export completed within 21 days. Quality matched specifications exactly, and the exporter placed a follow-up order for 500 bales. Established long-term supply relationship.",
    slug: "cotton-export-bangladesh",
  },
]
