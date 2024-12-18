import { draftMode } from 'next/headers';
import {LiveQuery} from 'next-sanity/preview/live-query';

import { getSettings } from '@/lib/sanity/sanity.client';
import { sanityFetch } from '@/lib/sanity/sanity.fetch';
import { indexQuery } from '@/lib/sanity/sanity.queries';

import HomePage from './home';

export default async function IndexPage() {
  const [posts, settings] = await Promise.all([sanityFetch({
    query: indexQuery,
    tags: ['index'],
  }), getSettings()]);
  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={indexQuery}
      initialData={posts}
      as={HomePage}
    >
      <HomePage posts={posts} settings={settings} />
    </LiveQuery>
  );
}

// export const revalidate = 60;
