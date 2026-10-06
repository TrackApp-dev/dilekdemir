import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PostBody } from "@/components/blog/PostBody";
import { PostCard } from "@/components/blog/PostCard";
import { AppointmentCta } from "@/components/sections/AppointmentSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { ArrowRightIcon, ClockIcon } from "@/components/graphics/Icons";
import { blog } from "@/lib/content/blog";
import { formatPostDate } from "@/lib/content/post";
import { buildMetadata } from "@/lib/seo";
import { blogPostingSchema, breadcrumbSchema, graph } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await blog.getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await blog.getPostBySlug(slug);
  if (!post) {
    return buildMetadata({
      title: "Yazı bulunamadı",
      description: "",
      noIndex: true,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updatedAt ?? post.date,
    tags: post.tags,
    image: post.cover,
  });
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = await blog.getPostBySlug(slug);
  if (!post) notFound();

  const related = await blog.getRelatedPosts(slug, 3);

  return (
    <>
      <JsonLd
        data={graph(
          blogPostingSchema(post),
          breadcrumbSchema([
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        )}
      />

      <article>
        <header className="border-b border-sage-200 bg-sage-50 bg-mesh">
          <div className="container-page py-16 sm:py-20">
            <div className="mx-auto max-w-3xl">
              <nav aria-label="Sayfa yolu" className="animate-rise mb-8">
                <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-muted">
                  <li>
                    <Link href="/" className="transition-colors hover:text-sage-800">
                      Ana Sayfa
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <span aria-hidden className="text-sage-300">
                      /
                    </span>
                    <Link href="/blog" className="transition-colors hover:text-sage-800">
                      Blog
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <span aria-hidden className="text-sage-300">
                      /
                    </span>
                    <span aria-current="page" className="text-ink">
                      {post.category}
                    </span>
                  </li>
                </ol>
              </nav>

              <span
                className="animate-rise inline-flex rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-sage-700 ring-1 ring-sage-200 ring-inset"
                style={{ animationDelay: "40ms" }}
              >
                {post.category}
              </span>

              <h1 className="mt-5 font-display text-4xl leading-[1.12] font-semibold text-balance sm:text-5xl">
                {post.title}
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-ink-soft">{post.description}</p>

              <div
                className="animate-rise mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-muted"
                style={{ animationDelay: "200ms" }}
              >
                <span className="font-medium text-ink">{siteConfig.name}</span>
                <span aria-hidden className="size-1 rounded-full bg-sage-300" />
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                <span aria-hidden className="size-1 rounded-full bg-sage-300" />
                <span className="inline-flex items-center gap-1.5">
                  <ClockIcon className="size-4" />
                  {post.readingTime} dk okuma
                </span>
              </div>
            </div>
          </div>
        </header>

        <Section tone="white">
          <div className="mx-auto max-w-3xl">
            <PostBody content={post.content} />

            {post.tags.length ? (
              <ul className="mt-12 flex flex-wrap gap-2 border-t border-sage-200 pt-8">
                {post.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-sage-200 bg-sage-50 px-3.5 py-1.5 text-sm text-sage-800"
                  >
                    #{tag}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-12 rounded-3xl border border-sage-200 bg-sage-50 p-7">
              <p className="text-sm leading-relaxed text-ink-soft">
                <strong className="font-semibold text-ink">Not:</strong> Bu yazı
                genel bilgilendirme amaçlıdır ve bireysel danışmanlığın yerine
                geçmez. Çocuğunuza ya da ailenize özel bir durum için görüşmek
                isterseniz bir ön görüşme planlayabiliriz.
              </p>
              <Button href="/randevu" className="mt-6">
                Ön Görüşme Planla
                <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </Section>

        {related.length ? (
          <Section tone="default">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold">
                İlgili yazılar
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.06}>
                  <PostCard post={item} />
                </Reveal>
              ))}
            </div>
          </Section>
        ) : null}
      </article>

      <AppointmentCta />
    </>
  );
}
