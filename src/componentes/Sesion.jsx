import React, { useEffect } from "react";
import { useState } from "react";

function Sesion({setOp}) {

   const [hasAccount , setHasAccount ] = useState(true);
   const handleSubmit = (e) => {
      document.querySelectorAll('.sesion-form-input').value = '';
   }
   const showPassword = (e) => {
      let input = e.target.previousElementSibling;
      (input.getAttribute('type')) === 'password' ? (input.type = 'text') : (input.type = 'password');
   }
   useEffect(() => {
      // bloquea el scroll
      document.body.style.overflow = 'hidden';
      return () => {
         document.body.style.overflow = 'visible';
      }
   })
   return (
      <>
         {hasAccount && (
            <section className='sesion-section'>
               <h2>Iniciar Sesion</h2>
               <button id='xmark' onClick={() => setOp(false)}>
                  <i class="fa-regular fa-circle-xmark"></i>
               </button>
               <form className='sesion-form'>
                  <div>
                     <input type='text' className='sesion-form-input' placeholder="Usuario" />
                  </div>
                  <div>
                     <input type='password' className='section-form-input' placeholder="Contraseña" />
                     <i class="fa-solid fa-eye" onClick={showPassword}></i>
                     <button onClick={() => setHasAccount(!hasAccount)}>no tenes una cuenta? hacela aca</button>
                     <input type="submit" value={'Iniciar Sesion'} onClick={handleSubmit}/>
                  </div>
               </form>
            </section>
         )}
         {!hasAccount && (
            <section className='sesion-section'>
               <h2>Registrarte</h2>
               <button id='xmark' onClick={() => setOp(false)}>
                  <i class="fa-regular fa-circle-xmark"></i>
               </button>
               <form className='sesion-form'>
                  <div>
                     <input type='text' className='sesion-form-input' placeholder="Usuario" />
                  </div>
                  <div>
                     <input type='password' className='section-form-input' placeholder="Contraseña" />
                     <i class="fa-solid fa-eye" onClick={showPassword}></i>
                     <button onClick={() => setHasAccount(!hasAccount)}>tenes una cuenta? inicia sesion aca</button>
                     <input type="submit" value={'Registrarte'} onClick={handleSubmit}/>
                  </div>
               </form>
            </section>
         )}
      </>
   );
}

export default Sesion;