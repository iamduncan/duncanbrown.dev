import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getAllPosts } from '~/utils/blog.server';

export const loader = async () => {
  const [posts] = await Promise.all([getAllPosts()]);

  return json({ posts });
};

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <div className='dark:text-gray-50'>
      <div className='mx-10 p-6 rounded-xl bg-gray-300 dark:bg-gray-800'>
        <h1 className='text-4xl'>Hi, I'm Duncan 👋</h1>
        <div className='mt-8'>
          <h2 className='text-2xl'>About Me</h2>
          <p className='mt-4 text-xl'>
            I'm a full stack developer from the UK. I help small businesses with
            their online presence by building them websites and applications
            with my work at{' '}
            <a
              href='https://www.wessexdigitalsolutions.co.uk'
              className='text-blue-400 hover:underline'
            >
              Wessex Digital Solutions
            </a>
            . I also like to write about my experiences and share my knowledge
            with others.
          </p>
        </div>
        <div className='flex w-full mt-8'>
          <div className='w-full md:w-1/2'>
            <h2 className='text-2xl'>What I&apos;ve done</h2>
            <ul className='py-6 pl-4 text-lg'>
              <li>MyLocal Gifts</li>
              <li>Wiltshire Gifts</li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className='w-full md:w-1/2'>
            <h2 className='text-2xl'>What I&apos;m working on</h2>
            <ul className='py-6 pl-4 text-lg'>
              <li>Scout Challenge</li>
              <li>Get into the Garden</li>
              <li>WordPress Update Server</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='mx-10 mt-10 p-6 rounded-xl bg-gray-300 dark:bg-gray-800'>
        <h2 className='text-2xl'>Recent blog posts</h2>
        {posts.map((post) => (
          <div key={post.slug} className='mt-8'>
            <h3 className='text-2xl'>
              <a
                href={`/blog/${post.slug}`}
                className='text-blue-400 hover:underline'
              >
                {post.data.title}
              </a>
            </h3>
            <p className='mt-4 text-xl'>{post.data.excerpt}</p>
            <p className='mt-4 text-xl'>
              <a
                href={`/blog/${post.slug}`}
                className='text-blue-400 hover:underline'
              >
                Read more
              </a>
            </p>
          </div>
        ))}
        <pre>{JSON.stringify(posts, null, 2)}</pre>
      </div>
    </div>
  );
}
