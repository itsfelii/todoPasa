import React, { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useUser } from "../context/contextProvider";

function Sesion({ setOp }) {
   const [hasAccount, setHasAccount] = useState(true);
   // contexto
   const { user, updateUser } = useUser();

   const showPassword = (e) => {
      let input = e.target.nextElementSibling;
      (input.getAttribute('type')) === 'password' ? (input.type = 'text') : (input.type = 'password');
   }
   useEffect(() => {
      // bloquea el scroll
      document.body.style.overflow = 'hidden';
      return () => {
         document.body.style.overflow = 'visible';
      }
   })

   //peticiones a la base de datos
   // registrarse 
   const registrarse = (e) => {
      let error = 0;
      e.preventDefault();
      let nombre = document.getElementById('registrarse-nombre').value;
      document.getElementById('registrarse-nombre').value = '';
      let email = document.getElementById('registrarse-email').value;
      document.getElementById('registrarse-email').value = '';
      let password = document.getElementById('registrarse-password').value;
      document.getElementById('registrarse-password').value = '';
      axios.post("http://localhost:5000/api/usuarios/create", {
         "nombre": nombre,
         "email": email,
         "password": password
      })
         .then(res => {
            if (res.data['state'] == 200) {
               console.log('todo bien por aca , recien cree un usuario');
            }
         }).catch(e => {
            error = 1;
            console.log(e);
         });
      if (error == 0) {
         updateUser({
            "nombre": nombre,
            "email": email,
            "password": password
         })
      }
   }

   const usuario = useUser();
   console.log(usuario, 'usuario enlinea');
   const iniciarSesion = async (e) => {
      e.preventDefault();
      const email = document.getElementById('iniciarSesion-email').value;
      const password = document.getElementById('iniciarSesion-password').value;
      if (!email) {
         let input = document.getElementById('iniciarSesion-email');
         input.style.border = 'solid thin #f00'
      }
      if (!password) {
         let input = document.getElementById('iniciarSesion-password');
         input.style.border = 'solid thin #f00';
      }

      await axios.post("http://127.0.0.1:5000/api/usuarios/verificate", {
         "email": email,
         "password": password
      })
         .then(res => {
            console.log(res.data);
            if (res.data.result == true) {
               console.log('inicio sesion')
               usuario.updateUser({
                  "nombre": res.data.nombre,
                  "email": email
               })
               console.log(usuario);
            } else if (res.data.result == '460') {
               let input = document.getElementById('iniciarSesion-email');
               input.style.border = 'solid thin #f00';
            } else if (res.data.result == '450') {
               let input = document.getElementById('iniciarSesion-password');
               input.style.border = 'solid thin #f00';
            }
         })
         .catch(e => console.log(e));
   }
   return (
      <>
      {
         !hasAccount && (
            <section className="section-form">
            <i className='bx bxs-x-circle xmark' onClick={() => setOp(false)} />
            <div className="container-form">
               <div className="information">
                  <div className="info-childs">
                     <h2>Bienvenido</h2>
                     <p>Para unirte a nuestra comunidad por favor registrate con tus datos</p>
                     <input type='button' value='Iniciar Sesion' onClick={() => setHasAccount(!hasAccount)}/>
                  </div>
                  <div className="form-information">
                     <div className="form-information-childs">
                        <h2>Crear una cuenta</h2>
                        <div className="icons">
                           <i className='bx bxl-google' />
                           <i className='bx bxl-github' />
                           <i class='bx bxl-apple' />
                        </div>
                        <p>o usa tu email para registrarte</p>
                        <form className="form" onSubmit={registrarse}>
                           <label>
                              <i className='bx bx-user' />
                              <input type='text' placeholder="Nombre Completo" id='registrarse-nombre' onChange={(e) => {
                                 e.target.style.border = 'none';
                              }} />
                           </label>
                           <label>
                              <i className='bx bx-envelope' />
                              <input type="email" placeholder='Correo' id='registrarse-email' onChange={(e) => {
                                 e.target.style.border = 'none';
                              }} />
                           </label>
                           <label>
                              <i className='bx bx-lock-alt' id='password-lock1' />
                              <i class='bx bx-low-vision' style={{display: 'none'}} id='password-eye1' onClick={showPassword} />
                              <input type="password" placeholder='Contraseña' id='registrarse-password' onChange={(e) => {
                                 e.target.style.border = 'none';
                                 if (e.target.value == '') {
                                    document.getElementById('password-eye1').style.display = 'none';
                                    document.getElementById('password-lock1').style.display = 'inline';
                                 } else {
                                    document.getElementById('password-eye1').style.display = 'inline';
                                    document.getElementById('password-lock1').style.display = 'none';
                                 }
                              }} />
                           </label>
                           <input type="submit" value='Registrarse' />
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         )
      }
         
         {
            hasAccount && (
               <section className="section-form">
                  <i className='bx bxs-x-circle xmark' onClick={() => setOp(false)} />
                  <div className="container-form">
                     <div className="information">
                        <div className="info-childs">
                           <h2>Bienvenido</h2>
                           <p>Para unirte a nuestra comunidad por favor inicia sesion con tus datos</p>
                           <input type='button' value='Registrarse' onClick={() => setHasAccount(!hasAccount)}/>
                        </div>
                        <div className="form-information">
                           <div className="form-information-childs">
                              <h2>Entra en tu cuenta</h2>
                              <div className="icons">
                                 <i className='bx bxl-google' />
                                 <i class='bx bxl-facebook' />
                                 <i class='bx bxl-apple' />
                              </div>
                              <p>o usa tus datos para entrar</p>
                              <form className="form" onSubmit={iniciarSesion}>
                                 <label>
                                    <i className='bx bx-envelope' />
                                    <input type="email" placeholder='Correo' id='iniciarSesion-email' onChange={(e) => {
                                       e.target.style.border = 'none';
                                    }} className="email-iniciarSesion"/>
                                 </label>
                                 <label>
                                    <i className='bx bx-lock-alt' id='password-lock2' />
                                    <i class='bx bx-low-vision' style={{display: 'none'}} id='password-eye2' onClick={showPassword}/>
                                    <input type="password" placeholder='Contraseña' id='iniciarSesion-password' onChange={(e) => {
                                       e.target.style.border = 'none';
                                       if (e.target.value == '') {
                                          document.getElementById('password-eye2').style.display = 'none';
                                          document.getElementById('password-lock2').style.display = 'inline';
                                       } else {
                                          document.getElementById('password-eye2').style.display = 'inline';
                                          document.getElementById('password-lock2').style.display = 'none';
                                       }
                                    }} className="password-iniciarSesion"/>
                                 </label>
                                 <input type="submit" value='Iniciar Sesion' />
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
            )
         }
      </>
   );
}

export default Sesion;