import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { HeroVisual } from "@/components/graphics/HeroVisual";
import { AppointmentCta } from "@/components/sections/AppointmentSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { BookIcon, CheckIcon, SparkleIcon } from "@/components/graphics/Icons";
import { about } from "@/lib/content/about";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, personSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Hakkımda",
  description:
    "Psikolojik Danışman Dilek Demir'in eğitim geçmişi, çalışma alanları, danışmanlık yaklaşımı ve mesleki değerleri.",
  path: "/hakkimda",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={graph(
          personSchema(),
          breadcrumbSchema([{ name: "Hakkımda", path: "/hakkimda" }])
        )}
      />

      <PageHero
        eyebrow="Hakkımda"
        title={about.headline}
        description="Çocuklarla, ergenlerle ve yetişkinlerle çalışan bir psikolojik danışmanım. Aşağıda mesleki geçmişimi ve çalışma anlayışımı bulabilirsiniz."
        breadcrumbs={[{ name: "Hakkımda", href: "/hakkimda" }]}
      />

      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <div className="space-y-5">
              {about.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph.slice(0, 20)} delay={index * 0.05}>
                  <p className="text-lg leading-relaxed text-ink-soft">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 space-y-6">
              <Reveal>
                <h2 className="font-display text-2xl font-semibold">Yaklaşımım</h2>
              </Reveal>
              {about.approach.map((item, index) => (
                <Reveal key={item.title} delay={0.06 + index * 0.06}>
                  <div className="flex gap-4 rounded-3xl border border-sage-200/80 bg-sage-50 p-6">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white text-sage-700 shadow-soft">
                      <SparkleIcon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 leading-relaxed text-ink-soft">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal direction="none">
              {/* Danışman fotoğrafı eklendiğinde: <HeroVisual photo={{ src: "/dilek-demir.jpg", alt: "Dilek Demir" }} /> */}
              <HeroVisual />
            </Reveal>

            <Reveal delay={0.08}>
              <Card className="mt-10">
                <h2 className="flex items-center gap-2 font-display text-sm font-semibold tracking-[0.12em] text-ink-muted uppercase">
                  <BookIcon className="size-4 text-sage-500" />
                  Eğitim
                </h2>
                <ul className="mt-4 space-y-4">
                  {about.education.map((item) => (
                    <li key={item.title}>
                      <p className="font-medium text-ink">{item.title}</p>
                      <p className="mt-0.5 text-sm text-ink-muted">{item.org}</p>
                    </li>
                  ))}
                </ul>

                <h2 className="mt-8 font-display text-sm font-semibold tracking-[0.12em] text-ink-muted uppercase">
                  Eğitim ve Sertifikalar
                </h2>
                <ul className="mt-4 space-y-3">
                  {about.trainings.map((item) => (
                    <li key={item.title} className="flex gap-3 text-sm text-ink-soft">
                      <CheckIcon
                        className="mt-0.5 size-4 shrink-0 text-sage-500"
                        strokeWidth={2.2}
                      />
                      <span>
                        {item.title}
                        {item.org ? (
                          <span className="block text-ink-muted">{item.org}</span>
                        ) : null}
                      </span>
                    </li>
                  ))}
                </ul>

                <h2 className="mt-8 font-display text-sm font-semibold tracking-[0.12em] text-ink-muted uppercase">
                  Çalışma Alanları
                </h2>
                <div className="mt-4 space-y-5">
                  {about.workAreas.map((group) => (
                    <div key={group.title}>
                      <h3 className="font-display text-base font-semibold">
                        {group.title}
                      </h3>
                      <ul className="mt-2.5 space-y-2">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                          >
                            <span
                              aria-hidden
                              className="mt-2 size-1.5 shrink-0 rounded-full bg-sage-400"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Mesleki değerlerim
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Bu dört ilke, her görüşmenin çerçevesini oluşturur.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {about.values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.06}>
              <Card interactive className="h-full">
                <h3 className="font-display text-lg font-semibold">{value.title}</h3>
                <p className="mt-2.5 leading-relaxed text-ink-soft">{value.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <AppointmentCta />
    </>
  );
}
