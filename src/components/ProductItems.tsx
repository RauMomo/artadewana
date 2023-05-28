import { Product, categoryLists, fetchProductsByCategory } from "@/hooks/product";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

export default function ProductItems({ catIndex, catName }: { catIndex: number, catName: string }) {
  var [products, setProducts] = useState<Product[]>([])
  
  useEffect(() => {
    const fetchData = async () => {
      var { loading, error, products } = await fetchProductsByCategory({ categoryIndex: categoryLists.indexOf(catName) });
      setProducts(products);
    }
    console.log('ada brp' + products.length.toString())
    fetchData();  
  }, [])
  return (
    <ul>
      {products.map((product, i) => {
        return (
            <ProductItem id={product.id} name={product.name} price={product.price} image={""} key={i}/>
        )
       })}
    </ul>
  )
}