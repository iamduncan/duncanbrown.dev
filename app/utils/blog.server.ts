import fs from "fs";
import { bundleMDX } from "mdx-bundler";
import matter from "gray-matter";
import { join } from "path";
import calculateReadingTime from "reading-time";

const postsDirectory = join(process.cwd(), "content/blog");

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
      const { data, content } = matter(source);

      return {
        data,
        readingTime: calculateReadingTime(content),
        slug: filePath.replace(/\.(md|mdx)?$/, ""),
      };
    })
    .filter((post) => post.data.published)
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1));

export const getPostBySlug = async (slug: string) => {
  const source = fs.readFileSync(join(postsDirectory, `${slug}.mdx`));
  const { code, frontmatter, matter } = await markdownToHtml(source.toString());

  return {
    slug,
    code,
    frontmatter,
    readingTime: calculateReadingTime(matter.content),
  };
};

// get all categories from post frontmatter
export const getAllCategories = async () => {
  const posts = await getAllPosts();
  const categories = posts.map((post) => post.data.category);
  return [...new Set(categories)];
};

// get all posts for a category
export const getPostsByCategory = async (category: string) => {
  const posts = await getAllPosts();
  return posts.filter((post) => post.data.category === category);
};

export const markdownToHtml = async (mdxSource: string) => {
  const { default: remarkPrism } = await import("remark-prism");
  const { default: rehypeSlug } = await import("rehype-slug");
  const { default: rehypeAddClasses } = await import("rehype-add-classes");
  const { default: rehypeAutoLink } = await import("rehype-autolink-headings");
  const { h, s } = await import("hastscript");

  return bundleMDX({
    source: mdxSource,
    mdxOptions(options, frontmatter) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkPrism];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        [
          rehypeAddClasses,
          {
            "h1,h2,h3": "group",
          },
        ],
        [
          rehypeAutoLink,
          {
            behavior: "append",
            properties: {
              class: "autolink-header",
              ariaHidden: true,
              tabIndex: -1,
            },
            content: [
              h("span.hidden", " permalink"),
              s(
                "svg.inline.ml-4.hidden.group-hover:inline-block",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 24,
                  height: 24,
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                },
                s("path", {
                  d: "M9.199 13.599a5.99 5.99 0 0 0 3.949 2.345 5.987 5.987 0 0 0 5.105-1.702l2.995-2.994a5.992 5.992 0 0 0 1.695-4.285 5.976 5.976 0 0 0-1.831-4.211 5.99 5.99 0 0 0-6.431-1.242 6.003 6.003 0 0 0-1.905 1.24l-1.731 1.721a.999.999 0 1 0 1.41 1.418l1.709-1.699a3.985 3.985 0 0 1 2.761-1.123 3.975 3.975 0 0 1 2.799 1.122 3.997 3.997 0 0 1 .111 5.644l-3.005 3.006a3.982 3.982 0 0 1-3.395 1.126 3.987 3.987 0 0 1-2.632-1.563A1 1 0 0 0 9.201 13.6zm5.602-3.198a5.99 5.99 0 0 0-3.949-2.345 5.987 5.987 0 0 0-5.105 1.702l-2.995 2.994a5.992 5.992 0 0 0-1.695 4.285 5.976 5.976 0 0 0 1.831 4.211 5.99 5.99 0 0 0 6.431 1.242 6.003 6.003 0 0 0 1.905-1.24l1.723-1.723a.999.999 0 1 0-1.414-1.414L9.836 19.81a3.985 3.985 0 0 1-2.761 1.123 3.975 3.975 0 0 1-2.799-1.122 3.997 3.997 0 0 1-.111-5.644l3.005-3.006a3.982 3.982 0 0 1 3.395-1.126 3.987 3.987 0 0 1 2.632 1.563 1 1 0 0 0 1.602-1.198z",
                })
              ),
            ],
          },
        ],
      ];

      return options;
    },
  });
};
