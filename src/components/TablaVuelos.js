import {useEffect, useState} from "react";
import "../stylesheets/Table.css"
import {Link} from "react-router-dom";

const TablaVuelos = ({component}) => {
  const [vuelos, setVuelos] = useState([])

  const url = 'http://localhost:8080'

  const getVuelosRequest = async () => {
    try {
      const response = await fetch(url.concat("/api/vuelos"), {
        method: "GET"
      });
      const responseData = await response.json();
      const vuelosFormateados = responseData.map((vuelo) => ({
        ...vuelo,
        fechaIda: new Date(vuelo.fechaIda).toLocaleDateString('es-ES'),
        fechaVuelta: new Date(vuelo.fechaVuelta).toLocaleDateString('es-ES')
      }));

      setVuelos(vuelosFormateados);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getVuelosRequest().then()
  }, []);

  return (
    <div>
      <table className="table-vuelos">
        <thead>
          <tr>
            <th>Aerolinea</th>
            <th>Ciudad Origen</th>
            <th>Ciudad Destino</th>
            <th>Fecha Vuelo</th>
            <th>Fecha Regreso</th>
            <th>Precio</th>
            <th>Opcion</th>
          </tr>
        </thead>
        <tbody>
          {
            vuelos.map((vuelo) => (
              <tr key={vuelo.uuid}>
                <td>{vuelo.aerolinea}</td>
                <td>{vuelo.ciudadOrigen}</td>
                <td>{vuelo.ciudadDestino}</td>
                <td>{vuelo.fechaIda}</td>
                <td>{vuelo.fechaVuelta}</td>
                <td>USD {vuelo.precio}</td>
                <td>
                  <Link to={`/vuelos/${vuelo.uuid}`}>Comprar</Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default TablaVuelos