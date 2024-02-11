import { Link } from "react-router-dom";

export default function Vestidos() {
   return (
      <>
         <section className="flex-product-section">
            <div className="flex-product-title">
               <h3 className="flex-product-ruta">Home / Vestidos</h3>
               <h2 className="flex-product-type-title">Vestidos</h2>
            </div>
            <div className="flex-product-container">
               <div className="flex-product__item">
                  <Link to="/Product">
                     <img src="" alt="imagen de producto" className="flex-product__item-img" />
                  </Link>
                  <div>
                     <h4 className="flex-product__item-title">jeans</h4>
                     <h4 className="flex-product__item-precio">$00000</h4>
                  </div>
               </div>
               <div className="flex-product__item">
                  <Link to="/Product">
                     <img src="" alt="imagen de producto" className="flex-product__item-img" />
                  </Link>
                  <div>
                     <h4 className="flex-product__item-title">jeans</h4>
                     <h4 className="flex-product__item-precio">$00000</h4>
                  </div>
               </div>
               <div className="flex-product__item">
                  <Link to="/Product">
                     <img src="" alt="imagen de producto" className="flex-product__item-img" />
                  </Link>
                  <div>
                     <h4 className="flex-product__item-title">jeans</h4>
                     <h4 className="flex-product__item-precio">$00000</h4>
                  </div>
               </div>
               <div className="flex-product__item">
                  <Link to="/Product">
                     <img src="" alt="imagen de producto" className="flex-product__item-img" />
                  </Link>
                  <div>
                     <h4 className="flex-product__item-title">jeans</h4>
                     <h4 className="flex-product__item-precio">$00000</h4>
                  </div>
               </div>
               <div className="flex-product__item">
                  <Link to="/Product">
                     <img src="" alt="imagen de producto" className="flex-product__item-img" />
                  </Link>
                  <div>
                     <h4 className="flex-product__item-title">jeans</h4>
                     <h4 className="flex-product__item-precio">$00000</h4>
                  </div>
               </div>
               <div className="flex-product__item">
                  <Link to="/Product">
                     <img src="" alt="imagen de producto" className="flex-product__item-img" />
                  </Link>
                  <div>
                     <h4 className="flex-product__item-title">jeans</h4>
                     <h4 className="flex-product__item-precio">$00000</h4>
                  </div>
               </div>
               <div className="flex-product__item">
                  <Link to="Product">
                     <img src="" alt="imagen de producto" className="flex-product__item-img" />
                  </Link>
                  <div>
                     <h4 className="flex-product__item-title">jeans</h4>
                     <h4 className="flex-product__item-precio">$00000</h4>
                  </div>
               </div>
               <div className="flex-product__item">
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