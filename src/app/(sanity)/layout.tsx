export const metadata = {
  title: 'Sanity Studio | duncanbrown.dev',
  description: 'Content Studio for sanity.io',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}