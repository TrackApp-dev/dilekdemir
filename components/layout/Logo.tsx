import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — ana sayfa`}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span className="relative flex size-10 items-center justify-center rounded-xl bg-sage-600 text-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5">
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="none">
          <path
            d="M12 20v-7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M12 13c-4 0-6.5-2.6-6.5-7C9.6 6 12.3 8.6 12 13Z"
            fill="currentColor"
            opacity="0.9"
          />
          <path
            d="M12 15c3.4-.6 5.4-3.2 5.2-7.2C13.8 8.2 11.6 11 12 15Z"
            fill="currentColor"
            opacity="0.55"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-semibold tracking-tight text-ink">
          {siteConfig.name}
        </span>
        <span className="mt-1 hidden text-[0.7rem] font-medium tracking-[0.1em] whitespace-nowrap text-ink-muted uppercase sm:block">
          {siteConfig.role}
        </span>
      </span>
    </Link>
  );
}
