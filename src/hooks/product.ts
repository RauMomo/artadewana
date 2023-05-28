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
}

export const categoryLists = ['Gerabah', 'Keramik', 'Porcelain', "Bata & Genteng" ]

export default function fetchProducts() {  // eslint-disable-next-line react-hooks/rules-of-hooks
  var loading = false;
  var error = '';
  var products : Array<Product> = [];

  // eslint-disable-next-line react-hooks/rules-of-hooks
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
          products = productList;
       }
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()

  return {loading, error, products}
}

export function fetchProductsByCategory({ categoryIndex }: { categoryIndex: number }) {  // eslint-disable-next-line react-hooks/rules-of-hooks
  var loading = false;
  var error = '';
  var products : Array<Product> = [];
  // eslint-disable-next-line react-hooks/rules-of-hooks
    let productList = new Array();
    async function getProducts(){
      try {
        const docSnap = await getDocs(collection(frstore, 'products'))
        if (!docSnap.empty) {
          docSnap.docs.forEach((element, index, arr) => {
            if (element.get('category') == categoryLists[categoryIndex]) {
              if (productList.length <= 15) {
                productList.push( <Product>{
                  name: element.get("name"),
                  category: element.get("category"),
                  desc: element.get("desc"),
                  price: element.get("price"),
                  sellerId: element.get("seller_id"),
                  id: element.get("id"),
                },
              ) 
              }
            }
          });
          products = productList;
          console.log(products.length.toString())
       }
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()

  return {loading, error, products}
}

