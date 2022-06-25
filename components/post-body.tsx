import Head from 'next/head';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

type Props = {
  source: MDXRemoteSerializeResult;
};

const components = {
  // a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  // TestComponent: dynamic(() => import('../../components/TestComponent')),
  Head,
};

const PostBody = ({ source }: Props) => {
  return <MDXRemote {...source} components={components} />;
};

export default PostBody;
