"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ProductsContext } from "@/context/GlobalContext";
import { FormatMoney } from "@/utils/currency";
import redirectWa from "@/utils/redirect";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { AiOutlineFileImage } from "react-icons/ai";
import logo from "../../../public/wa-logo.png";

export default function ProductWithId({ params }: { params: number }) {
  const router = useRouter();
  const { query } = useParams();

  const { dispatch, state } = useContext(ProductsContext);

  var currProduct = state.currProduct;
  var currCategory = state.currCategory;

  useEffect(() => {

  })

    return (
    <div className="block m-0 place-content-start bg-white">
      <main className="relative min-w-full">
        <Header />
          {/* breadcrumb */}
        <nav className="container flex flex-auto m-auto justify-start py-4" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                HOME
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  <a href="/products" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">{currCategory}</a>
              </div>
              </li>
            <li>
              <div className="flex items-center">
                <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">{currProduct?.name}</a>
                </div>
              </li>
          </ol> 
          </nav>
          <div className="container flex m-auto justify-start fit-vh">
            <div className="flex flex-small items-center h-4/5 justify-center bg-gray-300 mx-6">
              {
                currProduct?.image == null || currProduct?.image === undefined && (<>
                  <AiOutlineFileImage alignmentBaseline='middle' />
                </>)
              }
              {
                currProduct?.image!= null && currProduct?.image.length != 0 && (<>
                  <Image src={currProduct.image} alt="Info Produk" loading="lazy" fill={true} style={{
                    objectFit:'cover', objectPosition:'center'}}/>
                </>)
              }
            </div>
            <div className="flex-large items-start h-4/5 justify-start flex-nowrap mx-6 text-black">
              <div className="pb-8">
                <div className="text-4xl">{currProduct?.name}</div>
                <div className="text-gray-400 text-lg leading-10">Kategori: {currCategory}</div>
              </div>
              <div className="h-0.5 w-full border-gray-300 border-2 leading-4 bg-gray-300"></div>
              <div className="py-8">
                <div className="text-4xl">
                  <FormatMoney price={currProduct?.price ?? 0} />
                </div>
              </div>
              <div>
                <div className="text-gray-400 text-lg leading-12">{ currProduct?.desc }</div>
              </div>
              {
                (
                  <Link href={redirectWa()} target="_blank">
                <button className="my-8 p-5 bg-whatsappColor" >
                  <div className="flex flex-auto flex-nowrap text-black">
                    <div className="flex-small">
                      {<>
                        <Image src={logo} alt={"Icon Whatsapp"} width={40} height={40} />
                      </>}
                    </div>
                    <div className="flex-large relative flex-nowrap flex-row overlay justify-start items-start text-start">
                      <div className="text-inherit flex-auto inline-flex text-black text-2xl">Tanya Penjual</div>
                      <div className="text-inherit inline-flex text-base">Via Whatsapp</div>
                    </div>
                  </div>
                    </button>
                  </Link>
                )
              }
            </div>
          </div>
        <Footer />
      </main>
    </div>
  )
}