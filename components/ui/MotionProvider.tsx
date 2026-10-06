"use client";

import { LazyMotion, domAnimation } from "framer-motion";

/**
 * Framer Motion özelliklerini tembel yükler (`m` bileşenleriyle birlikte
 * yaklaşık 5x daha küçük bir JS yükü). Children sunucu tarafında render
 * edilmeye devam eder — bu bileşen yalnızca bir sağlayıcıdır.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
