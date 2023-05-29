import { Product, categoryLists, fetchProductsByCategory } from "@/hooks/product";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

export default function ProductItems({ catIndex, catName }: { catIndex: number, catName: string }) {
  var [products, setProducts] = useState<Product[]>([{name: 'qiko', category: 'Keramik', desc: 'asdad', price: 100000, sellerId: 2, id: 1}])
  var [loading, setLoading] = useState<boolean>(false)
  
  useEffect(() => {
    const fetchData = async () => {
      var { loading, error, products } = await fetchProductsByCategory({ categoryIndex: categoryLists.indexOf(catName) });
      setProducts(products);
    }
    fetchData();  
  }, [catName])
  return (
      <ul className="grid auto-rows-max gap-2 my-4 place-self-center grid-cols-5">
      {products.map((product, i) => {
        return (
          <li>
            <ProductItem id={product.id} name={product.name} price={product.price} image={""} key={i} />
          </li>
        )
       })}
      </ul> 
  )
}