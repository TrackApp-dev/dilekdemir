export const about = {
  headline: "Her bireyin hikâyesi kendine özgü bir anlayışı hak eder.",
  paragraphs: [
    "İstanbul Üniversitesi-Cerrahpaşa Psikolojik Danışmanlık ve Rehberlik (PDR) programından mezun oldum. Çocuk, ergen ve yetişkinlerle psikolojik danışmanlık süreçleri yürütüyor, mesleki gelişimimi Bilişsel Davranışçı Terapi ve Çocuk Merkezli Oyun Terapisi alanlarında aldığım eğitimlerle sürdürüyorum.",
    "Danışmanlık sürecinde yaşanan güçlükleri yalnızca ortadan kaldırılması gereken sorunlar olarak değil; kişinin düşünceleri, duyguları, davranışları, ihtiyaçları ve yaşam deneyimleriyle birlikte anlaşılması gereken bir bütünün parçası olarak ele alıyorum. Süreci danışanın ihtiyaçları ve hedefleri doğrultusunda iş birliği içinde yapılandırmayı önemsiyorum.",
    "Çalışmalarımda bilimsel temelli yaklaşımlardan yararlanırken kullanılan yöntem kadar güvenli ve kabul edici bir terapötik ilişkinin de önemli olduğuna inanıyorum. Amacım çocukların, ergenlerin ve yetişkinlerin kendilerini daha iyi anlayabilecekleri, yaşadıkları güçlükleri birlikte ele alabileceğimiz ve yeni baş etme yollarını keşfedebilecekleri güvenli bir alan sunmak.",
  ],
  education: [
    {
      title: "Psikolojik Danışmanlık ve Rehberlik (PDR), Lisans",
      org: "İstanbul Üniversitesi-Cerrahpaşa",
    },
  ],
  trainings: [
    { title: "Bilişsel Davranışçı Terapi (BDT)", org: "" },
    { title: "Çocuk Merkezli Oyun Terapisi", org: "" },
  ],
  /**
   * Çalışma alanları — tanı odaklı değil, çalışılan konu başlıkları olarak
   * gruplanmıştır. Ana sayfada yalnızca grup başlıkları, Hakkımda sayfasında
   * tüm liste gösterilir.
   */
  workAreas: [
    {
      title: "Çocuklarla Çalışmalar",
      items: [
        "Duyguları tanıma ve ifade etme",
        "Duygu düzenleme becerileri",
        "Kaygı ve korkular",
        "Özgüven ve benlik algısı",
        "Davranışsal güçlükler",
        "Okula uyum ve okul yaşamında karşılaşılan güçlükler",
        "Sosyal beceriler ve akran ilişkileri",
      ],
    },
    {
      title: "Ergenlerle Çalışmalar",
      items: [
        "Kaygı ve yoğun endişe",
        "Sınav kaygısı",
        "Özgüven ve benlik algısı",
        "Duygu düzenleme",
        "Erteleme ve motivasyon güçlükleri",
        "Akran ve sosyal ilişkiler",
        "Yaşam değişikliklerine uyum",
      ],
    },
    {
      title: "Yetişkinlerle Çalışmalar",
      items: [
        "Kaygı ve endişeyle baş etme",
        "Stres ve yaşamın getirdiği zorlanmalar",
        "Özgüven ve özdeğer",
        "Duygu düzenleme",
        "Erteleme ve motivasyon güçlükleri",
        "Kişilerarası ilişkiler",
        "Yaşam değişiklikleri ve uyum süreçleri",
      ],
    },
  ],
  values: [
    {
      title: "Güvenli ve Etik Bir Alan",
      description:
        "Gizlilik ve mesleki etik ilkeler çerçevesinde güvenli bir görüşme ortamı.",
    },
    {
      title: "Bilimsel Temelli Yaklaşım",
      description:
        "Bilimsel dayanağı olan ve bireysel ihtiyaçlara uygun çalışma yöntemleri.",
    },
    {
      title: "Kişiye Özgü Süreç",
      description:
        "İhtiyaçlarınız ve hedefleriniz doğrultusunda birlikte şekillenen bir süreç.",
    },
    {
      title: "İş Birliğine Dayalı Çalışma",
      description:
        "Hedeflerin birlikte belirlendiği, aktif katılıma dayalı bir çalışma anlayışı.",
    },
  ],
  approach: [
    {
      title: "İlişki önce gelir",
      description:
        "Güvenli ve kabul edici bir terapötik ilişki kurulmadan hiçbir yöntem tek başına yeterli olmaz.",
    },
    {
      title: "Bütünü birlikte anlamak",
      description:
        "Yaşanan güçlük; düşünceler, duygular, davranışlar, ihtiyaçlar ve yaşam deneyimleriyle birlikte ele alınır.",
    },
    {
      title: "Süreç birlikte kurulur",
      description:
        "Hedefler danışanla birlikte belirlenir; süreç ihtiyaçlar doğrultusunda iş birliği içinde yapılandırılır.",
    },
  ],
} as const;
