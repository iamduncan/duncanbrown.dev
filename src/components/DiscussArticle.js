import React from 'react'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'

const DiscussArticleWrapper = styled.div`
  text-align: right;
`

const DiscussArticle = ({ post }) => {
  const { siteUrl } = useSiteMetadata()

  const formatedSiteUrl = siteUrl.endsWith('/')
    ? siteUrl.substring(0, siteUrl.length - 1)
    : siteUrl

  const postUri = formatedSiteUrl + '/' + post.frontmatter.slug
  const twitterSearchUri = `https://twitter.com/search?q=${encodeURIComponent(
    postUri,
  )}`

  return (
    <DiscussArticleWrapper>
      <a href={twitterSearchUri} target="_blank">
        Discuss on Twitter
      </a>
    </DiscussArticleWrapper>
  )
}

export default DiscussArticle
