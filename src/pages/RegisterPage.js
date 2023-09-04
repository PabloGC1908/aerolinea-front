import {useState} from "react";
import {useNavigate} from "react-router-dom";

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
        new Error("Invalid register attempt");
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <form>
      <div>
        <label htmlFor={"nombre"} >Nombre</label>
        <input type={"text"} id={"nombre"} value={nombre}
               onChange={(event) => setNombre(event.target.value)} />
      </div>
      <div>
        <label htmlFor={"apellido"} >Apellido</label>
        <input type={"text"} id={"apellido"} value={apellido}
               onChange={(event) => setApellido(event.target.value)} />
      </div>
      <div>
        <label htmlFor={"email"} >Email</label>
        <input type={"email"} id={"email"} value={email}
               onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        <label htmlFor={"numero"} >Numero</label>
        <input type={"tel"} id={"numero"} value={numero}
               onChange={(event) => setNumero(event.target.value)} />
      </div>
      <div>
        <label htmlFor={"contrasenia"} >Contraseña</label>
        <input type={"password"} id={"contrasenia"} value={contrasenia}
               onChange={(event) => setContrasenia(event.target.value)} />
      </div>
      <div>
        <button id={"submit"} type={"button"} onClick={() => sendRegisterRequest()}>
          Registrarse
        </button>
        <button type={"button"} onClick={() => navigate("/")}>
          Volver
        </button>
      </div>
    </form>
  )
}

export default RegisterPage