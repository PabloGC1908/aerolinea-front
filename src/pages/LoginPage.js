import {useState} from "react"
import {useNavigate} from "react-router-dom"
import Navbar from "../components/Navbar"
import "../stylesheets/LoginPage.css"
import Logo from "../components/Logo";

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [contrasenia, setContrasenia] = useState("")

  const usuario = {email, contrasenia}
  const url = 'http://localhost:8080'
  const navigate = useNavigate()

  const redirect = (rol) => {
    if (rol === "ADMIN")
      navigate("/admin")
    else
      navigate("/")
  }

  const sendLoginRequest = async () => {
    try {
      const response = await fetch(url.concat("/auth/log-in"), {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(usuario)
      });

      const responseData = await response.json();

      if (response.status === 403){
        alert("Datos invalidos, ingrese sus datos correctamente")
      } else if (response.status === 500) {
        alert("Error del servidor")
      }
      else if (response.status === 200) {
        sessionStorage.setItem('token', responseData.token)
        sessionStorage.setItem('nombre', responseData.nombre)
        sessionStorage.setItem('rol', responseData.role)
        sessionStorage.setItem('id_user', responseData.uuid)

        if (responseData.role) {
          redirect(responseData.role);
        } else {
          alert("Error en la respuesta del servidor");
        }
      }
    } catch (error) {
      alert(error.message);
    }
  }


  return (
    <>
      <Navbar />
      <div className={'login-container'}>
        <form className={"login-form"}>
          <div className="container">
            <h2>Inicie Sesion</h2>
            <div className="img-container">
              <Logo />
            </div>
            <label htmlFor={"email"} ><b>Email</b></label>
            <input className={"input-text"} type={"email"} id={"email"}
                   value={email} placeholder={"Email"}
                   onChange={(event) => setEmail(event.target.value)} />

            <label htmlFor={"contrasenia"} ><b>Contraseña</b></label>
            <input className={"input-text"} type={"password"} id={"contrasenia"}
                   value={contrasenia} placeholder={"Contraseña"}
                   onChange={(event) => setContrasenia(event.target.value)} />

            <button className={"login-button"} onClick={sendLoginRequest} type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginPage