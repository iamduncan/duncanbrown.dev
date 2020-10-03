import React from 'react'
import styled from 'styled-components'

import Comment from './Forms/Comment'

const ContentFormWrapper = styled.div`
  padding: 0 30px 30px;

  @media only screen and (max-width: 500px) {
    padding: 0;
  }
`

const CommentForm = ({ post }) => {
  return (
    <ContentFormWrapper>
      <Comment slug={post.frontmatter.slug} />
    </ContentFormWrapper>
  )
}

export default CommentForm
