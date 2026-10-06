# Dilek Demir — Psikolojik Danışmanlık Web Sitesi

Çocuk, ergen ve aile danışmanlığı için üretilmiş, dönüşüm odaklı kurumsal web
sitesi. Next.js 16 (App Router), TypeScript, Tailwind CSS v4 ve Framer Motion.

## Hızlı başlangıç

```bash
npm install
npm run dev
```

`http://localhost:3000` adresinde açılır.

| Komut | Açıklama |
| --- | --- |
| `npm run dev` | Geliştirme sunucusu |
| `npm run build` | Üretim derlemesi (tüm sayfalar statik üretilir) |
| `npm start` | Üretim sunucusu |
| `npm run lint` | ESLint |

## Yayına almadan önce doldurulması gerekenler

Tüm kimlik ve iletişim bilgileri **tek dosyadan** yönetilir:
[`lib/site.ts`](lib/site.ts). İçindeki `// TODO` işaretli alanları güncelleyin:

- `contact.phone` / `phoneHref` / `whatsapp` / `email`
- `contact.address`, `contact.geo`, `contact.mapsEmbedUrl`, `contact.mapsLink`
- `social.instagram`, `social.linkedin`
- `calendly.url` — gerçek Calendly bağlantısı
  (`calendly.enabled: false` yapılırsa randevu bölümü otomatik olarak
  telefon/e-posta kartına düşer)
- `url` — canlı alan adı (metadata, sitemap ve JSON-LD bu değeri kullanır)

Ayrıca:

- **Yasal metinler** (`app/kvkk`, `app/gizlilik-politikasi`,
  `app/cerez-politikasi`) şablondur; yayına almadan önce bir hukuk danışmanı
  tarafından gözden geçirilmelidir.
- `lib/content/about.ts` içindeki `trainings` listesi örnek verilerle doludur;
  gerçek sertifika/eğitim bilgileriyle güncelleyin.

## İçerik yönetimi

### Blog yazısı ekleme

`content/blog/` altına bir `.md` dosyası ekleyin. Dosya adı URL olur
(`ornek-yazi.md` → `/blog/ornek-yazi`).

```markdown
---
title: "Yazı Başlığı"
description: "Arama sonuçlarında görünecek 150-160 karakterlik özet."
date: "2026-09-01"
category: "Ebeveynlik"   # Çocuk | Ergen | Ebeveynlik | Aile | Okul | Sınav Kaygısı
tags: ["ebeveynlik", "sınırlar"]
draft: false             # true ise yayınlanmaz
---

Markdown içerik...
```

Okuma süresi otomatik hesaplanır; `readingTime` alanıyla elle de verilebilir.
Yeni yazı sitemap'e, kategori filtresine ve "ilgili yazılar" bölümüne kendiliğinden eklenir.

### Hizmet ekleme / düzenleme

[`lib/content/services.ts`](lib/content/services.ts) içindeki `services` dizisi.
Her kayıt otomatik olarak; ana sayfa kartlarına (`featured: true` ise), hizmetler
sayfasına, `/hizmetler/[slug]` detay sayfasına, sitemap'e ve `Service` şemasına yansır.
İkonlar [`components/graphics/Icons.tsx`](components/graphics/Icons.tsx) içinde tanımlıdır.

### Diğer içerikler

- Süreç adımları: `lib/content/process.ts`
- S.S.S.: `lib/content/faq.ts` (`featured: true` olanlar ana sayfada görünür)
- Hakkımda: `lib/content/about.ts`

## Danışman fotoğrafı ekleme

Tasarım fotoğrafsız çalışacak şekilde kurulmuştur (soyut illüstrasyon). Fotoğraf
hazır olduğunda görseli `public/` altına koyup `HeroVisual` bileşenine iletin —
çerçeve, gölge ve güven rozeti aynı kalır:

```tsx
<HeroVisual photo={{ src: "/dilek-demir.jpg", alt: "Dilek Demir" }} />
```

Kullanıldığı yerler: `components/sections/Hero.tsx` ve `app/hakkimda/page.tsx`.

## CMS'e geçiş

Blog içerikleri bir repository arayüzünün arkasındadır:
[`lib/content/blog.ts`](lib/content/blog.ts) içindeki `BlogRepository`. Sayfalar
yalnızca bu arayüze bağımlıdır. Sanity / Contentful / Supabase'e geçerken tek
yapılması gereken, aynı arayüzü uygulayan yeni bir repository yazıp şu satırı
değiştirmektir:

```ts
export const blog: BlogRepository = fileSystemBlogRepository;
```

İstemci tarafında da kullanılan tipler (`Post`, `PostMeta`) ayrı bir dosyadadır:
`lib/content/post.ts`.

## SEO

- Sayfa bazlı metadata: `lib/seo.ts` → `buildMetadata()`
- Schema.org (`@graph`): `lib/schema.ts` — `ProfessionalService` + `LocalBusiness`,
  `Person`, `WebSite`, `Service`, `BlogPosting`, `FAQPage`, `BreadcrumbList`
- `app/sitemap.ts` ve `app/robots.ts` otomatik üretilir
- Open Graph görseli `app/opengraph-image.tsx` içinde dinamik olarak çizilir
- Her sayfada canonical URL ve Türkçe `lang="tr"`

## Erişilebilirlik ve performans

Üretim derlemesinde ölçülen Lighthouse (mobil) skorları:

| Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- |
| 96 | 100 | 100 | 100 |

Bunu koruyan başlıca kararlar:

- Tüm sayfalar statik üretilir (SSG); görseller SVG, ikonlar satır içi
- Tek bir değişken font ailesi (Inter, `latin` + `latin-ext`)
- Ekranın üst kısmındaki giriş animasyonu CSS ile yapılır; başlık ve giriş
  paragrafı hiç animasyonlu değildir (LCP'yi geciktirmemek için)
- Framer Motion `LazyMotion` + `m` bileşenleriyle tembel yüklenir
- Calendly betiği yalnızca widget görünüm alanına girdiğinde (ya da butona
  basıldığında) yüklenir; harita `loading="lazy"`
- `prefers-reduced-motion` tüm animasyonları devre dışı bırakır
- JavaScript kapalıyken içeriğin görünür kalması için `<noscript>` yedeği vardır

## Yayınlama (Vercel önerilir)

1. Depoyu Vercel'e bağlayın; ek yapılandırma gerekmez.
2. Alan adını bağlayın ve `lib/site.ts` içindeki `url` alanını güncelleyin.
3. İkinci alan adını (`dilekdemir.net`) ana alan adına **301** ile yönlendirin;
   ikisinin de indekslenmesi SEO'yu böler.
4. Google Search Console'a `sitemap.xml` adresini gönderin.

## Dizin yapısı

```
app/                 sayfalar, sitemap/robots, OG görseli
components/
  layout/            header, footer, logo, sticky CTA
  sections/          sayfa bölümleri (hero, hizmetler, süreç, SSS, randevu…)
  blog/              blog kartı, gövde, filtreli liste
  appointment/       Calendly gömülü + popup entegrasyonu
  graphics/          ikon seti ve hero illüstrasyonu
  ui/                Button, Card, Section, Reveal, JsonLd…
content/blog/        markdown yazılar
lib/                 site yapılandırması, içerik katmanı, SEO ve şema yardımcıları
```
