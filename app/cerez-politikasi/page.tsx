import type { Metadata } from "next";

import { LegalLayout } from "@/components/sections/LegalLayout";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Çerez Politikası",
  description:
    "Bu web sitesinde kullanılan çerezler, kullanım amaçları ve çerez tercihlerinizi nasıl yönetebileceğiniz.",
  path: "/cerez-politikasi",
});

export default function CookiePage() {
  return (
    <LegalLayout
      title="Çerez Politikası"
      description="Bu web sitesinde hangi çerezlerin kullanıldığını ve tercihlerinizi nasıl yönetebileceğinizi açıklar."
      updatedAt="1 Eylül 2026"
      breadcrumb={{ name: "Çerez Politikası", href: "/cerez-politikasi" }}
    >
      <h2>1. Çerez Nedir?</h2>
      <p>
        Çerezler, bir web sitesini ziyaret ettiğinizde cihazınıza kaydedilen küçük
        metin dosyalarıdır. Sitenin düzgün çalışmasını sağlamak ve kullanım deneyimini
        iyileştirmek için kullanılırlar.
      </p>

      <h2>2. Kullanılan Çerezler</h2>
      <ul>
        <li>
          <strong>Zorunlu çerezler:</strong> Sitenin temel işlevleri için gereklidir.
          Bu çerezler olmadan site düzgün çalışmaz ve devre dışı bırakılamaz.
        </li>
        <li>
          <strong>Üçüncü taraf çerezleri:</strong> Randevu takvimi (Calendly) ve
          harita (Google Haritalar) bileşenleri, yalnızca sayfada görüntülendiklerinde
          ilgili sağlayıcının çerezlerini kullanabilir.
        </li>
      </ul>
      <p>
        Bu web sitesinde reklam veya profilleme amaçlı çerez kullanılmamaktadır.
      </p>

      <h2>3. Çerezleri Yönetme</h2>
      <p>
        Tarayıcı ayarlarınız üzerinden çerezleri silebilir veya engelleyebilirsiniz.
        Zorunlu çerezlerin engellenmesi hâlinde sitenin bazı bölümleri beklendiği gibi
        çalışmayabilir. Tarayıcıya özel adımlar için ilgili tarayıcının yardım
        sayfalarına başvurabilirsiniz.
      </p>

      <h2>4. Değişiklikler</h2>
      <p>
        Bu politika, mevzuattaki değişiklikler veya site üzerindeki güncellemeler
        nedeniyle zaman zaman revize edilebilir. Güncel sürüm her zaman bu sayfada
        yayımlanır.
      </p>

      <h2>5. İletişim</h2>
      <p>
        Sorularınız için {siteConfig.contact.email} adresine yazabilirsiniz.
      </p>
    </LegalLayout>
  );
}
