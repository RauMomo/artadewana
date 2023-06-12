"use client"

import { Product } from "@/hooks/product";
import React from "react";

export const initProducts: Array<Product> = [];
export const initProduct = null;

type StateType = {
  currCategory: string;
  products: Product[];
  currProduct: Product | null;
  defaultImage: string;
};

const initialState: StateType = {
  currCategory: '',
  products: [],
  currProduct: null,
  defaultImage: ''
};

type ActionType =
  | { type: 'SET_CATEGORY_TYPE'; category: string }
  | { type: 'SET_PRODUCT_LIST'; products: Product[] }
  | { type: 'SET_DEFAULT_IMAGE'; link: string }
  | { type: 'SET_CURRENT_PRODUCT'; product: Product };
  

export const ProductsContext = React.createContext<{ state: StateType; dispatch: React.Dispatch<ActionType> }>({
  state: initialState,
  dispatch: () => {},
})

const productReducer = (state :StateType, action: ActionType) : StateType => {
  switch (action.type) {
    case 'SET_CATEGORY_TYPE': {
      return { ...state, currCategory: action.category};
    }
    case 'SET_DEFAULT_IMAGE': {
      return { ...state, defaultImage: action.link};
    }
    case 'SET_PRODUCT_LIST': {
      return { ...state, products: action.products};
    }
    case 'SET_CURRENT_PRODUCT': {
      return { ...state, currProduct: action.product};
    }
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
}

  
export const ProductsProvider = ({ children }: { children: any }) => {
  const initialState = {
    currCategory: 'Gerabah',
    products: initProducts,
    currProduct: initProduct,
    defaultImage: ''
  }

  const [state, dispatch] = React.useReducer(productReducer, initialState);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;