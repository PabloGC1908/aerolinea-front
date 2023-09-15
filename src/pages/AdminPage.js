import {Link, useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";

const AdminPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Navbar />
      <h1>Pagina de Administrador</h1>
      <div>
        <h2>Que desea hacer?</h2>
        <div>
          <button>
            <Link to={'/add-vuelo'}>Añadir vuelo</Link>
          </button>
        </div>
        <div>
          <button>
            Administrar vuelos
          </button>
        </div>
        <div>
          <button>
            Estadisticas de vuelos
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminPage