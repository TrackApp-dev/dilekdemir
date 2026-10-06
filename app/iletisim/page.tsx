import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { AppointmentCta } from "@/components/sections/AppointmentSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "İletişim",
  description:
    "Telefon, e-posta ve ofis adresi ile Dilek Demir'e ulaşın. Çalışma saatleri ve konum bilgileri.",
  path: "/iletisim",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graph(
          localBusinessSchema(),
          breadcrumbSchema([{ name: "İletişim", path: "/iletisim" }])
        )}
      />

      <PageHero
        eyebrow="İletişim"
        title="Konuşmak için buradayım"
        description="Aklınızdaki soruyu sormak için bir sürece başlamış olmanız gerekmez. Uygun olan kanaldan bana ulaşabilirsiniz."
        breadcrumbs={[{ name: "İletişim", href: "/iletisim" }]}
      />

      <ContactSection tone="white" />
      <AppointmentCta />
    </>
  );
}
