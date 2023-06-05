"use client";

import frstore from "@/network/firebase_config";
import { collection, getDocs } from "firebase/firestore";

export interface Product {
  name: string;
  desc: string;
  price: number;
  category: string;
  sellerId: number;
  id: number;
  image?: string;
}

export const categoryLists = ['Gerabah', 'Keramik', 'Porcelain', "Bata & Genteng" ]

export default async function fetchProducts() {  // eslint-disable-next-line react-hooks/rules-of-hooks
  var loading = false;
  var error = '';
  var products: Array<Product> = [];
  

  // eslint-disable-next-line react-hooks/rules-of-hooks
    let productList = new Array();
    async function getProducts(){
      try {
        const docSnap = await getDocs(collection(frstore, 'products'))
        if (!docSnap.empty) {
          docSnap.docs.forEach(async (element, index, arr) => {
            var image = element.get("image") ?? '';
            productList.push( <Product>{
              name: element.get("name"),
              category: element.get("category"),
              desc: element.get("desc"),
              price: element.get("price"),
              sellerId: element.get("seller_id"),
              id: element.get("id"),
              image: ''
            },)
          });
          products = productList;
       }
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()

  return {loading, error, products}
}

export function fetchProductsByCategory({ categoryIndex, numberOfItem, products }: { categoryIndex: number, numberOfItem? : number, products : Product[]}) {  // eslint-disable-next-line react-hooks/rules-of-hooks
  var loading = false;
  var error = '';

  var newProducts: Product[] | undefined = [];
  var maxQuery = numberOfItem ?? 10

  console.log('sebelum api: ' + products.length)
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
    function getProducts(){
      try {
        newProducts = products.filter((product, index, arr) => product.category == categoryLists[categoryIndex]);
      } catch (error) {
        console.log(error)
      }
    }
  getProducts()
  
  console.log('dari api: ' + newProducts.length)

  return {loading, error, newProducts}
}

