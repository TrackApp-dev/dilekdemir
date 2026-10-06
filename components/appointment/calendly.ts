const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const STYLE_HREF = "https://assets.calendly.com/assets/external/widget.css";

let loader: Promise<void> | null = null;

/**
 * Calendly betiğini yalnızca gerçekten ihtiyaç duyulduğunda (widget görünüm
 * alanına girdiğinde ya da kullanıcı butona bastığında) yükler. Böylece
 * üçüncü taraf JS ilk yüklemeyi ve Lighthouse skorlarını etkilemez.
 */
export function loadCalendly(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (loader) return loader;

  loader = new Promise<void>((resolve, reject) => {
    if (!document.querySelector(`link[href="${STYLE_HREF}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = STYLE_HREF;
      document.head.appendChild(link);
    }

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      if (existing.dataset.loaded === "true") resolve();
      else existing.addEventListener("load", () => resolve(), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        resolve();
      },
      { once: true }
    );
    script.addEventListener("error", () => reject(new Error("Calendly yüklenemedi")), {
      once: true,
    });
    document.head.appendChild(script);
  });

  return loader;
}

/** Marka paletiyle uyumlu Calendly görünümü. */
export function withCalendlyTheme(url: string): string {
  const params = new URLSearchParams({
    hide_gdpr_banner: "1",
    hide_landing_page_details: "0",
    primary_color: "5b7d6d",
    background_color: "ffffff",
    text_color: "1f2937",
  });
  return url.includes("?") ? `${url}&${params}` : `${url}?${params}`;
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
      }) => void;
    };
  }
}
