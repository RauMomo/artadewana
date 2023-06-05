"use client"

import ProductItems from "@/components/ProductItems";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ProductsContext } from "@/context/GlobalContext";
import { categoryLists } from "@/hooks/product";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Products() {
  var [selectedCategory, setSelectedCategory] = useState(categoryLists[0])

   const propValue = useSearchParams();
   
   const { dispatch, state } = React.useContext(ProductsContext);

   dispatch({
    type: "SET_PRODUCT_LIST", 
    products: [{name: 'Robert', desc: 'Qikoo', category: 'Keramik', price: 50000, sellerId: 2, id: 1}]
  })

  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     var { loading, error, products } = await fetchProductsByCategory({ categoryIndex: categoryLists.indexOf(selectedCategory) });
  //     setProducts(products);
  //   }
  //   console.log('ada brp' + products.length.toString())
  //   fetchData();
  // })
  
  useEffect(() => {
    var categoryName = propValue.get('category') ?? ''
    if (categoryName.length != 0 && categoryLists.includes(categoryName)) {
      setSelectedCategory(categoryName)
    }
  }, [])

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
               }}>
               <span className="ml-3 whitespace-nowrap pr-12">{category}</span>
               </a>
               ))}
            </ul>
          </div>
          <div className="relative min-w-max h-screen ">
            {/* <div className="text-black font-semibold text-lg">
               {selectedCategory}
            </div> */}
            <div className="mx-8 w-screen flex flex-auto flex-grow flex-shrink-0 items-stretch overflow-hidden">
               {( 
               <>
               <ProductItems catIndex={categoryLists.indexOf(selectedCategory)} catName={`${selectedCategory}`} key={categoryLists.indexOf(selectedCategory)}/>
               </>
               )},
              </div>
          </div>
        </div>
      <Footer />
   </main>
</div>
  )
}