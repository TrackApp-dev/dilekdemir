import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PostCard } from "@/components/blog/PostCard";
import { ArrowRightIcon } from "@/components/graphics/Icons";
import { blog } from "@/lib/content/blog";

export async function BlogPreview() {
  const posts = (await blog.getAllPosts()).slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <Section id="blog" tone="white">
      <SectionHeading
        eyebrow="Blog"
        title="Ebeveynler için yazılar"
        description="Danışmanlık odasında en sık konuştuğumuz konuları, uygulanabilir öneriler eşliğinde yazıyorum."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Reveal key={post.slug} delay={index * 0.07}>
            <PostCard post={post} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12 flex justify-center">
          <Button href="/blog" variant="secondary" size="lg">
            Tüm Yazıları Gör
            <ArrowRightIcon className="size-[18px] transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
