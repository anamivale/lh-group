import React from "react"
import "../css/landingpage.css"
import Nav from "./nav"

function Landingpage() {
  return (
    <div className="landing-page">
      <Nav />
      <div className="solgun">
        <h1>Restaurant</h1>
        <h3>Premium food at an affordable price.</h3>
        <button className="reserve">Reserve a table</button>
      </div>
    </div>
  )
}

export default Landingpage
