import Intro from '@components/intro';
import Layout from '@components/layout';
import { CMS_NAME } from '@libs/constants';
import Head from 'next/head';

const ContactPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Hi! 👋 I'm Duncan Brown | {CMS_NAME}</title>
        </Head>
        <Intro />
      </Layout>
    </>
  );
};

export default ContactPage;
