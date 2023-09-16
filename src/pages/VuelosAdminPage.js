import Navbar from "../components/Navbar";
import TablaVuelos from "../components/TablaVuelos";

const VuelosAdminPage = () => {
  return (
    <div>
      <Navbar />
      <TablaVuelos page={'admin'} />
    </div>
  )
}

export default VuelosAdminPage