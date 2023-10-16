import Navbar from "../components/Navbar";
import {useEffect} from "react";

const MainPage = () => {

  useEffect(() => {
    document.title = 'Inicio'
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  )
}

export default MainPage