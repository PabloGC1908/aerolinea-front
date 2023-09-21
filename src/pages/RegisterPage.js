import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";
import "../stylesheets/LoginPage.css"

const RegisterPage = () => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')
  const [contrasenia, setContrasenia] = useState('')

  const url = 'http://localhost:8080'
  const navigate = useNavigate()

  const sendRegisterRequest = async () => {
    try {
      const response = await fetch(url.concat("/auth/sign-in"), {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(
          {
            nombre,
            apellido,
            email,
            numero,
            contrasenia
          }
        )
      });

      const responseData = await response.json();
      console.log(responseData)

      if (response.status === 200) {
        navigate('/')
      } else {
        alert("Invalid register attempt");
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <Navbar />
      <form className={"login-form"}>
        <div className={"container"}>
          <h1>Registrarse</h1>
          <label htmlFor={"nombre"} >Nombre</label>
          <input className={"input-text"} type={"text"} id={"nombre"} value={nombre} required={true}
                 onChange={(event) => setNombre(event.target.value)} />
          <label htmlFor={"apellido"} >Apellido</label>
          <input className={"input-text"} type={"text"} id={"apellido"} value={apellido} required={true}
                 onChange={(event) => setApellido(event.target.value)} />

          <label htmlFor={"email"} >Email</label>
          <input className={"input-text"} type={"email"} id={"email"} value={email} required={true}
                 onChange={(event) => setEmail(event.target.value)} />

          <label htmlFor={"numero"} >Numero</label>
          <input className={"input-text"} type={"tel"} id={"numero"} value={numero} required={true}
                 onChange={(event) => setNumero(event.target.value)} />

          <label htmlFor={"contrasenia"} >Contraseña</label>
          <input className={"input-text"} type={"password"} id={"contrasenia"} value={contrasenia} required={true}
                 onChange={(event) => setContrasenia(event.target.value)} />

          <button className={"login-button"} id={"submit"} type={"button"} onClick={() => sendRegisterRequest()}>
            Registrarse
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage