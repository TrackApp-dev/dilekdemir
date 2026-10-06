import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-sage-50 bg-mesh">
      <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-display text-6xl font-semibold text-sage-300">404</p>
        <h1 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
          Aradığınız sayfayı bulamadık
        </h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
          Bağlantı taşınmış ya da kaldırılmış olabilir. Ana sayfadan devam
          edebilir veya doğrudan iletişime geçebilirsiniz.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Ana Sayfaya Dön
          </Button>
          <Button href="/iletisim" variant="secondary" size="lg">
            İletişime Geç
          </Button>
        </div>
      </div>
    </section>
  );
}
