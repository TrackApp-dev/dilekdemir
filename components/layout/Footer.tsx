import Link from "next/link";

import { Logo } from "@/components/layout/Logo";
import {
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/graphics/Icons";
import { legalNavigation, navigation, siteConfig } from "@/lib/site";
import { services } from "@/lib/content/services";

export function Footer() {
  const { contact, social } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sage-200 bg-white">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-soft">
              {siteConfig.shortDescription} Çocuğunuz ve aileniz için güvenli bir
              başlangıç noktası.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {social.instagram ? (
                <SocialLink href={social.instagram} label="Instagram">
                  <InstagramIcon className="size-[18px]" />
                </SocialLink>
              ) : null}
              {social.linkedin ? (
                <SocialLink href={social.linkedin} label="LinkedIn">
                  <LinkedinIcon className="size-[18px]" />
                </SocialLink>
              ) : null}
            </div>
          </div>

          <nav aria-label="Hızlı bağlantılar" className="lg:col-span-2">
            <FooterTitle>Menü</FooterTitle>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
              <li>
                <FooterLink href="/randevu">Randevu</FooterLink>
              </li>
            </ul>
          </nav>

          <nav aria-label="Hizmetler" className="lg:col-span-3">
            <FooterTitle>Hizmetler</FooterTitle>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <FooterLink href={`/hizmetler/${service.slug}`}>
                    {service.title}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <FooterTitle>İletişim</FooterTitle>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li>
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="flex items-start gap-3 text-ink-soft transition-colors hover:text-sage-800"
                >
                  <PhoneIcon className="mt-0.5 size-4 shrink-0 text-sage-500" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-3 text-ink-soft transition-colors hover:text-sage-800"
                >
                  <MailIcon className="mt-0.5 size-4 shrink-0 text-sage-500" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-ink-soft">
                <MapPinIcon className="mt-0.5 size-4 shrink-0 text-sage-500" />
                <span>
                  {contact.address.street}
                  <br />
                  {contact.address.district} / {contact.address.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-sage-200 bg-sage-50 p-5 text-sm leading-relaxed text-ink-soft">
          <p>
            <strong className="font-semibold text-ink">Bilgilendirme:</strong> Bu
            web sitesindeki içerikler yalnızca bilgilendirme amaçlıdır; tıbbi tanı,
            tedavi ya da bireysel danışmanlık yerine geçmez. Acil bir durumda
            <span className="font-semibold text-ink"> 112</span> Acil Çağrı Merkezi&apos;ni
            arayınız.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-sage-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-muted">
            © {year} {siteConfig.name}. Tüm hakları saklıdır.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <FooterLink href={item.href} className="text-xs">
                  {item.label}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-sm font-semibold tracking-[0.12em] text-ink uppercase">
      {children}
    </h2>
  );
}

function FooterLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`text-sm text-ink-soft transition-colors duration-200 hover:text-sage-800 ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex size-10 items-center justify-center rounded-full border border-sage-200 bg-white text-sage-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-sage-300 hover:bg-sage-100"
    >
      {children}
    </a>
  );
}
