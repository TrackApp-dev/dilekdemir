"use client";

import { useEffect, useRef, useState } from "react";
import { loadCalendly, withCalendlyTheme } from "@/components/appointment/calendly";

/**
 * Görünüm alanına girdiğinde Calendly takvimini yükleyen gömülü widget.
 * Yüklenene kadar iskelet (skeleton) gösterilir; hata durumunda alternatif
 * iletişim yolları önerilir.
 */
export function CalendlyInline({ url, height = 700 }: { url: string; height?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    let poll = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        setStatus("loading");

        loadCalendly()
          .then(() => {
            window.Calendly?.initInlineWidget({
              url: withCalendlyTheme(url),
              parentElement: node,
            });

            // Widget gerçekten açıldığında iskeleti kaldır; açılmazsa
            // (hatalı URL, engellenen istek vb.) alternatif yolları göster.
            const deadline = Date.now() + 8000;
            poll = window.setInterval(() => {
              if (node.querySelector("iframe")) {
                window.clearInterval(poll);
                setStatus("ready");
              } else if (Date.now() > deadline) {
                window.clearInterval(poll);
                setStatus("error");
              }
            }, 250);
          })
          .catch(() => setStatus("error"));
      },
      { rootMargin: "320px" }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      window.clearInterval(poll);
    };
  }, [url]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-sage-200 bg-white shadow-soft">
      <div
        ref={containerRef}
        style={{ minHeight: height }}
        aria-label="Randevu takvimi"
        role="region"
      />

      {status !== "ready" ? (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white">
          {status === "error" ? (
            <p className="pointer-events-auto max-w-sm px-6 text-center text-sm text-ink-soft">
              Takvim şu anda yüklenemedi. Randevu için telefon veya e-posta ile
              iletişime geçebilirsiniz.
            </p>
          ) : (
            <div className="w-full max-w-md space-y-4 px-8" aria-hidden>
              <div className="h-6 w-2/3 animate-pulse rounded-full bg-sage-100" />
              <div className="h-4 w-1/2 animate-pulse rounded-full bg-sage-100" />
              <div className="grid grid-cols-7 gap-2 pt-4">
                {Array.from({ length: 21 }).map((_, i) => (
                  <div key={i} className="h-9 animate-pulse rounded-lg bg-sage-100" />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
