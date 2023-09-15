import {useEffect, useState} from "react";
import Dropdown from "../components/Dropdown";
import Navbar from "../components/Navbar";

const ModVueloPage = () => {
  const [aerolineas, setAerolineas] = useState([])
  const [ciudades, setCiudades] = useState([])

  const [ciudadIda, setCiudadIda] = useState(0)
  const [ciudadVuelta, setCiudadVuelta] = useState(0)
  const [aerolinea, setAerolinea] = useState(0)
  const [cantidadPasajeros, setCantidadPasajeros] = useState('')
  const [fechaIda, setFechaIda] = useState('')
  const [fechaVuelta, setFechaVuelta] = useState('')
  const [precio, setPrecio] = useState('')

  const url = 'http://localhost:8080'

  const vuelo = {
    ciudadOrigenId: ciudadIda,
    ciudadDestinoId: ciudadVuelta,
    aerolineaId: aerolinea,
    cantidadPasajeros: parseInt(cantidadPasajeros),
    fechaIda: fechaIda.concat(':00.000+00:00'),
    fechaVuelta: fechaVuelta.concat(':00.000+00:00'),
    precio: parseFloat(precio)
  }

  const getAerolineas = async () => {
    const response = await fetch(url.concat('/api/aerolineas'), {
      method: "GET"
    })

    const responseData = await response.json()
    setAerolineas(responseData)
  }

  const getCiudades = async () => {
    const response = await fetch(url.concat('/api/ciudades'), {
      method: "GET"
    })

    const responseData = await response.json()
    setCiudades(responseData)
  }

  const postVuelo = () => {
    fetch(url.concat('/api/vuelos'), {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(vuelo)
    }).then(r => {})
  }

  useEffect(() => {
    getCiudades().then(() => {})
    getAerolineas().then(() => {})
  }, [])


  return (
    <div>
      <Navbar/>
      <form>
        <Dropdown
          data={ciudades}
          selected={ciudadIda}
          setSelected={setCiudadIda}
          labelKey={"ciudad"}
        />
        <Dropdown
          data={ciudades}
          selected={ciudadVuelta}
          setSelected={setCiudadVuelta}
          labelKey={"ciudad"}
        />
        <Dropdown
          data={aerolineas}
          selected={aerolinea}
          setSelected={setAerolinea}
          labelKey={"aerolinea"}
        />
        <div>
          <label htmlFor={"cantidad-pasajeros"} >Cantidad de pasajeros</label>
          <input type={"text"} id={"cantidad-pasajeros"} value={cantidadPasajeros}
                 onChange={(event) => setCantidadPasajeros(event.target.value)} />
        </div>
        <div>
          <label htmlFor={"precio"} >Precio</label>
          <input type={"text"} id={"precio"} value={precio}
                 onChange={(event) => setPrecio(event.target.value)} />
        </div>
        <div>
          <label htmlFor={"fecha-vuelo"} >Fecha de vuelo</label>
          <input type={"datetime-local"} id={"fecha-vuelo"} value={fechaIda}
                 onChange={(event) => setFechaIda(event.target.value)} />
        </div>
        <div>
        <label htmlFor={"fecha-vuelta"} >Fecha de vuelta</label>
        <input type={"datetime-local"} id={"fecha-vuelta"} value={fechaVuelta}
               onChange={(event) => setFechaVuelta(event.target.value)} />
        </div>
        <button onClick={() => postVuelo()}>
          Añadir vuelo
        </button>
      </form>
    </div>
  )
}

export default ModVueloPage