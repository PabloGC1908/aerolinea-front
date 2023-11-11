import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import {useEffect} from "react";

const AdminPage = () => {

  useEffect(() => {
    document.title = "Admin"
  }, []);

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
            <Link to={'/admin-vuelos'}>Administrar vuelos</Link>
          </button>
        </div>
        <div>
          <button>
            <Link to={'/reservas'}>Reservas vuelos</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminPage