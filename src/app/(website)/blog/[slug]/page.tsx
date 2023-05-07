import PostPage from './default';

import { getAllPostsSlugs, getPostBySlug } from '@/lib/sanity/sanity.client';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return await getAllPostsSlugs();
}

export async function generateMetadata({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  return { title: post.title };
}

export default async function PostDefault({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  return <PostPage post={post} />;
}
