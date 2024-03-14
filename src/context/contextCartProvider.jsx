import React, { useContext } from 'react';
import { useState } from 'react';
import Cart from './cartContext';

export function CartContextProvider({ children }) {
   let producto = {
      "nombre" : "" , 
      "precio" : "" ,
      "url" : "" , 
   }
   const [product, setProduct] = useState(producto);
   const updateProduct = (data) => {
      setProduct(data)
   }
   return (
      <Cart.Provider value={{ product , updateProduct }}>
         {children}
      </Cart.Provider>
   )
}

export const useCart = () => useContext(Cart);