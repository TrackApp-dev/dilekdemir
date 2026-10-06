"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "framer-motion";

import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/graphics/Icons";
import { navigation, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menü açıkken arka plan kaydırmasını kilitle
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href.startsWith("/#") ? false : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled || open
          ? "border-b border-sage-200/80 bg-sage-50/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Ana menü" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors duration-200",
                    isActive(item.href)
                      ? "text-sage-800"
                      : "text-ink-soft hover:text-sage-800"
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-4 -bottom-0.5 h-px origin-left bg-sage-400 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isActive(item.href) ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${siteConfig.contact.phoneHref}`}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium whitespace-nowrap text-ink-soft transition-colors hover:text-sage-800 xl:inline-flex"
          >
            <PhoneIcon className="size-4" />
            {siteConfig.contact.phone}
          </a>

          <Button href="/randevu" size="sm">
            Randevu Al
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            className="inline-flex size-11 items-center justify-center rounded-full border border-sage-200 bg-white text-ink transition-colors hover:bg-sage-100 lg:hidden"
          >
            {open ? <MenuIconSwap open /> : <MenuIconSwap />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <m.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-sage-200 bg-sage-50/95 backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Mobil menü" className="container-page py-6">
              <ul className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium text-ink transition-colors hover:bg-white"
                    >
                      {item.label}
                      <span aria-hidden className="text-sage-400">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3">
                <Button href="/randevu" size="lg" onClick={() => setOpen(false)}>
                  Randevu Al
                </Button>
                <Button
                  href={`tel:${siteConfig.contact.phoneHref}`}
                  variant="secondary"
                  size="lg"
                  onClick={() => setOpen(false)}
                >
                  <PhoneIcon className="size-4" />
                  {siteConfig.contact.phone}
                </Button>
              </div>
            </nav>
          </m.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function MenuIconSwap({ open }: { open?: boolean }) {
  return open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />;
}
