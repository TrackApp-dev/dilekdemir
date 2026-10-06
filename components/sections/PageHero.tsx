import Link from "next/link";

type Crumb = { name: string; href: string };

/**
 * İç sayfaların üst bölümü. Hero ile aynı gerekçeyle giriş animasyonu
 * CSS tabanlıdır (`animate-rise`); JS beklenmez, LCP gecikmez.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-sage-200 bg-sage-50 bg-mesh">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        {breadcrumbs?.length ? (
          <nav aria-label="Sayfa yolu" className="animate-rise mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-muted">
              <li>
                <Link href="/" className="transition-colors hover:text-sage-800">
                  Ana Sayfa
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <span aria-hidden className="text-sage-300">
                    /
                  </span>
                  {index === breadcrumbs.length - 1 ? (
                    <span aria-current="page" className="text-ink">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link href={crumb.href} className="transition-colors hover:text-sage-800">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div className="max-w-3xl">
          {eyebrow ? (
            <p
              className="animate-rise mb-4 inline-flex items-center gap-2 rounded-full border border-sage-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] text-sage-700 uppercase"
              style={{ animationDelay: "40ms" }}
            >
              <span aria-hidden className="size-1.5 rounded-full bg-sage-400" />
              {eyebrow}
            </p>
          ) : null}

          <h1 className="font-display text-4xl leading-[1.1] font-semibold text-balance sm:text-5xl">
            {title}
          </h1>

          {description ? (
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">{description}</p>
          ) : null}

          {children ? (
            <div className="animate-rise" style={{ animationDelay: "200ms" }}>
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
