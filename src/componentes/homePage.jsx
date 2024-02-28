import { Link } from "react-router-dom";
import ContextProduct from "../context/contextProduct";
import { useContext, useEffect, useState } from "react";

export default function HomePage() {
  // lazy load
  useEffect(() => {
    const aparecerElemento = (elementoId) => {
      let el = document.getElementById(elementoId);
      el.style.opacity = '1';
      el.style.transition = 'opacity .8s ease';
    }
    setTimeout(() => aparecerElemento('bigCarousel1'), 400)
    setTimeout(() => aparecerElemento('grid-display-container'), 1000);
    setTimeout(() => aparecerElemento('bigCarousel2'), 2000);
  }, []);
  return (
    <main>
      <section className="gran-carousel" id='bigCarousel1'>
        <div className="gran-carousel__item-container">
          <div className="gran-carousel__item-1">
            <div className="gran-carousel__item-1-info">
              <h3>Something</h3>
              <Link to="/Product"><div>Shop it</div></Link>
            </div>
            <img className="gran-carousel__item-1-img" src={require('../assets/img/jeans.jpg')} alt="imagen de un producto" />
          </div>
          <div className="gran-carousel__item-2">
            <img className="gran-carousel__item-2-img" src="" alt="otra imagen del producto" />
          </div>
        </div>
      </section>
      <section id="grid-display-container">
        <h2>Best-Sellers</h2>
        <div className="grid-container">
          <Link className="grid__item-1 grid__item" to="/Product">
            <img src={require('../assets/img/jeans.jpg')} alt="imagen de un producto" className="grid__item-1-img" />
            <h3 className="grid__item-1-titulo">Remeras</h3>
          </Link>
          <Link className="grid__item-2 grid__item" to="/Product">
            <img src={require('../assets/img/jeans.jpg')} alt="imagen de un producto" className="grid__item-2-img" />
            <h3 className="grid__item-2-titulo">Pantalon</h3>
          </Link>
          <Link className="grid__item-3 grid__item" to="/Product">
            <img src={require('../assets/img/jeans.jpg')} alt="imagen de un producto" className="grid__item-3-img" />
            <h3 className="grid__item-3-titulo">Saco</h3>
          </Link>
          <Link class="grid__item-4 grid__item" to="/Product">
            <img src={require('../assets/img/jeans.jpg')} alt="imagen de un producto" className="grid__item-4-img" />
            <h3 className="grid__item-4-titulo">Jeans</h3>
          </Link>
        </div>
      </section>
      <section className="gran-carousel" id='bigCarousel2'>
        <div className="gran-carousel__item-container">
          <div className="gran-carousel__item-1">
            <div className="gran-carousel__item-1-info">
              <h3>Something</h3>
              <Link to="/Product"><div>Shop it</div></Link>
            </div>
            <img className="gran-carousel__item-1-img" src={require('../assets/img/jeans.jpg')} alt="imagen de un producto" />
          </div>
          <div className="gran-carousel__item-2">
            <img className="gran-carousel__item-2-img" src="" alt="otra imagen del producto" />
          </div>
        </div>
      </section>
    </main>
  )
};