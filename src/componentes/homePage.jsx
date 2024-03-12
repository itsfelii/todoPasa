import { Link } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";
import { GranCarouselImg1, GridDisplay, GranCarouselImg2 } from "../products";
// scroll function 
import scrollToTop from "../services/Scroll";
// product context
import { useProduct } from "../context/contextoProvider2";
import { useEffect } from "react";
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
  useEffect(() => {
    let carousel = document.querySelector('.grid-container');
    const dragging = (e) => {
      carousel.scrollLeft = e.pageX;
    }
    carousel.addEventListener('mousemove', dragging)
  })
  return (
    <main>
      <section id='bigCarousel2'>
        <div className="gran-carousel__item-container">
          <div className="gran-carousel__item-1">
            <GranCarouselImg2 index={2} />
          </div>
          <div className="gran-carousel__item-2">
            <GranCarouselImg1 index={3} />
          </div>
        </div>
      </section>
      <section className='carousel-container'>
        <i class="fa-solid fa-chevron-right left" />
        <div id="grid-display-container">
          <div className="grid-container">
            <GridDisplay index={1} text='Remeras' />
            <GridDisplay index={3} text='Accesorios' />
            <GridDisplay index={2} text='Musculosas' />
            <GridDisplay index={4} text='Jeans' />
            <GridDisplay index={1} text='Jeans' />
            <GridDisplay index={2} text='Jeans' />
          </div>
        </div>
        <i class="fa-solid fa-chevron-right right" />
      </section>


      <section className="vento-grid-section">
        <article className="vento-grid__item-container">
          <div className="vento-grid__item vento-item-1">
            <img src="" alt="" />
            <div className="vento-grid__item-information">
              <h3>Remeras</h3>
              <div>Comprar</div>
            </div>
          </div>
          <div className="vento-grid__item vento-item-2">

          </div>
          <div className="vento-grid__item vento-item-3">
            <img src="" alt="" />
            <div className="vento-grid__item-information">
              <h3>Remeras</h3>
              <div>Comprar</div>
            </div>
          </div>
        </article>
      </section>

    </main>
  )
}

