import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { MidCtaBanner } from "@/components/home/MidCtaBanner";
import { WhyPartnerSection } from "@/components/home/WhyPartnerSection";
import { StatsSection } from "@/components/home/StatsSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { BlogNewsSection } from "@/components/home/BlogNewsSection";
import { QuoteAndMapSection } from "@/components/home/QuoteAndMapSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ConsultationCta } from "@/components/home/ConsultationCta";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section: Smart Network Infrastructure for a Smarter World */}
      <HeroSection />

      {/* 2. Client Trust Proof: ISRO, BEL, BHEL, BEML, Cisco, CSC */}
      <TrustMarquee />

      {/* 3. About Us: Test Bed Phase, Scalable Solutions & Strategic Integration */}
      <AboutSection />

      {/* 4. Our Service: DNS Filtering, NAC, OT Solutions & Complete Directory */}
      <ServicesSection />

      {/* 5. Mid-Page Conversion: Let's discuss about how we can help make your business better */}
      <MidCtaBanner />

      {/* 6. Why Partner with Orva Networks? Always-On Intelligence, Future-Ready Security, Scalable Innovation */}
      <WhyPartnerSection />

      {/* 7. Skilled Professionals at Your Service: 200+ Clients, 50+ Experts, 10+ Countries, 90,000+ Projects */}
      <StatsSection />

      {/* 8. Industries We Serve: Manufacturing, Corporate/SMEs, Retail, Healthcare, Logistics, Energy */}
      <IndustriesSection />

      {/* 9. Blog & News: Edge vs. Cloud, Real-World IoT Use Cases, Future-Ready Networking */}
      <BlogNewsSection />

      {/* 10. Request a Free Quote & Bangalore HQ Location Map */}
      <QuoteAndMapSection />

      {/* 11. Frequently Asked Questions: Verified from orvanetworks.com */}
      <FaqSection />

      {/* 12. Pre-Footer "Let's talk" Consultation */}
      <ConsultationCta />
    </>
  );
}
