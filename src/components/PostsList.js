import React from 'react'

import PostsListItem from './PostsListItem'

const PostsList = ({ posts }) => (
  <>
    {posts.map(post => {
      const props = {
        title: post.node.frontmatter.title,
        excerpt: post.node.excerpt,
        slug: post.node.frontmatter.slug,
        timeToRead: post.node.timeToRead,
        tags: post.node.frontmatter.tags || [],
      }

      return <PostsListItem key={props.slug} {...props} />
    })}
  </>
)

export default PostsList
