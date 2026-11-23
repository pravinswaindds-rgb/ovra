export interface ServiceDetailItem {
  id: string;
  slug: string;
  aliases?: string[];
  title: string;
  category: "Security" | "Networking" | "Cloud & AI" | "IoT & OT" | "Collaboration";
  tagline: string;
  mainHeadline?: string;
  paragraphs: string[];
  secondaryHeadline?: string;
  secondaryParagraphs?: string[];
  highlightsHeading?: string;
  highlights?: string[];
  conclusion?: string;
  metaDescription: string;
}

export const sidebarServicesList = [
  { name: "Cloud Dashboard & Remote Management", slug: "cloud-dashboard-remote-management" },
  { name: "Network Access Control (NAC)", slug: "network-access-control" },
  { name: "DNS Filtering & Protection", slug: "dns-filtering-protection" },
  { name: "Video conferencing", slug: "video-conferencing" },
  { name: "Audio-Visual (AV)", slug: "audio-visual-av" },
  { name: "Networking Solutions", slug: "networking-solutions" },
  { name: "Telephony Solutions", slug: "telephony-solutions" },
  { name: "Wireless Solutions", slug: "wireless-solutions" },
  { name: "Security Solution", slug: "security-solution" },
  { name: "Storage Solutions", slug: "storage-solutions" },
  { name: "Server solutions", slug: "server-solutions" },
];

export const detailedServices: Record<string, ServiceDetailItem> = {
  // 1. Server solutions (Exact from user screenshot media_1795434100865_0df83591.jpg)
  "server-solutions": {
    id: "server-solutions",
    slug: "server-solutions",
    aliases: ["server-infrastructure", "servers"],
    title: "Server solutions",
    category: "Networking",
    tagline: "High-density compute, on-prem virtualization & cloud-integrated server infrastructure.",
    mainHeadline: "Powering Business Growth with Reliable, Secure, and Scalable Infrastructure",
    paragraphs: [
      "In today's fast-paced digital world, your IT infrastructure is the backbone of your business. At Orva, we design, deploy, and manage advanced Server and Network Infrastructure Solutions that empower enterprises to run smarter, faster, and more securely. From cloud integration and virtualization to network automation and security, we deliver a complete suite of solutions tailored to your operational and performance needs.",
      "Our Server Solutions are built to ensure maximum uptime, data integrity, and scalability, giving you full control over your digital environment. Whether your business runs on-premise, in the cloud, or through a hybrid model, Orva's engineers ensure your infrastructure performs at peak efficiency with proactive management and robust security measures.",
    ],
    secondaryHeadline: "Your Infrastructure, Our Expertise",
    secondaryParagraphs: [
      "From small organizations to large enterprises, Orva helps companies modernize their infrastructure and transition to smart, automated, and future-ready environments.",
      "Whether you're building from scratch or upgrading existing systems, our team ensures your servers, networks, and communication tools operate seamlessly – keeping your business connected, protected, and performing at its best.",
    ],
    conclusion: "Empower your business with Orva's Server Solutions – where reliability meets innovation.",
    metaDescription:
      "Orva Networks provides reliable, scalable, and secure server infrastructure solutions tailored to your enterprise operational and performance needs.",
  },

  // 2. Cloud Dashboard & Remote Management (Exact from user screenshot media_1795434166841_8f3c2e94.jpg)
  "cloud-dashboard-remote-management": {
    id: "cloud-dashboard",
    slug: "cloud-dashboard-remote-management",
    aliases: ["cloud-dashboard", "remote-management"],
    title: "Cloud Dashboard & Remote Management",
    category: "Cloud & AI",
    tagline: "Unified single-pane monitoring and automated control across multi-site enterprise environments.",
    mainHeadline: "Unified Visibility & Control Across Your Entire Infrastructure",
    paragraphs: [
      "Manage your IT ecosystem with confidence through Orva's Cloud Dashboard and Remote Management solutions. Our intelligent platform gives you a unified view of your entire infrastructure – servers, networks, and devices – from anywhere in the world. Whether you manage hundreds of endpoints or multiple branches, our system simplifies your operations through automation and real-time monitoring.",
      "Our engineers design cloud-based control systems that help IT teams maintain uptime, push updates remotely, and troubleshoot issues instantly without on-site intervention. With predictive insights and secure remote access, you can prevent disruptions before they occur.",
    ],
    highlightsHeading: "Key Highlights:",
    highlights: [
      "Centralized monitoring and analytics",
      "Real-time health and performance dashboards",
      "Remote access, control, and troubleshooting",
      "Automated patch management and firmware rollouts",
      "Secure cloud control with data encryption",
    ],
    secondaryParagraphs: [
      "We ensure your cloud management remains efficient, transparent, and scalable. With Orva, businesses experience reduced downtime, faster response times, and a proactive approach to infrastructure maintenance – all while optimizing IT costs and productivity.",
      "In addition to providing centralized control, Orva's Cloud Dashboard delivers predictive analytics and intelligent automation that empower IT teams to act before issues arise. Through AI-driven performance insights, system health reports, and automated alert mechanisms, businesses gain complete visibility into their infrastructure's behavior.",
    ],
    conclusion: "Transform enterprise operations with Orva's Cloud Dashboard – centralized intelligence for continuous uptime.",
    metaDescription:
      "Manage your entire IT ecosystem with confidence through Orva's Cloud Dashboard and Remote Management solutions with unified monitoring and predictive insights.",
  },

  // 3. DNS Filtering & Protection (Exact from user screenshot media_1795434206036_5222c541.jpg)
  "dns-filtering-protection": {
    id: "dns-filtering",
    slug: "dns-filtering-protection",
    aliases: ["dns-filtering", "dns-protection"],
    title: "DNS Filtering & Protection",
    category: "Security",
    tagline: "AI-powered DNS-level defense blocking phishing, ransomware, and web threats before they reach your network.",
    mainHeadline: "Proactive Defense Against Online Threats at the DNS Layer",
    paragraphs: [
      "Your first line of defense against online threats starts with DNS Filtering and Protection. Orva's solution prevents users from reaching dangerous or unwanted websites, blocking malware, phishing attempts, and ransomware attacks before they can cause harm.",
      "Our intelligent DNS filtering technology runs silently in the background, analyzing every request in milliseconds and filtering malicious content. You can set browsing policies, restrict non-work websites, and protect employees on any network – without slowing down performance.",
    ],
    highlightsHeading: "Key Highlights:",
    highlights: [
      "Real-time protection from phishing and malware",
      "Customizable web access control",
      "Cloud-based filtering with global threat intelligence",
      "Detailed user and domain reports",
      "Easy deployment across networks",
    ],
    secondaryParagraphs: [
      "With Orva DNS Protection, your business gains both security and control. It ensures safe internet use, improves employee focus, and provides actionable analytics that empower IT administrators to continuously enhance protection strategies.",
      "In today's digital landscape, DNS-level security is essential for maintaining a resilient and threat-aware network. Orva's DNS Filtering & Protection extends beyond simple blocking – it continuously updates through global threat intelligence feeds and AI-powered analysis to stay ahead of emerging attacks. The platform provides granular visibility into every DNS query, helping administrators identify risky behaviors, track usage patterns, and enforce category-based restrictions across users and departments.",
    ],
    conclusion: "Secure every query with Orva's DNS Filtering & Protection – stopping zero-day threats before they enter your perimeter.",
    metaDescription:
      "Protect your enterprise from malware, phishing, and ransomware attacks with Orva Networks' intelligent AI-powered DNS Filtering and Protection platform.",
  },
};

export const allServiceSlugs = [
  "server-solutions",
  "cloud-dashboard-remote-management",
  "dns-filtering-protection",
  "networking-solutions",
  "telephony-solutions",
  "wireless-solutions",
  "security-solution",
  "storage-solutions",
  "industries-serve",
  "ot-solutions",
  "ai-automation",
  "network-access-control",
  "ai-capabilities",
  "ai-solutions",
  "analytics-reporting",
  "custom-industry-solutions",
  "cloud-edge-computing",
  "end-to-end-security",
  "ai-data-insights",
  "smart-device-integration",
  "iot-network-design",
  "video-conferencing",
  "audio-visual-av",
  "enterprise-networking",
  "cybersecurity",
  "wireless-smart-campus",
  "industrial-utility-it",
];

// Helper function to resolve slug or alias
export function getServiceDetail(slugOrAlias: string): ServiceDetailItem | null {
  const normalized = slugOrAlias.toLowerCase().trim();
  if (detailedServices[normalized]) {
    return detailedServices[normalized];
  }
  for (const item of Object.values(detailedServices)) {
    if (item.aliases?.includes(normalized) || item.id === normalized) {
      return item;
    }
  }
  return null;
}
