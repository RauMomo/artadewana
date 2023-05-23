import CategoryMenu from '@/components/CategoryMenu';
import Footer from '@/components/footer';
import { Metadata } from 'next';
import { AiOutlineArrowRight } from 'react-icons/ai';


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
          <div className='inline-grid grid-cols-category gap-20 h-72 align-middle mt-8 mb-4'>
            <CategoryMenu name='Gerabah' />
            <CategoryMenu name='Keramik' />
            <CategoryMenu name='Porcelain' />
            <CategoryMenu name='Bata & Genteng' />
          </div>
        </section>
        <section className="max-w-screen-xl container bg-origin-border bg-no-repeat bg-cover items-stretch bg-center self-start bg-local bg-[url('https://img.freepik.com/premium-photo/earthenware-plate-burlap-sackcloth-made-clay-traditional-cooking-utensils-gerabah-tanah_717054-1044.jpg?w=1800')] bg-blend-multiply" >
          <div className='grid grid-cols-3 grid-rows-3 max-w-full'>
            <div className="col-span-4 col-start-2 row-start-2 items-end justify-center text-center text-black">
              <div className='bg-slate-300 inline-grid grid-rows-4 p-6 rounded-sm'>
                <div className='text-3xl row-start-1'>GERABAH</div>
                <div className='text-lg row-start-2'>Gunakan Terbaik Untuk Anda</div>
                <div className='row-start-4'>
                  <div className='border-2 border-solid border-black cursor-pointer inline-block p-2'>Eksplor Produk</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='max-w-screen-xl container px-8 py-8 items-center content-center bg-center text-center'>
          <div className='flex-nowrap flex justify-between'>
            <div className="text-black flex-auto m-auto items-center flex-grow pl-12">Produk Baru</div>
            <div className='text-black inline-flex'>See All<span className='pl-2 mt-1'><AiOutlineArrowRight /></span></div>
          </div>
          <div className='inline-grid grid-cols-category gap-20 h-72 align-middle mt-8 mb-4'>
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
