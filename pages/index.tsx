import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import Post from '../types/post';
import { postFilePaths, POSTS_PATH } from '@libs/mdxUtils';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Props = {
  posts: Post[];
};

const Index = ({ posts }: Props) => {
  const heroPost = posts[0];
  const morePosts = posts.slice(1);

  return (
    <>
      <Layout>
        <Head>
          <title>Hi! 👋 I'm Duncan Brown | {CMS_NAME}</title>
        </Head>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.data.title}
            subTitle=''
            caption=''
            coverImage={heroPost.data.coverImage}
            date={heroPost.data.date}
            author={heroPost.data.author}
            slug={heroPost.filePath.replace(/\.(md|mdx)?$/, '')}
            excerpt={heroPost.data.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const posts = postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
      const { content, data } = matter(source);

      return {
        content,
        data,
        filePath,
      };
    })
    .filter((post) => post.data.published)
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1));

  return { props: { posts } };
};
