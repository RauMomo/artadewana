"use client"

import CategoryBanner from '@/components/CategoryBanner';
import CategoryMenu from '@/components/CategoryMenu';
import MainBanner from '@/components/MainBanner';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Direction } from '@/utils/enum';

export default async function Home() {
  var categoryList = [{ name: "Gerabah", desc: "Gerabah Terbaik Untuk Anda" }, { name: "Keramik", desc: "Keramik Terbaik Untuk Anda" }, { name: "Porcelain", desc: "Porcelain Terbaik Untuk Anda" }, { name: "Bata & Genteng", desc: "Bata & Genteng Terbaik Untuk Anda" }]
  
  return (
      <div className="block m-0 place-content-start bg-white">
      <main className="relative min-w-full">
          <Header/>
          <MainBanner />
          <section className='min-w-full container px-8 py-8 items-center content-center bg-center text-center'>
            <div className="text-black">Berdasarkan Kategori</div>
            <div className='inline-grid grid-cols-category gap-20 h-72 align-middle mt-8 mb-4'>
              <CategoryMenu name='Gerabah' />
              <CategoryMenu name='Keramik' />
              <CategoryMenu name='Porcelain' />
              <CategoryMenu name='Bata & Genteng' />
            </div>
          </section>
          <div>
            {categoryList.map((category, index, arr) => {
              return (
                <>
                  {index % 2 == 0 && (
                    <>
                      <CategoryBanner name={category.name} desc={category.desc} align={Direction.Right} />
                    </>
                  )}
                  {index % 2 != 0 && (
                    <>
                      <CategoryBanner name={category.name} desc={category.desc} align={Direction.Left} />
                    </>
                  )}
                </>
              );
            })}
          </div>
        </main>
        <Footer />
      </div>
  );
}
