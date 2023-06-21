import { ProductsContext } from "@/context/GlobalContext";
import { Product } from "@/hooks/product";
import { useContext, useState } from "react";
import ProductItem from "./ProductItem";

export default function ProductItems({ catIndex, catName, filteredProducts }: { catIndex: number, catName: string, filteredProducts: Array<Product> }) {
  var [products, setProducts] = useState<Product[]>([])
  var [loading, setLoading] = useState<boolean>(false)

  var { state, dispatch } = useContext(ProductsContext);

  var imgValue = state.defaultImage
  
  return (
      <ul className="grid auto-rows-max gap-8 my-4 place-self-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {filteredProducts.map((product, i) => {
        return (
          <li>
            <ProductItem id={i+1} name={product.name} price={product.price} image={imgValue} key={i} product={product} />
          </li>
        )
       })}
      </ul> 
  )
}