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
    "Çocuk, ergen, yetişkin ve ebeveyn danışmanlığı için ön görüşme randevusu oluşturun. Gebze ve Tuzla'da yüz yüze, ayrıca online görüşme seçeneği.",
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
        title="Randevu talebi oluşturun"
        description="Randevu talebinizi e-posta ile iletebilirsiniz. İlk görüşme, birlikte çalışıp çalışmayacağımıza karar vermeniz içindir; bir süreç başlatma taahhüdü anlamına gelmez."
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
