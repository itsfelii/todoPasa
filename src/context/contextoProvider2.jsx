import React, { useContext } from 'react';
import { useState } from 'react';
import ProductoSeleccionado from './contextoProduct';

export function ContextProductProvider({ children }) {
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
      <ProductoSeleccionado.Provider value={{ product , updateProduct }}>
         {children}
      </ProductoSeleccionado.Provider>
   )
}

export const useProduct = () => useContext(ProductoSeleccionado);