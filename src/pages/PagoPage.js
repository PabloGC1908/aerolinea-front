import "../stylesheets/PagoPage.css"
import Navbar from "../components/Navbar";

const PagoPage = () => {
  return (
    <div>
      <Navbar />
      <div className="checkout-container">
        <h2>Metodo de pago</h2>
        <br/>
        <div className="row">
          <div className="col-75">
            <div className="container">
              <form action="/action_page.php">
                <div className="row">
                  <div className="col-50">
                    <h3>Pago</h3>
                    <label htmlFor="cname">Nombre de la tarjeta</label>
                    <input
                      type="text"
                      id="cname"
                      name="cardname"
                      placeholder="John More Doe"
                    />
                    <label htmlFor="ccnum">Numero de la tarjeta</label>
                    <input
                      type="text"
                      id="ccnum"
                      name="cardnumber"
                      placeholder="1111-2222-3333-4444"
                    />
                    <label htmlFor="expmonth">Mes de expiracion</label>
                    <input
                      type="text"
                      id="expmonth"
                      name="expmonth"
                      placeholder="September"
                    />
                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="expyear">Año de expiracion</label>
                        <input
                          type="text"
                          id="expyear"
                          name="expyear"
                          placeholder="2018"
                        />
                      </div>
                      <div className="col-50">
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" placeholder="352" />
                      </div>
                    </div>
                  </div>
                </div>
                <input type="submit" value="Continue to checkout" className="btn" />
              </form>
            </div>
          </div>
          <div className="col-25">
            <div className="container">
              <h4>
                Descripcion <span className="price" style={{ color: 'black' }}>
                <i className="fa fa-shopping-cart"></i>
              </span>
              </h4>
              <p>
                <a href="#">Product 1</a>{' '}
                <span className="price">$15</span>
              </p>
              <p>
                <a href="#">Product 2</a>{' '}
                <span className="price">$5</span>
              </p>
              <p>
                <a href="#">Product 3</a>{' '}
                <span className="price">$8</span>
              </p>
              <p>
                <a href="#">Product 4</a>{' '}
                <span className="price">$2</span>
              </p>
              <hr />
              <p>
                Total{' '}
                <span className="price" style={{ color: 'black' }}>
                <b>$30</b>
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