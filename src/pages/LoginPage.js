import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";

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
        redirect(responseData.role)
      }
    } catch (error) {
      alert(error.message);
    }
  }


  return (
    <div>
      <Navbar />
      <form>
        <div>
          <label htmlFor={"email"} >Email</label>
          <input type={"email"} id={"email"} value={email}
                 onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div>
          <label htmlFor={"contrasenia"} >Contraseña</label>
          <input type={"password"} id={"contrasenia"} value={contrasenia}
                 onChange={(event) => setContrasenia(event.target.value)} />
        </div>
        <div>
          <button id={"submit"} type={"button"} onClick={() => sendLoginRequest()}>
            Iniciar Sesion
          </button>
          <button type={"button"} onClick={() => navigate("/register")} >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage