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
import { services } from "@/lib/content/services";
import { featuredFaqItems } from "@/lib/content/faq";
import { faqSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Dilek Demir | Çocuk, Ergen ve Yetişkin Psikolojik Danışmanı",
  description:
    "Psikolojik Danışman Dilek Demir ile çocuk, ergen, yetişkin ve ebeveyn danışmanlığı. Bilişsel Davranışçı Terapi ve Çocuk Merkezli Oyun Terapisi temelli, gizlilik esaslı psikolojik destek. Gebze, Tuzla ve online.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={graph(faqSchema(featuredFaqItems))} />
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <ServicesSection items={services} tone="white" />
      <ProcessSection />
      <BlogPreview />
      <FaqSection items={featuredFaqItems} tone="default" />
      <AppointmentCta />
      <ContactSection tone="white" />
    </>
  );
}
