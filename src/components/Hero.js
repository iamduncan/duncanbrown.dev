import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'
import { colors } from '../tokens'

const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`

const HeroTitle = styled.h1`
  font-family: bree, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 3rem;
  margin: 10px 50px;
  color: ${colors.text};
  /* text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.85); */
`

const HeroSubTitle = styled.h2`
  margin: 10px 50px;
  color: ${colors.textLight};
  /* text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.85); */
`

const Hero = props => {
  const { siteCover } = useSiteMetadata()
  const { fluid } = useSiteImages(siteCover)
  const heroImg = props.heroImg || fluid.src

  return (
    <HeroContainer>
      <TitleContainer>
        <HeroTitle>{props.title}</HeroTitle>
        {props.subTitle && <HeroSubTitle>{props.subTitle}</HeroSubTitle>}
        <Img
          sizes={heroImg}
          alt={props.tags ? props.tags.join(', ') : 'Header Image'}
        />
      </TitleContainer>
    </HeroContainer>
  )
}

export default Hero
