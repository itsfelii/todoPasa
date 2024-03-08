import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionItem } from "@nextui-org/react";
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
              <div>
               
                <h2 className="flex-product-type-title">Buzos</h2>
              </div>
            </div>
            <article>
               <div className="flex-products-filters">
                  <h2>Filtros</h2>
                  <hr />
                  <Accordion selectionMode="multiple" isCompact>
                     <AccordionItem key="1" aria-label="Accordion 1" title="Descuentos" style={{ 'background': '#f5f5f5', 'box-shadow': 'none' }}>
                        <ul>
                           <li>
                              <label>
                                 <input type="submit" value=' ' />
                                 <p>40% OFF</p>
                              </label>
                           </li>
                           <li>
                              <label>
                                 <input type="submit" value=' ' />
                                 <p>30% OFF</p>
                              </label>
                           </li>
                           <li>
                              <label>
                                 <input type="submit" value=' ' />
                                 <p>20% OFF</p>
                              </label>
                           </li>
                           <li>
                              <label>
                                 <input type="submit" value=' ' />
                                 <p>10% OFF</p>
                              </label>
                           </li>
                        </ul>
                     </AccordionItem>
                     <AccordionItem key="2" aria-label="Accordion 2" title="Precio" style={{ 'background': '#f5f5f5', 'box-shadow': 'none' }}>
                        <ul>
                           <li>
                              <label>
                                 <input type="submit" value=' ' />
                                 <p>$10,000 - $15,000</p>
                              </label>
                           </li>
                           <li>
                              <label>
                                 <input type="submit" value=' ' />
                                 <p>$15,000 - $20,000</p>
                              </label>
                           </li>
                           <li>
                              <label>
                                 <input type="submit" value=' ' />
                                 <p>$20,000 - $25,000</p>
                              </label>
                           </li>
                           <li>
                              <label>
                                 <input type="submit" value=' ' />
                                 <p>$30,000 +</p>
                              </label>
                           </li>
                        </ul>
                     </AccordionItem>
                     <AccordionItem key="3" aria-label="Accordion 3" title="Precio" style={{ 'background': '#f5f5f5', 'box-shadow': 'none' }}>
                        <ul>
                           <li>
                              <label>
                                 <input type="submit" value=' ' />
                                 <p>$10,000 - $15,000</p>
                              </label>
                           </li>
                           <li>
                              <label>
                                 <input type="submit" value=' ' />
                                 <p>$15,000 - $20,000</p>
                              </label>
                           </li>
                           <li>
                              <label>
                                 <input type="submit" value=' ' />
                                 <p>$20,000 - $25,000</p>
                              </label>
                           </li>
                           <li>
                              <label>
                                 <input type="submit" value=' ' />
                                 <p>$30,000 +</p>
                              </label>
                           </li>
                        </ul>
                     </AccordionItem>
                  </Accordion>






               </div>
               <div className="flex-product-container">
                  <div className="flex-product__item" id='firstItem'>
                     <Link to="/Product">
                        <img src={require('../../assets/img/jeans.jpg')} alt="imagen de producto" className="flex-product__item-img" />
                     </Link>
                     <div>
                        <h4 className="flex-product__item-title">jeans</h4>
                        <h4 className="flex-product__item-precio">$00000</h4>
                     </div>
                  </div>
                  <div className="flex-product__item" id='secondItem'>
                     <Link to="/Product">
                        <img src={require('../../assets/img/jeans.jpg')} alt="imagen de producto" className="flex-product__item-img" />
                     </Link>
                     <div>
                        <h4 className="flex-product__item-title">jeans</h4>
                        <h4 className="flex-product__item-precio">$00000</h4>
                     </div>
                  </div>
                  <div className="flex-product__item" id='thirdItem'>
                     <Link to="/Product">
                        <img src={require('../../assets/img/jeans.jpg')} alt="imagen de producto" className="flex-product__item-img" />
                     </Link>
                     <div>
                        <h4 className="flex-product__item-title">jeans</h4>
                        <h4 className="flex-product__item-precio">$00000</h4>
                     </div>
                  </div>
                  <div className="flex-product__item" id='fourthItem'>
                     <Link to="/Product">
                        <img src={require('../../assets/img/jeans.jpg')} alt="imagen de producto" className="flex-product__item-img" />
                     </Link>
                     <div>
                        <h4 className="flex-product__item-title">jeans</h4>
                        <h4 className="flex-product__item-precio">$00000</h4>
                     </div>
                  </div>
                  <div className="flex-product__item" id='fifthItem'>
                     <Link to="/Product">
                        <img src={require('../../assets/img/jeans.jpg')} alt="imagen de producto" className="flex-product__item-img" />
                     </Link>
                     <div>
                        <h4 className="flex-product__item-title">jeans</h4>
                        <h4 className="flex-product__item-precio">$00000</h4>
                     </div>
                  </div>
                  <div className="flex-product__item" id='sixthItem'>
                     <Link to="/Product">
                        <img src={require('../../assets/img/jeans.jpg')} alt="imagen de producto" className="flex-product__item-img" />
                     </Link>
                     <div>
                        <h4 className="flex-product__item-title">jeans</h4>
                        <h4 className="flex-product__item-precio">$00000</h4>
                     </div>
                  </div>
                  <div className="flex-product__item" id='seventhItem'>
                     <Link to="Product">
                        <img src={require('../../assets/img/jeans.jpg')} alt="imagen de producto" className="flex-product__item-img" />
                     </Link>
                     <div>
                        <h4 className="flex-product__item-title">jeans</h4>
                        <h4 className="flex-product__item-precio">$00000</h4>
                     </div>
                  </div>
                  <div className="flex-product__item" id='eighthItem'>
                     <Link to="/Product">
                        <img src={require('../../assets/img/jeans.jpg')} alt="imagen de producto" className="flex-product__item-img" />
                     </Link>
                     <div>
                        <h4 className="flex-product__item-title">jeans</h4>
                        <h4 className="flex-product__item-precio">$00000</h4>
                     </div>
                  </div>
               </div>
            </article>

         </section>
      </>
   )
}