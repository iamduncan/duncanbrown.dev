import React from 'react'
import { Link } from 'gatsby'
import TagList from './TagList'
import useSiteMetadata from '../hooks/use-site-config'
import styled from 'styled-components'
import { colors } from '../tokens'
import { Bull, ReadingTime } from './Commons'

const Post = styled.article`
  border-bottom: 1px solid rgba(214, 209, 230, 0, 5);
  padding-bottom: 1.25rem;
`

const ReadPost = styled(Link)`
  display: block;
  font-size: 0.75rem;
  margin-top: 1rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 2;
  color: ${colors.primary};

  &:hover {
    background-color: ${colors.primaryAlpha};
    border-radius: 0.25rem;
    color: ${colors.textLightest};
  }
`

const PostHeader = styled.header`
  padding: 1em 0;
  font-family: bree, sans-serif;
  font-weight: 600;
  font-style: normal;
`

const Excerpt = styled.p`
  line-height: 1.45;
  padding-bottom: 0.5em;
`

const PostTitleLink = styled(Link)`
  color: ${colors.primary};
  &:hover {
    border-bottom: 1px dotted ${colors.primary};
  }
`

const FooterLine = styled.div`
  color: ${colors.textLight};
  font-size: 0.8em;
  font-family: basic-sans, sans-serif;
  font-weight: 600;
  font-style: normal;
`

const PostsListItem = ({ title, excerpt, slug, tags, timeToRead }) => (
  <Post>
    <PostHeader>
      <h2>
        <PostTitleLink to={`/${slug}`}>{title}</PostTitleLink>
      </h2>
    </PostHeader>
    <section>
      <Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
    </section>
    <footer>
      <FooterLine>
        <ReadingTime min={timeToRead} />
        <Bull />
        <TagList tags={tags} />
      </FooterLine>
      <ReadPost to={`/${slug}`} aria-label={`View ${title} article`}>
        Read Post &gt;
      </ReadPost>
    </footer>
  </Post>
)

export default PostsListItem
