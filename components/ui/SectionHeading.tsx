import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Tag = "h2",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sage-200 bg-white/70 px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] text-sage-700 uppercase">
            <span aria-hidden className="size-1.5 rounded-full bg-sage-400" />
            {eyebrow}
          </p>
        </Reveal>
      ) : null}

      <Reveal delay={0.05}>
        <Tag
          className={cn(
            "font-semibold text-balance",
            Tag === "h1"
              ? "text-4xl leading-[1.1] sm:text-5xl lg:text-[3.4rem]"
              : "text-3xl leading-tight sm:text-4xl"
          )}
        >
          {title}
        </Tag>
      </Reveal>

      {description ? (
        <Reveal delay={0.1}>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
