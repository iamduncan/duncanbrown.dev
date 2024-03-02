import dynamic from 'next/dynamic';
import './globals.css';
import { Providers } from './providers';
import { cx } from '@/utils/all';
import { Inter, Lora } from "next/font/google";
import { draftMode } from 'next/headers';
import { token } from '@/lib/sanity/sanity.fetch';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}
    >
      <body className="bg-slate-900 text-slate-300 antialiased">
        <Providers>
          {draftMode().isEnabled ? (
            <PreviewProvider token={token}>{children}</PreviewProvider>
          ) : (
            children
          )}
        </Providers>
      </body>
    </html>
  );
}
