import { Suspense } from 'react';
import Blog from './blog';

import { sanityFetch } from '@/lib/sanity/sanity.fetch';
import { paginatedquery } from '@/lib/sanity/sanity.queries';
import { draftMode } from 'next/headers';
import LiveQuery from 'next-sanity/preview/live-query';

const POSTS_PER_PAGE = 6;

export default async function ArchivePage() {
  const posts = await sanityFetch({
    query: paginatedquery,
    params: { limit: POSTS_PER_PAGE, pageIndex: 0 },
    tags: ['archive'],
  });
  return (
    <Suspense>
      <LiveQuery
        enabled={draftMode().isEnabled}
        query={paginatedquery}
        params={{ limit: POSTS_PER_PAGE, pageIndex: 0 }}
        initialData={posts}
        as={Blog}
      >
        <Blog posts={posts} />
      </LiveQuery>
    </Suspense>
  );
}

// export const revalidate = 60;
