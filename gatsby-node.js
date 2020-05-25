const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const BlogPostTemplate = require.resolve('./src/templates/blog-post.js')
  const BlogPostShareImage = require.resolve(
    './src/templates/blog-post-share-image.js',
  )
  const PageTemplate = require.resolve('./src/templates/page.js')
  const PostsByTagTemplate = require.resolve('./src/templates/tags.js')
  const ListPostsTemplate = require.resolve(
    './src/templates/blog-list-template.js',
  )

  const allMarkdownQuery = await graphql(`
    {
      allMarkdown: allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { ne: false } } }
        limit: 1000
      ) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              title
              slug
              tags
              language
              cover {
                publicURL
              }
            }
            timeToRead
            excerpt
          }
        }
      }
    }
  `)

  if (allMarkdownQuery.errors) {
    reporter.panic(allMarkdownQuery.errors)
  }

  const postPerPageQuery = await graphql(`
    {
      site {
        siteMetadata {
          postsPerPage
        }
      }
    }
  `)

  const markdownFiles = allMarkdownQuery.data.allMarkdown.edges

  const posts = markdownFiles.filter(item =>
    item.node.fileAbsolutePath.includes('/content/posts/'),
  )

  // generate paginated post list
  const postsPerPage = postPerPageQuery.data.site.siteMetadata.postsPerPage
  const nbPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: nbPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/' : `/pages/${i + 1}`,
      component: ListPostsTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        nbPages: nbPages,
      },
    })
  })

  // generate blog posts
  posts.forEach((post, index, posts) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.frontmatter.slug,
      component: BlogPostTemplate,
      context: {
        slug: post.node.frontmatter.slug,
        previous,
        next,
      },
    })

    // generate post share images (dev only)
    if (process.env.gatsby_executing_command.includes('develop')) {
      createPage({
        path: `${post.node.frontmatter.slug}/image_share`,
        component: BlogPostShareImage,
        context: {
          slug: post.node.frontmatter.slug,
          width: 440,
          height: 220,
        },
      })
    }
  })

  // generate pages
  markdownFiles
    .filter(item => item.node.fileAbsolutePath.includes('content/pages/'))
    .forEach(page => {
      createPage({
        path: page.node.frontmatter.slug,
        component: PageTemplate,
        context: {
          slug: page.node.frontmatter.slug,
        },
      })
    })

  // generate tags
  markdownFiles
    .filter(item => item.node.frontmatter.tags !== null)
    .reduce(
      (acc, cur) => [...new Set([...acc, ...cur.node.frontmatter.tags])],
      [],
    )
    .forEach(uniqueTag => {
      createPage({
        path: `tags/${uniqueTag}`,
        component: PostsByTagTemplate,
        context: {
          tag: uniqueTag,
        },
      })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// const path = require('path')

// const _ = require('lodash')
// const paginate = require('gatsby-awesome-pagination')
// const PAGINATION_OFFSET = 7

// const createPosts = (createPage, createRedirect, edges) => {
//   edges.forEach(({ node }, i) => {
//     const prev = i === 0 ? null : edges[i - 1].node
//     const next = i === edges.length - 1 ? null : edges[i + 1].node
//     const pagePath = node.fields.slug

//     if (node.fields.redirects) {
//       node.fields.redirects.forEach(fromPath => {
//         createRedirect({
//           fromPath,
//           toPath: pagePath,
//           redirectInBrowser: true,
//           isPermanent: true,
//         })
//       })
//     }

//     createPage({
//       path: pagePath,
//       component: path.resolve(`./src/templates/post.js`),
//       context: {
//         id: node.id,
//         prev,
//         next,
//       },
//     })
//   })
// }

// exports.createPages = ({ actions, graphql }) =>
//   graphql(`
//     query {
//       allMdx(
//         filter: { frontmatter: { published: { ne: false } } }
//         sort: { order: DESC, fields: [frontmatter___date] }
//       ) {
//         edges {
//           node {
//             id
//             parent {
//               ... on File {
//                 name
//                 sourceInstanceName
//               }
//             }
//             excerpt(pruneLength: 250)
//             fields {
//               title
//               slug
//               date
//             }
//             code {
//               scope
//             }
//           }
//         }
//       }
//     }
//   `).then(({ data, errors }) => {
//     if (errors) {
//       return Promise.reject(errors)
//     }

//     if (_.isEmpty(data.allMdx)) {
//       return Promise.reject('There are no posts!')
//     }

//     const { edges } = data.allMdx
//     const { createRedirect, createPage } = actions
//     createPosts(createPage, createRedirect, edges)
//     createPaginatedPages(actions.createPage, edges, '/blog', {
//       categories: [],
//     })
//   })

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       modules: [path.resolve(__dirname, 'src'), 'node_modules'],
//       alias: {
//         $components: path.resolve(__dirname, 'src/components'),
//       },
//     },
//   })
// }

// const createPaginatedPages = (createPage, edges, pathPrefix, context) => {
//   const pages = edges.reduce((acc, value, index) => {
//     const pageIndex = Math.floor(index / PAGINATION_OFFSET)

//     if (!acc[pageIndex]) {
//       acc[pageIndex] = []
//     }

//     acc[pageIndex].push(value.node.id)

//     return acc
//   }, [])

//   pages.forEach((page, index) => {
//     const previousPagePath = `${pathPrefix}/${index + 1}`
//     const nextPagePath = index === 1 ? pathPrefix : `${pathPrefix}/${index - 1}`

//     createPage({
//       path: index > 0 ? `${pathPrefix}/${index}` : `${pathPrefix}`,
//       component: path.resolve(`src/templates/blog.js`),
//       context: {
//         pagination: {
//           page,
//           nextPagePath: index === 0 ? null : nextPagePath,
//           previousPagePath:
//             index === pages.length - 1 ? null : previousPagePath,
//           pageCount: pages.length,
//           pathPrefix,
//         },
//         ...context,
//       },
//     })
//   })
// }

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `Mdx`) {
//     const parent = getNode(node.parent)
//     const titleSlugged = _.join(_.drop(parent.name.split('-'), 3), '-')

//     const slug =
//       parent.sourceInstanceName === 'legacy'
//         ? `blog/${node.frontmatter.date
//             .split('T')[0]
//             .replace(/-/g, '/')}/${titleSlugged}`
//         : node.frontmatter.slug || titleSlugged

//     createNodeField({
//       name: 'id',
//       node,
//       value: node.id,
//     })

//     createNodeField({
//       name: 'published',
//       node,
//       value: node.frontmatter.published,
//     })

//     createNodeField({
//       name: 'title',
//       node,
//       value: node.frontmatter.title,
//     })

//     createNodeField({
//       name: 'description',
//       node,
//       value: node.frontmatter.description,
//     })

//     createNodeField({
//       name: 'slug',
//       node,
//       value: slug,
//     })

//     createNodeField({
//       name: 'date',
//       node,
//       value: node.frontmatter.date ? node.frontmatter.date.split(' ')[0] : '',
//     })

//     createNodeField({
//       name: 'banner',
//       node,
//       value: node.frontmatter.banner,
//     })

//     createNodeField({
//       name: 'bannerCredit',
//       node,
//       value: node.frontmatter.bannerCredit,
//     })

//     createNodeField({
//       name: 'categories',
//       node,
//       value: node.frontmatter.categories || [],
//     })

//     createNodeField({
//       name: 'keywords',
//       node,
//       value: node.frontmatter.keywords || [],
//     })

//     createNodeField({
//       name: 'redirects',
//       node,
//       value: node.frontmatter.redirects,
//     })
//   }
// }
