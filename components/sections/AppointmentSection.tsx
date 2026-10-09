import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/graphics/Icons";
import { hasPhone, locationLabel, serviceAreaLabel, siteConfig } from "@/lib/site";

const expectations = [
  "İlk görüşme bir tanışmadır; hemen bir sürece başlamak zorunda değilsiniz.",
  "Çocuklarla yürütülen süreçlerde ilk görüşme genellikle yalnızca ebeveynlerle yapılır.",
  "Görüşmenin sonunda nasıl ilerleyebileceğimizi birlikte değerlendiririz.",
];

export function AppointmentSection() {
  const { contact, hoursHuman } = siteConfig;

  return (
    <Section id="randevu" tone="soft">
      <SectionHeading
        eyebrow="Randevu"
        title="Nasıl ilerliyoruz?"
        description="İlk görüşme öncesinde bilmeniz gerekenler ve randevu talebinizde paylaşmanız yeterli olan bilgiler."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
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
              <h3 className="font-display text-lg font-semibold">
                Randevu talebinizde paylaşmanız yeterli
              </h3>
              <ul className="mt-5 space-y-3.5">
                {[
                  "Görüşmenin kimin için planlandığı (çocuk, ergen, yetişkin ya da ebeveyn görüşmesi)",
                  "Kısaca başvuru nedeniniz",
                  "Yüz yüze mi, online mı tercih ettiğiniz",
                  "Size uygun gün ve saat aralıkları",
                ].map((item) => (
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
        </div>

        <div className="space-y-6">
          <Reveal delay={0.1}>
            <Card tone="accent">
              <h3 className="font-display text-lg font-semibold text-white">
                Randevu talebi oluşturun
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-sage-100">
                Talebinizi ilettikten sonra en kısa sürede size dönüş yapılır.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button href={`mailto:${contact.email}`} variant="white">
                  <MailIcon className="size-4" />
                  E-posta Gönder
                </Button>
                {hasPhone ? (
                  <Button href={`tel:${contact.phoneHref}`} variant="onDark">
                    <PhoneIcon className="size-4" />
                    {contact.phone}
                  </Button>
                ) : null}
              </div>
              <p className="mt-5 text-xs break-words text-sage-100/90">{contact.email}</p>
            </Card>
          </Reveal>

          <Reveal delay={0.16}>
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

              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-sage-50 p-5">
                <MapPinIcon className="mt-0.5 size-4 shrink-0 text-sage-500" />
                <p className="text-sm leading-relaxed text-ink-soft">
                  Yüz yüze görüşmeler <strong className="font-medium text-ink">{serviceAreaLabel}</strong>{" "}
                  ilçelerinde yapılmaktadır ({locationLabel}). Online görüşme de
                  mümkündür.
                </p>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/**
 * Sayfa aralarında kullanılan, baskı hissi yaratmayan yumuşak dönüşüm alanı.
 */
export function AppointmentCta() {
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
                  <ArrowRightIcon className="size-[18px] transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button href="/iletisim" variant="onDark" size="lg">
                  İletişime Geç
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
