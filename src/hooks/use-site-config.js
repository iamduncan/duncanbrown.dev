import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const result = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteTitle
          siteUrl
          authorName
          authorAvatar
          authorDescription
          siteDescription
          twitterUsername
          defaultLang
          headerTitle
          headerLinksIcon
          headerLinks {
            label
            url
          }
          websiteHost {
            label
            url
          }
          footerLinks {
            sectionName
            links {
              label
              url
            }
          }
        }
      }
    }
  `)
  return result.site.siteMetadata
}

export default useSiteMetadata
