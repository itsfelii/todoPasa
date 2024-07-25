export default function Ayuda() {
   const abrirDropdown = (e) => {
      let arrow = e.target.nextElementSibling;
      arrow.style.display = 'inline'; 
      e.target.style.display = 'none';
      let text = e.target.parentNode.nextElementSibling;
      text.style.opacity='1';
      text.style.height =  '75px';
      text.style.padding = '12px';
   }
   const cerrarDropdown = (e) => {
      let arrow = e.target.previousElementSibling;
      arrow.style.display = 'inline';
      e.target.style.display = 'none';
      let text = e.target.parentNode.nextElementSibling;
      text.style.opacity = '0';
      text.style.height =  '0';
      text.style.padding = '0 12px';
   }
   return (
      <>
         {/* seccion de ayuda de la pagina */}
         <section id="ayuda-section">
            <h3>¿Con que podemos ayudarte?</h3>
            <article className="ayuda-section__envios">
               <div>
                  <i class="fa-solid fa-truck-fast" />
                  <div>
                     <h4>Envios y Entregas</h4>
                     <p>Rango de pedido, tiempo</p>
                  </div>
               </div>
               <i class="fa-solid fa-chevron-right" id="arrow-right" onClick={abrirDropdown} />
               <i class="fa-solid fa-chevron-up" id="arrow-down" onClick={cerrarDropdown} />
            </article>
            <div className="ayudaSectionDropdown ayuda-section__dropdown-1--click">
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate accusantium, molestias enim quo odio quidem maxime ipsum ratione recusandae. Non voluptatem aliquid consectetur cum qui vel quibusdam, molestiae veniam eaque!</p>
            </div>
            <article className="ayuda-section__devoluciones">
               <div>
                  <i class="fa-solid fa-box" />
                  <div>
                     <h4>Devoluciones</h4>
                     <p>Acerca de nuestras politicas de devoluciones y reembolso</p>
                  </div>
               </div>
               <i class="fa-solid fa-chevron-right" id="arrow-right" onClick={abrirDropdown} />
               <i class="fa-solid fa-chevron-up" id="arrow-down" onClick={cerrarDropdown} />
            </article>
            <div className="ayudaSectionDropdown ayuda-section__dropdown-2--click">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vero atque enim sit fugit, deserunt exercitationem excepturi sint officiis suscipit, quas ratione a unde odit aut vitae distinctio quos ducimus?</p>
            </div>
            <article className="ayuda-section__cambios">
               <div>
                  <i class="fa-solid fa-arrow-right-arrow-left" />
                  <div>
                     <h4>Cambios</h4>
                     <p>Acerca de nuestras politicas de cambios</p>
                  </div>
               </div>
               <i class="fa-solid fa-chevron-right" id="arrow-right" onClick={abrirDropdown}/>
               <i class="fa-solid fa-chevron-up" id="arrow-down" onClick={cerrarDropdown} />
            </article>
            <div className="ayudaSectionDropdown ayuda-section__dropdown-3--click">
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dignissimos sint, asperiores molestias, corporis voluptatem placeat tenetur architecto fugit optio aperiam obcaecati iusto quos? Soluta asperiores delectus magni laudantium enim.</p>
            </div>
            <article className="ayuda-section__pagos">
               <div>
                  <i class="fa-solid fa-tag" />
                  <div>
                     <h4>Pagos</h4>
                     <p>Tarjetas aceptadas, descuentos</p>
                  </div>
               </div>
               <i class="fa-solid fa-chevron-right" id="arrow-right" onClick={abrirDropdown}/>
               <i class="fa-solid fa-chevron-up" id="arrow-down" onClick={cerrarDropdown} />
            </article>
            <div className="ayudaSectionDropdown ayuda-section__dropdown-4--click">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, possimus voluptas, distinctio consequatur non ex quibusdam dignissimos sit saepe esse omnis natus reiciendis sequi. Ullam laboriosam molestias eligendi delectus dolorem.</p>
            </div>
            <h4 className="ayuda-section__subtitle">¿Necesitas mas ayuda?</h4>
            <article className="ayuda-section__contactate">
               <div>
                  <i class="fa-solid fa-phone" />
                  <div>
                     <h4>Contactate</h4>
                  </div>
               </div>
               <i class="fa-solid fa-chevron-right" id="arrow-right" onClick={abrirDropdown}/>
               <i class="fa-solid fa-chevron-up" id="arrow-down" onClick={cerrarDropdown} />
            </article>
            <div className="ayudaSectionDropdown ayuda-section__dropdown-5--click">
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem velit eaque sed amet nisi quisquam dicta aspernatur error cupiditate quo aperiam quae in, perspiciatis ab odio illum unde ipsa asperiores.</p>
            </div>
            <article className="ayuda-section__comentarios">
               <h4>Comentarios</h4>
               <form>
                  <input type="text" id="ayuda-section__comentario-espacio" placeholder="Escribe aqui..." />
                  <input type="submit" value="Enviar" id="ayuda-section__comentario-boton" />
               </form>

            </article>
         </section >
      </>
   )
}