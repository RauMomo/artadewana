"use client"

import CategoryBanner from '@/components/CategoryBanner';
import CategoryMenu from '@/components/CategoryMenu';
import MainBanner from '@/components/MainBanner';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { ProductsContext } from '@/context/GlobalContext';
import { Product } from '@/hooks/product';
import getImages from '@/network/api/images';
import frstore from '@/network/firebase_config';
import { Direction } from '@/utils/enum';
import { collection, getDocs } from 'firebase/firestore';
import { useContext, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import useSWR from 'swr';

export default function Home() {
  var categoryList = [{ name: "Gerabah", desc: "Gerabah Terbaik Untuk Anda" }, { name: "Keramik", desc: "Keramik Terbaik Untuk Anda" }, { name: "Porcelain", desc: "Porcelain Terbaik Untuk Anda" }, { name: "Bata & Genteng", desc: "Bata & Genteng Terbaik Untuk Anda" }]

  const { dispatch, state } = useContext(ProductsContext);

  const fetcher = async ({ collectionPath }: { collectionPath: string }) => {
    var productList: Product[] = [];

    const snapshot = await getDocs(collection(frstore, 'products'));
    snapshot.docs.forEach(async (element, index, arr) => {
      productList.push(
        {
          name: element.get("name"),
          category: element.get("category"),
          desc: element.get("desc"),
          price: element.get("price"),
          sellerId: element.get("seller_id"),
          id: element.get("id"),
          image: ''
        },
      )
    })
    return productList;
  };
    
  const { data, error, mutate, isLoading, isValidating } = useSWR('products', fetcher)

  useEffect(() => {
    var imageLink = '';
    dispatch({
      type: 'SET_PRODUCT_LIST',
      products: data ?? []
    })

    function fetchImageLink() {
      getImages().then(res => {
        dispatch({
          type: 'SET_DEFAULT_IMAGE',
          link: res
        })
      })
    }
    fetchImageLink()
  }, [data])

  if (!data) {
    return <div className="bg-white h-screen w-full block">
        <div className="absolute top-1/2 left-1/2">
          <Circles color={'green'} width={"80"} height={"80"} />
        </div>
    </div>
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
      <div className="block m-0 place-content-start bg-white">
      <main className="relative min-w-full">
          <Header/>
          <MainBanner />
          <section className='min-w-full container px-8 py-8 items-center content-center bg-center text-center'>
          <div className="text-black">Berdasarkan Kategori</div>
            <div className='inline-grid grid-cols-category grid-cols-category-sm gap-20 h-72 align-middle mt-8 mb-4'>
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
