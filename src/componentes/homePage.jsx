import { Link } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";
import { GranCarouselImg1, GridDisplay, GranCarouselImg2 } from "../products";
// scroll function 
import scrollToTop from "../services/Scroll";
// product context
import { useProduct } from "../context/contextoProvider2";
export default function HomePage() {
  scrollToTop();
  const producto = useProduct();
  const change = () => {
    producto.updateProduct({
      'nombre': '',
      'precio': '',
      'url': ''
    })
  }
  return (
    <main>
      <section id='bigCarousel2'>
        <div className="gran-carousel__item-container">
          <div className="gran-carousel__item-1">
            <GranCarouselImg2 index={1} />
          </div>
          <div className="gran-carousel__item-2">
            <GranCarouselImg1 index={1} />
          </div>
        </div>
      </section>

      <section id="grid-display-container">
        <h2>Best-Sellers</h2>
        <div className="grid-container">
          <GridDisplay index={1} />
          <GridDisplay index={2} />
          <GridDisplay index={1} />
          <GridDisplay index={2} />
        </div>
      </section>

      <section className="gran-carousel_section">
        <div className="gran-carousel" id='bigCarousel1'>
          <div className="gran-carousel__items-slider">
            <article>
              <div className="gran-carousel__item-container">
                <div className="gran-carousel__item-1">
                  <div className="gran-carousel__item-1-info">
                    <h3>1</h3>
                    <Link to="/Product"><div>Shop it</div></Link>
                  </div>
                  <img className="gran-carousel__item-1-img" src={require('../assets/img/jeans.jpg')} alt="imagen de un producto" />
                </div>
                <div className="gran-carousel__item-2">
                  <GranCarouselImg1 index={2} />
                </div>
              </div>
            </article>
            <article>
              <div className="gran-carousel__item-container">
                <div className="gran-carousel__item-1">
                  <div className="gran-carousel__item-1-info">
                    <h3>2</h3>
                    <Link to="/Product"><div>Shop it</div></Link>
                  </div>
                  <img className="gran-carousel__item-1-img" src={require('../assets/img/jeans.jpg')} alt="imagen de un producto" />
                </div>
                <div className="gran-carousel__item-2">
                  <GranCarouselImg1 index={2} />
                </div>
              </div>
            </article>
            <article>
              <div className="gran-carousel__item-container">
                <div className="gran-carousel__item-1">
                  <div className="gran-carousel__item-1-info">
                    <h3>3</h3>
                    <Link to="/Product"><div>Shop it</div></Link>
                  </div>
                  <img className="gran-carousel__item-1-img" src={require('../assets/img/jeans.jpg')} alt="imagen de un producto" />
                </div>
                <div className="gran-carousel__item-2">
                  <GranCarouselImg1 index={2} />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

    </main>
  )
}

