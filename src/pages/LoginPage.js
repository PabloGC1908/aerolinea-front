import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [contrasenia, setContrasenia] = useState("")
  const [token, setToken] = useState("")

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
      console.log(responseData)
      setToken(responseData.token)
      sessionStorage.setItem('token', token)
      sessionStorage.setItem('nombre', responseData.nombre)

      if (response.status === 200) {
        redirect(responseData.role)
      } else {
        new Error("Invalid login attempt");
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
        <p>
          JWT token is {token}
        </p>
      </form>
    </div>
  )
}

export default LoginPage