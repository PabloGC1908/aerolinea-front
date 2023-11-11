import {useEffect, useState} from "react";
import "../stylesheets/Table.css"

const TablaBoletos = () => {
  const [boletos, setBoletos] = useState([])
  const url = 'http://localhost:8080'

  const getBoletos = async () => {
    const response = await fetch(url.concat('/api/boletos/reservas'), {
      method: "GET"
    })

    const responseData = await response.json()

    const formateoBoletoFechas = responseData.map((boleto) => ({
      ...boleto,
      fechaIda: new Date(boleto.fechaIda).toLocaleDateString('es-ES'),
      fechaCompra: new Date(boleto.fechaCompra).toLocaleDateString('es-ES')
    }))

    setBoletos(formateoBoletoFechas)
  }

  useEffect(() => {
    getBoletos().then(() => {})
  }, []);

  return (
    <div>
      <table className="table-vuelos">
        <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha embarque</th>
          <th>Fecha compra</th>
          <th>Precio</th>
        </tr>
        </thead>
        <tbody>
        {
          boletos.map((boleto) => (
            <tr key={boleto.id}>
              <td>{boleto.nombre}</td>
              <td>{boleto.apellido}</td>
              <td>{boleto.fechaIda}</td>
              <td>{boleto.fechaCompra}</td>
              <td>{boleto.precio}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  )
}

export default TablaBoletos