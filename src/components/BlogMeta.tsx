/**
 * All the shared stuff that goes into <head> on `(blog)` routes, can be be imported by `head.tsx` files in the /app dir or wrapped in a <Head> component in the /pages dir.
 */

export default function BlogMeta() {
  return (
    <>
      <meta name='viewport' content='width=device-width,initial-scale=1.0' />
      <link
        rel='apple-touch-icon'
        sizes='192x192'
        href='/favicons/icon-192x192.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicons/icon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicons/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='shortcut icon' href='/favicon.ico' />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='msapplication-config' content='/browserconfig.xml' />
      <meta name='theme-color' content='#000' />
    </>
  );
}
