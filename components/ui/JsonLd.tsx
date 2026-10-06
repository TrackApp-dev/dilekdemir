/** Schema.org JSON-LD çıktısını sayfaya gömer. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // İçerik derleme zamanında bilinen statik veriden üretilir.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
