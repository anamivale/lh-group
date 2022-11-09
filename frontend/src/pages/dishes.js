import React from "react"
import Nav from "./nav"
import Dish1 from "../images/dish1.jpg"
import Dish2 from "../images/dish2.jpg"
import Dish3 from "../images/mandazi.jpg"
import Dish4 from "../images/nyama.jpg"

function Dishes() {
  return (
    <div>
      <Nav />
      <img src={Dish1} alt="" />
      <br />
      <img src={Dish2} alt="" />
      <br />
      <img src={Dish3} alt="" />
      <br />
      <img src={Dish4} alt="" />
    </div>
  )
}

export default Dishes
