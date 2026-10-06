"use client";

import { useMemo, useState } from "react";
import { PostCard } from "@/components/blog/PostCard";
import { Reveal } from "@/components/ui/Reveal";
import type { PostMeta } from "@/lib/content/post";
import { cn } from "@/lib/utils";

/**
 * Tüm yazılar sunucu tarafında render edilir; filtre yalnızca görünürlüğü
 * değiştirir. Böylece SEO açısından tüm içerik ilk HTML'de yer alır.
 */
export function BlogGrid({
  posts,
  categories,
}: {
  posts: PostMeta[];
  categories: { name: string; count: number }[];
}) {
  const [active, setActive] = useState<string>("Tümü");

  const filtered = useMemo(
    () => (active === "Tümü" ? posts : posts.filter((p) => p.category === active)),
    [active, posts]
  );

  const chips = [{ name: "Tümü", count: posts.length }, ...categories];

  return (
    <div>
      <h2 className="sr-only">Tüm yazılar</h2>

      <div className="flex flex-wrap justify-center gap-2.5">
        {chips.map((chip) => (
          <button
            key={chip.name}
            type="button"
            onClick={() => setActive(chip.name)}
            aria-pressed={active === chip.name}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
              active === chip.name
                ? "border-sage-600 bg-sage-600 text-white shadow-soft"
                : "border-sage-200 bg-white text-ink-soft hover:border-sage-300 hover:text-sage-800"
            )}
          >
            {chip.name}
            <span
              className={cn(
                "ml-2 text-xs",
                active === chip.name ? "text-sage-100" : "text-ink-muted"
              )}
            >
              {chip.count}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post, index) => (
          <Reveal key={post.slug} delay={Math.min(index * 0.06, 0.25)}>
            <PostCard post={post} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-ink-muted">
          Bu kategoride henüz yazı bulunmuyor.
        </p>
      ) : null}
    </div>
  );
}
