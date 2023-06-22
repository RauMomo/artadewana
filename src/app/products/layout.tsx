"use client"

import ProductsProvider from "@/context/GlobalContext"
import { extractPayload } from "@/utils/string"
import { useSearchParams } from "next/navigation"
import { IntlProvider } from "react-intl"

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

export default function ProductsLayout({children}: {
  children: React.ReactNode
}) {
  const payload = useSearchParams()
  const extractedPayload = extractPayload({params: payload.toString()})
  return (
    <>
    <IntlProvider locale='id' defaultLocale='id'>
      <ProductsProvider >
        <html>
          <head>
            <title>{`Hasil Pencarian Untuk ${extractedPayload}`}</title>
            <meta name={metadata.title} content={metadata.openGraph.title} />
          </head>
          <body>{children}</body>
        </html>
        </ProductsProvider>
      </IntlProvider>
    </>
  )
}