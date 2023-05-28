import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineFileImage } from "react-icons/ai";

export default function ProductItem({ id, name, price, image }: { id: number, name: string, price: number, image: string }) {
  const router = useRouter();
  console.log(id);
  return (
    <Link href={`/products/${id}`}>
      <div className=' bg-slate-300 align-bottom place-content-center justify-start text-left mb-4'>
        <div className='flex m-auto content-center h-60 w-full justify-center items-center'>
          <AiOutlineFileImage alignmentBaseline='middle' />
        </div>
      </div>
      <div className="text-left">
        <div className='text-black'>{name}</div>
        <div className='text-black text-sm font-light'>Rp. {price}</div>
      </div>
    </Link>
  )
}