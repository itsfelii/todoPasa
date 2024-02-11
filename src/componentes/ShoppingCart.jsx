
export default function ShoppingCart() {
   return (
      <section className="carrito-main-section">
         <div className="carrito__productos-container">
            <div className="carrito__producto">
               <img src="" alt="" className="carrito__producto-img" />
               <h3>nombre</h3>
               <h4>precio</h4>
               <h4 className="eliminarBtn">Eliminar</h4>
            </div>
            <div className="carrito__producto">
               <img src="" alt="" className="carrito__producto-img" />
               <h3>nombre</h3>
               <h4>precio</h4>
               <h4 className="eliminarBtn">Eliminar</h4>
            </div>
            <div className="carrito__producto">
               <img src="" alt="" className="carrito__producto-img" />
               <h3>nombre</h3>
               <h4>precio</h4>
               <h4 className="eliminarBtn">Eliminar</h4>
            </div>
         </div>
         <div className="carrito__productos-info">
            <div className="carrito__productos-precio">
               <h3 id="productosSubtotal">subtotal:</h3>
               <h3 id="productosTotal">total:</h3>
               <h4 id="productosCantidad">productos: 3</h4>
            </div>
            <div className="carrito__productos-info-comprar">Comprar</div>
         </div>
      </section>
   )
}