import React from "react"
import "../css/landingpage.css"
import Logo from "../images/aliya.jpg"
import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <div>
      <div className="nav">
        <div>
          <img src={Logo} alt="" className="logo" />
        </div>
        <div className="links">
          <NavLink className="active" to="/about">
            About us
          </NavLink>
          <NavLink className="active" to="/dishes">
            Dishes
          </NavLink>
          <NavLink className="active" to="/specialdishes">
            Special Dishes
          </NavLink>
          <NavLink className="active" to="/reservation">
            Reservation
          </NavLink>
        </div>
      </div>
    </div>
  )
}
//e-portfolio

export default Nav
