
export default function ShoppingCart() {
   const deleteProduct = (e) => {
      let key = e.target.getAttribute('data-key');
      let closest = e.target.closest('.carrito__producto') 
      closest.parentNode.removeChild(closest);
      console.log(key);
   }
   return (
      <section className="carrito-main-section">
         <div className="carrito__productos-container">
            <div className="carrito__producto">
               <div className="carrito__producto-item">
                  <img src="" alt="" className="carrito__producto-img" />
               </div>
               <div className="carrito__producto-item-delete">
                  <div>
                     <h3>nombre 1</h3>
                     <h4>precio</h4>
                  </div>
                  <h4 className="eliminarBtn" onClick={deleteProduct} data-key={1}>Eliminar</h4>
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
                     <h3>nombre 2</h3>
                     <h4>precio</h4>
                  </div>
                  <h4 className="eliminarBtn" onClick={deleteProduct} data-key={2}>Eliminar</h4>
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
                     <h3>nombre 3</h3>
                     <h4>precio</h4>
                  </div>
                  <h4 className="eliminarBtn" onClick={deleteProduct} data-key={3}>Eliminar</h4>
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