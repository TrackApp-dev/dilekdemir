/**
 * Tek kaynak konfigürasyon.
 * Site genelindeki iletişim/kimlik bilgileri yalnızca burada tutulur;
 * SEO metadata, JSON-LD şemaları ve tüm UI bileşenleri buradan beslenir.
 *
 * TODO (yayına almadan önce): telefon, e-posta, adres, sosyal medya ve
 * Calendly bilgilerini gerçek değerlerle güncelleyin.
 */

export const siteConfig = {
  name: "Dilek Demir",
  /** Ünvan: PDR lisans mezuniyeti esas alınmıştır. */
  role: "Psikolojik Danışman (PDR)",
  shortDescription:
    "Çocuk, ergen ve aile danışmanlığı alanında bilimsel temelli psikolojik destek.",
  description:
    "Dilek Demir — İstanbul Üniversitesi-Cerrahpaşa Psikolojik Danışmanlık ve Rehberlik mezunu. Çocuk, ergen, ebeveyn ve aile danışmanlığı alanlarında bilimsel temelli, güvenilir psikolojik destek.",

  url: "https://dilek-demir.com",
  /** Alternatif alan adı (301 yönlendirme için) */
  alternateUrl: "https://dilekdemir.net",
  locale: "tr_TR",

  contact: {
    phone: "+90 555 000 00 00", // TODO
    phoneHref: "+905550000000", // TODO
    whatsapp: "905550000000", // TODO
    email: "info@dilek-demir.com", // TODO
    address: {
      street: "Örnek Mah. Örnek Cad. No: 00 D: 0", // TODO
      district: "Kadıköy",
      city: "İstanbul",
      postalCode: "34000",
      country: "TR",
    },
    /** Google Maps embed URL — Maps > Paylaş > Harita yerleştir bağlantısı */
    mapsEmbedUrl:
      "https://www.google.com/maps?q=Kad%C4%B1k%C3%B6y%2C%20%C4%B0stanbul&output=embed", // TODO
    mapsLink: "https://maps.google.com/?q=Kadıköy, İstanbul", // TODO
    geo: { latitude: 40.9903, longitude: 29.0245 }, // TODO
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
    instagram: "https://instagram.com/", // TODO
    linkedin: "https://linkedin.com/in/", // TODO
    youtube: "", // opsiyonel
  },

  /**
   * Calendly. Boş bırakılırsa randevu bölümü otomatik olarak
   * telefon/e-posta ile iletişim kartına düşer (graceful fallback).
   */
  calendly: {
    url: "https://calendly.com/dilekdemir/on-gorusme", // TODO
    enabled: true,
  },
} as const;

export type SiteConfig = typeof siteConfig;

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
