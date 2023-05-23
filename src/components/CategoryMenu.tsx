import { AiOutlineFileImage } from "react-icons/ai";

export default function CategoryMenu({ name }: {name: string}) {
  return (
      <div className=' bg-slate-300 align-bottom place-content-center justify-center'>
        <div className='flex m-auto content-center h-48 w-full justify-center items-center'>
          <AiOutlineFileImage alignmentBaseline='middle' />
        </div>
        <div className='h-4 bg-black w-1 my-4 flex items-center justify-center m-auto' />
          <div className='text-black'>{name}</div>
    </div>
  )
}