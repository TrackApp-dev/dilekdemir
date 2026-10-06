export type ProcessStep = {
  step: string;
  title: string;
  duration: string;
  description: string;
  details: string[];
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Ön Görüşme",
    duration: "45 – 50 dk",
    description:
      "Tanışma görüşmesidir. Sizi buraya getiren konuyu, ailenin işleyişini ve beklentilerinizi dinlerim.",
    details: [
      "Çocuk ve ergen danışmanlığında ilk görüşme genellikle yalnızca ebeveynlerle yapılır",
      "Gizlilik ilkesi ve çalışma çerçevesi baştan netleştirilir",
      "Sorularınızı sormanız için ayrılmış bir alandır",
    ],
  },
  {
    step: "02",
    title: "Değerlendirme",
    duration: "1 – 3 görüşme",
    description:
      "Gelişimsel öykü, aile dinamikleri ve mevcut zorluklar bütüncül biçimde değerlendirilir.",
    details: [
      "Gelişim öyküsü ve aile geçmişi alınır",
      "Gerekli durumlarda yaşa uygun değerlendirme araçları kullanılır",
      "Aile onayıyla okul ve diğer uzmanlarla iş birliği planlanabilir",
    ],
  },
  {
    step: "03",
    title: "Danışmanlık Süreci",
    duration: "Haftalık görüşmeler",
    description:
      "Birlikte belirlediğimiz hedefler doğrultusunda düzenli görüşmelerle ilerleriz.",
    details: [
      "Görüşmeler genellikle haftada bir, 45–50 dakikadır",
      "Çocuk görüşmelerine düzenli ebeveyn görüşmeleri eşlik eder",
      "Süre; ihtiyaca göre belirlenir, süreç boyunca birlikte gözden geçirilir",
    ],
  },
  {
    step: "04",
    title: "Takip ve Geri Bildirim",
    duration: "Süreç boyunca",
    description:
      "Kazanımların günlük hayata taşınması ve kalıcı olması için düzenli değerlendirme yapılır.",
    details: [
      "Belirli aralıklarla ilerleme birlikte gözden geçirilir",
      "Süreç sonlandırıldıktan sonra takip görüşmeleri planlanabilir",
      "Evde ve okulda uygulanabilir öneriler paylaşılır",
    ],
  },
];
