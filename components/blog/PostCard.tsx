import Link from "next/link";
import { ArrowUpRightIcon, ClockIcon } from "@/components/graphics/Icons";
import { formatPostDate, type PostMeta } from "@/lib/content/post";
import { cn } from "@/lib/utils";

export function PostCard({ post, className }: { post: PostMeta; className?: string }) {
  return (
    <article className={cn("h-full", className)}>
      <Link
        href={`/blog/${post.slug}`}
        className="group flex h-full flex-col rounded-3xl border border-sage-200/80 bg-white p-7 shadow-soft transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-sage-300 hover:shadow-lift"
      >
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full bg-sage-100 px-3 py-1.5 text-xs font-semibold text-sage-700">
            {post.category}
          </span>
          <ArrowUpRightIcon className="size-5 text-sage-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sage-600" />
        </div>

        <h3 className="mt-5 font-display text-xl leading-snug font-semibold text-balance">
          {post.title}
        </h3>

        <p className="mt-3 grow text-sm leading-relaxed text-ink-soft">{post.description}</p>

        <div className="mt-6 flex items-center gap-3 border-t border-sage-100 pt-5 text-xs text-ink-muted">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          <span aria-hidden className="size-1 rounded-full bg-sage-300" />
          <span className="inline-flex items-center gap-1.5">
            <ClockIcon className="size-3.5" />
            {post.readingTime} dk okuma
          </span>
        </div>
      </Link>
    </article>
  );
}
