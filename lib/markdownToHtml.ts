import { unified } from 'unified';
import html from 'remark-html';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import prism from 'remark-prism';

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(prism, {
      plugins: ['line-numbers', 'treeview'],
    })
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
