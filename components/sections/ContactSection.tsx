import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import {
  ArrowUpRightIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/graphics/Icons";
import { hasPhone, locationLabel, serviceAreaLabel, siteConfig } from "@/lib/site";

export function ContactSection({ tone = "white" }: { tone?: "white" | "default" | "soft" }) {
  const { contact, hoursHuman } = siteConfig;

  const channels = [
    {
      icon: MailIcon,
      label: "E-posta",
      value: contact.email,
      href: `mailto:${contact.email}`,
      hint: "Randevu talepleri ve sorularınız için en hızlı yol.",
    },
    ...(hasPhone
      ? [
          {
            icon: PhoneIcon,
            label: "Telefon",
            value: contact.phone,
            href: `tel:${contact.phoneHref}`,
            hint: "Görüşme saatleri dışında sesli mesaj bırakabilirsiniz.",
          },
        ]
      : []),
    {
      icon: MapPinIcon,
      label: "Konum",
      value: locationLabel,
      href: contact.mapsLink,
      hint: `Yüz yüze görüşmeler ${serviceAreaLabel} ilçelerinde; online görüşme de mümkündür.`,
      external: true,
    },
  ];

  return (
    <Section id="iletisim" tone={tone}>
      <SectionHeading
        eyebrow="İletişim"
        title="Bana ulaşın"
        description={
          hasPhone
            ? "Sorularınız için çekinmeden yazabilir veya arayabilirsiniz. Ulaşmak, bir sürece başlamak anlamına gelmez."
            : "Sorularınız için çekinmeden yazabilirsiniz. Ulaşmak, bir sürece başlamak anlamına gelmez."
        }
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          {channels.map((channel, index) => (
            <Reveal key={channel.label} delay={index * 0.07}>
              <a
                href={channel.href}
                {..."external" in channel && channel.external
                  ? { target: "_blank" as const, rel: "noopener noreferrer" }
                  : {}}
                className="group flex items-start gap-4 rounded-3xl border border-sage-200/80 bg-white p-6 shadow-soft transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-sage-300 hover:shadow-lift"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-sage-100 text-sage-700 transition-colors duration-300 group-hover:bg-sage-600 group-hover:text-white">
                  <channel.icon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold tracking-[0.12em] text-ink-muted uppercase">
                    {channel.label}
                  </span>
                  <span className="mt-1 block font-medium break-words text-ink">
                    {channel.value}
                  </span>
                  <span className="mt-1.5 block text-sm text-ink-muted">{channel.hint}</span>
                </span>
                <ArrowUpRightIcon className="size-5 shrink-0 text-sage-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sage-600" />
              </a>
            </Reveal>
          ))}

          <Reveal delay={0.24}>
            <Card>
              <h3 className="flex items-center gap-2 font-display text-base font-semibold">
                <ClockIcon className="size-5 text-sage-500" />
                Çalışma saatleri
              </h3>
              <dl className="mt-4 space-y-2.5 text-sm">
                {hoursHuman.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-4">
                    <dt className="text-ink-soft">{row.label}</dt>
                    <dd className="font-medium text-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="h-full overflow-hidden rounded-3xl border border-sage-200 bg-white shadow-soft">
            <iframe
              title={`${siteConfig.name} ofis konumu — Google Haritalar`}
              src={contact.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[24rem] w-full border-0 lg:min-h-[32rem]"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
