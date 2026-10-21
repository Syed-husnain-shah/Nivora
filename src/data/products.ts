export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  price: string;
  period: string;
  originalPrice?: string;
  discount?: string;
  mark: string;
  tone: "mint" | "sage" | "pink" | "lime";
  badge: string;
  features: string[];
  highlights: string[];
  deliveryTime: string;
  isDeal?: boolean;
  dealTag?: string;
  faq: { q: string; a: string }[];
}

export interface CategoryInfo {
  name: string;
  slug: string;
  description: string;
  count: number;
  tone: "mint" | "sage" | "pink" | "lime";
  mark: string;
  featuredTools: string[];
}

export const products: Product[] = [
  {
    id: "canva-pro",
    slug: "canva-pro",
    name: "Canva Pro",
    category: "Design",
    description: "Make every idea look its best.",
    longDescription:
      "Unlock millions of premium graphics, stock photos, brand kits, and background removal tools with Canva Pro. Tailored for creators, marketers, and students seeking effortless visual design.",
    price: "₨ 499",
    period: "/ month",
    originalPrice: "₨ 799",
    discount: "38% OFF",
    mark: "Ca",
    tone: "mint",
    badge: "Popular",
    isDeal: true,
    dealTag: "Demo creator deal",
    deliveryTime: "Instant simulated email delivery",
    features: [
      "100M+ premium stock photos, videos, and graphics",
      "One-click background remover and Magic Resize",
      "1TB cloud storage for team assets and brand kits",
      "Scheduled social media publishing support",
    ],
    highlights: [
      "Full access to brand kits & custom fonts",
      "Unlimited premium template library",
      "High-resolution PDF and SVG vector export",
    ],
    faq: [
      {
        q: "How does the demo activation work?",
        a: "In this demo showcase, simulated activation instructions and sample login credentials are provided for test purposes.",
      },
      {
        q: "Is this a recurring subscription in the demo?",
        a: "No actual charges occur. This is a prototype interface illustrating simulated month-to-month plans.",
      },
    ],
  },
  {
    id: "chatgpt-plus",
    slug: "chatgpt-plus",
    name: "ChatGPT Plus",
    category: "AI & Productivity",
    description: "A little more room to think.",
    longDescription:
      "Experience OpenAI's most advanced reasoning models, prioritized peak-hour speed, custom GPTs, and advanced data analysis to accelerate your coding, writing, and research.",
    price: "₨ 1,299",
    period: "/ month",
    originalPrice: "₨ 1,699",
    discount: "24% OFF",
    mark: "✳",
    tone: "sage",
    badge: "Top pick",
    isDeal: true,
    dealTag: "Limited demo rate",
    deliveryTime: "Under 15 minutes (demo showcase)",
    features: [
      "Access to GPT-4o and advanced reasoning models",
      "Browse the web, generate images, and analyze datasets",
      "Priority response speed even during heavy traffic periods",
      "Explore and create tailored custom GPT workflows",
    ],
    highlights: [
      "Faster response times during peak hours",
      "Extended token context and code interpreter",
      "Native multimodal voice & image capabilities",
    ],
    faq: [
      {
        q: "Can I use my personal email for testing?",
        a: "Yes, in a live setup invitations are dispatched to your provided email address. In this demo, sample credentials are listed.",
      },
      {
        q: "What is the demo price tag?",
        a: "The displayed rates reflect simulated pricing for the Nivora prototype showcase.",
      },
    ],
  },
  {
    id: "capcut-pro",
    slug: "capcut-pro",
    name: "CapCut Pro",
    category: "Video & Editing",
    description: "Bring your next story to life.",
    longDescription:
      "Create captivating Reels, TikToks, and YouTube videos with AI auto-captions, 4K 60fps exports, premium transitions, and smooth motion tracking.",
    price: "₨ 699",
    period: "/ month",
    originalPrice: "₨ 999",
    discount: "30% OFF",
    mark: "Cc",
    tone: "pink",
    badge: "",
    isDeal: true,
    dealTag: "Demo bundle candidate",
    deliveryTime: "Instant simulated access",
    features: [
      "AI video upscale, auto-captions, and noise reduction",
      "Exclusive transitions, filters, and dynamic typography",
      "Up to 100GB secure cloud storage for video projects",
      "Export in crystal-clear 4K UHD without watermarks",
    ],
    highlights: [
      "Auto body-framing and background removal",
      "Optical flow smooth slow-motion engine",
      "Multi-platform desktop and mobile sync",
    ],
    faq: [
      {
        q: "Is desktop support included?",
        a: "Yes, CapCut Pro functions across Windows, macOS, and mobile devices.",
      },
      {
        q: "Is there a contract?",
        a: "No contract is needed. Demo plans show flexible monthly renewal examples.",
      },
    ],
  },
  {
    id: "spotify-premium",
    slug: "spotify-premium",
    name: "Spotify Premium",
    category: "Music & Streaming",
    description: "Your day, with a better soundtrack.",
    longDescription:
      "Enjoy ad-free music listening, unlimited song skips, offline song downloads, and high-fidelity 320kbps audio streaming for any mood or occasion.",
    price: "₨ 399",
    period: "/ month",
    originalPrice: "₨ 599",
    discount: "33% OFF",
    mark: "◉",
    tone: "lime",
    badge: "",
    isDeal: true,
    dealTag: "Demo student & individual rate",
    deliveryTime: "Instant simulated invitation",
    features: [
      "Continuous ad-free music across all your devices",
      "Download songs and playlists for offline playback",
      "Very high 320kbps audio quality streaming",
      "Unlimited skips and on-demand track selection",
    ],
    highlights: [
      "Spotify Connect to stream to speakers & consoles",
      "Personalized daily mixes and smart shuffle",
      "Real-time synchronized lyric displays",
    ],
    faq: [
      {
        q: "Do I keep my existing playlists?",
        a: "In a real setup, premium is added directly to your existing account so your library and playlists are preserved.",
      },
      {
        q: "Are family demo options available?",
        a: "Individual demo plans are displayed; family slots can be queried through the contact form.",
      },
    ],
  },
  {
    id: "notion-plus",
    slug: "notion-plus",
    name: "Notion Plus",
    category: "AI & Productivity",
    description: "Connected notes, docs, and projects.",
    longDescription:
      "Centralize your company wiki, personal tasks, database roadmaps, and collaborative project boards with unlimited blocks and file uploads.",
    price: "₨ 549",
    period: "/ month",
    mark: "N",
    tone: "sage",
    badge: "Productive",
    deliveryTime: "Simulated workspace invite",
    features: [
      "Unlimited blocks for teams and individual workspaces",
      "Unlimited file uploads with 30-day page revision history",
      "Invite up to 100 guests to collaborate on individual pages",
      "Advanced database formulas, views, and automations",
    ],
    highlights: [
      "Synced databases across multiple pages",
      "Custom templates and community integrations",
      "Offline caching on mobile and desktop apps",
    ],
    faq: [
      {
        q: "Is Notion AI included?",
        a: "This demo covers the Notion Plus workspace tier; Notion AI add-on is available separately in live offerings.",
      },
    ],
  },
  {
    id: "youtube-premium",
    slug: "youtube-premium",
    name: "YouTube Premium",
    category: "Music & Streaming",
    description: "Ad-free videos, background play, and music.",
    longDescription:
      "Watch YouTube without interruptive ads, keep playback running when your phone screen is locked, and enjoy complete YouTube Music Premium access.",
    price: "₨ 479",
    period: "/ month",
    mark: "▶",
    tone: "pink",
    badge: "Popular",
    deliveryTime: "Simulated family group invite",
    features: [
      "Zero video ads across smart TVs, computers, and phones",
      "Background play while multitasking in other applications",
      "Full YouTube Music app included with offline downloads",
      "Picture-in-picture mode supported natively",
    ],
    highlights: [
      "High bitrate 1080p Premium video streaming",
      "Smart offline downloads based on viewing habits",
      "Queue videos seamlessly across connected displays",
    ],
    faq: [
      {
        q: "Does this require a password change?",
        a: "No, in simulated setup an invitation link is accepted on your Google account.",
      },
    ],
  },
  {
    id: "figma-pro",
    slug: "figma-pro",
    name: "Figma Professional",
    category: "Design",
    description: "Collaborative interface and prototype design.",
    longDescription:
      "Empower your design workflow with unlimited design files, team shared component libraries, dev mode inspection, and realistic interactive prototypes.",
    price: "₨ 849",
    period: "/ month",
    mark: "Fg",
    tone: "mint",
    badge: "Pro",
    deliveryTime: "Simulated team seat assignment",
    features: [
      "Unlimited Figma files and version history logs",
      "Shared team design systems with nested components",
      "Dev Mode for CSS, SwiftUI, and Android XML code handoff",
      "Advanced prototyping with variable states and smart animate",
    ],
    highlights: [
      "Real-time multiplayer canvas collaboration",
      "Extensive plugin and widget ecosystem",
      "Custom permissions and viewer passcontrols",
    ],
    faq: [
      {
        q: "Is FigJam included in this demo tier?",
        a: "Yes, collaborative whiteboard sessions in FigJam are included in the demo tier.",
      },
    ],
  },
  {
    id: "davinci-studio",
    slug: "davinci-studio",
    name: "DaVinci Studio",
    category: "Video & Editing",
    description: "Hollywood-grade color and audio post-production.",
    longDescription:
      "Industry standard color grading, Fairlight audio mixing, and neural engine AI tools for professional video editors and independent filmmakers.",
    price: "₨ 999",
    period: "/ month",
    mark: "Dv",
    tone: "lime",
    badge: "Creator",
    deliveryTime: "Simulated activation key",
    features: [
      "DaVinci Neural Engine AI tools including magic mask & voice isolation",
      "Multi-GPU acceleration and up to 8K 120fps video rendering",
      "Full HDR mastering and Dolby Vision color grading wheels",
      "Stereoscopic 3D post and advanced motion graphics in Fusion",
    ],
    highlights: [
      "Studio noise reduction and lens distortion correction",
      "Fairlight audio editor with up to 2,000 live tracks",
      "Cloud collaboration for remote editorial suites",
    ],
    faq: [
      {
        q: "Is this for Windows or macOS?",
        a: "DaVinci Studio keys support Windows, macOS, and Linux.",
      },
    ],
  },
];

export const categories: CategoryInfo[] = [
  {
    name: "Design",
    slug: "design",
    description:
      "Professional visual graphics, vector illustrations, design libraries, and marketing collateral creators.",
    count: 2,
    tone: "mint",
    mark: "Ca",
    featuredTools: ["Canva Pro", "Figma Professional"],
  },
  {
    name: "AI & Productivity",
    slug: "ai-productivity",
    description:
      "Next-generation artificial intelligence models, workspace documentation, and collaborative task roadmaps.",
    count: 2,
    tone: "sage",
    mark: "✳",
    featuredTools: ["ChatGPT Plus", "Notion Plus"],
  },
  {
    name: "Video & Editing",
    slug: "video-editing",
    description:
      "High-impact social video editors, visual effects plugins, auto-caption generators, and cinematic mastering suites.",
    count: 2,
    tone: "pink",
    mark: "Cc",
    featuredTools: ["CapCut Pro", "DaVinci Studio"],
  },
  {
    name: "Music & Streaming",
    slug: "music-streaming",
    description:
      "Crystal-clear ad-free audio, offline music libraries, background listening, and high-fidelity video streams.",
    count: 2,
    tone: "lime",
    mark: "◉",
    featuredTools: ["Spotify Premium", "YouTube Premium"],
  },
];

export const demoBundles = [
  {
    id: "bundle-creator",
    title: "Creator Starter Suite",
    subtitle: "Canva Pro + CapCut Pro",
    description: "Everything a digital creator needs for social posts, graphics, and short-form video.",
    demoPrice: "₨ 999",
    originalPrice: "₨ 1,798",
    discount: "44% OFF",
    badge: "Most Popular Bundle",
    included: ["Canva Pro monthly demo plan", "CapCut Pro monthly demo plan", "Fast simulated setup"],
    tone: "mint" as const,
  },
  {
    id: "bundle-productivity",
    title: "AI & Workflow Power Pack",
    subtitle: "ChatGPT Plus + Notion Plus",
    description: "Accelerate your daily research, document drafting, coding, and structured task tracking.",
    demoPrice: "₨ 1,649",
    originalPrice: "₨ 2,248",
    discount: "26% OFF",
    badge: "Productivity Favorite",
    included: ["ChatGPT Plus monthly demo access", "Notion Plus workspace demo seat", "Simulated workflow tips"],
    tone: "sage" as const,
  },
  {
    id: "bundle-media",
    title: "Audio & Entertainment Duo",
    subtitle: "Spotify Premium + YouTube Premium",
    description: "Continuous ad-free entertainment on the commute, at your desk, and on TV screens.",
    demoPrice: "₨ 749",
    originalPrice: "₨ 1,078",
    discount: "30% OFF",
    badge: "Weekend Special",
    included: ["Spotify Premium monthly demo plan", "YouTube Premium monthly demo plan", "Ad-free experience"],
    tone: "lime" as const,
  },
];

export const benefits = [
  {
    title: "A little more peace of mind",
    text: "Clear product details and reliable help whenever you need it.",
  },
  {
    title: "Up and running sooner",
    text: "A straightforward order flow, with delivery updates along the way.",
  },
  {
    title: "Real help, close by",
    text: "Questions are welcome. Our support team is here to help you out.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryName: string): Product[] {
  return products.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase(),
  );
}

export function getDeals(): Product[] {
  return products.filter((p) => Boolean(p.isDeal));
}
