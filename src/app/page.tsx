import Image from 'next/image'
import Footer from '@/components/footer'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Artadewana',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center justify-center p-24">
        {/* Konten utama halaman */}
      </main>
      <Footer className="w-full" />
    </div>
  )
}
