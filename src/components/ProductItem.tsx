import { ProductsContext } from "@/context/GlobalContext";
import { Product } from "@/hooks/product";
import { FormatMoney } from "@/utils/currency";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { } from 'react-intl';

export default function ProductItem({ id, name, price, image, product }: { id: number, name: string, price: number, image: string, product: Product }){
  const router = useRouter();

  const { dispatch, state } = useContext(ProductsContext);

  return (
    <Link href={`/products/${id}` }>
      <div className=' bg-slate-300 align-bottom place-content-center justify-start text-left mb-4 max-w-full' onClick={() => {
        dispatch({
          type: 'SET_CURRENT_PRODUCT',
          product: product
        },)
        dispatch({
          type: 'SET_CATEGORY_TYPE',
          category: product.category
        })
      }}>
        <div className='flex m-auto content-center h-60 w-64 justify-center items-center'>
          <Image src={image} alt={""} height={240} width={254}  />
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