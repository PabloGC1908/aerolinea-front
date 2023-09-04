const Dropdown = ({data, buttonMessage}) => {
  return (
    <div className={"dropdown"}>
      <button className={"drop-button"}>{buttonMessage}</button>
      <div className={"dropdown-content"}>

      </div>
    </div>
  )
}

export default Dropdown