import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Content from '../components/Content'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
import SEO from '../components/SEO'

export default ({ data, location }) => {
  const page = data.page

  return (
    <Layout location={location}>
      <SEO
        title={page.frontmatter.title}
        description={page.excerpt}
        path={page.frontmatter.slug}
        cover={page.frontmatter.cover && page.frontmatter.cover.publicURL}
      />

      <Wrapper>
        <Hero
          heroImg={
            page.frontmatter.cover &&
            page.frontmatter.cover.childImageSharp.fluid
          }
          title={page.frontmatter.title}
        />

        <article>
          <Content content={page.body} date={page.frontmatter.date} />
        </article>
      </Wrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    page: mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        cover {
          publicURL
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
