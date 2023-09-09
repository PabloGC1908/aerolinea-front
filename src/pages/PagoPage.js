import "../stylesheets/PagoPage.css"
import Navbar from "../components/Navbar";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const PagoPage = () => {
  const { idVuelo } = useParams()
  const [vuelo, setVuelo] = useState({})
  const [fechaIda, setFechaIda] = useState('')
  const [fechaVuelta, setFechaVuelta] = useState('')
  const [nombreTarjeta, setNombreTarjeta] = useState('')
  const [numeroTarjeta, setNumeroTarjeta] = useState('')
  const [fechaExpiracion, setFechaExpiracion] = useState('')
  const [cvv, setCvv] = useState('')

  const url = 'http://localhost:8080';

  const getVueloRequest = async () => {
    try {
      const response = await fetch(url.concat("/api/vuelos/").concat(idVuelo), {
        method: "GET"
      });
      const responseData = await response.json();

      const fechaIdaCompleta = new Date(responseData.fechaIda);
      setFechaIda(fechaIdaCompleta.toLocaleDateString('es-ES'));

      const fechaVueltaCompleta = new Date(responseData.fechaVuelta);
      setFechaVuelta(fechaVueltaCompleta.toLocaleDateString('es-ES'));

      setVuelo(responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getVueloRequest().then(() => {})
  }, []);

  return (
    <div>
      <Navbar />
      <div className="checkout-container">
        <h2>Metodo de pago</h2>
        <br/>
        <div className="row">
          <div className="col-75">
            <div className="container">
              <form>
                <div className="row">
                  <div className="col-50">
                    <h3>Pago</h3>
                    <label className={'label-input'} htmlFor="cname">Nombre de la tarjeta</label>
                    <input
                      className={'input-text'}
                      type="text"
                      id="cname"
                      name="cardname"
                      placeholder="Coloque su nombre"
                      value={nombreTarjeta}
                    />
                    <label className={'label-input'} htmlFor="ccnum">Numero de la tarjeta</label>
                    <input
                      className={'input-text'}
                      type="text"
                      id="ccnum"
                      name="cardnumber"
                      placeholder="1111-2222-3333-4444"
                      value={numeroTarjeta}
                    />
                    <label className={'label-input'} htmlFor="expmonth">Mes de expiracion</label>
                    <input
                      className={'input-text'}
                      type="text"
                      id="expmonth"
                      name="expmonth"
                      placeholder="September"
                    />
                    <div className="row">
                      <div className="col-50">
                        <label className={'label-input'} htmlFor="expyear">Año de expiracion</label>
                        <input
                          className={'input-text'}
                          type="text"
                          id="expyear"
                          name="expyear"
                          placeholder="2018"
                        />
                      </div>
                      <div className="col-50">
                        <label className={'label-input'} htmlFor="cvv">CVV</label>
                        <input
                          className={'input-text'}
                          type="text"
                          id="cvv"
                          name="cvv"
                          placeholder="352"
                          value={cvv}
                          onChange={(event) => setCvv(event.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <input type="submit" value="Continue to checkout" className="btn" />
              </form>
            </div>
          </div>
          <div className="col-25">
            <div className="container-descripcion">
              <h4>
                Descripcion <span className="price" style={{ color: 'black' }}>
                <i className="fa fa-shopping-cart"></i>
              </span>
              </h4>
              <p>
                Ciudad ida
                <span className={'price'}>
                  {vuelo.ciudadOrigen}
                </span>
              </p>
              <p>
                Ciudad destino
                <span className={'price'}>
                  {vuelo.ciudadDestino}
                </span>
              </p>
              <p>
                Fecha vuelo
                <span className={'price'}>
                  {fechaIda}
                </span>
              </p>
              <p>
                Fecha de regreso
                <span className={'price'}>
                  {fechaVuelta}
                </span>
              </p>
              <hr />
              <p>
                Precio{' '}
                <span className="price" style={{ color: 'black' }}>
                  USD {vuelo.precio}
                </span>
              </p>
              <p>
                <span className="price" style={{ color: 'black' }}>
                  PEN {vuelo.precio * 3.70}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PagoPage