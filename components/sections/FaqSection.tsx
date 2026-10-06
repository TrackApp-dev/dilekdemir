"use client";

import { useId, useState } from "react";
import { AnimatePresence, m } from "framer-motion";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ChevronDownIcon } from "@/components/graphics/Icons";
import type { FaqItem } from "@/lib/content/faq";
import { cn } from "@/lib/utils";

export function FaqSection({
  items,
  tone = "default",
  title = "Sık sorulan sorular",
  description = "Aklınıza takılanları önceden yanıtlamak, ilk adımı atmayı kolaylaştırır. Burada bulamadığınız her soru için bana yazabilirsiniz.",
  withHeading = true,
}: {
  items: FaqItem[];
  tone?: "default" | "white" | "soft";
  title?: string;
  description?: string;
  withHeading?: boolean;
}) {
  return (
    <Section id="sss" tone={tone}>
      {withHeading ? (
        <SectionHeading eyebrow="S.S.S." title={title} description={description} />
      ) : (
        <h2 className="sr-only">{title}</h2>
      )}

      <div className="mx-auto mt-14 max-w-3xl divide-y divide-sage-200 overflow-hidden rounded-3xl border border-sage-200 bg-white shadow-soft">
        {items.map((item, index) => (
          <FaqRow key={item.question} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
}

function FaqRow({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <Reveal delay={Math.min(index * 0.04, 0.2)}>
      <h3 className="m-0">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors duration-200 hover:bg-sage-50 sm:px-8 sm:py-6"
        >
          <span className="font-display text-base font-semibold text-ink sm:text-lg">
            {item.question}
          </span>
          <span
            className={cn(
              "flex size-9 shrink-0 items-center justify-center rounded-full border border-sage-200 text-sage-700 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
              open && "rotate-180 border-sage-400 bg-sage-100"
            )}
          >
            <ChevronDownIcon className="size-4" />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open ? (
          <m.div
            key="panel"
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-button`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-[0.95rem] leading-relaxed text-ink-soft sm:px-8 sm:pb-7">
              {item.answer}
            </p>
          </m.div>
        ) : null}
      </AnimatePresence>
    </Reveal>
  );
}
