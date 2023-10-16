import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Navbar from "../components/Navbar";

const VueloDetailPage = () => {
  let { idVuelo } = useParams();
  const [vuelo, setVuelo] = useState({});
  const [fechaIda, setFechaIda] = useState('');
  const [horaIda, setHoraIda] = useState('');
  const [fechaVuelta, setFechaVuelta] = useState('');
  const [horaVuelta, setHoraVuelta] = useState('');

  const url = 'http://localhost:8080';

  const getVueloRequest = async () => {
    try {
      const response = await fetch(url.concat("/api/vuelos/").concat(idVuelo), {
        method: "GET"
      });
      const responseData = await response.json();

      const fechaIdaCompleta = new Date(responseData.fechaIda);
      setFechaIda(fechaIdaCompleta.toLocaleDateString('es-ES'));
      setHoraIda(fechaIdaCompleta.toLocaleTimeString('es-ES'));

      const fechaVueltaCompleta = new Date(responseData.fechaVuelta);
      setFechaVuelta(fechaVueltaCompleta.toLocaleDateString('es-ES'));
      setHoraVuelta(fechaVueltaCompleta.toLocaleTimeString('es-ES'));

      setVuelo(responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    document.title = "Detalles"
    getVueloRequest().then(() => {})
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <h1>Detalles del Vuelo</h1>
        <p>Aerolínea: {vuelo.aerolinea}</p>
        <p>Cantidad de Pasajeros: {vuelo.cantidadPasajeros}</p>
        <p>Ciudad Origen: {vuelo.ciudadOrigen}</p>
        <p>Ciudad Destino: {vuelo.ciudadDestino}</p>
        <p>Fecha Ida: {fechaIda}</p>
        <p>Hora Ida: {horaIda}</p>
        <p>Fecha Vuelta: {fechaVuelta}</p>
        <p>Hora Vuelta: {horaVuelta}</p>
        <p>Precio: USD {vuelo.precio}</p>
        <p>Precio: PEN {vuelo.precio * 3.70}</p>
      </div>
      <div>
        <button >
          <Link to={`/vuelos/${vuelo.uuid}/pago`}>Adquirir pasaje</Link>
        </button>
      </div>
    </div>
  );
};

export default VueloDetailPage;