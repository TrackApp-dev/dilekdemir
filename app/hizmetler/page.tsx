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
    "Çocuk danışmanlığı, ergen danışmanlığı, ebeveyn ve aile danışmanlığı, okul uyum süreçleri, sınav kaygısı ve duygusal gelişim destek programı.",
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
        title="Çocuk, ergen ve aile için danışmanlık alanları"
        description="Her başvuru kendine özgüdür. Aşağıdaki başlıklar çalışma alanlarımı gösterir; sizin için hangisinin uygun olduğuna ilk görüşmede birlikte karar veririz."
        breadcrumbs={[{ name: "Hizmetler", href: "/hizmetler" }]}
      />

      <ServicesSection tone="white" />
      <ProcessSection tone="soft" />
      <AppointmentCta />
    </>
  );
}
