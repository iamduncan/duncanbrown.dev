import React from 'react'
import styled from 'styled-components'

import Content from './Content'

const ContentFormWrapper = styled.div`
  padding: 0 30px 30px;

  @media only screen and (max-width: 500px) {
    padding: 0;
  }
`

const CommentForm = ({ post }) => {
  return (
    <ContentFormWrapper>
      <Content>
        <form action="">
          <input type="text" />
          <input type="text" />
          <input type="hidden" name="postSlug" value={post.slug} />
        </form>
      </Content>
    </ContentFormWrapper>
  )
}

export default CommentForm
