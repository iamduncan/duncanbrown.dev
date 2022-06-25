import Author from './author';

type PostType = {
  data: {
    title: string;
    date: string;
    coverImage: string;
    author: Author;
    excerpt: string;
    ogImage: {
      url: string;
    };
    slug?: string;
  };
  slug: string;
  content: string;
  filePath: string;
};

export default PostType;
