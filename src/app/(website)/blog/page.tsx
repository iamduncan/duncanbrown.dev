import { draftMode } from 'next/headers';
import LiveQuery from 'next-sanity/preview/live-query';
import { Suspense } from 'react';

import { sanityFetch } from '@/lib/sanity/sanity.fetch';
import { paginatedquery } from '@/lib/sanity/sanity.queries';

import Blog from './blog';

const POSTS_PER_PAGE = 6;

export default async function ArchivePage() {
  const posts = await sanityFetch({
    query: paginatedquery,
    params: { limit: POSTS_PER_PAGE, pageIndex: 0 },
    tags: ['archive'],
  });
  const draft = await draftMode();
  return (
    <Suspense>
      <LiveQuery
        enabled={draft.isEnabled}
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
