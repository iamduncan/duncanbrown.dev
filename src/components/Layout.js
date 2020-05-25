import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import 'prismjs/themes/prism-tomorrow.css'
import Header from './Header'
import Footer from './Footer'
import { GlobalStyle } from './Commons'
import { media } from '../tokens'

const SiteContent = styled.div`
  margin: 0 0;

  @media ${media.medium} {
    margin: 60px 0;
  }
`

const Template = ({ children }) => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="https://use.typekit.net/rqj2vyu.css" />
    </Helmet>
    <GlobalStyle />
    <Header />
    <SiteContent>{children}</SiteContent>
    <Footer />
  </>
)

export default Template
