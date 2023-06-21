"use client"

import ProductItems from "@/components/ProductItems";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ProductsContext } from "@/context/GlobalContext";
import { Product, categoryLists, fetchProductsByCategory } from "@/hooks/product";
import frstore from "@/network/firebase_config";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useRouter, useSearchParams, } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

export default function Products() {
   var [selectedCategory, setSelectedCategory] = useState(categoryLists[0])
   var [filteredProducts, setFilteredProducts] = useState<Array<Product>>([])

   const propValue = useSearchParams();
   const router = useRouter();
   var categoryName = decodeURIComponent(propValue.get('category') ?? '') ?? ''
   
   const { dispatch, state } = React.useContext(ProductsContext);

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
    if (categoryName.length != 0 && categoryLists.includes(categoryName)) {
      setSelectedCategory(categoryName)
    }
     
     if (state.products.length == 0) {
         dispatch({
            type: 'SET_PRODUCT_LIST',
            products: data ?? []
         },)  
     }

     var filteredProducts = fetchProductsByCategory({products: data ?? [], categoryIndex: categoryLists.indexOf(categoryName) });
     setFilteredProducts(filteredProducts.newProducts);

  }, [data, categoryName])

  return (
    <div className="m-0 place-content-start bg-white h-auto items-start w-full">
   <main className="relative min-w-full">
      <Header />
      {/* breadcrumb */}
      <nav className="container m-auto justify-start py-4" aria-label="Breadcrumb">
         <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
               {(<>
               <Link href="/">
               <div className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                  <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  HOME
               </div>
               </Link>
               </>
               )}
            </li>
            <li>
               {/* 
               <div className="flex items-center">
                  <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">GERABAH</a>
               </div>
               */}
               {(<>
               <Link href="/products">
               <div className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                  <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <div className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white pt-1">PRODUK</div>
               </div>
               </Link>
               </>
               )}
            </li>
         </ol>
      </nav>
      <div id="default-sidebar" className="container flex m-auto h-screen py-4 justify-start items-stretch" aria-label="Sidebar">
         <div className="h-full container flex px-3 py-4 space-x-1 bg-white border-r-2 border-black ">
            <ul className="space-y-2 font-medium text-black ">
               <li>
                  <a href="#" className="flex items-start py-2 text-gray-900 rounded-lg">
                  <span className="ml-3 pr-12">Pilih Kategori</span>
                  </a>
               </li>
               {categoryLists.map((category, index, arr) => (
               <a href="#" className={(index == categoryLists.indexOf(selectedCategory) ? 'selected-sidebar' : 'unselected-sidebar')} onClick={async () => {
                     setSelectedCategory(category);
                     var encodedQuery = encodeURIComponent(category);
                     router.push(`/products/?category=${encodedQuery}`)
               }}>
               <span className="ml-3 whitespace-nowrap pr-12">{category}</span>
               </a>
               ))}
            </ul>
          </div>
          <div className="relative min-w-max h-screen ">
            <div className="mx-8 w-screen flex flex-auto flex-grow flex-shrink-0 items-stretch overflow-hidden">
               {( 
               <>
               <ProductItems catIndex={categoryLists.indexOf(selectedCategory)} catName={`${selectedCategory}`} key={categoryLists.indexOf(selectedCategory)} filteredProducts={filteredProducts}/>
               </>
                    )},
                 </div>
               <button className="border-t-neutral-600 text-black m-8 p-4 bg-main font-light shadow-sm border-black border-2">
                     Next page
               </button>
            </div>
           </div>
      <Footer />
   </main>
</div>
  )
}