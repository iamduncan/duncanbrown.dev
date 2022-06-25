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
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Author from '@my-types/author';

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    date: string;
    coverImage: string;
    author: Author;
    excerpt: string;
    ogImage: {
      url: string;
    };
  };
  slug?: string;
  preview?: boolean;
};

const Post = ({ source, frontMatter, slug, preview }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className='prose lg:prose-lg px-8 max-w-7xl m-auto my-4 sm:my-16 mb-32'>
            <Head>
              <title>
                {frontMatter.title} | {CMS_NAME}
              </title>
              <meta property='og:image' content={frontMatter.ogImage.url} />
            </Head>
            <PostHeader
              title={frontMatter.title}
              coverImage={frontMatter.coverImage}
              date={frontMatter.date}
              author={frontMatter.author}
            />
            <PostBody source={source} />
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
  const post = await getPostBySlug(params.slug);

  return {
    props: {
      source: post.source,
      frontMatter: post.data,
      slug: params.slug,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllPosts();

  return {
    paths: paths,
    fallback: false,
  };
}
