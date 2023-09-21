import "../stylesheets/Navbar.css"
import {Link} from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const userLoggedIn = sessionStorage.getItem("token") !== null

  let navegacionType;

  if (sessionStorage.getItem("rol") === "ADMIN") {
    navegacionType = <Link to={'/admin'} >Bienvenido {sessionStorage.getItem("nombre")}</Link>
  } else if (sessionStorage.getItem("rol") === "USER") {
    navegacionType = <Link to={'/user'} >Bienvenido {sessionStorage.getItem("nombre")}</Link>
  } else {
    navegacionType = <></>
  }

  const limpiarSessionStorage = () => {
    sessionStorage.clear()
  }

  return (

    <div className="background">
      <div className="menu__bar">
        <Link to={"/"}>
          <Logo />
        </Link>
        <img
          className="menu-icon"
          src="../img/burger-menu.svg"
          title='Burger Menu'
          alt='Burger Menu'
        />

        <ul className="navigation">
          <li>
            {
              navegacionType
            }
          </li>
          <li>
            <Link to={'/vuelos'}>Vuelos</Link>
          </li>
          {userLoggedIn ? (
            <li>
              <Link onClick={() => limpiarSessionStorage()} to={'/'} >Cerrar Sesión</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to={'/login'}>Iniciar Sesión</Link>
              </li>
              <li>
                <Link to={'/register'}>Registrarse</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Navbar