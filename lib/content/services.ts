export type ServiceIconName =
  | "child"
  | "teen"
  | "parent"
  | "family"
  | "school"
  | "exam"
  | "emotion";

export type Service = {
  slug: string;
  title: string;
  /** Kartlarda görünen kısa açıklama */
  summary: string;
  /** Detay sayfası giriş paragrafı */
  intro: string;
  icon: ServiceIconName;
  audience: string;
  /** Bu başlıkta sık çalışılan konular */
  topics: string[];
  /** Süreç içinde ailenin ne bekleyebileceği */
  outcomes: string[];
  /** Öne çıkan hizmetler ana sayfada ilk sırada listelenir */
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "cocuk-danismanligi",
    title: "Çocuk Danışmanlığı",
    summary:
      "Çocuğun yaşına ve gelişim düzeyine uygun, oyun ve etkileşim temelli bireysel danışmanlık.",
    intro:
      "Çocuklar duygularını her zaman kelimelerle anlatmaz; oyunla, çizimle ve davranışla anlatır. Çocuk danışmanlığı sürecinde çocuğun kendi dilini merkeze alan, gelişim düzeyine uygun yöntemlerle çalışırız. Aile, sürecin dışında bırakılmaz; düzenli ebeveyn görüşmeleriyle birlikte ilerleriz.",
    icon: "child",
    audience: "4 – 12 yaş",
    topics: [
      "Kaygı, korku ve ayrılık zorlukları",
      "Öfke ve davranış problemleri",
      "Arkadaş ilişkileri ve sosyal beceriler",
      "Kardeş kıskançlığı",
      "Tuvalet eğitimi ve uyku düzeni",
      "Boşanma, taşınma, kayıp gibi yaşam değişiklikleri",
    ],
    outcomes: [
      "Çocuğun duygularını tanıması ve ifade edebilmesi",
      "Ebeveynin davranışın altındaki ihtiyacı okuyabilmesi",
      "Evde uygulanabilir, somut ve gerçekçi stratejiler",
    ],
    featured: true,
  },
  {
    slug: "ergen-danismanligi",
    title: "Ergen Danışmanlığı",
    summary:
      "Ergenin kendini güvende hissettiği, yargılanmadan konuşabildiği bireysel görüşmeler.",
    intro:
      "Ergenlik; kimlik, aidiyet ve özerklik arayışının yoğunlaştığı bir dönemdir. Ergen danışmanlığında amaç gencin “düzeltilmesi” değil, kendini tanıması ve kendi çözümlerini üretebilmesidir. Gizlilik ilkesi bu yaş grubunda özellikle önemlidir; sınırlar en baştan aile ile birlikte netleştirilir.",
    icon: "teen",
    audience: "12 – 18 yaş",
    topics: [
      "Kimlik arayışı ve özgüven",
      "Aile içi iletişim çatışmaları",
      "Akran ilişkileri ve akran baskısı",
      "Motivasyon ve akademik erteleme",
      "Sosyal medya ve ekran kullanımı",
      "Kaygı, öfke ve duygu düzenleme",
    ],
    outcomes: [
      "Gencin duygularını sözcüklere dökebilmesi",
      "Aile içinde daha az çatışmalı iletişim",
      "Kendi sorumluluğunu üstlenebilme becerisi",
    ],
    featured: true,
  },
  {
    slug: "ebeveyn-danismanligi",
    title: "Ebeveyn Danışmanlığı",
    summary:
      "Çocuğunuzu daha iyi anlamanız ve tutarlı bir ebeveynlik dili kurmanız için rehberlik.",
    intro:
      "Bazen çocuğun değil, ebeveynin desteğe ihtiyacı vardır. Ebeveyn danışmanlığında çocuğun davranışını birlikte okur, aile içindeki tutum farklılıklarını konuşur ve evde uygulanabilir bir yol haritası oluştururuz. Çocuğun sürece dahil olması her zaman gerekmez.",
    icon: "parent",
    audience: "Anne – baba görüşmeleri",
    topics: [
      "Sınır koyma ve tutarlılık",
      "Ödül–ceza yerine işleyen alternatifler",
      "Ekran süresi yönetimi",
      "Kardeş ilişkileri",
      "Anne–baba arasındaki tutum farkları",
      "Gelişim dönemine uygun beklenti kurma",
    ],
    outcomes: [
      "Evde ortak ve tutarlı bir ebeveynlik dili",
      "Krize değil, ihtiyaca odaklanan bir bakış",
      "Ebeveynlik kaygısında gözle görülür azalma",
    ],
    featured: true,
  },
  {
    slug: "aile-danismanligi",
    title: "Aile Danışmanlığı",
    summary:
      "Aileyi bir bütün olarak ele alan, iletişim ve ilişki odaklı görüşmeler.",
    intro:
      "Aile, üyelerinin toplamından fazlasıdır. Aile danışmanlığında sorun bir kişiye yüklenmez; ailedeki iletişim döngüleri, roller ve tekrar eden kalıplar birlikte incelenir. Görüşmelere ailenin tamamı ya da süreç gereği belirli üyeler katılabilir.",
    icon: "family",
    audience: "Tüm aile ya da alt sistemler",
    topics: [
      "Tekrarlayan tartışma döngüleri",
      "Ebeveyn–çocuk ilişkisinde kopukluk",
      "Boşanma ve yeniden yapılanan aile süreçleri",
      "Kayıp ve yas",
      "Yeni kardeş, taşınma, okul değişikliği",
    ],
    outcomes: [
      "Aile içinde daha güvenli bir konuşma alanı",
      "Suçlayıcı dilden ihtiyaç diline geçiş",
      "Rollerin ve sınırların netleşmesi",
    ],
    featured: true,
  },
  {
    slug: "okul-uyum-surecleri",
    title: "Okul Uyum Süreçleri",
    summary:
      "Okula başlama, okul değişikliği ve okul reddi durumlarında adım adım uyum desteği.",
    intro:
      "Okula uyum yalnızca çocuğun değil, ailenin de sürecidir. Ayrılık kaygısı, sabah krizleri ve okul reddi gibi durumlarda çocuğun ihtiyacını, ailenin tutumunu ve okulun beklentilerini birlikte değerlendiririz. Gerektiğinde aile onayıyla okul rehberlik servisiyle iş birliği yapılabilir.",
    icon: "school",
    audience: "Anaokulu – ilkokul – ortaokul",
    topics: [
      "Okula başlama ve ayrılık kaygısı",
      "Okul reddi ve sabah krizleri",
      "Öğretmen ve akran ilişkileri",
      "Okul değişikliği ve yeni ortama uyum",
      "Derse katılım ve odaklanma",
    ],
    outcomes: [
      "Sabah rutininde belirgin rahatlama",
      "Çocuğun okulla ilgili duygularını ifade edebilmesi",
      "Aile–okul arasında ortak bir dil",
    ],
    featured: true,
  },
  {
    slug: "sinav-kaygisi",
    title: "Sınav Kaygısı Çalışmaları",
    summary:
      "LGS, YKS ve okul sınavlarında kaygıyı yönetilebilir hale getiren yapılandırılmış program.",
    intro:
      "Kaygının kendisi düşman değildir; yönetilemeyen kaygı performansı düşürür. Bu çalışmada öğrencinin kaygı düzeyini, çalışma alışkanlıklarını ve düşünce kalıplarını birlikte ele alırız. Aileye düşen rol de sürecin ayrılmaz bir parçasıdır.",
    icon: "exam",
    audience: "Ortaokul – lise öğrencileri",
    topics: [
      "Sınav öncesi ve sınav anı kaygısı",
      "Erteleme ve odaklanma güçlüğü",
      "Gerçekçi hedef ve program kurma",
      "Nefes ve gevşeme teknikleri",
      "Ailenin beklenti dilini yeniden kurma",
    ],
    outcomes: [
      "Kaygının fark edilip yönetilebilmesi",
      "Sürdürülebilir bir çalışma düzeni",
      "Evde daha az sınav gerilimi",
    ],
    featured: true,
  },
  {
    slug: "duygusal-gelisim-destek-programi",
    title: "Duygusal Gelişim Destek Programı",
    summary:
      "Duygu tanıma, ifade etme ve düzenleme becerilerini geliştiren oturum temelli program.",
    intro:
      "Duyguları tanımak öğrenilebilir bir beceridir. Bu programda çocuk ya da ergen; duygularını adlandırmayı, bedeninde fark etmeyi ve sağlıklı yollarla ifade etmeyi adım adım çalışır. Program, belirli bir sorun olmadan da koruyucu-önleyici amaçla tercih edilebilir.",
    icon: "emotion",
    audience: "6 yaş ve üzeri",
    topics: [
      "Duyguları tanıma ve adlandırma",
      "Öfke ve hayal kırıklığıyla baş etme",
      "Özgüven ve öz-şefkat",
      "Empati ve sosyal beceriler",
      "Stresle baş etme araçları",
    ],
    outcomes: [
      "Duygusal farkındalıkta artış",
      "Daha az patlama, daha çok ifade",
      "Yaşa uygun baş etme araçları",
    ],
  },
];

export const featuredServices = services.filter((s) => s.featured);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
