import React from 'react'
import styled from 'styled-components'

import Content from './Content'
import DiscussArticle from './DiscussArticle'
import Bio from './Bio'

const ArticleWrapper = styled.article`
  padding: 0 30px 30px;

  @media only screen and (max-width: 500px) {
    padding: 0;
  }
`

const ArticleFooter = styled.footer`
  position: relative;
  margin: 6rem 0 0;
  padding: 3rem 0 0;
  border-top: 1px solid #ececec;
`

const Article = ({ post }) => {
  return (
    <ArticleWrapper>
      <Content
        content={post.body}
        date={post.frontmatter.date}
        tags={post.frontmatter.tags}
      />
      <DiscussArticle post={post} />
      <ArticleFooter>
        <Bio />
      </ArticleFooter>
    </ArticleWrapper>
  )
}

export default Article
