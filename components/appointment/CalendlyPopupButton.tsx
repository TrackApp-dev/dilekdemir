"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { loadCalendly, withCalendlyTheme } from "@/components/appointment/calendly";

type Props = {
  url: string;
  children: React.ReactNode;
  variant?: React.ComponentProps<typeof Button>["variant"];
  size?: React.ComponentProps<typeof Button>["size"];
  className?: string;
};

/** Calendly'yi modal olarak açar; betik yalnızca tıklama anında yüklenir. */
export function CalendlyPopupButton({ url, children, variant, size, className }: Props) {
  const [loading, setLoading] = useState(false);

  const open = async () => {
    setLoading(true);
    try {
      await loadCalendly();
      window.Calendly?.initPopupWidget({ url: withCalendlyTheme(url) });
    } catch {
      // Betik yüklenemezse kullanıcı yine de Calendly sayfasına ulaşabilsin
      window.open(url, "_blank", "noopener,noreferrer");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      type="button"
      onClick={open}
      variant={variant}
      size={size}
      className={className}
      aria-busy={loading}
    >
      {children}
    </Button>
  );
}
