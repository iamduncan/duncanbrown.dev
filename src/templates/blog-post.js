import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
import Article from '../components/Article'
import PrevNextPost from '../components/PrevNextPost'
import SEO from '../components/SEO'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.post
  const { previous, next } = pageContext
  // const commentsEnabled = process.env.COMMENTS_ENABLED

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        cover={post.frontmatter.cover && post.frontmatter.cover.publicURL}
        imageShare={
          post.frontmatter.imageShare && post.frontmatter.imageShare.publicURL
        }
        lang={post.frontmatter.language}
        path={post.frontmatter.slug}
        isBlogPost
      />
      <Wrapper>
        <Hero
          heroImg={
            post.frontmatter.cover &&
            post.frontmatter.cover.childImageSharp.fluid
          }
          title={post.frontmatter.title}
          tags={post.frontmatter.tags}
        />
        <Article post={post} />
      </Wrapper>

      <PrevNextPost previous={previous} next={next} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      excerpt
      body
      frontmatter {
        title
        date
        slug
        language
        tags
        cover {
          publicURL
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        imageShare {
          publicURL
        }
        translations {
          language
          link
        }
      }
    }
  }
`
