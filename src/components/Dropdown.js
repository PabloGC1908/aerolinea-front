import React, { useState } from "react";
import "../stylesheets/Dropdown.css"

const Dropdown = ({ data, selected, setSelected, labelKey }) => {
  const [isActive, setIsActive] = useState(false);
  const selectedOption = data.find((item) => item.id === selected);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const handleOptionClick = (item) => {
    setSelected(item.id);
    setIsActive(false);
  };

  return (
    <div className={"dropdown"}>
      <div className={"dropdown-btn"} onClick={toggleDropdown}>
        {selectedOption ? selectedOption[labelKey] : "Seleccionar"}
      </div>
      {isActive && (
        <div className={"dropdown-content"}>
          {data.map((item) => (
            <div
              key={item.id}
              className={"dropdown-item"}
              onClick={() => handleOptionClick(item)}
            >
              {item[labelKey]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

