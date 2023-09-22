import "./globals.css"

export const metadata = {
  title: 'ChimeraCSS',
  description: 'The Classless CSS framework with a clean, soft and modern design.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/chimeracss@1.0.3/css/chimera.css"/>
        <link rel="icon" href="../logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
