"use client";

import frstore from "@/network/firebase_config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

interface Product {
  name: string;
  desc: string;
  price: number;
  category: string;
  sellerId: number;
  id: number;
}

export default function fetchProducts() {  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(null)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error, setError] = useState(null)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [products, setProducts] = useState<Product[]>([])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    let productList = new Array();
    async function getProducts(){
      try {
        const docSnap = await getDocs(collection(frstore, 'products'))
        if (!docSnap.empty) {
          docSnap.docs.forEach((element, index, arr) => {
            productList.push( <Product>{
              name: element.get("name"),
              category: element.get("category"),
              desc: element.get("desc"),
              price: element.get("price"),
              sellerId: element.get("seller_id"),
              id: element.get("id"),
            },)
          });
          setProducts(productList)
       }
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])

  return {loading, error, products}
}