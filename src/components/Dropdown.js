import "../stylesheets/Dropdown.css"
import {useState} from "react";

const Dropdown = ({ data, selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);

  const meses = Object.keys(data).map((nombre) => ({
    nombre,
    valor: data[nombre],
  }));

  return (
    <div className={"dropdown"}>
      <div className={"dropdown-btn"} onClick={() => setIsActive(!isActive)}>
        Seleccionar
      </div>
      {isActive && (
        <div className={"dropdown-content"}>
          {meses.map((mes) => (
            <div
              key={mes.valor}
              className={"dropdown-item"}
              onClick={() => {
                setSelected(mes.valor)
                setIsActive(false)
              }}
            >
              {mes.nombre}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;