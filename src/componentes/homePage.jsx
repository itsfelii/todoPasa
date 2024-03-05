import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import { GranCarouselImg1, GridDisplay } from "../products";

export default function HomePage() {
  
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
            <GranCarouselImg1 />
          </div>
        </div>
      </section>
      <section id="grid-display-container">
        <img src={require('../assets/fondo.png')} alt="fondo" className="grid-display-fondo"/>
        <h2>Best-Sellers</h2>
        <div className="grid-container">
          <Link className="grid__item-1 grid__item" to="/Product">
            <GridDisplay index={1}/>
            <h3 className="grid__item-1-titulo">Remeras</h3>
          </Link>
          <Link className="grid__item-2 grid__item" to="/Product">
            <GridDisplay index={2} />
            <h3 className="grid__item-2-titulo">Pantalon</h3>
          </Link>
          <Link className="grid__item-3 grid__item" to="/Product">
            <GridDisplay index={1} />
            <h3 className="grid__item-3-titulo">Saco</h3>
          </Link>
          <Link class="grid__item-4 grid__item" to="/Product">
            <GridDisplay index={2} />
            <h3 className="grid__item-4-titulo">Jeans</h3>
          </Link>
        </div>
      </section>
      <section className="gran-carousel" id='bigCarousel2' style={{padding : "30px 25px"}}>
        <div className="gran-carousel__item-container">
          <div className="gran-carousel__item-1">
            <div className="gran-carousel__item-1-info">
              <h3>Something</h3>
              <Link to="/Product"><div>Shop it</div></Link>
            </div>
            <img className="gran-carousel__item-1-img" src={require('../assets/img/jeans.jpg')} alt="imagen de un producto" />
          </div>
          <div className="gran-carousel__item-2">
            <GranCarouselImg1 />
          </div>
        </div>
      </section>
    </main>
  )
}

