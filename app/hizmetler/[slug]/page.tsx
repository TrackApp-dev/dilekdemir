import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AppointmentCta } from "@/components/sections/AppointmentSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { ArrowUpRightIcon, CheckIcon, ServiceIcon, SparkleIcon } from "@/components/graphics/Icons";
import { getService, services } from "@/lib/content/services";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, serviceSchema } from "@/lib/schema";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return buildMetadata({ title: "Hizmet bulunamadı", description: "", noIndex: true });

  return buildMetadata({
    title: service.title,
    description: service.summary,
    path: `/hizmetler/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={graph(
          serviceSchema(service.slug, service.title, service.summary),
          breadcrumbSchema([
            { name: "Hizmetler", path: "/hizmetler" },
            { name: service.title, path: `/hizmetler/${service.slug}` },
          ])
        )}
      />

      <PageHero
        eyebrow="Psikolojik Danışmanlık"
        title={service.title}
        description={service.summary}
        breadcrumbs={[
          { name: "Hizmetler", href: "/hizmetler" },
          { name: service.title, href: `/hizmetler/${service.slug}` },
        ]}
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/randevu" size="lg">
            Ön Görüşme İçin Randevu Al
          </Button>
          <Button href="/iletisim" variant="secondary" size="lg">
            Soru Sor
          </Button>
        </div>
      </PageHero>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="flex size-14 items-center justify-center rounded-2xl bg-sage-100 text-sage-700">
                <ServiceIcon name={service.icon} className="size-7" />
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="mt-7 text-lg leading-relaxed text-ink-soft">{service.intro}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-12 font-display text-2xl font-semibold">
                Bu başlıkta sık çalıştığımız konular
              </h2>
            </Reveal>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.topics.map((topic, index) => (
                <Reveal as="li" key={topic} delay={0.12 + index * 0.04}>
                  <div className="flex h-full items-start gap-3 rounded-2xl border border-sage-200/80 bg-sage-50 px-5 py-4">
                    <CheckIcon
                      className="mt-0.5 size-4 shrink-0 text-sage-600"
                      strokeWidth={2.2}
                    />
                    <span className="text-sm leading-relaxed text-ink-soft">{topic}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal delay={0.08}>
              <Card>
                <h2 className="flex items-center gap-2 font-display text-lg font-semibold">
                  <SparkleIcon className="size-5 text-sage-500" />
                  Süreçten ne bekleyebilirsiniz?
                </h2>
                <ul className="mt-5 space-y-3.5">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                      <CheckIcon
                        className="mt-0.5 size-4 shrink-0 text-sage-500"
                        strokeWidth={2.2}
                      />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>

                <Button href="/randevu" className="mt-7 w-full">
                  Randevu Al
                </Button>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>

      <ProcessSection tone="soft" />

      <Section tone="white">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold">Diğer hizmetler</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((other, index) => (
            <Reveal key={other.slug} delay={index * 0.06}>
              <Link
                href={`/hizmetler/${other.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-sage-200/80 bg-sage-50 p-6 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-sage-300 hover:bg-white hover:shadow-lift"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-white text-sage-700 shadow-soft">
                    <ServiceIcon name={other.icon} className="size-5" />
                  </span>
                  <ArrowUpRightIcon className="size-5 text-sage-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sage-600" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{other.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{other.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <AppointmentCta />
    </>
  );
}
