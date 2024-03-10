import { Link } from 'react-router-dom';
import scrollToTop from '../services/Scroll';
import { useProduct } from '../context/contextoProvider2';
import { Suspense, useState } from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
export default function Product() {
   scrollToTop();
   const [url, setUrl] = useState(null);
   const producto = useProduct();

   return (
      <>
         <section className="product-container">
            <p className="product__ruta" id="rutaProducto">Home/</p>
            <div>
               <div className="product__img-container">
                  <div className="product__img-1">
                     <Suspense>
                        <img src={producto.product.url} alt="imagen de un producto" id="imgProducto1" />
                     </Suspense>
                  </div>
                  <div className="product__img-2">
                     <Suspense>
                        <img src={producto.product.url} alt="otra imagen del producto" id="imgProducto2" />
                     </Suspense>
                  </div>
               </div>
               <div className="product__img-info">
                  <h2 id="nombreProducto">Name</h2>
                  <h3 id="precioProducto">$00,000</h3>
                  <div className="product__img-info-color-container">
                     <button className="product__img-info-color-1"></button>
                     <button className="product__img-info-color-2"></button>
                     <button className="product__img-info-color-3"></button>
                  </div>
                  <button className="product__img-info-cartButton">Agregar al carrito</button>
                  <hr />
                  <Accordion isCompact>
                     <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                        <p>hacemos envios a todo el pais</p>
                     </AccordionItem>
                  </Accordion>
               </div>
            </div>
         </section>
         <section id="grid-display-container-2">
            <h2>Relacionado</h2>
            <div className="grid-container">
               <Link className="grid__item-1 grid__item" to='/Product'>
                  <img src={require('../assets/img/jeans.jpg')} alt="imagen de un producto" class="grid__item-1-img" />
                  <h3 className="grid__item-1-titulo">Remera</h3>
               </Link>
               <Link className="grid__item-2 grid__item" to='/Product'>
                  <img src={require('../assets/img/jeans.jpg')} alt="imagen de un producto" class="grid__item-2-img" />
                  <h3 className="grid__item-2-titulo">Pantalon</h3>
               </Link>
               <Link className="grid__item-3 grid__item" to='/Product'>
                  <img src={require('../assets/img/jeans.jpg')} alt="imagen de un producto" class="grid__item-3-img" />
                  <h3 className="grid__item-3-titulo">Saco</h3>
               </Link>
               <Link className="grid__item-4 grid__item" to='/Product'>
                  <img src={require('../assets/img/jeans.jpg')} alt="imagen de un producto" class="grid__item-4-img" />
                  <h3 className="grid__item-4-titulo">Jeans</h3>
               </Link>
            </div>
         </section>
      </>
   )
}