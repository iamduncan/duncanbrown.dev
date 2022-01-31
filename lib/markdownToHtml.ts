import remark from 'remark';
import html from 'remark-html';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkPrism from 'remark-prism';
import { unified } from 'unified';

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(remarkPrism, {
      plugins: ['line-numbers', 'treeview'],
    })
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
