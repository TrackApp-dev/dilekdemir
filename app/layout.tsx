import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCta } from "@/components/layout/StickyCta";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { JsonLd } from "@/components/ui/JsonLd";
import { graph, localBusinessSchema, personSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import "./globals.css";

/**
 * Tek bir değişken font ailesi kullanılır: Türkçe karakterler için "latin-ext"
 * alt kümesi zorunludur ve her ek aile, ilk boyamayı geciktiren ek font
 * dosyaları anlamına gelir. Başlıklar aynı aileden daha sıkı harf aralığı ve
 * yüksek ağırlıkla ayrışır.
 */
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.role} — Çocuk, Ergen ve Aile Danışmanlığı`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "çocuk psikolojik danışmanı",
    "ergen danışmanlığı",
    "aile danışmanlığı",
    "ebeveyn danışmanlığı",
    "sınav kaygısı",
    "okul uyum süreci",
    "İstanbul psikolojik danışman",
    "PDR",
    "Dilek Demir",
  ],
  category: "health",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: `${siteConfig.name} — ${siteConfig.role}`,
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#F8FAF9",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        {/* JavaScript devre dışıyken animasyonlu bölümlerin görünür kalmasını garanti eder */}
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-dvh antialiased">
        <JsonLd data={graph(websiteSchema(), localBusinessSchema(), personSchema())} />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-sage-700 focus:px-5 focus:py-3 focus:font-semibold focus:text-white"
        >
          İçeriğe geç
        </a>

        <MotionProvider>
          <Header />
          <main id="main" className="pt-20">
            {children}
          </main>
          <Footer />
          <StickyCta />
        </MotionProvider>
      </body>
    </html>
  );
}
