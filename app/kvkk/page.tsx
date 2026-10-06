import type { Metadata } from "next";

import { LegalLayout } from "@/components/sections/LegalLayout";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "KVKK Aydınlatma Metni",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerin işlenmesine ilişkin aydınlatma metni.",
  path: "/kvkk",
});

/**
 * NOT: Bu metin bir şablondur. Yayına almadan önce veri sorumlusu bilgileri
 * doldurulmalı ve metin bir hukuk danışmanı tarafından gözden geçirilmelidir.
 */
export default function KvkkPage() {
  return (
    <LegalLayout
      title="KVKK Aydınlatma Metni"
      description="Kişisel verilerinizin hangi amaçla işlendiği, kimlerle paylaşıldığı ve haklarınız hakkında bilgilendirme."
      updatedAt="1 Eylül 2026"
      breadcrumb={{ name: "KVKK Aydınlatma Metni", href: "/kvkk" }}
    >
      <h2>1. Veri Sorumlusu</h2>
      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca
        kişisel verileriniz, veri sorumlusu sıfatıyla {siteConfig.name} tarafından
        aşağıda açıklanan kapsamda işlenmektedir.
      </p>
      <p>
        İletişim: {siteConfig.contact.email} · {siteConfig.contact.phone} ·{" "}
        {siteConfig.contact.address.street}, {siteConfig.contact.address.district} /{" "}
        {siteConfig.contact.address.city}
      </p>

      <h2>2. İşlenen Kişisel Veriler</h2>
      <ul>
        <li>
          <strong>Kimlik ve iletişim verileri:</strong> ad, soyad, telefon numarası,
          e-posta adresi.
        </li>
        <li>
          <strong>Randevu verileri:</strong> randevu tarihi, saati ve görüşme türü.
        </li>
        <li>
          <strong>Danışmanlık süreci verileri:</strong> görüşme kayıtlarına ilişkin
          notlar ve sağlık verisi niteliğindeki özel nitelikli kişisel veriler.
        </li>
        <li>
          <strong>İşlem güvenliği verileri:</strong> web sitesi kullanımına ilişkin
          teknik kayıtlar (çerezler aracılığıyla).
        </li>
      </ul>

      <h2>3. İşleme Amaçları</h2>
      <ul>
        <li>Randevu taleplerinin alınması, planlanması ve yönetilmesi</li>
        <li>Psikolojik danışmanlık hizmetinin yürütülmesi</li>
        <li>İletişim taleplerinin yanıtlanması</li>
        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
        <li>Web sitesinin güvenliğinin ve işleyişinin sağlanması</li>
      </ul>

      <h2>4. Hukuki Sebepler</h2>
      <p>
        Kişisel verileriniz; KVKK m.5/2 kapsamında sözleşmenin kurulması ve ifası,
        hukuki yükümlülüklerin yerine getirilmesi ve meşru menfaat hukuki
        sebeplerine dayanılarak işlenmektedir. Sağlık verisi niteliğindeki özel
        nitelikli kişisel veriler ise KVKK m.6 uyarınca yalnızca{" "}
        <strong>açık rızanız</strong> ile işlenir.
      </p>

      <h2>5. Aktarım</h2>
      <p>
        Kişisel verileriniz, yalnızca hizmetin sunulması için gerekli olduğu ölçüde
        ve mevzuatın izin verdiği sınırlar çerçevesinde; randevu altyapısı sağlayıcısı
        ve barındırma (hosting) hizmet sağlayıcıları gibi tedarikçilere aktarılabilir.
        Yasal olarak talep edilmesi hâlinde yetkili kamu kurum ve kuruluşlarıyla
        paylaşılabilir. Bunun dışında üçüncü kişilerle paylaşılmaz.
      </p>

      <h2>6. Saklama Süresi</h2>
      <p>
        Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca ve ilgili
        mevzuatta öngörülen zamanaşımı süreleri sonuna kadar saklanır; sürenin
        sonunda silinir, yok edilir veya anonim hâle getirilir.
      </p>

      <h2>7. İlgili Kişinin Hakları</h2>
      <p>KVKK m.11 uyarınca aşağıdaki haklara sahipsiniz:</p>
      <ul>
        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
        <li>İşlenmişse buna ilişkin bilgi talep etme</li>
        <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
        <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
        <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
        <li>Silinmesini veya yok edilmesini isteme</li>
        <li>Zararın giderilmesini talep etme</li>
      </ul>
      <p>
        Taleplerinizi {siteConfig.contact.email} adresine iletebilirsiniz. Başvurunuz
        en geç otuz gün içinde sonuçlandırılır.
      </p>
    </LegalLayout>
  );
}
