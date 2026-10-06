import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CalendlyInline } from "@/components/appointment/CalendlyInline";
import { CalendlyPopupButton } from "@/components/appointment/CalendlyPopupButton";
import { CheckIcon, ClockIcon, MailIcon, PhoneIcon } from "@/components/graphics/Icons";
import { siteConfig } from "@/lib/site";

const expectations = [
  "İlk görüşme bir tanışmadır; hemen bir sürece başlamak zorunda değilsiniz.",
  "Çocuk ve ergen danışmanlığında ilk görüşme genellikle yalnızca ebeveynlerle yapılır.",
  "Görüşmenin sonunda nasıl ilerleyebileceğimizi birlikte değerlendiririz.",
];

export function AppointmentSection() {
  const { calendly, contact, hoursHuman } = siteConfig;
  const calendlyReady = calendly.enabled && Boolean(calendly.url);

  return (
    <Section id="randevu" tone="soft">
      <SectionHeading
        eyebrow="Randevu"
        title="Ön görüşme için uygun bir zaman seçin"
        description="Randevu almak bir taahhüt değildir. Önce tanışalım, sizi dinleyeyim; devamına birlikte karar veririz."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
        <div className="space-y-6">
          <Reveal>
            <Card>
              <h3 className="font-display text-lg font-semibold">
                İlk görüşmede sizi ne bekliyor?
              </h3>
              <ul className="mt-5 space-y-3.5">
                {expectations.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                    <CheckIcon
                      className="mt-0.5 size-4 shrink-0 text-sage-500"
                      strokeWidth={2.2}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card>
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
                <ClockIcon className="size-5 text-sage-500" />
                Çalışma saatleri
              </h3>
              <dl className="mt-5 space-y-3">
                {hoursHuman.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-4 border-b border-sage-100 pb-3 text-sm last:border-0 last:pb-0"
                  >
                    <dt className="text-ink-soft">{row.label}</dt>
                    <dd className="font-medium text-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          </Reveal>

          <Reveal delay={0.16}>
            <Card tone="accent">
              <h3 className="font-display text-lg font-semibold text-white">
                Takvimden seçmek yerine konuşmayı mı tercih edersiniz?
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-sage-100">
                Sorularınızı doğrudan iletmek isterseniz telefon ya da e-posta ile
                de ulaşabilirsiniz.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={`tel:${contact.phoneHref}`} variant="white" size="sm">
                  <PhoneIcon className="size-4" />
                  Ara
                </Button>
                <Button href={`mailto:${contact.email}`} variant="onDark" size="sm">
                  <MailIcon className="size-4" />
                  E-posta Gönder
                </Button>
              </div>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          {calendlyReady ? (
            <CalendlyInline url={calendly.url} />
          ) : (
            <Card className="flex h-full min-h-[26rem] flex-col items-center justify-center text-center">
              <h3 className="font-display text-xl font-semibold">
                Online randevu takvimi çok yakında
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
                Şimdilik randevu taleplerinizi telefon veya e-posta ile
                iletebilirsiniz. En kısa sürede size dönüş yapılır.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href={`tel:${contact.phoneHref}`}>
                  <PhoneIcon className="size-4" />
                  {contact.phone}
                </Button>
                <Button href={`mailto:${contact.email}`} variant="secondary">
                  E-posta Gönder
                </Button>
              </div>
            </Card>
          )}
        </Reveal>
      </div>
    </Section>
  );
}

/**
 * Sayfa aralarında kullanılan, baskı hissi yaratmayan yumuşak dönüşüm alanı.
 */
export function AppointmentCta() {
  const { calendly } = siteConfig;
  const calendlyReady = calendly.enabled && Boolean(calendly.url);

  return (
    <section className="bg-sage-50">
      <div className="container-page py-16 sm:py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-sage-700 px-8 py-14 text-center sm:px-14 lg:py-20">
            <div
              aria-hidden
              className="absolute inset-0 opacity-90"
              style={{
                backgroundImage:
                  "radial-gradient(36rem 20rem at 15% 0%, rgba(127,175,154,0.55), transparent 60%), radial-gradient(30rem 18rem at 88% 100%, rgba(184,219,201,0.35), transparent 62%)",
              }}
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl leading-tight font-semibold text-balance text-white sm:text-4xl">
                Emin olmasanız bile, konuşmakla başlayabiliriz
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-sage-100">
                Doğru zamanı beklemek yerine bir ön görüşme yapmak çoğu zaman en
                kolay ilk adımdır. Karar her aşamada sizindir.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/randevu" variant="white" size="lg">
                  Randevu Al
                </Button>
                {calendlyReady ? (
                  <CalendlyPopupButton url={calendly.url} variant="onDark" size="lg">
                    Takvimi Hızlıca Aç
                  </CalendlyPopupButton>
                ) : (
                  <Button href="/iletisim" variant="onDark" size="lg">
                    İletişime Geç
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
