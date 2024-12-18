'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect,useState } from 'react';

import Container from '@/components/container';
import PostList from '@/components/postlist';
import { Post } from '@/lib/sanity/sanity.queries';

export default function Post({ posts }: any) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams?.get('page');
  const pageIndex = parseInt(page || '1');

  const POSTS_PER_PAGE = 6;

  const [isLoading, setIsLoading] = useState(false);
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);

  // [(($pageIndex - 1) * 10)...$pageIndex * 10]{
  const params = {
    pageIndex: (pageIndex - 1) * POSTS_PER_PAGE,
    limit: pageIndex * POSTS_PER_PAGE,
  };

  useEffect(() => {
    setIsFirstPage(pageIndex < 2);
  }, [pageIndex]);

  useEffect(() => {
    setIsLastPage(posts.length < POSTS_PER_PAGE);
  }, [posts]);

  const handleNextPage = () => {
    router.push(`/archive?page=${pageIndex + 1}`);
  };

  const handlePrevPage = () => {
    router.push(`/archive?page=${pageIndex - 1}`);
  };

  return (
    <>
      <Container>
        <h1 className="text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
          Archive
        </h1>
        <div className="text-center">
          <p className="mt-2 text-lg">See all posts we have ever written.</p>
        </div>
        {posts && posts?.length === 0 && (
          <div className="flex h-40 items-center justify-center">
            <span className="text-lg text-gray-500">End of the result!</span>
          </div>
        )}

        {posts && !isLoading && (
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
            {posts.map((post: Post) => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>
        )}
        <div className="mt-10 flex items-center justify-center">
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              disabled={isFirstPage}
              onClick={handlePrevPage}
              className="relative inline-flex items-center gap-1 rounded-l-md border border-gray-300 bg-white px-3 py-2 pr-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
            >
              <ChevronLeftIcon className="h-3 w-3" aria-hidden="true" />
              <span>Previous</span>
            </button>
            <button
              onClick={handleNextPage}
              disabled={isLastPage}
              className="relative inline-flex items-center gap-1 rounded-r-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
            >
              <span>Next</span>
              <ChevronRightIcon className="h-3 w-3" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </Container>
    </>
  );
}
