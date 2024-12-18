import './globals.css';

import dynamic from 'next/dynamic';
import { Inter, Lora } from 'next/font/google';
import { draftMode } from 'next/headers';

import { token } from '@/lib/sanity/sanity.fetch';
import { cx } from '@/utils/all';

import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

const PreviewProvider = dynamic(() => import('../components/PreviewProvider'));

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const draft = await draftMode();
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}
    >
      <body
        className="bg-slate-900 text-slate-300 antialiased"
        suppressHydrationWarning={true}
      >
        <Providers>
          {draft.isEnabled ? (
            <PreviewProvider token={token}>{children}</PreviewProvider>
          ) : (
            children
          )}
        </Providers>
      </body>
    </html>
  );
}
