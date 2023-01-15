import * as React from "react";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import {
  getAllPosts,
  getPostBySlug,
  markdownToHtml,
} from "~/utils/blog.server";
import { getMDXComponent } from "mdx-bundler/client";

import prismStyles from "~/styles/prism.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: prismStyles },
];

export const loader = async ({ request, params }: LoaderArgs) => {
  const slug = params.slug as string;
  const post = await getPostBySlug(slug);
  const posts = await getAllPosts();
  return json({
    post,
    posts,
  });
};

export default function BlogPost() {
  const { post, posts } = useLoaderData<typeof loader>();
  const relatedPosts = posts.filter(
    (p) => p.data.slug !== post.frontmatter.slug
  );
  const Component = React.useMemo(
    () => getMDXComponent(post.code),
    [post.code]
  );

  return (
    <>
      <div className="content-container custom-scrollbar overflow-y-auto">
        <h1 className="text-4xl">{post.frontmatter.title}</h1>
        <div className="mt-2 text-sm dark:text-slate-400">
          {new Date(post.frontmatter.date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          - {post.readingTime.text}
        </div>
        <Link
          to="/blog"
          className="group mt-4 flex w-fit items-center space-x-2 leading-4 hover:underline"
        >
          <ArrowLeftIcon className="h-5 w-5 transition-transform ease-in-out group-hover:-translate-x-2" />
          <span>Back to blog</span>
        </Link>
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
