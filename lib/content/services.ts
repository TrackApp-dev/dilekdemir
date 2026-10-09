export type ServiceIconName = "child" | "teen" | "adult" | "parent";

export type Service = {
  slug: string;
  title: string;
  /** Kartlarda görünen kısa açıklama */
  summary: string;
  /** Detay sayfası giriş paragrafı */
  intro: string;
  icon: ServiceIconName;
  /** Bu başlıkta sık çalışılan alanlar */
  topics: string[];
  /** Süreç içinde üzerinde durulan noktalar */
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "cocuklarla-psikolojik-danismanlik",
    title: "Çocuklarla Psikolojik Danışmanlık",
    summary:
      "Çocuğun duygu ve ihtiyaçlarını ifade edebilmesine; kaygı, duygu düzenleme, davranışsal güçlükler ve sosyal ilişkiler gibi alanların yaşına ve gelişim dönemine uygun biçimde ele alınmasına yönelik çalışmalar.",
    intro:
      "Çocuklar yaşadıklarını her zaman sözcüklerle anlatmaz; oyunla, çizimle ve davranışla anlatır. Çocuklarla yürüttüğüm görüşmelerde çocuğun gelişim dönemine uygun yöntemlerden, özellikle Çocuk Merkezli Oyun Terapisi yaklaşımından yararlanıyorum. Süreç çocukla sınırlı kalmaz; düzenli ebeveyn görüşmeleriyle birlikte yürütülür.",
    icon: "child",
    topics: [
      "Duyguları tanıma ve ifade etme",
      "Duygu düzenleme becerileri",
      "Kaygı ve korkular",
      "Özgüven ve benlik algısı",
      "Davranışsal güçlükler",
      "Okula uyum ve okul yaşamında karşılaşılan güçlükler",
      "Sosyal beceriler ve akran ilişkileri",
    ],
    outcomes: [
      "Çocuğun kendini güvende hissettiği bir görüşme ortamı",
      "Duyguların adlandırılabildiği ve ifade edilebildiği bir alan",
      "Ebeveynin, davranışın altındaki ihtiyacı birlikte değerlendirebilmesi",
    ],
  },
  {
    slug: "ergenlerle-psikolojik-danismanlik",
    title: "Ergenlerle Psikolojik Danışmanlık",
    summary:
      "Kaygı, sınav süreci, özgüven, duygu düzenleme, motivasyon ve ilişkisel güçlüklerin ergenin ihtiyaçları doğrultusunda ele alındığı bireysel görüşmeler.",
    intro:
      "Ergenlik; kimlik, aidiyet ve özerklik arayışının yoğunlaştığı bir dönemdir. Ergenlerle yürüttüğüm görüşmelerde amaç gencin yönlendirilmesi değil, kendini anlayabileceği ve kendi çözümlerini üretebileceği bir alan açmaktır. Gizlilik bu yaş grubunda özellikle önemlidir; çerçeve ilk görüşmede aile ve genç ile birlikte netleştirilir.",
    icon: "teen",
    topics: [
      "Kaygı ve yoğun endişe",
      "Sınav kaygısı",
      "Özgüven ve benlik algısı",
      "Duygu düzenleme",
      "Erteleme ve motivasyon güçlükleri",
      "Akran ve sosyal ilişkiler",
      "Yaşam değişikliklerine uyum",
    ],
    outcomes: [
      "Gencin yargılanmadan konuşabildiği bir görüşme alanı",
      "Duyguların ve düşüncelerin birlikte ele alınması",
      "Yeni baş etme yollarının keşfedilmesi",
    ],
  },
  {
    slug: "yetiskinlerle-psikolojik-danismanlik",
    title: "Yetişkinlerle Psikolojik Danışmanlık",
    summary:
      "Kaygı, stres, duygu düzenleme, özgüven, erteleme, kişilerarası ilişkiler ve yaşam değişiklikleri gibi alanların birlikte ele alındığı bireysel görüşmeler.",
    intro:
      "Yetişkinlerle yürüttüğüm görüşmelerde, yaşanan güçlükleri yalnızca ortadan kaldırılması gereken sorunlar olarak değil; düşünceler, duygular, davranışlar ve yaşam deneyimleriyle birlikte anlaşılması gereken bir bütünün parçası olarak ele alıyorum. Çalışmalarımda Bilişsel Davranışçı Terapi temelli yaklaşımlardan yararlanıyorum.",
    icon: "adult",
    topics: [
      "Kaygı ve endişeyle baş etme",
      "Stres ve yaşamın getirdiği zorlanmalar",
      "Özgüven ve özdeğer",
      "Duygu düzenleme",
      "Erteleme ve motivasyon güçlükleri",
      "Kişilerarası ilişkiler",
      "Yaşam değişiklikleri ve uyum süreçleri",
    ],
    outcomes: [
      "Düşünce, duygu ve davranış arasındaki bağın birlikte incelenmesi",
      "İhtiyaç ve hedefler doğrultusunda yapılandırılan bir süreç",
      "Günlük yaşamda kullanılabilecek baş etme yolları",
    ],
  },
  {
    slug: "ebeveyn-gorusmeleri",
    title: "Ebeveyn Görüşmeleri",
    summary:
      "Çocuğun yaşadığı güçlükleri ve ihtiyaçlarını anlamaya, ebeveyn-çocuk ilişkisini desteklemeye ve günlük yaşamdaki yaklaşımları birlikte değerlendirmeye yönelik görüşmeler.",
    intro:
      "Bazen çocuğun değil, ebeveynin bir alana ihtiyacı vardır. Ebeveyn görüşmelerinde çocuğun davranışını birlikte okur, ailedeki yaklaşım farklılıklarını konuşur ve günlük yaşamda uygulanabilir bir yol haritası oluştururuz. Bu görüşmeler çocuğun sürece dahil olmasını gerektirmez; çocukla yürütülen bir sürecin parçası olarak da planlanabilir.",
    icon: "parent",
    topics: [
      "Çocuğun ihtiyaçlarını ve davranışını anlamlandırma",
      "Ebeveyn-çocuk ilişkisini destekleme",
      "Sınırlar ve tutarlılık",
      "Günlük yaşamdaki yaklaşımları gözden geçirme",
      "Ailedeki tutum farklılıkları",
      "Gelişim dönemine uygun beklenti kurma",
    ],
    outcomes: [
      "Evde ortak ve tutarlı bir ebeveynlik dili",
      "Davranış yerine ihtiyaca odaklanan bir bakış",
      "Süreç boyunca düzenli geri bildirim",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
