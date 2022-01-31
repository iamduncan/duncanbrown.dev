import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import PostBody from '@components/post-body';
import PostHeader from '@components/post-header';
import Layout from '@components/layout';
import { getPostBySlug, getAllPosts } from '@libs/api';
import PostTitle from '@components/post-title';
import Head from 'next/head';
import { CMS_NAME } from '@libs/constants';
import markdownToHtml from '@libs/markdownToHtml';
import PostType from '@my-types/post';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className='prose lg:prose-xl px-8 max-w-7xl m-auto my-4 sm:my-16 mb-32'>
            <Head>
              <title>
                {post.title} | {CMS_NAME}
              </title>
              <meta property='og:image' content={post.ogImage.url} />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
          </article>
        </>
      )}
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'published',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug', 'published']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
