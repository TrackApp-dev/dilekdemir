import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "white" | "onDark";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap " +
  "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] " +
  "disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-sage-600 text-white shadow-soft hover:bg-sage-700 hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-sage-300 bg-white text-sage-800 hover:border-sage-400 hover:bg-sage-100 hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-sage-700 hover:bg-sage-100",
  white:
    "bg-white text-sage-800 shadow-soft hover:bg-sage-100 hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0",
  // Koyu zemin üzerinde kullanılan çerçeveli varyant
  onDark:
    "bg-transparent text-white ring-1 ring-white/45 ring-inset hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps &
  Omit<React.ComponentProps<typeof Link>, "className" | "children">;

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonAsLink | ButtonAsButton) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href !== undefined) {
    return (
      <Link className={classes} {...(props as ButtonAsLink)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
