import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/graphics/HeroVisual";
import { ArrowRightIcon, CheckIcon } from "@/components/graphics/Icons";

const highlights = [
  "Bilişsel Davranışçı Terapi (BDT) odaklı çalışma",
  "Çocuk Merkezli Oyun Terapisi",
  "Yüz yüze ve online görüşme",
];

/**
 * Ekranın ilk görünen bölümü. Giriş animasyonu bilinçli olarak CSS ile
 * yapılır (`animate-rise`): JavaScript yüklenmeden boyandığı için LCP
 * gecikmez ve JS kapalıyken de içerik görünür kalır.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-sage-50 bg-mesh">
      <div className="container-page relative grid items-center gap-16 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:py-28">
        <div>
          <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-sage-200 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-sage-700 uppercase">
            <span aria-hidden className="size-1.5 rounded-full bg-sage-400" />
            Çocuk · Ergen · Yetişkin · Ebeveyn Danışmanlığı
          </p>

          <h1 className="mt-6 font-display text-[2.15rem] leading-[1.14] font-semibold text-balance sm:text-[2.75rem] sm:leading-[1.12] lg:text-[2.9rem]">
            Kendinizi anlamaya, yaşamınıza{" "}
            <span className="relative inline-block">
              <span className="relative z-10">yeni bir gözle</span>
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-1 z-0 h-2.5 rounded-full bg-sage-200/80"
              />
            </span>{" "}
            bakmaya alan açın
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Çocukların, ergenlerin ve yetişkinlerin yaşamlarında karşılaştıkları
            güçlükleri anlamlandırabilecekleri; duygularını, düşüncelerini ve
            ihtiyaçlarını keşfedebilecekleri güvenli bir psikolojik danışmanlık
            süreci sunuyorum.
          </p>

          <div
            className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "180ms" }}
          >
            <Button href="/randevu" size="lg">
              Randevu Al
              <ArrowRightIcon className="size-[18px] transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button href="/hizmetler" variant="secondary" size="lg">
              Hizmetleri İncele
            </Button>
          </div>

          <ul
            className="animate-rise mt-10 flex flex-col gap-3 border-t border-sage-200 pt-8"
            style={{ animationDelay: "240ms" }}
          >
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-ink-soft">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-sage-200 text-sage-700">
                  <CheckIcon className="size-3" strokeWidth={2.4} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-rise pb-8 lg:pb-0" style={{ animationDelay: "140ms" }}>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
