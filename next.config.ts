import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Site tamamen statik üretilir (sunucu tarafında çalışan hiçbir şey yok).
   * `export` çıktısı `out/` klasörüne saf HTML/CSS/JS olarak yazılır ve
   * Cloudflare tarafından doğrudan servis edilir — OpenNext/Workers çalışma
   * zamanına ihtiyaç duyulmaz.
   */
  output: "export",

  /**
   * Statik dışa aktarmada Next'in görsel optimizasyon sunucusu bulunmaz.
   * İleride danışman fotoğrafı eklenirken görsel, yüklenmeden önce uygun
   * boyuta getirilmelidir.
   */
  images: { unoptimized: true },
};

export default nextConfig;
