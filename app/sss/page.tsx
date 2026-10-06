import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { FaqSection } from "@/components/sections/FaqSection";
import { AppointmentCta } from "@/components/sections/AppointmentSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqItems } from "@/lib/content/faq";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Sık Sorulan Sorular",
  description:
    "İlk görüşme, seans süresi, online görüşme, gizlilik ve yaş aralıkları hakkında en sık sorulan soruların yanıtları.",
  path: "/sss",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={graph(
          faqSchema(faqItems),
          breadcrumbSchema([{ name: "Sık Sorulan Sorular", path: "/sss" }])
        )}
      />

      <PageHero
        eyebrow="S.S.S."
        title="Sık sorulan sorular"
        description="İlk adımı atmadan önce merak edilenleri burada topladım. Aradığınız yanıtı bulamazsanız bana yazmanız yeterli."
        breadcrumbs={[{ name: "Sık Sorulan Sorular", href: "/sss" }]}
      />

      <FaqSection items={faqItems} tone="white" withHeading={false} />
      <AppointmentCta />
    </>
  );
}
