import { groq } from 'next-sanity';

const postFields = groq`
  _id,
  _createdAt,
  title,
  date,
  excerpt,
  categories[]->,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`;

export const settingsQuery = groq`*[_type == "settings"][0]`;

export const paginatedquery = groq`
*[_type == "post"] | order(publishedAt desc, _createdAt desc) [$pageIndex...$limit] {
  ...,
  "slug": slug.current,
  categories[]->
}
`;

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`;

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
  content,
}
`;

export interface Post {
  _id: string;
  title?: string;
  coverImage?: any;
  date?: string;
  excerpt?: string;
  slug?: string;
  content?: any;
}

export interface Settings {
  title?: string;
  description?: string;
  copyright?: string;
  openGraphImage?: any;
  url?: string;
}
