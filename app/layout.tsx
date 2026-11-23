import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orva Networks | Enterprise Network Infrastructure & Cybersecurity",
  description:
    "Orva Networks Pvt. Ltd. (Est. 2008, Bangalore) architects, deploys, and defends mission-critical infrastructure for India's leading aerospace, defense, public sector, and enterprise organizations.",
  keywords: [
    "Orva Networks",
    "Enterprise Networking Bangalore",
    "Cybersecurity NAC DNS Shield",
    "Industrial IT OT SCADA",
    "Campus Wi-Fi 6E",
    "Defense Network Infrastructure",
  ],
  authors: [{ name: "Orva Networks Private Limited" }],
  openGraph: {
    title: "Orva Networks | Enterprise Network Infrastructure & Cybersecurity",
    description:
      "Engineered for Resilience. Protected by Intelligence. Mission-critical network solutions for enterprise, defense, and industrial facilities.",
    url: "https://www.orvanetworks.com",
    siteName: "Orva Networks",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orva Networks | Enterprise Network Infrastructure & Cybersecurity",
    description:
      "Mission-critical network solutions for enterprise, defense, and industrial facilities.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#070C14] text-slate-100 selection:bg-[#00C875] selection:text-[#070C14]">
        {/* Skip to Content Accessibility Link (WCAG 2.4.1) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#00C875] focus:text-[#070C14] focus:rounded-md focus:font-bold focus:shadow-lg focus:outline-2 focus:outline-[#00E585]"
        >
          Skip to main content
        </a>

        {/* Global Navigation Header */}
        <Header />

        {/* Main Landmark */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
