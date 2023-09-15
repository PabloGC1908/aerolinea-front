import Navbar from "../components/Navbar";
import TablaBoletos from "../components/TablaBoletos";

const UserPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Vuelos registrados</h1>
      <TablaBoletos />
    </div>
  )
}

export default UserPage