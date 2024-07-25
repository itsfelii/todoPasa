import { Link } from "react-router-dom";
import { TipoRopaSeccion } from "../../products";
import { useList } from "../../context/callOrdenate/contextListProvider";

export default function Buzos() {
   return (
      <>
         <section className="flex-product-section">
            <div className="flex-product-title">
               <div>
                  <h3 className="flex-product-ruta" style={{ 'letterSpacing': '2px' }}>
                     <Link to='/' style={{ 'font-size': '.7rem' }}>Home</Link> &gt; Buzos
                  </h3>
               </div>
               <h2 className="flex-product-type-title">Buzos</h2>
            </div>
            
            <article>
               <div>
                  <h4>Categorias</h4>
                  <ul></ul>
               </div>
               <div className="flex-product-container">
                  <div className="flex-product__item" id='firstItem'>
                     <TipoRopaSeccion index={2} />
                  </div>
                  <div className="flex-product__item" id='secondItem'>
                     <TipoRopaSeccion index={2} />
                  </div>
                  <div className="flex-product__item" id='thirdItem'>
                     <TipoRopaSeccion index={2} />
                  </div>
                  <div className="flex-product__item" id='fourthItem'>
                     <TipoRopaSeccion index={2} />
                  </div>
                  <div className="flex-product__item" id='fifthItem'>
                     <TipoRopaSeccion index={2} />
                  </div>
                  <div className="flex-product__item" id='sixthItem'>
                     <TipoRopaSeccion index={2} />
                  </div>
                  <div className="flex-product__item" id='seventhItem'>
                     <TipoRopaSeccion index={2} />
                  </div>
                  <div className="flex-product__item" id='eighthItem'>
                     <TipoRopaSeccion index={2} />
                  </div>
               </div>
            </article>
         </section>
      </>
   )
}