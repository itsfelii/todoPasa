import { Link } from 'react-router-dom';
import scrollToTop from '../services/Scroll';
export default function Product() {
   scrollToTop();
   return (
      <>
         <section className="product-container">
            <p className="product__ruta" id="rutaProducto">Home/</p>
            <div>
               <div className="product__img-container">
                  <div className="product__img-1">
                     <img src="" alt="imagen de un producto" id="imgProducto1" />
                  </div>
                  <div className="product__img-2">
                     <img src="" alt="otra imagen del producto" id="imgProducto2" />
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
                  <div className="product__img-info-dropdown">
                     <button className="dropbtn">Entregas y Devoluciones</button>
                     <div className="dropdown-content">
                        Hacemos entrega por toda la provincia pero no llegamos mas que a eso. Las devoluciones seran tomadas si tiene alguna falla o decide cambiarlo en un plazo de 30 dias.
                     </div>
                  </div>
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