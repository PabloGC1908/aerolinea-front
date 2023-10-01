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
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
      });
      console.log(response)

      if (!response.ok) {
        throw new Error("Error en el inicio de sesion")
      }

      const responseData = await response.json();
      console.log(responseData)

      if (response.status === 403){
        throw new Error("Datos invalidos, ingrese sus datos correctamente")
      }

      if (response.status === 500) {
        throw new Error("Error del servidor")
      }

      if (response.status === 200) {
        sessionStorage.setItem('token', responseData.token)
        sessionStorage.setItem('nombre', responseData.nombre)
        sessionStorage.setItem('rol', responseData.role)
        sessionStorage.setItem('id_user', responseData.uuid)

        redirect(responseData.role)
      }
    } catch (error) {
      alert(error.message)
    }
  }


  return (
    <div>
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
                   onChange={(event) => setContrasenia(event.target.value)}
                   autoComplete={"current-password"}
            />

            <button className={"login-button"} onClick={sendLoginRequest} type="button">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage