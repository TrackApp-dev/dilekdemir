import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ArrowRightIcon } from "@/components/graphics/Icons";
import { services, type Service } from "@/lib/content/services";

export function ServicesSection({
  items = services,
  showAllLink = false,
  tone = "white",
}: {
  items?: Service[];
  showAllLink?: boolean;
  tone?: "white" | "default" | "soft";
}) {
  return (
    <Section id="hizmetler" tone={tone}>
      <SectionHeading
        eyebrow="Hizmetler"
        title="Size uygun psikolojik danışmanlık sürecini keşfedin"
        description="Her danışmanlık süreci; yaşanan güçlükler, bireysel ihtiyaçlar ve görüşmelerde birlikte belirlenen hedefler doğrultusunda şekillenir."
      />

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2">
        {items.map((service, index) => (
          <Reveal key={service.slug} delay={(index % 2) * 0.07}>
            <ServiceCard service={service} className="h-full" />
          </Reveal>
        ))}
      </div>

      {showAllLink ? (
        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <Button href="/hizmetler" variant="secondary" size="lg">
              Tüm Hizmetleri Gör
              <ArrowRightIcon className="size-[18px] transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>
      ) : null}
    </Section>
  );
}
