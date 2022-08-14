import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getPostBySlug, markdownToHtml } from '~/utils/blog.server';

export const loader = async ({ request, params }: LoaderArgs) => {
  const slug = params.slug as string;
  const post = await getPostBySlug(slug);
  return json({
    post: { data: post.data, content: await markdownToHtml(post.content) },
  });
};

export default function BlogPost() {
  const { post } = useLoaderData<typeof loader>();
  return (
    <div className='dark:text-gray-50'>
      <div className='mx-10 p-6 rounded-xl bg-gray-300 dark:bg-gray-800'>
        <h1 className='text-4xl'>{post.data.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className='mt-4'
        />
      </div>
    </div>
  );
}
