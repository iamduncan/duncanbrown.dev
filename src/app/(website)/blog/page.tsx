import Blog from './blog';

import { getPaginatedPosts } from '@/lib/sanity/sanity.client';

const POSTS_PER_PAGE = 6;

export default async function ArchivePage() {
  const posts = await getPaginatedPosts(POSTS_PER_PAGE);
  return <Blog posts={posts} />;
}

// export const revalidate = 60;
