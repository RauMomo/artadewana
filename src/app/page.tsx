import CategoryMenu from '@/components/CategoryMenu';
import Footer from '@/components/footer';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Artadewana',
};

export default function Home() {
  return (
    <div className="block m-0 place-content-start bg-white">
      <main className="relative">
        <section className="max-w-screen-xl container bg-origin-border bg-no-repeat bg-cover items-stretch bg-center self-auto bg-local bg-[url('https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2.png')] bg-blend-multiply">
          <div className="grid grid-cols-12 max-w-full">
            <div className="grid grid-rows-1 col-start-2 col-end-6 p-14 justify-between items-start place-content-start">
              <div className='h-44 lg:h-44 md:h-28 sm:h-14'></div>
              <div className="bg-white p-4 col-span-2 place-content-between items-start ms-6 row-span-1 px-8 py-8">
              <h1 className="mb-4 text-3xl font-semibold tracking-tight leading-none text-black md:text-3xl lg:text-3xl">SOLUSI KERAMIK TERBAIK UNTUK RUMAH ANDA.</h1>
                <p className="mb-8 text-lg font-normal text-black lg:text-xl sm:px-0">Cari keramik kebutuhan anda</p>
                <a className='text-black underline underline-offset-3' href=''>Eksplor Produk</a>
            {/* <div className="co"> */}
              </div>
              </div>
          </div>
        </section>
        <section className='max-w-screen-xl container px-8 py-8 items-center content-center bg-center text-center'>
          <div className="text-black">Berdasarkan Kategori</div>
          <div className='inline-grid grid-cols-category gap-4 h-72 align-middle mt-8 mb-4'>
            <CategoryMenu name='Gerabah' />
            <CategoryMenu name='Keramik' />
            <CategoryMenu name='Porcelain' />
            <CategoryMenu name='Bata & Genteng' />
          </div>
        </section>
      </main>
      <Footer className="w-full" />
    </div>
  )
}
