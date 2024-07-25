// componentes 
import HomePage from "./componentes/homePage";
import Footer from "./componentes/footer";
import ShoppingCart from "./componentes/ShoppingCart";
import Product from "./componentes/Product";
import Jeans from "./componentes/secondary-components/Jeans";
import Buzos from "./componentes/secondary-components/Buzos";
import Remeras from "./componentes/secondary-components/Remeras";
import Musculosas from "./componentes/secondary-components/Musculosas";
import Vestidos from "./componentes/secondary-components/Vestidos";
import Mallas from "./componentes/secondary-components/Mallas";
import Sacos from "./componentes/secondary-components/Sacos";
import Sesion from "./componentes/Sesion";
import StockManager from "./componentes/StockManager";
import Ayuda from "./componentes/Ayuda";
// hookers
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState, useEffect, useCallback, Suspense } from "react";
// Next ui
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from "@nextui-org/react";
import { Badge } from "@nextui-org/react";
// context
import { useUser } from "./context/contextProvider";
// scroll function 
import scrollToTop from "./services/Scroll";
function App() {
  const toggleOpen = useCallback(() => {
    let caja = document.getElementById('cart-floating-component');
    caja.style.right = '0';
  }, []);
  const closeComponent = useCallback(() => {
    let caja = document.getElementById('cart-floating-component');
    caja.style.right = '-2000px'
  }, []);
  // sesion menu 
  const [op, setOp] = useState(false);
  // nombre de usuario
  const [nombre, setNombre] = useState('user');
  let USUARIO = useUser();
  useEffect(() => {
    setNombre(USUARIO.user.nombre);
  }, [USUARIO.user]);

  // esconde el nav si baja o si sube
  useEffect(() => {
    let prevScrollY = window.scrollY;
    const navbar = document.getElementById('navbar');

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        // Si el usuario se desplaza hacia abajo, ocultamos la barra de navegación
        if (currentScrollY >= 400) navbar.classList.add('nav-scrolled');
      }
      else navbar.classList.remove('nav-scrolled');
      // Si el usuario se desplaza hacia arriba, mostramos la barra de navegación

      // Actualizamos el valor previo para la próxima iteración
      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  // busqueda
  const handleSearch = (e) => {
    let results = document.getElementById('nav__search-results-js');
    if (e.target.value == '') {
      results.style.height = '0';
    } else {
      // se hace la busqueda aca 
      results.style.height = '200px';
    }
  }


  return (
    <>
      <BrowserRouter>
        {/* barra de navegacion */}
        <header className="App-header">
          <nav className="nav" id='navbar'>
            <div className="nav-section-offer">
              <p>40-60% OFF FRESH PICKS + EXTRA 40% OFF SALE</p>
            </div>
            <div className="nav-section-1">
              <div className="nav-section-1-1">
                <Link to="/"><div className="nav__logo">Todo Pasa</div></Link>
              </div>
              <div className="nav-section-1-2">
                <div className="nav__search-container" >
                  <input type="text" className="nav__search-input" placeholder="Busca productos" onChange={handleSearch} />
                  <i className="fa-solid fa-magnifying-glass fa-flip-horizontal fa-2xs"></i>
                  <div className="nav__search-results" id='nav__search-results-js'>
                  </div>
                </div>
                {/* dropdown de perfil  */}
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    {/* avatar del usuario */}
                    <Avatar
                      isBordered
                      as="button"
                      className="transition-transform"
                      size='sm'
                      style={{ 'width': '32px', 'height': '32px', 'color': '#000' }}
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" variant="flat" style={{ width: '300px' }}>
                    {/* seccion de nombre de usuario del dropdown */}
                    <DropdownItem key="profile" className="h-12 gap-2">
                      <p className="font-semibold">Signed in as {nombre ? nombre : 'user'}</p>
                    </DropdownItem>
                    {/* seccion de stock manager solo para administradores*/}
                    <DropdownItem key="team_settings">
                      <Link to='/StockManager'>
                        <i class="fa-solid fa-box" style={{ 'margin-right': '10px' }} />
                        Stock-manager
                      </Link>
                    </DropdownItem>
                    {/* boton de configuraciones */}
                    <DropdownItem key="configurations">
                      <i class="fa-solid fa-gear" style={{ 'margin-right': '9px' }} />
                      Configuraciones
                    </DropdownItem>
                    {/* seccion de ayuda de la pagina del dropdown */}
                    <DropdownItem key="help_and_feedback">
                      <Link to='/Ayuda'>
                        <i class="fa-solid fa-circle-info" style={{ 'margin-right': '10px' }}></i>
                        Ayuda
                      </Link>
                    </DropdownItem>
                    {/* codigo que determina si hay un usuario logeado o se tiene que logear */}
                    {nombre != '' && (
                      <DropdownItem key="logout" color="danger" onClick={() => {
                        scrollToTop();
                        setOp(!op);
                        USUARIO.updateUser({
                          "nombre": "",
                          "email": ""
                        })
                      }}>
                        Cerrar Sesion
                      </DropdownItem>
                    )
                    }
                    {
                      nombre == '' && (
                        <DropdownItem key="logout" color="primary" onClick={() => {
                          scrollToTop();
                          setOp(!op);
                        }}>
                          Iniciar Sesion
                        </DropdownItem>
                      )
                    }
                  </DropdownMenu>
                </Dropdown>
                <Badge content='' color="primary" size='sm' variant='shadow' placement='top-left' style={{
                  'min-width': '0px',
                  'min-height': '0px',
                  'width': '10px',
                  'height': '17px',
                  'margin': '10px 0 0 37px',
                }} >
                  <Link onClick={toggleOpen}>
                    <div className="nav__shopping-cart" >
                      <i className="fa-solid fa-bag-shopping" id="shopping-cart" ></i>
                    </div>
                  </Link>
                </Badge>
                {/* boton de carrito desplegable */}
                <div className="floating-container" id='cart-floating-component'>
                  <button onClick={closeComponent}>
                    <i class='bx bxs-x-circle'></i>
                  </button>
                  <div className="floating-component">
                    <article>
                      {/* producto de prueba */}
                      <div className="floating-component__cart-product">
                        <div className="floating-component__cart-product-img-container">
                          <img src={require('./assets/img/jeans.jpg')} alt="" />
                          <div>
                            <h3>Nombre</h3>
                            <p>Talle</p>
                          </div>
                        </div>
                        <div className='floating-component__cart-product-price-container'>
                          <h3>Precio</h3>
                          {/* boton para eliminar del carrito */}
                          <i class='bx bx-trash' onClick={(e) => {
                            let closest = e.target.closest('.floating-component__cart-product');
                            closest.parentNode.removeChild(closest);
                          }} />
                        </div>
                      </div>
                      <hr />
                    </article>
                    {/* boton de compra */}
                    <div className="floating-component__buy-btn">
                      <Link to='/ShoppingCart' onClick={closeComponent}>
                        <p>Iniciar compra</p>
                      </Link>
                      <button onClick={closeComponent}>Continuar comprando</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="nav-section-2">
            {/* seccion de navegacion */}
            <div className="nav__filter">
              <Link to="/Jeans">Jeans</Link>
              <Link to="/Remeras">Remeras</Link>
              <Link to="/Musculosas">Musculosas</Link>
              <Link to="/Vestidos">Vestidos</Link>
              <Link to="/Mallas">Mallas</Link>
              <Link to="/Buzos">Buzos</Link>
              <Link to="/Sacos">Sacos</Link>
            </div>
          </div>
        </header>
        {
          op && (<Sesion
            setOp={setOp} />)
        }

        <Routes>
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/Product" element={<Product />} />
          <Route path='/Jeans' element={<Jeans />} />
          <Route path='/Buzos' element={<Buzos />} />
          <Route path='/Remeras' element={<Remeras />} />
          <Route path='/Musculosas' element={<Musculosas />} />
          <Route path='/Vestidos' element={<Vestidos />} />
          <Route path='/Mallas' element={<Mallas />} />
          <Route path='/Sacos' element={<Sacos />} />
          <Route path='/StockManager' element={<StockManager />} />
          <Route path='/Ayuda' element={<Ayuda />} />
          <Route path="/" element={
            <Suspense>
              <HomePage />
            </Suspense>
          } />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
