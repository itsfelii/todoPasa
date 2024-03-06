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
// hookers
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
// Next ui
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from "@nextui-org/react";
import { Badge } from "@nextui-org/react";
// context
import { useUser } from "./context/contextProvider";

function App() {
  // sesion menu 
  const [op, setOp] = useState(false);
  // nombre de usuario
  const [nombre, setNombre] = useState('user');
  let USUARIO = useUser();
  useEffect(() => {
    setNombre(USUARIO.user.nombre);
  }, [USUARIO.user]);

  // sesion control
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth'
    });
  }
  return (
    <>
      <BrowserRouter>
        <header className="App-header">
          <nav className="nav">
            <div className="nav-section-1">
              <div className="nav-section-1-1">
                <Link to="/"><div className="nav__logo">Todo Pasa</div></Link>
              </div>
              <div className="nav-section-1-2">
                <div className="nav__search-container" >
                  <input type="text" className="nav__search-input" placeholder="Busca productos" />
                  <i className="fa-solid fa-magnifying-glass fa-flip-horizontal fa-2xs"></i>
                </div>
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Avatar
                      isBordered
                      as="button"
                      className="transition-transform"
                      size='sm'
                      style={{ 'width': '32px', 'height': '32px', 'color': '#000' }}
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" variant="flat" style={{ width: '300px' }}>
                    <DropdownItem key="profile" className="h-12 gap-2">
                      <p className="font-semibold">Signed in as {nombre ? nombre : 'user'}</p>
                    </DropdownItem>
                    <DropdownItem key="team_settings">
                      <Link to='/StockManager'>
                        <i class="fa-solid fa-box" style={{ 'margin-right': '10px' }} />
                        Stock-manager
                      </Link>
                    </DropdownItem>
                    <DropdownItem key="configurations">
                      <i class="fa-solid fa-gear" style={{ 'margin-right': '9px' }} />
                      Configurations
                    </DropdownItem>
                    <DropdownItem key="help_and_feedback">
                      <i class="fa-solid fa-circle-info" style={{ 'margin-right': '10px' }}></i>
                      Help & Feedback
                    </DropdownItem>
                    {nombre != '' && (
                      <DropdownItem key="logout" color="danger" onClick={() => {
                        scrollToTop();
                        setOp(!op);
                        USUARIO.updateUser({
                          "nombre": "",
                          "email": ""
                        })
                      }}>
                        Log Out
                      </DropdownItem>
                    )
                    }
                    {
                      nombre == '' && (
                        <DropdownItem key="logout" color="primary" onClick={() => {
                          scrollToTop();
                          setOp(!op);
                        }}>
                          Sign in
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
                  <Link to='/ShoppingCart'>
                    <div className="nav__shopping-cart" >
                      <i className="fa-solid fa-bag-shopping" id="shopping-cart" ></i>
                    </div>
                  </Link>
                </Badge>
              </div>
            </div>
          </nav>
          <div className="nav-section-2">
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
          <Route path="/" element={<HomePage />} />
        </Routes>

        <div class="wave-container"></div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
