import React, { useContext } from 'react';
import ProductList from './contextList';
import axios from 'axios';

export function ProductListProvider({ children }) {
   const getProducts = async() => {
      let p = await axios.get("http://localhost:5000/api/products/ordenate")
      return p;
   }
   return (
      <ProductList.Provider value={getProducts()}>
         {children}
      </ProductList.Provider>
   )
}

export const useList = () => useContext(ProductList);