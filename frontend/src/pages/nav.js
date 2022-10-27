import React from "react"
import "../css/landingpage.css"
import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <div>
      <div className="nav">
        <div>
          <h1 className="logo">Restaurant</h1>
        </div>
        <div className="links">
          <NavLink className="active" to="/about">
            About us
          </NavLink>
          <NavLink className="active" to="/dishes">
            Dishes
          </NavLink>
          <NavLink className="active" to="/about">
            Special Dishes
          </NavLink>
          <NavLink className="active" to="/about">
            Reservation
          </NavLink>
        </div>
      </div>
    </div>
  )
}
//e-portfolio

export default Nav
