import 'server-only';

import { draftMode } from 'next/headers';
import type { QueryOptions, QueryParams } from 'next-sanity';

import { client } from './sanity.client';

export const token = process.env.SANITY_API_READ_TOKEN;

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  const draft = await draftMode();
  if (draft.isEnabled && !token) {
    throw new Error('The `SANITY_API_READ_TOKEN` environment variable is required.');
  }

  if (!client) {
    throw new Error('The Sanity client is not configured.');
  }

  return client.fetch<QueryResponse>(query, params, {
    ...(draft.isEnabled &&
      ({
        token: token,
        perspective: 'previewDrafts',
      } satisfies QueryOptions)),
    next: {
      revalidate: draft.isEnabled ? 0 : false,
      tags,
    },
  });
}
