import React from "react"
import Nav from "./nav"

function Reservation() {
  return (
    <div>
      <Nav />
      <div
        style={{
          marginLeft: "40px",
          boxShadow: "inset 0px -10px 25px #700, 0px 5px 5px #333",
          padding: "10px",
          margin: "40px",
          width: "300px",
          borderRadius: "3px",
        }}
      >
        <h1>Reserve your table</h1>
        <form>
          <input
            type="text"
            placeholder="Name"
            style={{ width: "200px", marginBottom: "20px", marginTop: "20px" }}
          />
          <br />
          <input
            type="number"
            placeholder="Contact"
            style={{ width: "200px", marginBottom: "20px" }}
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            style={{ width: "200px", marginBottom: "20px" }}
          />
          <br />
          <button>submit</button>
        </form>
      </div>
      <div className="wrapper">
        <div></div>
        <div></div>
      </div>
      <div className="wrapper"></div>
      <div className="wrapper"></div>
    </div>
  )
}

export default Reservation
