import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPostsByCategory } from "~/utils/blog.server";

export const loader = async ({ params }: LoaderArgs) => {
  const posts = await getPostsByCategory(params.slug as string);

  return json({ posts });
};

const CategoryPage = () => {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.slug} className="content-container mt-4 md:mt-10">
          <h2 className="text-2xl">
            <Link
              to={`/blog/${post.slug}`}
              className="text-blue-400 hover:underline"
            >
              {post.data.title}
            </Link>
          </h2>
          <p className="mt-4 text-xl">{post.data.excerpt}</p>
          <p className="mt-4 text-xl">
            <Link
              to={`/blog/${post.slug}`}
              className="text-blue-400 hover:underline"
            >
              Read more
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
