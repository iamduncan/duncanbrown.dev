import {
  apiVersion,
  dataset,
  previewSecretDocumentId,
  projectId,
  useCdn,
} from '@/lib/sanity/env';
import { postBySlugQuery } from '@/lib/sanity/sanity.queries';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { PageConfig } from 'next/types';

// res.setPreviewData only exists in the nodejs runtime, setting the config here allows changing the global runtime
// option in next.config.mjs without breaking preview mode
export const config: PageConfig = { runtime: 'nodejs' };

export default function preview(
  req: NextApiRequest,
  res: NextApiResponse<string | void>
): void {
  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});
  // Redirect to a preview capable route
  res.writeHead(307, { Location: '/' });
  res.end();
}
