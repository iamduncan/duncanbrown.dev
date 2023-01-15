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
      {posts.map((post) => (
        <div key={post.slug} className="content-container mt-4 md:mt-10">
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
