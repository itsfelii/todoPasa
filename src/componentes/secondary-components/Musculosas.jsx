import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Musculosas() {
   //lazy load
   useEffect (() => {
      const aparecerElemento = (elementoId) => {
         let el = document.getElementById(elementoId);
         el.style.opacity = '1';
         el.style.transition = 'opacity .8s ease';
      }
      setTimeout(() => aparecerElemento('firstItem') , 600)
      setTimeout(() => aparecerElemento('secondItem') , 650)
      setTimeout(() => aparecerElemento('thirdItem') , 750)
      setTimeout(() => aparecerElemento('fourthItem') , 800)
      setTimeout(() => aparecerElemento('fifthItem') , 1000)
      setTimeout(() => aparecerElemento('sixthItem') , 1100)
      setTimeout(() => aparecerElemento('seventhItem') , 1150)
      setTimeout(() => aparecerElemento('eighthItem') , 1200) 
   })
   return (
      <>
         <section className="flex-product-section">
            <div className="flex-product-title">
               <h3 className="flex-product-ruta">Home / Musculosas</h3>
               <h2 className="flex-product-type-title">Musculosas</h2>
            </div>
            <div className="flex-product-container">
               <div className="flex-product__item" id='firstItem'>
                  <Link to="/Product">
                     <img src="" alt="imagen de producto" className="flex-product__item-img" />
                  </Link>
                  <div>
                     <h4 className="flex-product__item-title">jeans</h4>
                     <h4 className="flex-product__item-precio">$00000</h4>
                  </div>
               </div>
               <div className="flex-product__item" id="secondItem">
                  <Link to="/Product">
                     <img src="" alt="imagen de producto" className="flex-product__item-img" />
                  </Link>
                  <div>
                     <h4 className="flex-product__item-title">jeans</h4>
                     <h4 className="flex-product__item-precio">$00000</h4>
                  </div>
               </div>
               <div className="flex-product__item" id='thirdItem'>
                  <Link to="/Product">
                     <img src="" alt="imagen de producto" className="flex-product__item-img" />
                  </Link>
                  <div>
                     <h4 className="flex-product__item-title">jeans</h4>
                     <h4 className="flex-product__item-precio">$00000</h4>
                  </div>
               </div>
               <div className="flex-product__item" id='fourthItem'>
                  <Link to="/Product">
                     <img src="" alt="imagen de producto" className="flex-product__item-img" />
                  </Link>
                  <div>
                     <h4 className="flex-product__item-title">jeans</h4>
                     <h4 className="flex-product__item-precio">$00000</h4>
                  </div>
               </div>
               <div className="flex-product__item" id='fifthItem'>
                  <Link to="/Product">
                     <img src="" alt="imagen de producto" className="flex-product__item-img" />
                  </Link>
                  <div>
                     <h4 className="flex-product__item-title">jeans</h4>
                     <h4 className="flex-product__item-precio">$00000</h4>
                  </div>
               </div>
               <div className="flex-product__item" id='sixthItem'>
                  <Link to="/Product">
                     <img src="" alt="imagen de producto" className="flex-product__item-img" />
                  </Link>
                  <div>
                     <h4 className="flex-product__item-title">jeans</h4>
                     <h4 className="flex-product__item-precio">$00000</h4>
                  </div>
               </div>
               <div className="flex-product__item" id='seventhItem'>
                  <Link to="Product">
                     <img src="" alt="imagen de producto" className="flex-product__item-img" />
                  </Link>
                  <div>
                     <h4 className="flex-product__item-title">jeans</h4>
                     <h4 className="flex-product__item-precio">$00000</h4>
                  </div>
               </div>
               <div className="flex-product__item" id='eighthItem'>
                  <Link to="/Product">
                     <img src="" alt="imagen de producto" className="flex-product__item-img" />
                  </Link>
                  <div>
                     <h4 className="flex-product__item-title">jeans</h4>
                     <h4 className="flex-product__item-precio">$00000</h4>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}