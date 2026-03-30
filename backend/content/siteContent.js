module.exports = {
  homeHeroContent: {
    image: "media/homeHero.png",
    title: "Invest in everything",
    description:
      "Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.",
    ctaLabel: "Sign up for free",
  },
  homeStatsContent: {
    title: "Trust with confidence",
    sections: [
      {
        title: "Customer-first always",
        description:
          "Build a platform investors can trust with transparent pricing, reliable execution, and long-term product thinking.",
      },
      {
        title: "No spam or gimmicks",
        description:
          "Keep the experience calm and credible. No growth hacks disguised as product value, just focused tools that respect the user.",
      },
      {
        title: "Ecosystem-led growth",
        description:
          "A SaaS-grade investing product should feel extensible, with partner services, insights, and workflows that grow with users over time.",
      },
      {
        title: "Do better with money",
        description:
          "The goal is not only trade execution but also better financial decision-making through thoughtful product design and education.",
      },
    ],
    visual: "media/trust.png",
    actions: [
      { label: "Explore our products", href: "/product" },
      { label: "See pricing", href: "/pricing" },
    ],
    logosImage: "media/pressLogos.png",
  },
  homePricingContent: {
    title: "Unbeatable pricing",
    description:
      "Transparent plans, predictable fees, and clear value communication that feels production-ready instead of promotional.",
    cta: { label: "See pricing", href: "/pricing" },
    badges: [
      {
        image: "media/pricing0.svg",
        alt: "Free account opening",
        label: "Free account opening",
      },
      {
        image: "media/pricing0.svg",
        alt: "Free equity delivery",
        label: "Free equity delivery and direct mutual funds",
      },
      {
        image: "media/intradayTrades.svg",
        alt: "Intraday and F&O",
        label: "Intraday and F&O",
      },
    ],
  },
  openAccountContent: {
    title: "Open a Stock Platform account",
    description:
      "Modern web experiences, fast onboarding, and a cleaner path from discovery to activation.",
    ctaLabel: "Sign up for free",
  },
  aboutTeamContent: {
    title: "People",
    members: [
      {
        name: "Muskan Kawadkar",
        role: "Founder, Product Engineer",
        image: "media/nithinKamath.jpg",
        bio: [
          "Muskan is building Stock Platform as a modern full-stack investing product with a stronger SaaS mindset around reliability, usability, and iteration speed.",
          "The product direction focuses on bringing together onboarding, portfolio workflows, market simulation, and account access into one cohesive platform.",
          "This project is evolving from a portfolio build into a more production-minded application with better structure, validation, and operational readiness.",
        ],
        links: [
          { label: "Home", href: "/" },
          { label: "Products", href: "/product" },
          { label: "Support", href: "/support" },
        ],
      },
    ],
  },
  productsHeroContent: {
    title: "Stock Platform Products",
    subtitle: "Sleek, modern, and intuitive investing experiences",
    calloutLabel: "View pricing",
    calloutHref: "/pricing",
  },
  productsContent: [
    {
      layout: "left",
      imageURL: "media/kite.png",
      productName: "Trading Workspace",
      productDescription:
        "A fast primary workspace for market tracking, charts, orders, and portfolio review across desktop and mobile.",
      links: [
        { label: "Open dashboard", href: "/signup" },
        { label: "Learn more", href: "/support" },
      ],
      stores: ["googlePlay", "appStore"],
    },
    {
      layout: "right",
      imageURL: "media/console.png",
      productName: "Portfolio Console",
      productDescription:
        "A reporting and account intelligence layer for funds, performance visibility, and user-level operational insight.",
      links: [{ label: "Learn more", href: "/support" }],
    },
    {
      layout: "left",
      imageURL: "media/coin.png",
      productName: "Mutual Fund Experience",
      productDescription:
        "A direct investing surface designed for long-term users who want a simpler, lower-friction path into wealth products.",
      links: [{ label: "Explore funds", href: "/pricing" }],
      stores: ["googlePlay", "appStore"],
    },
    {
      layout: "right",
      imageURL: "media/kiteconnect.png",
      productName: "Platform API",
      productDescription:
        "An API-ready layer for extending the product into partner tools, integrations, and future developer workflows.",
      links: [{ label: "API roadmap", href: "/support" }],
    },
    {
      layout: "left",
      imageURL: "media/varsity.png",
      productName: "Learning Hub",
      productDescription:
        "A mobile-first educational experience that helps users understand investing concepts in smaller, approachable lessons.",
      links: [{ label: "Start learning", href: "/lab" }],
    },
  ],
  universeContent: {
    intro:
      "Want to know more about our technology stack? Use this section as a dynamic catalog of adjacent platform experiences and partner surfaces.",
    introLabel: "Product updates",
    introHref: "/support",
    title: "The Stock Platform Universe",
    description:
      "Extend your investing experience with connected tools, research surfaces, and account-adjacent workflows.",
    partners: [
      {
        image: "media/zerodhaFundhouse.png",
        alt: "Fundhouse",
        sizeClass: "universe-logo-sm",
        description:
          "An asset management style experience built around simple long-term investment products.",
      },
      {
        image: "media/sensibullLogo.svg",
        alt: "Options analytics",
        sizeClass: "universe-logo-md",
        description:
          "A strategy-led options surface for analysis, monitoring, and structured decision support.",
      },
      {
        image: "media/goldenpiLogo.png",
        alt: "Research platform",
        sizeClass: "universe-logo-sm",
        description:
          "A research-heavy product layer with richer market and sector context for serious users.",
      },
      {
        image: "media/streakLogo.png",
        alt: "Systematic trading",
        sizeClass: "universe-logo-sm",
        description:
          "A no-code style workflow for strategy building, testing, and repeatable trading routines.",
      },
      {
        image: "media/smallcaseLogo.png",
        alt: "Thematic investing",
        sizeClass: "universe-logo-md",
        description:
          "Basket-based investing for users who prefer themes, models, and curated exposure.",
      },
      {
        image: "media/dittoLogo.png",
        alt: "Insurance advisory",
        sizeClass: "universe-logo-xs",
        description:
          "Adjacent financial guidance products that can complement an investing platform over time.",
      },
    ],
    ctaLabel: "Sign up for free",
  },
  supportContent: {
    hero: {
      title: "Support Portal",
      ticketBadge: "My Tickets",
      searchPlaceholder:
        "Search help topics like account opening, portfolio reports, password reset, or API access",
    },
    announcements: [
      "Password reset flow is now OTP-based with single-use expiry handling.",
      "Market Lab is available as a live simulated product experience in the landing app.",
    ],
    quickLinks: [
      "Tracking account opening",
      "Track segment activation",
      "Intraday margins",
      "Kite user manual",
      "Learn how to create a ticket",
    ],
    categories: [
      {
        icon: "fa-plus-circle",
        title: "Account Opening",
        items: [
          "Resident individual",
          "Minor",
          "Non Resident Indian",
          "Company, Partnership, HUF and LLP",
          "Glossary",
        ],
      },
      {
        icon: "fa-user",
        title: "Your Account",
        items: [
          "Your profile",
          "Account modification",
          "Client Master Report (CMR) and Depository Participant (DP)",
          "Nomination",
          "Transfer and conversion of securities",
        ],
      },
      {
        icon: "fa-google-wallet",
        title: "Trading Platform",
        items: [
          "IPO",
          "Trading FAQs",
          "Margin Trading Facility (MTF) and margins",
          "Charts and orders",
          "Alerts and nudges",
          "General",
        ],
      },
      {
        icon: "fa-inr",
        title: "Funds",
        items: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
      },
      {
        icon: "fa-connectdevelop",
        title: "Console",
        items: [
          "Portfolio",
          "Corporate actions",
          "Funds statement",
          "Reports",
          "Profile",
          "Segments",
        ],
      },
      {
        icon: "fa-check-circle",
        title: "Coin",
        items: [
          "Mutual funds",
          "National Pension Scheme (NPS)",
          "Fixed Deposit (FD)",
          "Features on Coin",
          "Payments and orders",
          "General",
        ],
      },
    ],
  },
  pricingHeroContent: {
    title: "Charges",
    subtitle: "List of all charges and taxes",
    highlights: [
      {
        image: "media/pricing0.svg",
        alt: "Free equity delivery",
        title: "Free equity delivery",
        description:
          "All equity delivery investments are zero brokerage for a cleaner long-term investing experience.",
      },
      {
        image: "media/intradayTrades.svg",
        alt: "Intraday and F&O trades",
        title: "Intraday and F&O trades",
        description:
          "Flat platform pricing makes the product easier to understand and easier to sell like a real SaaS offering.",
      },
      {
        image: "media/pricing0.svg",
        alt: "Direct mutual funds",
        title: "Free direct MF",
        description:
          "Direct mutual fund access remains simple, transparent, and easier to communicate to users.",
      },
    ],
  },
  pricingChargesContent: {
    leftColumn: [
      {
        title: "Securities/Commodities transaction tax",
        paragraphs: [
          "Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on the selling side when trading intraday or on F&O.",
          "In practice, STT/CTT can often exceed the brokerage itself, so users should understand the total cost of execution.",
        ],
      },
      {
        title: "Transaction/Turnover Charges",
        paragraphs: [
          "Charged by exchanges like NSE, BSE, and MCX on the value of transactions.",
          "Exchange turnover rules change over time, so this section is now modeled as data and can be updated without rewriting the component.",
        ],
      },
      {
        title: "Call & trade",
        paragraphs: [
          "Additional charges may apply to dealer-assisted orders and manual intervention workflows.",
        ],
      },
      {
        title: "Stamp charges",
        paragraphs: [
          "Stamp charges are levied by the Government of India as per applicable rules for exchange and depository transactions.",
        ],
      },
      {
        title: "NRI brokerage charges",
        list: [
          "For a non-PIS account, 0.5% or Rs. 50 per executed order for equity and F&O, whichever is lower.",
          "For a PIS account, 0.5% or Rs. 200 per executed order for equity, whichever is lower.",
          "Yearly AMC charges may apply in addition to transactional costs.",
        ],
      },
      {
        title: "Account with debit balance",
        paragraphs: [
          "If the account is in debit balance, higher executed-order charges can apply depending on the platform policy.",
        ],
      },
      {
        title: "Charges for Investor's Protection Fund Trust (IPFT) by NSE",
        list: [
          "Equity and futures charges can apply per crore of traded value plus GST.",
          "Options and currency charges are calculated differently depending on turnover or premium value.",
        ],
      },
      {
        title: "Margin Trading Facility (MTF)",
        list: [
          "MTF interest may apply daily on the funded amount.",
          "MTF brokerage and pledge charges can apply based on order and ISIN activity.",
        ],
      },
    ],
    rightColumn: [
      {
        title: "GST",
        paragraphs: [
          "Tax levied by the government on rendered services, usually calculated on brokerage and certain market charges.",
        ],
      },
      {
        title: "SEBI Charges",
        paragraphs: [
          "Regulatory charges are levied by the Securities and Exchange Board of India and may change over time.",
        ],
      },
      {
        title: "DP (Depository participant) charges",
        paragraphs: [
          "DP charges are commonly applied when stocks are sold, irrespective of quantity, and can vary by account type.",
        ],
      },
      {
        title: "Pledging charges",
        paragraphs: [
          "Charges may apply per pledge request per ISIN depending on the depository and broker setup.",
        ],
      },
      {
        title: "AMC (Account maintenance charges)",
        paragraphs: [
          "BSDA and non-BSDA accounts can have different annual maintenance structures depending on holding value and plan type.",
        ],
        links: [
          { label: "BSDA details", href: "/support" },
          { label: "AMC details", href: "/support" },
        ],
      },
      {
        title: "Corporate action order charges",
        paragraphs: [
          "Charges may apply for OFS, buyback, takeover, or delisting orders placed through account management tools.",
        ],
      },
      {
        title: "Off-market transfer charges",
        paragraphs: ["Off-market transfer requests can incur per-transaction fees."],
      },
      {
        title: "Physical CMR request",
        paragraphs: [
          "The first CMR request may be free, while later requests can include document and courier fees.",
        ],
      },
      {
        title: "Payment gateway charges",
        paragraphs: [
          "Payment gateway charges can apply for certain deposit methods and are often waived for UPI flows.",
        ],
      },
      {
        title: "Delayed payment charges",
        paragraphs: [
          "Interest may be levied on debit balances in the trading account based on the configured policy.",
        ],
        links: [{ label: "Learn more", href: "/support" }],
      },
      {
        title: "Trading using 3-in-1 account with block functionality",
        list: [
          "Delivery and MTF brokerage can be percentage-based per executed order.",
          "Intraday brokerage can use a separate lower percentage-based structure.",
        ],
      },
    ],
    disclaimer:
      "Brokerage and statutory charges are subject to regulation, market updates, and the exact plan structure offered by the platform. For a production SaaS version, this content should ultimately be sourced from a CMS or admin-managed pricing system.",
  },
};
