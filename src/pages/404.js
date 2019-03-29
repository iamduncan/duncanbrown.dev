import React from 'react'
import Layout from '../components/Layout'
import theme from '../../config/theme'
import { graphql } from 'gatsby'
import Container from '../components/Container'
import css from '@emotion/css'

export default ({ data: { site } }) => (
  <Layout
    site={site}
    headerColor={theme.colors.white}
    headerBg={theme.brand.primary}
  >
    <Container
      css={css`
        padding-bottom: 0;
      `}
    >
      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn't exist... the sadness.</p>
      </div>
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
  }
`
