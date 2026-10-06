import { Reveal } from "@/components/ui/Reveal";
import { BookIcon, ClockIcon, ShieldIcon, SparkleIcon } from "@/components/graphics/Icons";

const items = [
  {
    icon: ShieldIcon,
    title: "Gizlilik esaslı",
    description: "Görüşmelerde paylaşılanlar üçüncü kişilerle paylaşılmaz.",
  },
  {
    icon: BookIcon,
    title: "Bilimsel temelli",
    description: "Yaşa ve gelişim düzeyine uygun, dayanağı olan yöntemler.",
  },
  {
    icon: SparkleIcon,
    title: "Aile odaklı",
    description: "Çocuk tek başına değil, ailesiyle birlikte ele alınır.",
  },
  {
    icon: ClockIcon,
    title: "Şeffaf süreç",
    description: "Çerçeve, süre ve beklentiler ilk görüşmede nettir.",
  },
];

export function TrustStrip() {
  return (
    <section className="border-y border-sage-200 bg-white">
      <h2 className="sr-only">Çalışma ilkelerim</h2>
      <div className="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-14">
        {items.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-sage-100 text-sage-700">
                <item.icon className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
