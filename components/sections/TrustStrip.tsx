import { Reveal } from "@/components/ui/Reveal";
import { BookIcon, ClockIcon, ShieldIcon, SparkleIcon } from "@/components/graphics/Icons";

const items = [
  {
    icon: ShieldIcon,
    title: "Güvenli ve Etik Bir Alan",
    description:
      "Gizlilik ve mesleki etik ilkeler doğrultusunda yürütülen bir süreç.",
  },
  {
    icon: BookIcon,
    title: "Bilimsel Temelli Yaklaşım",
    description:
      "Güncel bilimsel bilgi ve kanıta dayalı yaklaşımlardan yararlanılır.",
  },
  {
    icon: SparkleIcon,
    title: "Size Özgü Bir Süreç",
    description:
      "İhtiyaçlarınız, deneyimleriniz ve hedefleriniz doğrultusunda birlikte şekillenir.",
  },
  {
    icon: ClockIcon,
    title: "İş Birliğine Dayalı",
    description:
      "Hedeflerin birlikte belirlendiği, açık ve aktif katılıma dayalı bir çalışma süreci.",
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
