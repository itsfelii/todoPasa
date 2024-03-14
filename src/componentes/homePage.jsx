import { Link } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";
import { GranCarouselImg1, GridDisplay, GranCarouselImg2, VentoSection } from "../products";
// scroll function 
import scrollToTop from "../services/Scroll";
// product context
import { useProduct } from "../context/contextoProvider2";
import { useEffect } from "react";
import { useList } from "../context/callOrdenate/contextListProvider";

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
  // animacion de carousel 
  let isDragging = false, startX, startScrollLeft;
  useEffect(() => {
    // funcionalidad de drag move carousel
    let carousel = document.querySelector('.carousel-container');

    const startDragging = (e) => {
      isDragging = true;
      carousel.classList.add('dragging');
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    }

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove('dragging')
    }

    const dragging = (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    carousel.addEventListener('mousedown', startDragging);
    carousel.addEventListener('mousemove', dragging);
    document.addEventListener('mouseup', dragStop);
    carousel.addEventListener('mouseleave', dragStop);

    // funcionalidad de la flechas

    let arrowBtns = document.querySelectorAll('.carousel__wrapper i');
    let firstCardWidth = document.querySelector('.carousel__card').offsetWidth;
    arrowBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        console.log(btn.id);
        carousel.scrollLeft += btn.id === 'left' ? -firstCardWidth : firstCardWidth;
      })
    })

    // segundo carousel 

     // funcionalidad de drag move carousel
     let carousel2 = document.querySelector('.carousel-container2');

     const startDragging2 = (e) => {
       isDragging = true;
       carousel2.classList.add('dragging');
       startX = e.pageX;
       startScrollLeft = carousel2.scrollLeft;
     }
 
     const dragStop2 = () => {
       isDragging = false;
       carousel2.classList.remove('dragging')
     }
 
     const dragging2 = (e) => {
       if (!isDragging) return;
       carousel2.scrollLeft = startScrollLeft - (e.pageX - startX);
     }
 
     carousel2.addEventListener('mousedown', startDragging2);
     carousel2.addEventListener('mousemove', dragging2);
     document.addEventListener('mouseup', dragStop2);
     carousel2.addEventListener('mouseleave', dragStop2);
 
     // funcionalidad de la flechas
 
     let arrowBtns2 = document.querySelectorAll('.carousel__wrapper2 i');
     let firstCardWidth2 = document.querySelector('.carousel__card2 ').offsetWidth;
     arrowBtns2.forEach(btn => {
       btn.addEventListener('click', () => {
         carousel2.scrollLeft += btn.id === 'left2' ? -firstCardWidth2 : firstCardWidth2;
       })
     })
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
      <section className='carousel-section'>
        <h2 className="carousel-section__title">Remeras</h2>
        <div className="carousel__wrapper">
          <i id='left' class="fa-solid fa-chevron-left" />
          <ul className="carousel-container">
            <li className="carousel__card">
              <GridDisplay index={3} text={'Remera'} />
            </li>
            <li className="carousel__card">
              <GridDisplay index={2} text={'Jeans'} />
            </li>
            <li className="carousel__card">
              <GridDisplay index={1} text={'Camisa'} />
            </li>
            <li className="carousel__card">
              <GridDisplay index={4} text={'Pantalon'} />
            </li>
            <li className="carousel__card">
              <GridDisplay index={3} text={'Vestido'} />
            </li>
            <li className="carousel__card">
              <GridDisplay index={1} text={'Remera'} />
            </li>
            <li className="carousel__card">
              <GridDisplay index={2} text={'Short'} />
            </li>
          </ul>
          <i id='right' class="fa-solid fa-chevron-right" />
        </div>
      </section>


      <section className="vento-grid-section">
        <article className="vento-grid__item-container">
          <div className="vento-grid__item vento-item-1">
            <VentoSection index={1} />
          </div>
          <div className="vento-grid__item vento-item-2">
            <VentoSection index={4} />
          </div>
          <div className="vento-grid__item vento-item-3">
            <VentoSection index={3} />
          </div>
        </article>
      </section>

      <section className='carousel-section2'>
        <h2 className="carousel-section__title2">Remeras</h2>
        <div className="carousel__wrapper2">
          <i id='left2' class="fa-solid fa-chevron-left" />
          <ul className="carousel-container2">
            <li className="carousel__card2">
              <GridDisplay index={3} text={'Remera'} variant={2} />
            </li>
            <li className="carousel__card2">
              <GridDisplay index={2} text={'Jeans'} variant={2} />
            </li>
            <li className="carousel__card2">
              <GridDisplay index={1} text={'Camisa'} variant={2} />
            </li>
            <li className="carousel__card2">
              <GridDisplay index={4} text={'Pantalon'} variant={2} />
            </li>
            <li className="carousel__card2">
              <GridDisplay index={3} text={'Vestido'} variant={2} />
            </li>
            <li className="carousel__card2">
              <GridDisplay index={1} text={'Remera'} variant={2} />
            </li>
            <li className="carousel__card2">
              <GridDisplay index={2} text={'Short'} variant={2} />
            </li>
          </ul>
          <i id='right2' class="fa-solid fa-chevron-right" />
        </div>
      </section>
    </main>
  )
}

