import {NavLink} from "react-router-dom"

import App from "../App"

const Header = () => (
    <header className="main-header">
    <div className="ed-grid s-grid-5 lg-grid-4">
      <div className="s-cols-4 lg-cols-1 s-cross-center"><a href="/"><img class="main-logo" src="img/edteam-ux.svg"/></a></div>
      <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
        <nav className="main-menu" id="main-menu">
          <ul>
            <li><NavLink to="/" exact>Inicio</NavLink></li>
            <li><NavLink to="/cupcakes" exact>Cupcake</NavLink></li>
            <li><NavLink to="/nosotros"exact>Nosotros</NavLink></li>
          </ul>
        </nav>
        <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
      </div>
    </div>
  </header>

)
export default Header