import Header from '@/components/header'
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
      <Header/>
      <body>{children}</body>
    </>
  )
}
