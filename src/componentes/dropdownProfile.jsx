import {Link} from "react-router-dom";


export default function DropdownProfile({userName , isLogged , setOp}) {
   const iniciarSesion = () => {
      setOp(true);
   }
   const cerrarSesion = () => {
      setOp(true)
   }
   return (
      <ul className="dropDownProfile">
         <li>{isLogged ? userName : 'invitado'}</li>
         <hr />
         <li><Link to="/Configuracion">Configuracion</Link><Link to='/Configuracion'><div><i class="fa-solid fa-gear fa-xs" /></div></Link></li>
         <li>{isLogged ? (
            <><button id="logOut-button" onClick={cerrarSesion}>Cerrar Sesion</button><div><i class="fa-solid fa-user fa-xs"></i></div></>
         ) : (
            <><button id="signIn-button" onClick={iniciarSesion}>Iniciar Sesion</button><div><i class="fa-solid fa-user fa-2xs"></i></div></>
         )}</li>
         <li><Link to="/Configuracion">Ayuda</Link><Link to='/Configuracion'><div><i class="fa-solid fa-info fa-xs" /></div></Link></li>
         <li><Link to="/Configuracion">Enviar Comentarios</Link><Link to='/Configuration'><div><i class="fa-solid fa-comments fa-xs" /></div></Link></li>
         {
            userName === 'todoPasa1976' &&  <li><Link to="/StockManager">Stock Manager</Link><div><i class="fa-solid fa-box fa-xs"></i></div></li>
         }
      </ul>
   )
}