import {useNavigate} from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Pagina de Administrador</h1>
      <div>
        <h2>Que desea hacer?</h2>
        <div>
          <button>
            Ingresar nuevo vuelo
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