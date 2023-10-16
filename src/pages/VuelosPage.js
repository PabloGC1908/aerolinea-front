import Navbar from "../components/Navbar";
import TablaVuelos from "../components/TablaVuelos";
import {useEffect} from "react";

const VuelosPage = () => {

  useEffect(() => {
    document.title = "Vuelos"
  }, []);

  return(
    <div>
      <Navbar />
      <TablaVuelos page={'user'} />
    </div>
  )
}

export default VuelosPage