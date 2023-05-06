import Link from 'next/link';
import Container from '@/components/container';
import PostList from '@/components/postlist';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import SocialLinks from '@/components/ui/SocialLinks';
import SubscribeForm from '@/components/SubscribeForm';

const inter = Inter({ subsets: ['latin'] });

export default function Post({ posts, settings }: any) {
  return (
    <Container>
      {posts && posts.length > 0 && (
        <>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {posts.slice(0, 2).map((post: any) => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts.slice(2, 14).map((post: any) => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
            >
              <span>View all Posts</span>
            </Link>
          </div>
        </>
      )}
      <>
        <div className="gap-12 md:flex">
          <div className="prose prose-xl prose-invert w-full md:w-2/3">
            <h2 className={inter.className}>Welcome to my website!</h2>
            <p>
              Hi, thanks for dropping by. I am a web developer currently living in the
              South West of England. My interests range from technology to programming. I
              also enjoy the great outdoors and gardening.
            </p>
            <p>
              If you would like to hire me, vist{' '}
              <a href="https://www.wessexdigitalsolutions.co.uk">
                Wessex Digital Solutions
              </a>{' '}
              for more details.
            </p>
            <p>
              If you&apos;d like to get in touch, feel free to say hello through any of
              the social links.
            </p>
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-1/3">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100">
              Newsletter
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Subscribe to my newsletter to get notified when I publish new blog posts,
              tutorials and other content.
            </p>
            <p className="text-md mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
              I won&apos;t send you spam. Unsubscribe at any time. No hard feelings.
            </p>
            <SubscribeForm />
          </div>
        </div>
        <div className="mx-auto my-10 grid max-w-screen-md auto-cols-fr gap-2 md:grid-cols-3">
          {settings.social && <SocialLinks settings={settings} />}
        </div>
      </>
    </Container>
  );
}
