import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Don't know what to doo</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/v.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
