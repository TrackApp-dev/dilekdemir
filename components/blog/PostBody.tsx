import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Blog gövdesi. İçerik markdown olarak saklandığı için CMS'e geçişte
 * yalnızca içeriğin geldiği kaynak değişir; bu bileşen aynı kalır.
 */
export function PostBody({ content }: { content: string }) {
  return (
    <div className="prose prose-article prose-lg max-w-none prose-headings:font-display prose-headings:font-semibold prose-h2:mt-12 prose-h2:text-2xl prose-h3:mt-9 prose-h3:text-xl prose-p:leading-relaxed prose-a:font-medium prose-a:underline-offset-4 prose-li:leading-relaxed prose-strong:text-ink">
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  );
}
