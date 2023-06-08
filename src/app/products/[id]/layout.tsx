import ProductsProvider from "@/context/GlobalContext"

const metadata = {
  title: 'Artadewana',
  openGraph: {
    title: 'Artadewana',
    description: 'Artadewana Web Application',
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
            <title>Artadewana - Detail Produk</title>
            <meta name={metadata.title} content={metadata.openGraph.title} />
          </head>
          <body>{children}</body>
        </html>
      </ProductsProvider>
    </>
  )
}