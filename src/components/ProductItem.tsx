import { ProductsContext } from "@/context/GlobalContext";
import { Product } from "@/hooks/product";
import { FormatMoney } from "@/utils/currency";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { } from 'react-intl';
import placeholder from "../../public/placeholder.png";

export default function ProductItem({ id, name, price, image, product }: { id: number, name: string, price: number, image: string, product: Product }){
  const { dispatch, state } = useContext(ProductsContext);
  const { defaultImage } = state;

  return (
    <Link href={`/products/${id}` }>
      <div className=' bg-white align-bottom place-content-center justify-start text-left mb-4 max-w-full relative' onClick={() => {
        dispatch({
          type: 'SET_CURRENT_PRODUCT',
          product: product
        },)
        dispatch({
          type: 'SET_CATEGORY_TYPE',
          category: product.category
        })
        console.log(state.currProduct?.category)
      }}>
        <div className='flex m-auto content-center h-60 w-64 justify-center items-center'>
          <Image src={defaultImage} alt={""} height={100} width={250} placeholder="blur" blurDataURL={placeholder.src} onError={() => placeholder.src} style={{objectFit: "cover", borderRadius: '0%', }} loading="eager" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
      </div>
      <div className="text-left">
        <div className='text-black'>{name}</div>
        <div className='text-black text-sm font-light'>
          <FormatMoney price={price}/>
        </div>
      </div>
    </Link>
  )
}