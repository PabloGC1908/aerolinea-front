import Navbar from "../components/Navbar";
import TablaBoletos from "../components/TablaBoletos";
import {useEffect} from "react";

const UserPage = () => {

  useEffect(() => {
    document.title = "Perfil"
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Vuelos registrados</h1>
      <TablaBoletos />
    </div>
  )
}

export default UserPage