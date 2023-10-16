import {useEffect, useState} from "react";
import "../stylesheets/Table.css"

const TablaBoletos = () => {
  const [boletos, setBoletos] = useState([])
  const url = 'http://localhost:8080'

  const getBoletos = async () => {
    const response = await fetch(url.concat('/api/boletos/').concat(sessionStorage.getItem('id_user')), {
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

  const deleteBoleto = async () => {
    const response = await fetch(url.concat('/api/boletos'))
  }

  useEffect(() => {
    getBoletos().then(() => {})
  }, []);

  return (
    <div>
      <table className="table-vuelos">
        <thead>
          <tr>
            <th>Ciudad ida</th>
            <th>Ciudad Destino</th>
            <th>Fecha embarque</th>
            <th>Fecha compra</th>
            <th>Precio</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
        {
          boletos.map((boleto) => (
            <tr key={boleto.id}>
              <td>{boleto.ciudadIda}</td>
              <td>{boleto.ciudadDestino}</td>
              <td>{boleto.fechaIda}</td>
              <td>{boleto.fechaCompra}</td>
              <td>{boleto.precio}</td>
              <td>Reembolsar</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  )
}

export default TablaBoletos