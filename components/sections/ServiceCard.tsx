import Link from "next/link";
import { ServiceIcon, ArrowUpRightIcon } from "@/components/graphics/Icons";
import type { Service } from "@/lib/content/services";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  return (
    <Link
      href={`/hizmetler/${service.slug}`}
      className={cn(
        "group relative flex h-full flex-col rounded-3xl border border-sage-200/80 bg-white p-7",
        "shadow-soft transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:-translate-y-1 hover:border-sage-300 hover:shadow-lift",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-sage-100 text-sage-700 transition-colors duration-300 group-hover:bg-sage-600 group-hover:text-white">
          <ServiceIcon name={service.icon} className="size-6" />
        </span>
        <ArrowUpRightIcon className="size-5 shrink-0 text-sage-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sage-600" />
      </div>

      <h3 className="mt-6 font-display text-xl font-semibold">{service.title}</h3>
      <p className="mt-3 grow text-sm leading-relaxed text-ink-soft">{service.summary}</p>

      <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-sage-700">
        Ayrıntılı bilgi
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      </p>
    </Link>
  );
}
