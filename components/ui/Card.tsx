import { cn } from "@/lib/utils";

type CardProps = {
  className?: string;
  /** Hover'da hafif yükselme efekti */
  interactive?: boolean;
  /** Zemin varyantı: açık kart ya da koyu vurgu kartı */
  tone?: "white" | "accent";
  children: React.ReactNode;
};

const toneClass = {
  white: "border-sage-200/80 bg-white",
  accent: "border-sage-700 bg-sage-600 text-white",
} as const;

export function Card({ className, interactive = false, tone = "white", children }: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-3xl border p-7 shadow-soft",
        toneClass[tone],
        interactive &&
          "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-sage-300 hover:shadow-lift",
        className
      )}
    >
      {children}
    </div>
  );
}
