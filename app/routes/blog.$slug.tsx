import * as React from "react";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  getAllPosts,
  getPostBySlug,
  markdownToHtml,
} from "~/utils/blog.server";
import { getMDXComponent } from "mdx-bundler/client";

import prismStyles from "~/styles/prism.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: prismStyles },
];

export const loader = async ({ request, params }: LoaderArgs) => {
  const slug = params.slug as string;
  const post = await getPostBySlug(slug);
  const posts = await getAllPosts();
  return json({
    post: { data: post.data, content: await markdownToHtml(post.content) },
    posts,
  });
};

export default function BlogPost() {
  const { post, posts } = useLoaderData<typeof loader>();
  const relatedPosts = posts.filter((p) => p.data.slug !== post.data.slug);
  const { code, frontmatter } = post.content;
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <div className="content-container">
        <h1 className="text-4xl">{post.data.title}</h1>
        <div className="prose-xl mx-auto mt-2 md:mt-4">
          <Component />
        </div>
      </div>
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div>
          <h2 className="text-2xl">Related Posts</h2>
          <ul className="mt-4">
            {relatedPosts.map((post) => (
              <li key={post.slug}>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-blue-400 hover:underline"
                >
                  {post.data.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
