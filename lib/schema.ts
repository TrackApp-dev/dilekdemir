import { hasPhone, siteConfig } from "@/lib/site";
import { services } from "@/lib/content/services";
import { faqItems } from "@/lib/content/faq";
import { absoluteUrl } from "@/lib/seo";
import type { PostMeta } from "@/lib/content/post";

/**
 * Schema.org yapılandırılmış veri üreticileri.
 * Tüm sayfalar bu fonksiyonlardan beslenir; içerik tek yerden yönetilir.
 */

const businessId = `${siteConfig.url}/#practice`;
const personId = `${siteConfig.url}/#dilek-demir`;
const websiteId = `${siteConfig.url}/#website`;

export function personSchema() {
  return {
    "@type": "Person",
    "@id": personId,
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.url,
    description: siteConfig.description,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "İstanbul Üniversitesi-Cerrahpaşa",
      department: {
        "@type": "EducationalOrganization",
        name: "Psikolojik Danışmanlık ve Rehberlik (PDR)",
      },
    },
    knowsAbout: [
      "Çocuklarla psikolojik danışmanlık",
      "Ergenlerle psikolojik danışmanlık",
      "Yetişkinlerle psikolojik danışmanlık",
      "Ebeveyn görüşmeleri",
      "Bilişsel Davranışçı Terapi",
      "Çocuk Merkezli Oyun Terapisi",
    ],
    knowsLanguage: ["tr"],
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function localBusinessSchema() {
  const { contact, hours } = siteConfig;

  return {
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": businessId,
    name: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    url: siteConfig.url,
    ...(hasPhone ? { telephone: contact.phone } : {}),
    email: contact.email,
    image: absoluteUrl("/opengraph-image"),
    priceRange: "$$",
    currenciesAccepted: "TRY",
    address: {
      "@type": "PostalAddress",
      addressLocality: contact.address.district,
      addressRegion: contact.address.city,
      addressCountry: contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: contact.geo.latitude,
      longitude: contact.geo.longitude,
    },
    openingHoursSpecification: hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: contact.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    founder: { "@id": personId },
    employee: { "@id": personId },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Danışmanlık Hizmetleri",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.summary,
          url: absoluteUrl(`/hizmetler/${service.slug}`),
          serviceType: service.title,
          provider: { "@id": businessId },
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteConfig.url,
    name: `${siteConfig.name} — ${siteConfig.role}`,
    inLanguage: "tr-TR",
    publisher: { "@id": businessId },
  };
}

export function faqSchema(items = faqItems) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function blogPostingSchema(post: PostMeta) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: url,
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    inLanguage: "tr-TR",
    articleSection: post.category,
    keywords: post.tags.join(", "),
    author: { "@id": personId },
    publisher: { "@id": businessId },
    image: absoluteUrl(post.cover ?? "/opengraph-image"),
  };
}

export function serviceSchema(slug: string, title: string, description: string) {
  return {
    "@type": "Service",
    name: title,
    description,
    url: absoluteUrl(`/hizmetler/${slug}`),
    serviceType: title,
    provider: { "@id": businessId },
    areaServed: { "@type": "City", name: siteConfig.contact.address.city },
    audience: {
      "@type": "Audience",
      audienceType: "Çocuklar, ergenler, yetişkinler ve ebeveynler",
    },
  };
}

/** Birden fazla şemayı tek bir @graph içinde birleştirir. */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
