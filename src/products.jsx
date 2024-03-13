import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchProduct } from './services/Callproduct';
import { Card, Skeleton, Image } from "@nextui-org/react";
import { useProduct } from './context/contextoProvider2';
import { Link } from 'react-router-dom';

export function GranCarouselImg2({ index }) {
   const [url, setUrl] = useState(null);

   if (url == null) {
      async function getProducts() {
         let p = await axios.get("http://localhost:5000/api/products/ordenate")
         if (p.data.remeras[Number(index)]) {
            var PRODUCT_NAME = p.data.remeras[Number(index)].nombre
            return PRODUCT_NAME;
         }
      }
      getProducts().then(res => {
         fetchProduct(res).then(response => setUrl(response))
      });
   }
   const PRODUCTO = useProduct();
   const changeProduct = () => {
      PRODUCTO.updateProduct({
         "nombre": 'remera',
         "precio": '$30,000',
         "url": url
      })
   }
   return (
      <>
         {
            url && (
               <>
                  <div className="gran-carousel__item-1-info">
                     <h3>Something</h3>
                     <Link to="/Product" onClick={changeProduct}><div>Shop it</div></Link>
                  </div>
                  <img className="gran-carousel__item-1-img" src={url} alt="imagen de un producto" />
               </>

            )
         }
         {
            !url && (
               <>
                  <Card className="space-y-5 rounded-lg" style={{ width: '100%', height: '90vh' }}>
                     <Skeleton style={{ 'border-radius': 'none' }}>
                        <div style={{ height: '90vh' }}></div>
                     </Skeleton>
                  </Card>
               </>
            )
         }
      </>
   )
}

export function GranCarouselImg1({ index }) {

   const [url, setUrl] = useState(null);

   if (url == null) {
      async function getProducts() {
         let p = await axios.get("http://localhost:5000/api/products/ordenate")
         if (p.data.remeras[Number(index)]) {
            var PRODUCT_NAME = p.data.remeras[Number(index)].nombre
            return PRODUCT_NAME;
         }
      }
      getProducts().then(res => {
         fetchProduct(res).then(response => setUrl(response))
      });
   }
   // esto se va a ejecutar cuando el homepage actualice el producto para que le diga que este componente rellene los otros datos

   return (
      <>
         {
            url && (
               <img className="gran-carousel__item-2-img" src={url}
                  alt="otra imagen del producto" id="gran-carousel-img-2" />
            )
         }
         {
            !url && (
               <div>
                  <Card className="space-y-5 rounded-lg" style={{ width: '100%', height: '90vh' }}>
                     <Skeleton style={{ 'border-radius': 'none' }}>
                        <div style={{ height: '90vh' }}></div>
                     </Skeleton>
                  </Card>
               </div>
            )
         }
      </>
   );
}

export function GridDisplay({ index, text , variant = 1}) {
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
   const PRODUCTO = useProduct();
   const changeProduct = () => {
      PRODUCTO.updateProduct({
         "nombre": 'remera',
         "precio": '$30,000',
         "url": url
      })
   }
   return (
      <>
         {
            url && (
               <>
                  <Link to='/Product' onClick={changeProduct}>
                     <div className={variant == 2 ? 'carousel__card-img2' : 'carousel__card-img'}>
                        <img src={url} alt="" draggable='false' />
                     </div>
                  </Link>
                  <span>Lo nuevo</span>
                  <h2>{text}</h2>
                  <h3>$20,000</h3>
               </>

            )
         }
         {
            url == null ? (
               <Card className="space-y-5 rounded-lg" style={{ width: '280px', height: '280px' }}>
                  <Skeleton style={{ 'border-radius': 'none' }}>
                     <div style={{ height: '50vh' }}></div>
                  </Skeleton>
               </Card>
            ) : ''
         }
      </>
   )
}

export function VentoSection({ index }) {
   const [url, setUrl] = useState(null);

   if (url == null) {
      async function getProducts() {
         let p = await axios.get("http://localhost:5000/api/products/ordenate")
         if (p.data.remeras[Number(index)]) {
            var PRODUCT_NAME = p.data.remeras[Number(index)].nombre
            return PRODUCT_NAME;
         }
      }
      getProducts().then(res => {
         fetchProduct(res).then(response => setUrl(response))
      });
   }
   // esto se va a ejecutar cuando el homepage actualice el producto para que le diga que este componente rellene los otros datos

   return (
      <>
         {
            url && (
               <>
                  <img src={url} alt="" />
                  <div className="vento-grid__item-information">
                     <h3>Remeras</h3>
                     <div>Comprar</div>
                  </div>
               </>

            )
         }
         {
            url == null ? (
               <Card className="space-y-5 rounded-lg" style={{ width: '47.5vw', height: '100%' }}>
                  <Skeleton style={{ 'border-radius': 'none' }}>
                     <div style={{ height: '102vh' }}></div>
                  </Skeleton>
               </Card>
            ) : ''
         }
      </>
   )
}
