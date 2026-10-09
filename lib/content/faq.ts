export type FaqItem = {
  question: string;
  answer: string;
  /** Ana sayfada gösterilecek mi */
  featured?: boolean;
};

export const faqItems: FaqItem[] = [
  {
    question: "İlk görüşme nasıl gerçekleşir?",
    answer:
      "İlk görüşme bir tanışma ve değerlendirme görüşmesidir. Çocuk ve ergen danışmanlığında bu görüşme genellikle yalnızca ebeveynlerle yapılır; sizi buraya getiren konuyu, çocuğunuzun gelişim öyküsünü ve ailenin işleyişini dinlerim. Görüşmenin sonunda nasıl bir yol izleyebileceğimizi birlikte konuşuruz. Süreci başlatma kararı tamamen size aittir.",
    featured: true,
  },
  {
    question: "Seanslar ne kadar sürer ve hangi sıklıkta yapılır?",
    answer:
      "Görüşmeler ortalama 45–50 dakikadır ve genellikle haftada bir gerçekleştirilir. Sürecin ilerleyen aşamalarında ihtiyaca göre görüşme sıklığı seyreltilebilir. Toplam süre; başvuru nedenine, çocuğun yaşına ve ailenin sürece katılımına göre değişir. Standart bir seans sayısı vermek doğru olmaz; bunu süreç içinde birlikte değerlendiririz.",
    featured: true,
  },
  {
    question: "Online görüşme yapılabiliyor mu?",
    answer:
      "Evet. Ebeveyn danışmanlığı ve ergen görüşmeleri online olarak yürütülebilir. Küçük yaş grubundaki çocuklarda oyun ve etkileşim temelli çalışma gerektiği için yüz yüze görüşme önerilir. Online görüşmeler güvenli bir görüntülü görüşme platformu üzerinden yapılır ve yüz yüze görüşmelerle aynı gizlilik ilkelerine tabidir.",
    featured: true,
  },
  {
    question: "Çocuk danışmanlığı hangi yaş gruplarını kapsar?",
    answer:
      "Çocuk danışmanlığı yaklaşık 4–12 yaş aralığını, ergen danışmanlığı ise 12–18 yaş aralığını kapsar. Bu aralıklar keskin sınırlar değildir; çocuğun gelişim düzeyine göre yöntem belirlenir. Ebeveyn ve aile danışmanlığında ise yaş sınırı yoktur.",
    featured: true,
  },
  {
    question: "Çocuğumun anlattıkları bana aktarılıyor mu?",
    answer:
      "Danışmanlıkta gizlilik temel ilkedir ve bu ilke çocuklar için de geçerlidir. Görüşmelerin içeriği birebir aktarılmaz; bunun yerine sürecin gidişatı, çocuğunuzun ihtiyaçları ve size düşen roller hakkında düzenli geri bildirim veririm. Çocuğun ya da bir başkasının güvenliğini ilgilendiren durumlar gizliliğin istisnasıdır ve bu istisna ilk görüşmede açıkça paylaşılır.",
    featured: true,
  },
  {
    question: "Psikolojik danışman, psikolog ve psikiyatrist arasındaki fark nedir?",
    answer:
      "Psikolojik danışmanlar, gelişimsel ve önleyici bir yaklaşımla bireyin uyum, ilişki ve gelişim alanlarında çalışır. Psikiyatristler tıp doktorudur; tanı koyar ve ilaç tedavisi düzenleyebilir. Danışmanlık süreci tıbbi tanı ya da ilaç tedavisi içermez; gerekli görüldüğünde uygun uzmana yönlendirme yapılır.",
  },
  {
    question: "Randevumu iptal etmem gerekirse ne yapmalıyım?",
    answer:
      "Randevunuzu en az 24 saat önce bildirmeniz durumunda ücretsiz olarak erteleyebiliriz. Bu süreden sonra yapılan iptallerde görüşme yapılmış sayılır. Bu uygulama, randevu saatinin başka bir danışana açılabilmesi içindir.",
  },
  {
    question: "Görüşmeler için nasıl hazırlanmalıyım?",
    answer:
      "Özel bir hazırlık gerekmez. Aklınıza gelen soruları not almanız ve varsa okuldan gelen geri bildirimleri, daha önce alınmış raporları getirmeniz süreci hızlandırır. Çocuğunuza görüşmeyi anlatırken “konuşmayı seven, oyun oynayan bir yetişkinle tanışacağız” gibi yaşına uygun ve tehditkâr olmayan bir dil kullanmanız yeterlidir.",
  },
];

export const featuredFaqItems = faqItems.filter((f) => f.featured);
