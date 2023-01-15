import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getAllPosts } from "~/utils/blog.server";

export const loader = async () => {
  const [posts] = await Promise.all([getAllPosts()]);

  return json({ posts });
};

export default function Blog() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post) => (
        <div
          key={post.slug}
          className="mx-10 mt-10 rounded-xl bg-slate-300 p-6 dark:bg-slate-800"
        >
          <h2 className="text-2xl">
            <a
              href={`/blog/${post.slug}`}
              className="text-blue-400 hover:underline"
            >
              {post.data.title}
            </a>
          </h2>
          <p className="mt-4 text-xl">{post.data.excerpt}</p>
          <p className="mt-4 text-xl">
            <a
              href={`/blog/${post.slug}`}
              className="text-blue-400 hover:underline"
            >
              Read more
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}
