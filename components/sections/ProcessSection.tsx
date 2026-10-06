import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CheckIcon, ClockIcon } from "@/components/graphics/Icons";
import { processSteps } from "@/lib/content/process";

export function ProcessSection({ tone = "soft" }: { tone?: "soft" | "white" | "default" }) {
  return (
    <Section id="surec" tone={tone}>
      <SectionHeading
        eyebrow="Süreç"
        title="Süreç nasıl işliyor?"
        description="Danışmanlık belirsiz bir yolculuk değildir. Baştan sona ne yaşayacağınızı bilmeniz, sürecin en önemli parçalarından biridir."
      />

      <ol className="relative mt-16 grid gap-10 lg:grid-cols-4 lg:gap-7">
        {/* Masaüstünde adımları birleştiren yatay çizgi */}
        <span
          aria-hidden
          className="absolute top-7 right-8 left-8 hidden h-px bg-gradient-to-r from-sage-200 via-sage-300 to-sage-200 lg:block"
        />

        {processSteps.map((step, index) => (
          <li key={step.step} className="relative pl-[4.5rem] lg:pl-0">
            {/* Mobilde adımları birleştiren dikey çizgi */}
            {index < processSteps.length - 1 ? (
              <span
                aria-hidden
                className="absolute top-16 bottom-[-2.5rem] left-[1.75rem] w-px bg-sage-200 lg:hidden"
              />
            ) : null}

            <Reveal delay={index * 0.08}>
              <span className="absolute top-0 left-0 flex size-14 items-center justify-center rounded-2xl border border-sage-200 bg-white font-display text-lg font-semibold text-sage-700 shadow-soft lg:static lg:size-14 lg:rounded-full">
                {step.step}
              </span>

              <div className="lg:mt-7">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-sage-700 ring-1 ring-sage-200 ring-inset">
                    <ClockIcon className="size-3.5" />
                    {step.duration}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex gap-2.5 text-sm text-ink-soft">
                      <CheckIcon
                        className="mt-0.5 size-4 shrink-0 text-sage-500"
                        strokeWidth={2.2}
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
