import { Header } from '@/components/ui';
import { urlForImage } from '@/lib/sanity/image';
import { getSettings } from '@/lib/sanity/sanity.client';
import Link from 'next/link';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSettings();
  return (
    <div className="flex h-screen min-h-screen flex-col">
      {/* site header */}
      <header className="container mx-auto my-4 flex max-w-6xl justify-between px-4 text-lg">
        <Header />
      </header>
      {/* site content */}
      <main className="flex-grow">{children}</main>
      {/* site footer */}
      <footer className="container mx-auto my-4 max-w-6xl flex-none text-lg">
        <div className="flex flex-col justify-between gap-4 border-y border-slate-400 px-4 py-10 md:flex-row">
          <div>
            {/* site logo */}
            <Link href="/">DuncanBrown</Link>
          </div>
          <div className="flex space-x-4 md:space-x-14">
            {/* site links */}
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="text-center">
            {/* copyright notice */}
            <p>
              &copy; {settings.copyright} {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export async function sharedMetaData(params: any) {
  const settings = await getSettings();

  return {
    title: {
      default: settings?.title || 'DuncanBrown',
      template: `%s | ${settings?.title}`,
    },
    description: settings?.description || '',
    keywords: ['Next.js', 'Sanity', 'Tailwind CSS'],
    authors: [{ name: 'Duncan Brown' }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url: urlForImage(settings?.openGraphImage)?.src || '/img/opengraph.jpg',
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      title: settings?.title || 'DuncanBrown',
      card: 'summary_large_image',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateMetadata({ params }: any) {
  return await sharedMetaData(params);
}
