import Navbar from "../components/Navbar";
import TablaVuelos from "../components/TablaVuelos";

const VuelosPage = () => {
  return(
    <div>
      <Navbar />
      <TablaVuelos page={'user'} />
    </div>
  )
}

export default VuelosPage