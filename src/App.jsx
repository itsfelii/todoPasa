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
// hookers
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  // search navigation bar styles
  const addPlaceHolder = () => document.querySelector('.nav__search-input').setAttribute("placeholder", 'Search');
  const removePlaceHolder = () => document.querySelector('.nav__search-input').removeAttribute("placeholder");
  // dropdown menu profile
  const [open, setOpen] = useState(false)
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
                <div className="nav__search-container" onMouseOver={addPlaceHolder} onMouseOut={removePlaceHolder}>
                  <input type="text" className="nav__search-input" />
                  <i className="fa-solid fa-magnifying-glass fa-flip-horizontal fa-2xs"></i>
                </div>
                <button className="nav__user" onClick={() => setOpen(!open)}></button>
                {
                  open && (<DropdownProfile
                    userName='todoPasa1976'
                    isLogged={true} />)
                }
                <Link to='/ShoppingCart'>
                  <div className="nav__shopping-cart">
                    <i className="fa-solid fa-bag-shopping" id="shopping-cart"></i>
                  </div>
                </Link>
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
              <Link to="/Buzos" className={window.location.pathname == '/Buzos' ? 'active' : ''}>Buzos</Link>
              <Link to="/Sacos">Sacos</Link>
            </div>
          </div>
        </header>

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
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
