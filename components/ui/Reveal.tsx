"use client";

import { m, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Giriş yönü */
  direction?: "up" | "left" | "right" | "none";
  as?: "div" | "li" | "span";
};

const offset = { up: { y: 18 }, left: { x: -18 }, right: { x: 18 }, none: {} };

/**
 * Görünüm alanına girdiğinde bir kez çalışan, sade giriş animasyonu.
 *
 * `prefers-reduced-motion` açıkken animasyon tamamen devre dışı kalır ve
 * içerik doğrudan render edilir. JavaScript kapalıyken de içeriğin görünür
 * kalması için `app/layout.tsx` içinde bir <noscript> yedeği bulunur.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  const Tag = m[as];

  return (
    <Tag
      className={cn(className)}
      initial={{ opacity: 0, ...offset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
