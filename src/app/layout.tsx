"use client"

import ProductsProvider from '@/context/GlobalContext'
import './globals.css'


const metadataImage = {
  images: ["@/public/artadewana.png"]
}
const metadata = {
  title: 'Artadewana',
  openGraph: {
    ...metadataImage,
    title: 'Acme',
    description: 'Acme is a...',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  return (
    <>
      <ProductsProvider>
        <html>
          <head>
            <title>Artadewana Web Application</title>
            <meta name={metadata.title} content={metadata.openGraph.title} />
          </head>
          <body>{children}</body>
        </html>
      </ProductsProvider>
    </>
  )
}
