import Head from 'next/head';
import { useState } from 'react';
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants';

const Meta = () => {
  const [theme, setTheme] = useState('okaidia');
  return (
    <Head>
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicon/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon/favicon-16x16.png'
      />
      <link rel='manifest' href='/favicon/site.webmanifest' />
      <link
        rel='mask-icon'
        href='/favicon/safari-pinned-tab.svg'
        color='#000000'
      />
      <link rel='shortcut icon' href='/favicon/favicon.ico' />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
      <meta name='theme-color' content='#000' />
      <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
      <meta
        name='description'
        content={`A statically generated blog example using Next.js and ${CMS_NAME}.`}
      />
      <meta property='og:image' content={HOME_OG_IMAGE_URL} />
      <link
        rel='preload'
        href='https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css'
        as='script'
      />
      <link
        rel='preload'
        href='https://unpkg.com/prismjs@0.0.1/themes/prism-coy.css'
        as='script'
      />
      <link
        rel='preload'
        href='https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css'
        as='script'
      />
      <link
        rel='preload'
        href='https://unpkg.com/prismjs@0.0.1/themes/prism-funky.css'
        as='script'
      />
      <link
        href={`https://unpkg.com/prismjs@0.0.1/themes/prism-${theme}.css`}
        rel='stylesheet'
      />
      <link
        href='https://unpkg.com/prismjs@1.26.0/plugins/line-numbers/prism-line-numbers.min.css'
        rel='stylesheet'
      />
      <link
        href='https://unpkg.com/prismjs@1.26.0/plugins/treeview/prism-treeview.min.css'
        rel='stylesheet'
      />
    </Head>
  );
};

export default Meta;
