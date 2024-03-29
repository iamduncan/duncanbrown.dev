import { sanityFetch } from '@/lib/sanity/sanity.fetch';
import PostPage from './default';

import { getAllPostsSlugs, getPostBySlug } from '@/lib/sanity/sanity.client';
import { Post, postBySlugQuery } from '@/lib/sanity/sanity.queries';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return await getAllPostsSlugs();
}

export async function generateMetadata({ params }: Props) {
  const post = await sanityFetch<Post>({
    query: postBySlugQuery,
    params: { slug: params.slug },
    tags: ['post'],
  });
  return { title: post.title };
}

export default async function PostDefault({ params }: Props) {
  const post = await sanityFetch<Post>({
    query: postBySlugQuery,
    params: { slug: params.slug },
    tags: ['post'],
  });
  return <PostPage post={post} />;
}
