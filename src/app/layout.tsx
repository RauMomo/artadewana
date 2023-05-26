import './globals.css'

export const metadata = {
  title: 'Artadewana',
  description: 'Artadewana Web Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html>
        <body>{children}</body>
      </html>
    </>
  )
}
