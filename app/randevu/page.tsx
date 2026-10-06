import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { AppointmentSection } from "@/components/sections/AppointmentSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { featuredFaqItems } from "@/lib/content/faq";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Randevu Al",
  description:
    "Çocuk, ergen, ebeveyn ve aile danışmanlığı için ön görüşme randevusu oluşturun. Yüz yüze ve online görüşme seçenekleri mevcuttur.",
  path: "/randevu",
});

export default function AppointmentPage() {
  return (
    <>
      <JsonLd
        data={graph(
          faqSchema(featuredFaqItems),
          breadcrumbSchema([{ name: "Randevu", path: "/randevu" }])
        )}
      />

      <PageHero
        eyebrow="Randevu"
        title="Bir ön görüşme ile başlayalım"
        description="Takvimden size uygun bir zaman seçebilir ya da doğrudan iletişime geçebilirsiniz. İlk görüşme, birlikte çalışıp çalışmayacağımıza karar vermeniz içindir."
        breadcrumbs={[{ name: "Randevu", href: "/randevu" }]}
      />

      <AppointmentSection />
      <FaqSection
        items={featuredFaqItems}
        tone="white"
        title="Randevu öncesi merak edilenler"
        description="Görüşme öncesinde en sık sorulan sorular."
      />
    </>
  );
}
