import { NavLink } from "react-router"

function Header(){
    return(
        <>
                <header className="header">
    <div className="container-fluid">
      <nav className="navigation d-flex align-items-center justify-content-between py-16">
        <NavLink to="/"   className="d-flex align-items-center">
          <img src="/savory/assets/media/logo.png" alt="/logo" className="header-logo" />
        </NavLink>
        <div className="menu-button-right">
          <div className="main-menu__nav">
            <ul className="main-menu__list">
              <li><NavLink to="/shop">Shop</NavLink></li>
              <li>
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
              {/* <li>   Navigate To
                <ul>
                  <li>
                <NavLink to="/admin">Admin Side</NavLink>
                    </li>
                </ul>
              </li> */}

            </ul>
          </div>
        </div>
        <div className="main-menu__right">
          <div className="search-heart-icon d-sm-flex d-none align-items-center gap-24">
            <NavLink className="cus-btn" to="/register">
              <span className="text">Login / Register</span>
            </NavLink>
          </div>
          <a href="#" className="d-xl-none d-flex main-menu__toggler mobile-nav__toggler">
            <img src="/savory/assets/media/icons/menu-2.png" alt />
          </a>
        </div>
      </nav>
    </div>
  </header>
         
        </>
    )
}
export default Header