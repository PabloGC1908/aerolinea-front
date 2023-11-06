import { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import getVuelo from "../helpers/getVuelo";

const ModVueloPage = () => {
  const { idVuelo } = useParams();
  const navigate = useNavigate()

  const [aerolineas, setAerolineas] = useState([]);
  const [ciudades, setCiudades] = useState([]);

  const [formData, setFormData] = useState({
    ciudadOrigenId: 0,
    ciudadDestinoId: 0,
    aerolineaId: 0,
    cantidadPasajeros: "",
    fechaIda: "",
    fechaVuelta: "",
    precio: "",
  });

  const url = "http://localhost:8080";

  const getAerolineas = async () => {
    const response = await fetch(url.concat("/api/aerolineas"), {
      method: "GET",
    });

    const responseData = await response.json();
    setAerolineas(responseData);
  };

  const getCiudades = async () => {
    const response = await fetch(url.concat("/api/ciudades"), {
      method: "GET",
    });

    const responseData = await response.json();
    setCiudades(responseData);
  };

  const method = () => {
    if (idVuelo === undefined) {
      return "POST"
    } else {
      return "PUT"
    }
  }

  const url_method = () => {
    if (idVuelo === undefined) {
      return ''
    } else {
      return `/${idVuelo}`
    }
  }

  const postVuelo = async () => {
    const response = await fetch(url.concat(`/api/vuelos${url_method()}`), {
      headers: {
        "Content-Type": "application/json",
      },
      method: method(),
      body: JSON.stringify({
        ...formData,
        fechaIda: formData.fechaIda.concat(':00.000+00:00'),
        fechaVuelta: formData.fechaVuelta.concat(':00.000+00:00')
      }),
    });

    if (response.status === 200) {
      alert("Vuelo actualizado correctamente");
      navigate('/admin-vuelos')
    } else {
      alert("Error al actualizar vuelo")
    }
  };

  useEffect(() => {
    getCiudades().then(() => {});
    getAerolineas().then(() => {});

    if (idVuelo !== undefined) {
      getVuelo(idVuelo).then((data) => {
        setFormData({
          ciudadOrigenId: data.ciudadOrigenId,
          ciudadDestinoId: data.ciudadDestinoId,
          aerolineaId: data.aerolineaId,
          cantidadPasajeros: data.cantidadPasajeros.toString(),
          precio: data.precio.toString(),
          fechaIda: data.fechaIda.slice(0, 16),
          fechaVuelta: data.fechaVuelta.slice(0, 16),
        });
      });
    }
  }, [idVuelo]);

  console.log(formData)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <Navbar />
      <form>
        <Dropdown
          data={ciudades}
          id={'ciudad-origen'}
          selected={formData.ciudadOrigenId}
          setSelected={(value) => handleInputChange({ target: { name: "ciudadOrigenId", value } })}
          labelKey={"ciudad"}
        />
        <Dropdown
          data={ciudades}
          id={'ciudad-destino'}
          selected={formData.ciudadDestinoId}
          setSelected={(value) => handleInputChange({ target: { name: "ciudadDestinoId", value } })}
          labelKey={"ciudad"}
        />
        <Dropdown
          data={aerolineas}
          id={'aerolinea'}
          selected={formData.aerolineaId}
          setSelected={(value) => handleInputChange({ target: { name: "aerolineaId", value } })}
          labelKey={"aerolinea"}
        />
        <div>
          <label htmlFor={"cantidad-pasajeros"}>Cantidad de pasajeros</label>
          <input
            type={"text"}
            id={"cantidad-pasajeros"}
            name="cantidadPasajeros"
            value={formData.cantidadPasajeros}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor={"precio"}>Precio</label>
          <input
            type={"text"}
            id={"precio"}
            name="precio"
            value={formData.precio}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor={"fecha-vuelo"}>Fecha de vuelo</label>
          <input
            type={"datetime-local"}
            id={"fecha-vuelo"}
            name="fechaIda"
            value={formData.fechaIda}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor={"fecha-vuelta"}>Fecha de vuelta</label>
          <input
            type={"datetime-local"}
            id={"fecha-vuelta"}
            name="fechaVuelta"
            value={formData.fechaVuelta}
            onChange={handleInputChange}
          />
        </div>
        <button className={'btn-enviar'} onClick={postVuelo}>Guardar cambios</button>
      </form>
    </div>
  );
};

export default ModVueloPage;

