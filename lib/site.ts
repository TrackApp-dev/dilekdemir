/**
 * Tek kaynak konfigürasyon.
 * Site genelindeki iletişim/kimlik bilgileri yalnızca burada tutulur;
 * SEO metadata, JSON-LD şemaları ve tüm UI bileşenleri buradan beslenir.
 */

export const siteConfig = {
  name: "Dilek Demir",
  role: "Psikolojik Danışman",
  shortDescription:
    "Çocuk, ergen, yetişkin ve ebeveyn danışmanlığı alanında bilimsel temelli psikolojik destek.",
  description:
    "Dilek Demir — Psikolojik Danışman. Çocuklar, ergenler ve yetişkinlerle Bilişsel Davranışçı Terapi ve Çocuk Merkezli Oyun Terapisi temelli psikolojik danışmanlık; ebeveyn görüşmeleri. Gebze ve Tuzla'da yüz yüze, ayrıca online görüşme.",

  url: "https://dilek-demir.com",
  /** Alternatif alan adı (301 yönlendirme için) */
  alternateUrl: "https://dilekdemir.net",
  locale: "tr_TR",

  contact: {
    /**
     * Telefon numarası henüz paylaşılmadı. Boş bırakıldığı sürece telefonla
     * ilgili tüm arayüz öğeleri (header bağlantısı, footer satırı, mobil
     * çubuk butonu, iletişim kartı) otomatik olarak gizlenir ve yerlerini
     * e-posta alır. Numara eklendiğinde hepsi kendiliğinden görünür olur.
     */
    phone: "",
    phoneHref: "",
    email: "psk.dan.dilekdemir@gmail.com",
    address: {
      district: "Gebze",
      city: "Kocaeli",
      country: "TR",
    },
    /** Görüşmelerin yürütüldüğü ilçeler */
    serviceAreas: ["Gebze", "Tuzla"],
    /** Google Maps embed URL — Maps > Paylaş > Harita yerleştir bağlantısı */
    mapsEmbedUrl:
      "https://www.google.com/maps?q=Gebze%2C%20Kocaeli&output=embed",
    mapsLink: "https://maps.google.com/?q=Gebze, Kocaeli",
    geo: { latitude: 40.8029, longitude: 29.4307 },
  },

  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
    { days: ["Saturday"], opens: "10:00", closes: "16:00" },
  ],
  hoursHuman: [
    { label: "Pazartesi – Cuma", value: "09:00 – 19:00" },
    { label: "Cumartesi", value: "10:00 – 16:00" },
    { label: "Pazar", value: "Kapalı" },
  ],

  social: {
    instagram: "", // TODO: Instagram adresi eklenecek
    linkedin: "https://www.linkedin.com/in/dilek-demir-903941230/",
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** Telefon numarası tanımlı mı? (Arayüzde koşullu gösterim için.) */
export const hasPhone = Boolean(siteConfig.contact.phone);

/** "Gebze / Kocaeli" */
export const locationLabel = `${siteConfig.contact.address.district} / ${siteConfig.contact.address.city}`;

/** "Gebze, Tuzla" */
export const serviceAreaLabel = siteConfig.contact.serviceAreas.join(", ");

export const navigation = [
  { label: "Hakkımda", href: "/hakkimda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Süreç", href: "/#surec" },
  { label: "Blog", href: "/blog" },
  { label: "S.S.S.", href: "/sss" },
  { label: "İletişim", href: "/iletisim" },
] as const;

export const legalNavigation = [
  { label: "KVKK Aydınlatma Metni", href: "/kvkk" },
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { label: "Çerez Politikası", href: "/cerez-politikasi" },
] as const;
