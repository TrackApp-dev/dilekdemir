import type { Metadata } from "next";

import { LegalLayout } from "@/components/sections/LegalLayout";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Gizlilik Politikası",
  description:
    "Web sitesi üzerinden toplanan verilerin nasıl işlendiği, saklandığı ve korunduğuna ilişkin gizlilik politikası.",
  path: "/gizlilik-politikasi",
});

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Gizlilik Politikası"
      description="Bu politika, web sitesi üzerinden toplanan bilgilerin nasıl kullanıldığını açıklar."
      updatedAt="1 Eylül 2026"
      breadcrumb={{ name: "Gizlilik Politikası", href: "/gizlilik-politikasi" }}
    >
      <h2>1. Genel</h2>
      <p>
        {siteConfig.url} adresinde yer alan bu web sitesi, ziyaretçilerinin
        gizliliğine önem verir. Bu politika; hangi bilgilerin toplandığını, hangi
        amaçlarla kullanıldığını ve haklarınızı açıklar.
      </p>

      <h2>2. Toplanan Bilgiler</h2>
      <ul>
        <li>
          <strong>Sizin paylaştığınız bilgiler:</strong> Randevu formu, e-posta veya
          telefon yoluyla ilettiğiniz ad, iletişim bilgisi ve talebinize ilişkin
          açıklamalar.
        </li>
        <li>
          <strong>Otomatik toplanan bilgiler:</strong> Tarayıcı türü, cihaz bilgisi
          ve sayfa görüntüleme verileri gibi teknik kayıtlar.
        </li>
      </ul>
      <p>
        Bu web sitesinde reklam amaçlı izleme yapılmaz ve kişisel verileriniz
        pazarlama amacıyla üçüncü taraflara satılmaz.
      </p>

      <h2>3. Kullanım Amaçları</h2>
      <ul>
        <li>Randevu ve iletişim taleplerinin yanıtlanması</li>
        <li>Hizmetin sunulması ve sürecin yürütülmesi</li>
        <li>Web sitesinin güvenliğinin ve performansının sağlanması</li>
      </ul>

      <h2>4. Üçüncü Taraf Hizmetler</h2>
      <p>
        Harita gösteriminde Google Haritalar kullanılmaktadır; bu bileşeni
        görüntülediğinizde ilgili sağlayıcının kendi gizlilik politikaları
        geçerli olur. Harita, yalnızca ihtiyaç duyulduğunda yüklenecek şekilde
        yapılandırılmıştır. Site üzerinde çevrim içi randevu veya form altyapısı
        bulunmamaktadır; randevu talepleri e-posta yoluyla iletilir.
      </p>

      <h2>5. Danışmanlık Gizliliği</h2>
      <p>
        Danışmanlık görüşmelerinde paylaşılan bilgiler mesleki gizlilik kapsamındadır
        ve üçüncü kişilerle paylaşılmaz. Gizliliğin istisnaları; danışanın ya da bir
        başkasının yaşamsal güvenliğinin söz konusu olduğu durumlar ve yasal
        zorunluluklardır. Bu istisnalar ilk görüşmede açıkça paylaşılır.
      </p>

      <h2>6. Veri Güvenliği</h2>
      <p>
        Verileriniz; yetkisiz erişime, kayba ve kötüye kullanıma karşı makul teknik ve
        idari tedbirlerle korunur. Web sitesi trafiği HTTPS ile şifrelenir.
      </p>

      <h2>7. İletişim</h2>
      <p>
        Gizlilik uygulamalarına ilişkin sorularınız için{" "}
        {siteConfig.contact.email} adresine yazabilirsiniz.
      </p>
    </LegalLayout>
  );
}
