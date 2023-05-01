import { defineField, defineType } from 'sanity';

export const postElementType = defineType({
  type: 'object',
  name: 'postElement',
  title: 'Post element',
  fields: [
    defineField({
      type: 'reference',
      name: 'article',
      title: 'Article',
      to: [{ type: 'article' }],
    }),
  ],
  preview: {
    select: {
      title: 'article.title',
      subtitle: 'article.subtitle',
    },
  },
});
