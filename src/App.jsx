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
import DropdownProfile from "./componentes/dropdownProfile";
import Sesion from "./componentes/Sesion";
import StockManager from "./componentes/StockManager";
// theme provider 
import ProductProvider from "./context/contextProvider";
// hookers
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState , useEffect } from "react";
// logo 
import logo from "./assets/logo/logo.jpg";

function App() {
  // search navigation bar styles
  const addPlaceHolder = () => document.querySelector('.nav__search-input').setAttribute("placeholder", 'Search');
  const removePlaceHolder = () => document.querySelector('.nav__search-input').removeAttribute("placeholder");
  // dropdown menu profile
  const [open, setOpen] = useState(false);
  const showOff = () => {
    setOpen(false);
  }
  // sesion menu 
  const [op, setOp] = useState(false);
  // se ejecuta cada vez se abre o cierra
  useEffect(()=> {
    console.log(op);
  } , [op])

  return (
    <>
      <BrowserRouter>
        <header className="App-header">
          <nav className="nav">
            <div className="nav-section-1">
              <div className="nav-section-1-1">
                <Link to="/"><div className="nav__logo" onClick={showOff}>Todo Pasa</div></Link>
              </div>
              <div className="nav-section-1-2">
                <div className="nav__search-container" onMouseOver={addPlaceHolder} onMouseOut={removePlaceHolder}>
                  <input type="text" className="nav__search-input" />
                  <i className="fa-solid fa-magnifying-glass fa-flip-horizontal fa-2xs"></i>
                </div>
                <button className="nav__user" onClick={() => {setOpen(!open);}}>
                  <img src={logo}></img>
                </button>
                  {
                    open && (<DropdownProfile
                      userName='todoPasa1976'
                      isLogged={true} 
                      setOp = {setOp} />)
                  }
                <Link to='/ShoppingCart' onClick={showOff}>
                  <div className="nav__shopping-cart">
                    <i className="fa-solid fa-bag-shopping" id="shopping-cart"></i>
                  </div>
                </Link>
              </div>
            </div>
          </nav>
          <div className="nav-section-2">
            <div className="nav__filter">
              <Link to="/Jeans" onClick={showOff}>Jeans</Link>
              <Link to="/Remeras" onClick={showOff}>Remeras</Link>
              <Link to="/Musculosas" onClick={showOff}>Musculosas</Link>
              <Link to="/Vestidos" onClick={showOff}>Vestidos</Link>
              <Link to="/Mallas" onClick={showOff}>Mallas</Link>
              <Link to="/Buzos" className={window.location.pathname == '/Buzos' ? 'active' : ''} onClick={showOff}>Buzos</Link>
              <Link to="/Sacos" onClick={showOff}>Sacos</Link>
            </div>
          </div>
        </header>
            {
              op && (<Sesion 
                setOp = {setOp} />)
            }
            <ProductProvider>
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
            </ProductProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
