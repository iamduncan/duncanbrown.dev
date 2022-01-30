import Intro from '@components/intro';
import Layout from '@components/layout';
import { CMS_NAME } from '@libs/constants';
import Head from 'next/head';

const SocialPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Hi! 👋 I'm Duncan Brown | {CMS_NAME}</title>
        </Head>
        <Intro />
        <div>
          <h1>Social</h1>
          <p>
            <a href='https://twitter.com/iamduncanbrown'>Twitter</a>
          </p>
          <p>
            <a href='https://www.linkedin.com/in/duncanjbrown/'>LinkedIn</a>
          </p>
        </div>
      </Layout>
    </>
  );
};

export default SocialPage;
