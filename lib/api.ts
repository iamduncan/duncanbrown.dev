import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { postFilePaths, POSTS_PATH } from './mdxUtils';
import { serialize } from 'next-mdx-remote/serialize';
import remarkPrism from 'remark-prism';
import rehypeSlug from 'rehype-slug';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug: string) {
  const postFilePath = join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath, 'utf8');

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        {
          plugins: [remarkPrism],
          settings: { plugins: ['line-numbers', 'treeview'] },
        },
      ],
      rehypePlugins: [rehypeSlug],
    },
    scope: data,
  });

  return {
    source: mdxSource,
    data,
  };
}

export const getAllPosts = async () =>
  postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.(md|mdx)?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));
