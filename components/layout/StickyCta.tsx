"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";

import { CalendarIcon, MailIcon, PhoneIcon } from "@/components/graphics/Icons";
import { hasPhone, siteConfig } from "@/lib/site";

/**
 * Mobilde, kullanıcı sayfada bir miktar ilerledikten sonra beliren ölçülü
 * dönüşüm çubuğu. Baskı hissi yaratmamak için hero bölümünde görünmez.
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 720);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <m.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-sage-200 bg-white/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-xl lg:hidden"
        >
          <div className="flex items-center gap-3">
            {hasPhone ? (
              <a
                href={`tel:${siteConfig.contact.phoneHref}`}
                className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-sage-300 text-sage-800 transition-colors hover:bg-sage-100"
                aria-label="Telefonla ara"
              >
                <PhoneIcon className="size-5" />
              </a>
            ) : (
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-sage-300 text-sage-800 transition-colors hover:bg-sage-100"
                aria-label="E-posta gönder"
              >
                <MailIcon className="size-5" />
              </a>
            )}
            <Link
              href="/randevu"
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-sage-600 font-semibold text-white shadow-soft transition-colors hover:bg-sage-700"
            >
              <CalendarIcon className="size-[18px]" />
              Randevu Al
            </Link>
          </div>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
