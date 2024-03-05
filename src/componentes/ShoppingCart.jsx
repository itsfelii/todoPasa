
export default function ShoppingCart() {
   return (
      <section className="carrito-main-section">
         <div className="carrito__productos-container">
            <div className="carrito__producto">
               <div className="carrito__producto-item">
                  <img src="" alt="" className="carrito__producto-img" />
               </div>
               <div className="carrito__producto-item-delete">
                  <div>
                     <h3>nombre</h3>
                     <h4>precio</h4>
                  </div>
                  <h4 className="eliminarBtn">Eliminar</h4>
               </div>
               <hr className="hr" />
               <div className="carrito__producto-envios-container">
                  <h3>Envios</h3>
                  <button className="carrito__producto-envios-btn">-</button>
               </div>
            </div>
            <div className="carrito__producto">
               <div className="carrito__producto-item">
                  <img src="" alt="" className="carrito__producto-img" />
               </div>
               <div className="carrito__producto-item-delete">
                  <div>
                     <h3>nombre</h3>
                     <h4>precio</h4>
                  </div>
                  <h4 className="eliminarBtn">Eliminar</h4>
               </div>
               <hr className="hr" />
               <div className="carrito__producto-envios-container">
                  <h3>Envios</h3>
                  <button className="carrito__producto-envios-btn">-</button>
               </div>
            </div>
            <div className="carrito__producto">
               <div className="carrito__producto-item">
                  <img src="" alt="" className="carrito__producto-img" />
               </div>
               <div className="carrito__producto-item-delete">
                  <div>
                     <h3>nombre</h3>
                     <h4>precio</h4>
                  </div>
                  <h4 className="eliminarBtn">Eliminar</h4>
               </div>
               <hr className="hr" />
               <div className="carrito__producto-envios-container">
                  <h3>Envios</h3>
                  <button className="carrito__producto-envios-btn">-</button>
               </div>
            </div>
         </div>
         <div className="carrito__productos-info">
            <div className="carrito__productos-info-productos">
               <h3>Productos</h3>
               <h3>$00,000</h3>
            </div>
            <div className="carrito__productos-info-envios">
               <h3>Envios</h3>
               <h3>$0,000</h3>
            </div>
            <div className="carrito__productos-info-total">
               <h2><b>Total</b></h2>
               <h2><b>$000,000</b></h2>
            </div>
            <hr className="hr"/>
            <div className="carrito__productos-info-comprar">Comprar</div>
         </div>
      </section>
   )
}