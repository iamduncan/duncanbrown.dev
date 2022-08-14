import * as React from "react";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPostBySlug, markdownToHtml } from "~/utils/blog.server";
import { getMDXComponent } from "mdx-bundler/client";

import prismStyles from "~/styles/prism.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: prismStyles },
];

export const loader = async ({ request, params }: LoaderArgs) => {
  const slug = params.slug as string;
  const post = await getPostBySlug(slug);
  return json({
    post: { data: post.data, content: await markdownToHtml(post.content) },
  });
};

export default function BlogPost() {
  const { post } = useLoaderData<typeof loader>();
  const { code, frontmatter } = post.content;
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <div className="mx-10 p-6 rounded-xl bg-gray-300 dark:bg-gray-800">
      <h1 className="text-4xl">{post.data.title}</h1>
      <div className="mt-4 prose-lg mx-auto">
        <Component />
      </div>
    </div>
  );
}
