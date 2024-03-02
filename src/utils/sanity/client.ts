import 'server-only';

import {draftMode} from 'next/headers';
import {createClient, type QueryOptions, type QueryParams} from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

export const token = process.env.SANITY_API_READ_TOKEN;


export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags
}: {
  query: string;
  params?: QueryParams;
  tags: string[];
}) {
  const isDraftMode = draftMode().isEnabled;
  if (isDraftMode && !token) {
    throw new Error('Missing token');
  }

  const REVALIDATE_SKIP_CACHE = 0;
  const REVALIDATE_CACHE_FOREVER = false;

  return client.fetch<QueryResponse>(query, params, {
    ...(isDraftMode &&
      ({
        token: token,
        perspective: 'previewDrafts',
      } satisfies QueryOptions)),
    next: {
      revalidate: isDraftMode ? REVALIDATE_SKIP_CACHE : REVALIDATE_CACHE_FOREVER,
      tags,
    },
  })
}