import './globals.css';
import { Providers } from './providers';
import { cx } from '@/utils/all';
import { Inter, Lora } from "next/font/google";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}
    >
      <body className="bg-slate-900 text-slate-300 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
