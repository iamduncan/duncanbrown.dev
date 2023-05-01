import HomePage from './home';
import { getAllPosts, getSettings } from '@/lib/sanity/sanity.client';

export default async function IndexPage() {
  const [posts, settings] = await Promise.all([getAllPosts(), getSettings()]);
  return <HomePage posts={posts} settings={settings} />;
}

// export const revalidate = 60;
