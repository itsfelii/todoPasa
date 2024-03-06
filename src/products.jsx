import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchProduct } from './services/Callproduct';

export function GranCarouselImg1() {

   const [url, setUrl] = useState(null);

   if (url == null) {
      async function getProducts() {
         let p = await axios.get("http://localhost:5000/api/products/ordenate")
         if (p.data.remeras[1]) {
            const PRODUCT_NAME = p.data.remeras[1].nombre
            return PRODUCT_NAME;
         }
      }
      getProducts().then(res => {
         fetchProduct(res).then(response => setUrl(response))
      });
   }

   return (
      <>
         {
            url && (
               <img className="gran-carousel__item-2-img" src={url}
                  alt="otra imagen del producto" id="gran-carousel-img-2" />
            )
         }
      </>
   );
}

export function GridDisplay({index}) {
   const [url, setUrl] = useState(null)
   if (url == null) {
      async function getProducts() {
         let p = await axios.get("http://localhost:5000/api/products/ordenate")
         if (p.data.remeras[Number(index)]) {
            const PRODUCT_NAME = p.data.remeras[Number(index)].nombre
            return PRODUCT_NAME;
         }
      }
      getProducts().then(res => {
         fetchProduct(res).then(response => setUrl(response))
      });
   }

   return (
      <>
         {
            url && (
               <img src={url} alt="imagen de un producto" />
            )
         }
         {
            url == null ? (
               <p style={{'font-size' : '15px'}}>...</p>
            ) : ''
         }
      </>
   )
}


