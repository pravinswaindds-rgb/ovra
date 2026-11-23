"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { ServiceCard, type ServiceItem } from "./ServiceCard";

const allServices: ServiceItem[] = [
  // 1. Networking Solutions
  {
    id: "networking-solutions",
    title: "Networking Solutions",
    description:
      "Robust networking solutions including structured cabling, switches, smart routers, and network optimization tools to ensure stability, performance, and scalability.",
    category: "Networking",
    href: "/solutions/enterprise-networking",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },

  // 2. Telephony Solutions
  {
    id: "telephony-solutions",
    title: "Telephony Solutions",
    description:
      "Modern IP-based telephony systems that improve communication efficiency with smart call routing, voicemail, and CRM integration – ideal for dynamic, multi-location teams.",
    category: "Collaboration",
    href: "/solutions/wireless-smart-campus",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },

  // 3. Wireless Solutions
  {
    id: "wireless-solutions",
    title: "Wireless Solutions",
    description:
      "Seamless, enterprise-grade wireless connectivity across offices, campuses, and remote sites. High-speed, secure, and scalable to meet growing demands.",
    category: "Networking",
    href: "/solutions/wireless-smart-campus",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },

  // 4. Security Solution
  {
    id: "security-solution",
    title: "Security Solution",
    description:
      "Advanced network and endpoint security solutions including firewall protection, threat detection, access control, and DNS-level defense to safeguard your digital infrastructure.",
    category: "Security",
    href: "/solutions/cybersecurity",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },

  // 5. Storage Solutions
  {
    id: "storage-solutions",
    title: "Storage Solutions",
    description:
      "Reliable, scalable, and high-performance storage systems for all business sizes. We provide secure data storage, backup, and disaster recovery solutions for both on-premise and hybrid environments.",
    category: "Networking",
    href: "/solutions/enterprise-networking",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },

  // 6. Server Solutions
  {
    id: "server-solutions",
    title: "Server solutions",
    description:
      "We provide reliable, scalable, and secure server infrastructure tailored to your business needs. From on-premise deployments to cloud-integrated setups, Orva ensures optimal performance and data security.",
    category: "Networking",
    href: "/solutions/enterprise-networking",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },

  // 7. DNS Filtering & Protection
  {
    id: "dns-filtering",
    title: "DNS Filtering & Protection",
    description:
      "Secure your network from malware, phishing, and unsafe websites with AI-powered DNS filtering. Control web access and enhance browsing safety across all endpoints.",
    category: "Security",
    href: "/solutions/cybersecurity",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },

  // 8. Industries We Serve
  {
    id: "industries-serve",
    title: "Industries We Serve",
    description:
      "From smart cities to healthcare, Orva delivers intelligent DNS and NAC security for diverse environments. Our solutions ensure device authentication, policy enforcement, and seamless network control.",
    category: "Networking",
    href: "/#industries",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },

  // 9. OT Solutions
  {
    id: "ot-solutions",
    title: "OT Solutions",
    description:
      "Orva bridges the gap between IT and industrial operations with secure, scalable OT solutions. We help industries monitor, control, and optimize critical systems with real-time insights and robust architecture.",
    category: "IoT & OT",
    href: "/solutions/industrial-utility-it",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },

  // 10. Cloud Dashboard & Remote Management
  {
    id: "cloud-dashboard",
    title: "Cloud Dashboard & Remote Management",
    description:
      "Monitor and manage your entire IT environment remotely via a unified cloud dashboard. Perfect for multi-location businesses and proactive IT teams seeking centralized visibility.",
    category: "Cloud & AI",
    href: "/solutions/enterprise-networking",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },

  // 11. AI & Automation
  {
    id: "ai-automation",
    title: "AI & Automation",
    description:
      "Maximize operational efficiency with Orva's AI-powered automation solutions. We streamline business and IT workflows, reduce manual effort, and accelerate productivity through intelligent automation.",
    category: "Cloud & AI",
    href: "/solutions/enterprise-networking",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },

  // 12. Network Access Control (NAC)
  {
    id: "nac",
    title: "Network Access Control (NAC)",
    description:
      "Authenticate, monitor, and manage every device on your network. Our NAC solutions enforce security policies and ensure only authorized access to your infrastructure.",
    category: "Security",
    href: "/solutions/cybersecurity",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    ),
  },

  // 13. Our AI Capabilities Include
  {
    id: "ai-capabilities",
    title: "Our AI Capabilities Include",
    description:
      "Predictive analytics & fault detection, Real-time monitoring and intelligent alerts, AI-driven process automation ensuring zero-downtime operations.",
    category: "Cloud & AI",
    href: "/solutions/enterprise-networking",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },

  // 14. AI Solutions
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description:
      "Harness the power of artificial intelligence with Orva to drive smarter decisions, predictive insights, and intelligent business outcomes. Our AI systems analyze, learn, and adapt.",
    category: "Cloud & AI",
    href: "/solutions/enterprise-networking",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },

  // 15. Analytics & Reporting
  {
    id: "analytics-reporting",
    title: "Analytics & Reporting",
    description:
      "Track performance, monitor usage, and identify trends with real-time dashboards and detailed reports. Orva's analytics suite empowers you with data to optimize operations.",
    category: "Cloud & AI",
    href: "/solutions/enterprise-networking",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },

  // 16. Custom Industry Solutions
  {
    id: "custom-industry-solutions",
    title: "Custom Industry Solutions",
    description:
      "Every industry has unique needs. That's why we deliver tailor-made IoT deployments for sectors like healthcare, manufacturing, logistics, agriculture, and retail.",
    category: "IoT & OT",
    href: "/#industries",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },

  // 17. Cloud & Edge Computing
  {
    id: "cloud-edge-computing",
    title: "Cloud & Edge Computing",
    description:
      "Combine the power of the cloud with the speed of edge computing. Orva enables real-time processing at the edge while maintaining centralized control and storage in the cloud.",
    category: "Cloud & AI",
    href: "/solutions/enterprise-networking",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },

  // 18. End-to-End Security
  {
    id: "end-to-end-security",
    title: "End-to-End Security",
    description:
      "Security is baked into every layer of our IoT solutions-from device-level encryption and identity management to secure cloud gateways and real-time threat monitoring.",
    category: "Security",
    href: "/solutions/cybersecurity",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },

  // 19. AI-Driven Data Insights
  {
    id: "ai-data-insights",
    title: "AI-Driven Data Insights",
    description:
      "We use AI and machine learning to convert raw IoT data into powerful business insights. Our systems detect patterns, predict outcomes, and enable automated decision-making.",
    category: "Cloud & AI",
    href: "/solutions/enterprise-networking",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },

  // 20. Smart Device Integration
  {
    id: "smart-device-integration",
    title: "Smart Device Integration",
    description:
      "Orva integrates a wide range of IoT-enabled devices-sensors, actuators, controllers, and smart appliances-into a unified system with real-time data flow and interoperability.",
    category: "IoT & OT",
    href: "/solutions/industrial-utility-it",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },

  // 21. IoT Network Design
  {
    id: "iot-network-design",
    title: "IoT Network Design",
    description:
      "We design secure, scalable, and high-performance IoT networks that serve as the foundation for seamless device connectivity, low-latency communication, and future readiness.",
    category: "IoT & OT",
    href: "/solutions/industrial-utility-it",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },

  // 22. Video Conferencing
  {
    id: "video-conferencing",
    title: "Video conferencing",
    description:
      "HD video conferencing systems with intelligent cameras, noise-cancelling microphones, and real-time collaboration tools-perfect for hybrid and remote teams.",
    category: "Collaboration",
    href: "/solutions/wireless-smart-campus",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },

  // 23. Audio-Visual (AV)
  {
    id: "audio-visual",
    title: "Audio-Visual (AV)",
    description:
      "Professional AV setups for conference rooms, training areas, and public displays. Solutions include high-quality sound systems, projectors, and interactive screens.",
    category: "Collaboration",
    href: "/solutions/wireless-smart-campus",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    ),
  },
];

const BUFFER = 3;

export function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(BUFFER);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);

  // Drag interaction states
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  // Auto-slide pause & resume control
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive cards: 3 on desktop, 2 on tablet, 1 on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Seamless infinite loop buffer: clone 3 cards at start & end for bidirectional looping
  const carouselItems = useMemo(() => {
    return [
      ...allServices.slice(-BUFFER),
      ...allServices,
      ...allServices.slice(0, BUFFER),
    ];
  }, []);

  // Automatic slide: advances one card by one card every 3 seconds
  // Resumes automatically whenever user finishes hover or drag interaction
  useEffect(() => {
    if (isPaused || isDragging) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, isDragging]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  // Helper to start auto-resume timer so animation NEVER stays permanently frozen
  const scheduleAutoResume = (delay = 2000) => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, delay);
  };

  // Hover handlers on the carousel track only (not the whole section)
  const handleMouseEnter = () => {
    setIsPaused(true);
    // Even if cursor rests on a card, resume auto-sliding after 2.5s
    scheduleAutoResume(2500);
  };

  const handleMouseMove = () => {
    // Keep user's active reading window fresh, then auto-resume
    if (isPaused && !isDragging) {
      scheduleAutoResume(2500);
    }
  };

  const handleMouseLeave = () => {
    // User finished hovering by moving cursor away -> resume animation immediately!
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    setIsPaused(false);
  };

  // When transition ends at cloned boundaries, seamlessly snap without transition
  const handleTransitionEnd = () => {
    if (currentIndex >= allServices.length + BUFFER) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - allServices.length);
    } else if (currentIndex < BUFFER) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + allServices.length);
    }
  };

  // Pointer drag event handlers (supports both mouse drag and touch swipe)
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    setIsPaused(true);
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
    setHasMoved(false);
    setIsTransitioning(false);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX;
    if (Math.abs(deltaX) > 6) {
      setHasMoved(true);
    }
    setDragOffset(deltaX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}

    setIsDragging(false);
    setIsTransitioning(true);

    const threshold = 50;
    if (dragOffset < -threshold) {
      // Dragged left -> slide to next card
      setCurrentIndex((prev) => prev + 1);
    } else if (dragOffset > threshold) {
      // Dragged right -> slide to previous card
      setCurrentIndex((prev) => prev - 1);
    }
    setDragOffset(0);

    // User finished dragging -> resume the sliding animation!
    scheduleAutoResume(1500);
  };

  const handlePointerCancel = (e: React.PointerEvent) => {
    if (!isDragging) return;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
    setIsDragging(false);
    setIsTransitioning(true);
    setDragOffset(0);
    scheduleAutoResume(1500);
  };

  // Prevent link navigation if the user dragged/swiped rather than clicking
  const handleClickCapture = (e: React.MouseEvent) => {
    if (hasMoved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section
      id="services"
      className="bg-[#F8FAFC] py-20 lg:py-28 text-slate-900 border-b border-slate-200 overflow-hidden select-none"
      aria-roledescription="carousel"
      aria-label="Our Service Carousel"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00875A] block mb-2">
            OUR PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Our Service
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
            End-to-End Network Infrastructure, Cybersecurity, and IT Management Solutions
          </p>

          {/* Animated Carousel Indicator Dots (Placed right below subtitle per user screenshot) */}
          <div
            className="flex items-center justify-center gap-1.5 sm:gap-2 py-2 flex-wrap max-w-xl mx-auto"
            role="tablist"
            aria-label="Service carousel slides"
          >
            {allServices.map((service, idx) => {
              const activeServiceIndex =
                (currentIndex - BUFFER + allServices.length) % allServices.length;
              const isActive = idx === activeServiceIndex;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentIndex(BUFFER + idx);
                    scheduleAutoResume(2500);
                  }}
                  className={`h-2 transition-all duration-500 ease-out rounded-full ${
                    isActive
                      ? "w-7 sm:w-8 bg-[#00C875] shadow-xs"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}: ${service.title}`}
                  aria-selected={isActive}
                  role="tab"
                />
              );
            })}
          </div>
        </div>

        {/* Draggable Automatic 3-Card Carousel Track */}
        <div
          className={`relative overflow-hidden py-3 touch-pan-y ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onClickCapture={handleClickCapture}
        >
          <div
            className={`flex will-change-transform ${
              isTransitioning
                ? "transition-transform duration-700 ease-in-out"
                : "transition-none"
            }`}
            style={{
              transform: `translateX(calc(-${(currentIndex * 100) / visibleCount}% + ${dragOffset}px))`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {carouselItems.map((service, idx) => (
              <div
                key={`${service.id}-${idx}`}
                className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3 sm:px-4"
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
