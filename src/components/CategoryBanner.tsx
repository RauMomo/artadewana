import { Direction } from "@/utils/enum";
import { AiOutlineArrowRight } from "react-icons/ai";
import ProductItem from "./ProductItem";

export default function CategoryBanner({ align, name, desc }: { align: Direction, name: string, desc: string }) { 
  return (
    <div>
      {/* <section className="max-w-screen-xl container bg-origin-border bg-no-repeat bg-cover items-stretch bg-center self-start bg-local bg-[url('https://img.freepik.com/premium-photo/earthenware-plate-burlap-sackcloth-made-clay-traditional-cooking-utensils-gerabah-tanah_717054-1044.jpg?w=1800')] bg-blend-multiply" >
          <div className='grid grid-cols-3 grid-rows-3 max-w-full'>
            <div className="col-span-4 col-start-2 row-start-2 items-end justify-center text-center text-black">
              <div className='bg-slate-300 inline-grid grid-rows-4 p-6 rounded-sm'>
                <div className='text-3xl row-start-1'>{name.toUpperCase()}</div>
                <div className='text-lg row-start-2'>{desc}</div>
                <div className='row-start-4'>
                  <div className='border-2 border-solid border-black cursor-pointer inline-block p-2'>Eksplor Produk</div>
                </div>
              </div>
            </div>
          </div>
      </section> */}
      {align == Direction.Right && (
        <>
        <section className="max-w-screen-xl container bg-origin-border bg-no-repeat bg-cover items-stretch bg-center self-start bg-local bg-[url('https://img.freepik.com/premium-photo/earthenware-plate-burlap-sackcloth-made-clay-traditional-cooking-utensils-gerabah-tanah_717054-1044.jpg?w=1800')] bg-blend-multiply" >
          <div className='grid grid-cols-3 grid-rows-3 max-w-full'>
            <div className="col-span-4 col-start-2 row-start-2 items-end justify-center text-center text-black">
              <div className='bg-slate-300 inline-grid grid-rows-4 p-6 rounded-sm'>
                <div className='text-3xl row-start-1'>{name.toUpperCase()}</div>
                <div className='text-lg row-start-2'>{desc}</div>
                <div className='row-start-4'>
                  <div className='border-2 border-solid border-black cursor-pointer inline-block p-2'>Eksplor Produk</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
      )}
      {align == Direction.Left && (
        <>
        <section className="max-w-screen-xl container bg-origin-border bg-no-repeat bg-cover items-stretch bg-center self-start bg-local bg-[url('https://img.freepik.com/premium-photo/earthenware-plate-burlap-sackcloth-made-clay-traditional-cooking-utensils-gerabah-tanah_717054-1044.jpg?w=1800')] bg-blend-multiply" >
          <div className='grid grid-cols-3 grid-rows-3 max-w-full'>
            <div className="col-span-2 col-start-1 row-start-2 items-end justify-center text-center text-black">
              <div className='bg-slate-300 inline-grid grid-rows-4 p-6 rounded-sm'>
                <div className='text-3xl row-start-1'>{name.toUpperCase()}</div>
                <div className='text-lg row-start-2'>{desc}</div>
                <div className='row-start-4'>
                  <div className='border-2 border-solid border-black cursor-pointer inline-block p-2'>Eksplor Produk</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
      )}
      <section className='max-w-screen-xl container px-8 py-8 items-center content-center bg-center text-center'>
          <div className='flex-nowrap flex justify-between'>
            <div className="text-black flex-auto m-auto items-center flex-grow pl-12">Produk Paling Dicari</div>
            <div className='text-black inline-flex'>See All<span className='pl-2 mt-1'><AiOutlineArrowRight /></span></div>
          </div>
          <div className='grid grid-cols-6 grid-flow-col-dense px-20 gap-4 h-72 align-middle mt-8 mb-4 px-auto'>
            <ProductItem name='Gerabah' price={0} image={''} />
            <ProductItem name='Keramik' price={0} image={''} />
            <ProductItem name='Porcelain' price={0} image={''} />
            <ProductItem name='Bata & Genteng' price={0} image={''} />
            <ProductItem name='Bata & Genteng' price={0} image={''} />
            <ProductItem name='Bata & Genteng' price={0} image={''} />
          </div>
       </section>
    </div>
  );
}