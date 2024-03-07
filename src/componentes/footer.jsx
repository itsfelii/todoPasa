import { Link } from "react-router-dom";

export default function () {
   return (
      <footer>
         <div className="redes-sociales">
            <div className="redes-sociales-bars"></div>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-facebook"></i>
            <div className="redes-sociales-bars"></div>
         </div>
         <h3>Todo Pasa</h3>
         <div className="footer__grid-container">
            <div className="footer__grid-item">
               <h3>PRODUCTOS</h3>
               <ul>
                  <li>Jeans</li>
                  <li>Remeras</li>
                  <li>Musculosas</li>
                  <li>Vestidos</li>
                  <li>Mallas</li>
                  <li>Buzos</li>
                  <li>Sacos</li>
               </ul>
            </div>
            <div className="footer__grid-item">
               <h3>AYUDA</h3>
               <ul>
                  <li>Envios y Entregas</li>
                  <li>Devoluciones</li>
                  <li>Cambios</li>
                  <li>Opciones de pago</li>
                  <li>Contactate</li>
                  <li>Comentarios</li>
               </ul>
            </div>
            <div className="footer__grid-item">
               <h3>ACERCA DE </h3>
               <ul>
                  <li>Ofertas</li>
                  <li>Noticias</li>
                  <li>Dudas</li>
                  <li>Acerca de Todo pasa</li>
               </ul>
            </div>
         </div>
         <div className="footer__terms-container">
            <div>
               <i class="fa-solid fa-location-dot fa-xs" />
               <h3>© 2023 Todos los derechos reservados.</h3>
            </div>
            <div>
               <h3>Terminos y condiciones</h3>
               <h3>Politica de privacidad y cookies</h3>
            </div>
         </div>
      </footer>
   )
}