import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Mallas() {
   return (
      <>
         <section className="flex-product-section">
            <div className="flex-product-title">
               <h3 className="flex-product-ruta" style={{'letterSpacing' : '2px'}}>
                  <Link to='/' style={{ 'font-size': '.7rem' }}>Home</Link> &gt; Mallas
               </h3>
               <h2 className="flex-product-type-title">Mallas</h2>
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
               <div className="flex-product__item" id='secondItem'>
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
               <div className="flex-product__item" id="eighthItem">
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