import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";

export function LegalLayout({
  title,
  description,
  updatedAt,
  breadcrumb,
  children,
}: {
  title: string;
  description: string;
  updatedAt: string;
  breadcrumb: { name: string; href: string };
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero
        eyebrow="Yasal"
        title={title}
        description={description}
        breadcrumbs={[breadcrumb]}
      />

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-ink-muted">Son güncelleme: {updatedAt}</p>
          <div className="prose prose-article mt-8 max-w-none prose-headings:font-display prose-headings:font-semibold prose-h2:mt-10 prose-h2:text-xl prose-p:leading-relaxed prose-li:leading-relaxed">
            {children}
          </div>
        </div>
      </Section>
    </>
  );
}
