import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRightIcon, CheckIcon } from "@/components/graphics/Icons";
import { about } from "@/lib/content/about";

export function AboutPreview() {
  return (
    <Section id="hakkimda" tone="default">
      <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sage-200 bg-white/70 px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] text-sage-700 uppercase">
              <span aria-hidden className="size-1.5 rounded-full bg-sage-400" />
              Hakkımda
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl">
              {about.headline}
            </h2>
          </Reveal>

          <div className="mt-6 space-y-4">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={0.1 + index * 0.05}>
                <p className="leading-relaxed text-ink-soft">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25}>
            <div className="mt-8">
              <Button href="/hakkimda" variant="secondary">
                Daha Fazla Bilgi
                <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal delay={0.08} className="sm:col-span-2">
            <Card>
              <h3 className="font-display text-sm font-semibold tracking-[0.12em] text-ink-muted uppercase">
                Eğitim
              </h3>
              <ul className="mt-4 space-y-4">
                {about.education.map((item) => (
                  <li key={item.title}>
                    <p className="font-medium text-ink">{item.title}</p>
                    <p className="mt-0.5 text-sm text-ink-muted">{item.org}</p>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 font-display text-sm font-semibold tracking-[0.12em] text-ink-muted uppercase">
                Uzmanlık Alanları
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {about.expertise.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-sage-200 bg-sage-50 px-3.5 py-1.5 text-sm text-sage-800"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          {about.values.map((value, index) => (
            <Reveal key={value.title} delay={0.12 + index * 0.06}>
              <Card interactive className="h-full">
                <span className="flex size-9 items-center justify-center rounded-xl bg-sage-100 text-sage-700">
                  <CheckIcon className="size-4" strokeWidth={2.2} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {value.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
