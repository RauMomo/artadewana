import { ProductsContext } from "@/context/GlobalContext";
import { Product, categoryLists, fetchProductsByCategory } from "@/hooks/product";
import { useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem";

export default function ProductItems({ catIndex, catName }: { catIndex: number, catName: string }) {
  var [products, setProducts] = useState<Product[]>([{name: 'qiko', category: 'Keramik', desc: 'asdad', price: 100000, sellerId: 2, id: 1}])
  var [loading, setLoading] = useState<boolean>(false)

  var { state, dispatch } = useContext(ProductsContext);
  
  var productsValue = state.products
  console.log('data yg didapatkan dari context: ' + productsValue.length)
  
  useEffect(() => {
    const fetchData = async () => {
      var { loading, error, products } = await fetchProductsByCategory({ categoryIndex: categoryLists.indexOf(catName), products: productsValue});
      setProducts(products);
    }
    fetchData();  
  }, [catName, products])
  return (
      <ul className="grid auto-rows-max gap-8 my-4 place-self-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {products.map((product, i) => {
        return (
          <li>
            <ProductItem id={product.id} name={product.name} price={product.price} image={product.image ?? ''} key={i} />
          </li>
        )
       })}
      </ul> 
  )
}