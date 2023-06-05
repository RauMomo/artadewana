import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { } from 'react-intl';

export default function ProductItem({ id, name, price, image }: { id: number, name: string, price: number, image: string }){
  const router = useRouter();
  console.log('comp'+ image);
  return (
    <Link href={`/products/${id}`}>
      <div className=' bg-slate-300 align-bottom place-content-center justify-start text-left mb-4'>
        <div className='flex m-auto content-center h-60 w-64 justify-center items-center'>
          <Image src={image} alt={""} height={240} width={254} />
        </div>
      </div>
      <div className="text-left">
        <div className='text-black'>{name}</div>
        <div className='text-black text-sm font-light'>Rp. {price}</div>
      </div>
    </Link>
  )
}