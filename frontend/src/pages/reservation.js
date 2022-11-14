import React from "react"
import Nav from "./nav"

function Reservation() {
  return (
    <div>
      <Nav />
      <form>
        <input type="text" placeholder="Name" />
        <input type="number" placeholder="Contact" />
        <input type="email" placeholder="Email" />
        <button>submit</button>
      </form>
    </div>
  )
}

export default Reservation
