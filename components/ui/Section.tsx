import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  /** Zemin varyantı */
  tone?: "default" | "soft" | "mesh" | "white";
  children: React.ReactNode;
};

const toneClass: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-sage-50",
  soft: "bg-sage-100/60",
  mesh: "bg-sage-50 bg-mesh",
  white: "bg-white",
};

export function Section({
  id,
  className,
  containerClassName,
  tone = "default",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-28 py-20 sm:py-24 lg:py-28", toneClass[tone], className)}
    >
      <div className={cn("container-page", containerClassName)}>{children}</div>
    </section>
  );
}
