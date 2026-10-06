import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FaqSection } from "@/components/sections/FaqSection";
import { AppointmentCta } from "@/components/sections/AppointmentSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { featuredServices } from "@/lib/content/services";
import { featuredFaqItems } from "@/lib/content/faq";
import { faqSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Dilek Demir | Çocuk, Ergen ve Aile Psikolojik Danışmanı",
  description:
    "İstanbul Üniversitesi-Cerrahpaşa PDR mezunu Dilek Demir ile çocuk, ergen, ebeveyn ve aile danışmanlığı. Bilimsel temelli, gizlilik esaslı ve aile odaklı psikolojik destek.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={graph(faqSchema(featuredFaqItems))} />
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <ServicesSection items={featuredServices} showAllLink tone="white" />
      <ProcessSection />
      <BlogPreview />
      <FaqSection items={featuredFaqItems} tone="default" />
      <AppointmentCta />
      <ContactSection tone="white" />
    </>
  );
}
