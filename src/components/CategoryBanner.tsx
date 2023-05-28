"use client";
import fetchProducts from "@/hooks/product";
import { Direction } from "@/utils/enum";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineArrowRight } from "react-icons/ai";
import ProductItem from "./ProductItem";

export default function CategoryBanner({ align, name, desc }: { align: Direction, name: string, desc: string }) { 
  const router = useRouter();

  const { loading, error, products } = fetchProducts();

  products.forEach(product => console.log('ada' + product.name))

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
        <section className="min-w-full max-w-fit container bg-origin-border bg-no-repeat bg-cover items-stretch bg-center self-start bg-local bg-[url('https://img.freepik.com/premium-photo/earthenware-plate-burlap-sackcloth-made-clay-traditional-cooking-utensils-gerabah-tanah_717054-1044.jpg?w=1800')] bg-blend-multiply" >
          <div className='grid grid-cols-3 grid-rows-3 max-w-full'>
            <div className="col-span-4 col-start-2 row-start-2 items-end justify-center text-center text-black">
              <div className='bg-slate-300 inline-grid grid-rows-4 p-6 rounded-sm'>
                <div className='text-3xl row-start-1'>{name.toUpperCase()}</div>
                <div className='text-lg row-start-2'>{desc}</div>
                  <div className='row-start-4'>
                      <button className='border-2 border-solid border-black cursor-pointer inline-block p-2' onClick={() => router.push('/products')}>Eksplor Produk</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
      )}
      {align == Direction.Left && (
        <>
        <section className="min-w-full max-w-fit container bg-origin-border bg-no-repeat bg-cover items-stretch bg-center self-start bg-local bg-[url('https://img.freepik.com/premium-photo/earthenware-plate-burlap-sackcloth-made-clay-traditional-cooking-utensils-gerabah-tanah_717054-1044.jpg?w=1800')] bg-blend-multiply" >
          <div className='grid grid-cols-3 grid-rows-3 max-w-full'>
            <div className="col-span-2 col-start-1 row-start-2 items-end justify-center text-center text-black">
              <div className='bg-slate-300 inline-grid grid-rows-4 p-6 rounded-sm'>
                <div className='text-3xl row-start-1'>{name.toUpperCase()}</div>
                <div className='text-lg row-start-2'>{desc}</div>
                  <div className='row-start-4'>
                    <Link href={'/products'}>
                      <div className='border-2 border-solid border-black cursor-pointer inline-block p-2'>Eksplor Produk</div>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
      )}
        <section className='min-w-full max-w-fit container px-8 py-8 items-center content-center bg-center text-center'>
          <div className='flex-nowrap flex justify-between'>
            <div className="text-black flex-auto m-auto items-center flex-grow pl-12">Produk Paling Dicari</div>
            <div className='text-black inline-flex'>See All<span className='pl-2 mt-1'><AiOutlineArrowRight /></span></div>
          </div>
        <div className='grid grid-cols-6 grid-flow-col-dense px-20 gap-4 h-72 align-middle mt-8 mb-4 px-auto'>
          {(!loading) && (
            <>
              {products.map((product, i) => {
                return (
                  <ProductItem id={product.id} name={product.name} price={product.price} image={""} key={i}/>
                )
              })}
            </>
          )},
          {/* {(!loading) && (
            <>
              {products.map((product, i) => {
                return (
                  <div key={i} className="text-black">{product.name}</div>
                )
              })},
            </>
          )} */}
          </div>
        </section>
      </div>
  );
}