import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AppointmentCta } from "@/components/sections/AppointmentSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, serviceSchema } from "@/lib/schema";
import { services } from "@/lib/content/services";

export const metadata: Metadata = buildMetadata({
  title: "Hizmetler",
  description:
    "Çocuklarla, ergenlerle ve yetişkinlerle bireysel psikolojik danışmanlık; ebeveyn görüşmeleri. Çalışma alanları ve görüşme sürecine ilişkin ayrıntılar.",
  path: "/hizmetler",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbSchema([{ name: "Hizmetler", path: "/hizmetler" }]),
          ...services.map((s) => serviceSchema(s.slug, s.title, s.summary))
        )}
      />

      <PageHero
        eyebrow="Hizmetler"
        title="Her süreç, kişiye özgü bir yerden başlar."
        description="Çocuk, ergen ve yetişkinlerle yürüttüğüm psikolojik danışmanlık süreçlerini başvuru nedeni, ihtiyaçlar ve belirlenen hedefler doğrultusunda birlikte şekillendiriyorum. Aşağıda çalışma alanlarımı ve görüşme süreçlerine ilişkin ayrıntıları inceleyebilirsiniz."
        breadcrumbs={[{ name: "Hizmetler", href: "/hizmetler" }]}
      />

      <ServicesSection tone="white" />
      <ProcessSection tone="soft" />
      <AppointmentCta />
    </>
  );
}
