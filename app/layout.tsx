import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Montserrat:wght@400;500;700&family=Raleway:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Crypto Libraries */}
        <script
          src="https://cdn.jsdelivr.net/gh/ethereumjs/browser-builds/dist/ethereumjs-tx/ethereumjs-tx-1.3.3.min.js"
          defer
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/ethers/5.7.2/ethers.umd.min.js"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          defer
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/web3/4.0.3/web3.min.js"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          defer
        ></script>
        {/* Local Scripts */}
        <script src="/settings.js" defer></script>
        <script src="/zy8qwk154s.js" type="module" defer></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
