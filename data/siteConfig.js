module.exports = {
  siteTitle: 'The Personal Blog of Duncan Brown',
  siteDescription: 'This is a place to hold my thoughts and ideas!',
  authorName: 'Duncan Brown',
  twitterUsername: 'iamDuncanBrown',
  authorAvatar: 'avatar.jpeg',
  defaultLang: 'en',
  authorDescription: `<p>For over 10 years Duncan Brown has been working on the
    design, build and maintenance of marketing websites and building web
    applications to streamline business processes.</p>
    <p>He is passionate about modern web technologies, developing progressive web
    apps and creating amazing experiences for WordPress websites.</p>
    <p>Do you want to know more?
    <a href="/about-duncan-brown">Read my about page</a>.
    </p>`,
  siteUrl: 'https://duncanbrown.dev',
  // Prefixes all links.
  pathPrefix: '', // Note: it must *not* have a trailing slash.
  siteCover: 'cover-baymax.jpeg', // file in content/images
  googleAnalyticsId: '',
  background_color: '#2B2E3C',
  theme_color: '#5348FF',
  display: 'standalone',
  icon: 'content/iamges/icon.png',
  postsPerPage: 6,
  headerTitle: 'DuncanBrown',
  headerLinksTitle: 'icon.png',
  headerLinksIcon: '',
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about-duncan-brown',
    },
    {
      label: 'Hire Me',
      url:
        'https://www.wessexdigitalsolutions.co.uk/?utm_source=blog&utm_medium=website&utm_campaign=hire_me_link',
    },
  ],
  websiteHost: {
    label: 'Netlify',
    url: 'https://www.netlify.com/',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About',
          url: '/about-duncan-brown',
        },
      ],
    },
    {
      sectionName: 'Follow the Author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/iamduncan',
        },
        {
          label: 'Website',
          url:
            'https://www.duncanbrown.me.uk/?utm_source=blog&utm_medium=website&utm_campaign=follow_me_link',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/iamDuncanBrown',
        },
      ],
    },
  ],
}
