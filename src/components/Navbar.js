import "../stylesheets/Navbar.css"
import {Link} from "react-router-dom";

const Navbar = () => {
  return (

    <div className="background">
      <div className="menu__bar">
        <Link to={"/"}>
          <svg xmlns="http://www.w3.org/2000/svg" className="logo" width="180" height="180"  viewBox="0 0 180 180" fill="none">
            <path d="M82.646 37.0917C85.7401 35.3054 89.552 35.3054 92.646 37.0917L133.614 60.7445L105.286 77.3318C100.901 72.9296 94.8325 70.2051 88.128 70.2051C81.1554 70.2051 74.871 73.1519 70.4523 77.8681L41.4416 60.8811L82.646 37.0917Z" fill="white"/>
            <path d="M64.9303 87.4484L35.9141 70.4582V117.952L64.8222 101.025C64.2287 98.9258 63.9111 96.7109 63.9111 94.4219C63.9111 91.9977 64.2673 89.6567 64.9303 87.4484Z" fill="white"/>
            <path d="M70.1924 110.694L41.8975 127.262L82.646 150.788C85.74 152.574 89.552 152.574 92.646 150.788L133.158 127.398L105.556 111.236C101.152 115.8 94.9714 118.639 88.128 118.639C81.0175 118.639 74.6227 115.574 70.1924 110.694Z" fill="white"/>
            <path d="M111.22 101.739L139.376 118.226C139.377 118.162 139.378 118.098 139.378 118.034V70.1831L111.101 86.7403C111.908 89.154 112.345 91.7369 112.345 94.4219C112.345 96.9723 111.951 99.4305 111.22 101.739Z" fill="white"/>
          </svg>
        </Link>
        <img
          className="menu-icon"
          src="../img/burger-menu.svg"
          title='Burger Menu'
          alt='Burger Menu'
        />

        <ul className="navigation">
          <li>
            <Link to={'/user'} >Bienvenido {sessionStorage.getItem("nombre")}</Link>
          </li>
          <li>
            <Link to={'/vuelos'}>Vuelos</Link>
          </li>
          <li>
            <Link to={'/login'}>Iniciar Sesion</Link>
          </li>
          <li>
            <Link to={'/register'}>Registrarse</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar