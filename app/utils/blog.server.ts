import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), 'content/blog');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export const postFilePaths = fs
  .readdirSync(postsDirectory)
  .filter((path) => /\.(md|mdx)?$/.test(path));

export const getAllPosts = async () =>
  postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(join(postsDirectory, filePath));
      const { data } = matter(source);

      return {
        data,
        slug: filePath.replace(/\.(md|mdx)?$/, ''),
      };
    })
    .filter((post) => post.data.published)
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1));

export const getPostBySlug = async (slug: string) => {
  const source = fs.readFileSync(join(postsDirectory, `${slug}.mdx`));
  const { content, data } = matter(source);

  return {
    content,
    data,
    slug,
  };
};

export const markdownToHtml = async (markdownString: string) => {
  const { unified } = await import('unified');
  const { default: markdown } = await import('remark-parse');
  const { default: remark2rehype } = await import('remark-rehype');
  const { default: rehypeStringify } = await import('rehype-stringify');
  const result = await unified()
    .use(markdown)
    .use(remark2rehype)
    .use(rehypeStringify)
    .process(markdownString);

  return result.value.toString();
};
