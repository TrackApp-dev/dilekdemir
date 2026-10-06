import Image from "next/image";
import { ShieldIcon } from "@/components/graphics/Icons";
import { siteConfig } from "@/lib/site";

type HeroVisualProps = {
  /**
   * Danışman fotoğrafı eklendiğinde bu prop'u doldurmanız yeterlidir;
   * illüstrasyon otomatik olarak fotoğrafla değişir, çerçeve ve rozet aynı kalır.
   * Örnek: <HeroVisual photo={{ src: "/dilek-demir.jpg", alt: "Dilek Demir" }} />
   */
  photo?: { src: string; alt: string };
};

export function HeroVisual({ photo }: HeroVisualProps) {
  return (
    <div className="relative mx-auto w-full max-w-[30rem]">
      {/* Arka plandaki yumuşak ışıma */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[3rem] bg-sage-200/45 blur-2xl"
      />

      <div className="relative overflow-hidden rounded-[2.5rem] border border-sage-200 bg-white shadow-lift">
        {photo ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            width={960}
            height={1040}
            priority
            sizes="(max-width: 1024px) 100vw, 30rem"
            className="h-auto w-full object-cover"
          />
        ) : (
          <AbstractIllustration />
        )}
      </div>

      {/* Güven rozeti — fotoğraf eklendiğinde de aynı konumda kalır */}
      <div className="absolute -bottom-5 left-1/2 w-[min(20rem,90%)] -translate-x-1/2 rounded-2xl border border-sage-200 bg-white/95 px-5 py-4 shadow-lift backdrop-blur">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sage-100 text-sage-700">
            <ShieldIcon className="size-5" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-ink">Gizlilik esaslı çalışma</p>
            <p className="truncate text-xs text-ink-muted">
              {siteConfig.role} · İstanbul
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Soyut, güven veren kompozisyon: sarmalayan bir kavis (koruma),
 * merkezdeki daire (birey) ve dışa yayılan halkalar (iyileşme/gelişim).
 */
function AbstractIllustration() {
  return (
    <svg
      viewBox="0 0 480 520"
      role="img"
      aria-label="Sakinlik ve güveni temsil eden soyut illüstrasyon"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="hv-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F8FAF9" />
          <stop offset="55%" stopColor="#EDF6F1" />
          <stop offset="100%" stopColor="#DDEFE6" />
        </linearGradient>
        <linearGradient id="hv-arc" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#5B7D6D" />
          <stop offset="100%" stopColor="#7FAF9A" />
        </linearGradient>
        <linearGradient id="hv-core" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#DDEFE6" />
        </linearGradient>
      </defs>

      <rect width="480" height="520" fill="url(#hv-bg)" />

      {/* Yayılan halkalar */}
      <g stroke="#B8DBC9" fill="none" opacity="0.75">
        <circle cx="240" cy="300" r="196" strokeWidth="1" opacity="0.45" />
        <circle cx="240" cy="300" r="152" strokeWidth="1.2" opacity="0.6" />
        <circle cx="240" cy="300" r="108" strokeWidth="1.4" />
      </g>

      {/* Sarmalayan kavis */}
      <path
        d="M108 306a132 132 0 0 1 264 0"
        fill="none"
        stroke="url(#hv-arc)"
        strokeWidth="26"
        strokeLinecap="round"
      />
      <path
        d="M150 322a90 90 0 0 1 180 0"
        fill="none"
        stroke="#7FAF9A"
        strokeWidth="12"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Merkez */}
      <circle cx="240" cy="316" r="52" fill="url(#hv-core)" stroke="#B8DBC9" strokeWidth="1.5" />
      <circle cx="240" cy="316" r="20" fill="#7FAF9A" />

      {/* Büyümeyi temsil eden filiz */}
      <path
        d="M240 264v-46"
        stroke="#5B7D6D"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M240 232c-22-4-34-18-34-38 22 0 36 14 34 38Z"
        fill="#7FAF9A"
        opacity="0.9"
      />
      <path
        d="M240 244c20-6 30-20 30-40-20 1-33 16-30 40Z"
        fill="#5B7D6D"
        opacity="0.75"
      />

      {/* Serbest noktalar */}
      <g fill="#7FAF9A">
        <circle cx="86" cy="132" r="8" opacity="0.55" />
        <circle cx="396" cy="164" r="6" opacity="0.45" />
        <circle cx="368" cy="424" r="9" opacity="0.4" />
        <circle cx="112" cy="418" r="5" opacity="0.5" />
        <circle cx="300" cy="96" r="4" opacity="0.4" />
      </g>
    </svg>
  );
}
