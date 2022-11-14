import React from "react"
import Nav from "./nav"
import Dish1 from "../images/dish1.jpg"
import Dish2 from "../images/dish2.jpg"
import Dish3 from "../images/mandazi.jpg"
import Dish4 from "../images/nyama.jpg"
import "../css/dishes.css"

function SpecialDishes() {
  return (
    <div>
      <Nav />

      <div>
        <div className="one">
          <figure>
            <img src={Dish1} alt="" />
            <figcaption>
              <strong>Ugali Samaki</strong>
            </figcaption>
            <figcaption>KSHS 300</figcaption>
          </figure>
          <figure>
            <img src={Dish2} alt="" />
            <figcaption>
              <strong>Nyama Choma</strong>
            </figcaption>
            <figcaption>KSHS 300</figcaption>
          </figure>
          <figure>
            <img src={Dish3} alt="" />
            <figcaption>
              <strong>Mandaazi </strong>
            </figcaption>
            <figcaption>KSHS 300</figcaption>
          </figure>
        </div>
        <div className="one">
          <figure>
            <img src={Dish4} alt="" />
            <figcaption>
              <strong>Ugali Nyama</strong>
            </figcaption>
            <figcaption>KSHS 300</figcaption>
          </figure>
          <figure>
            <img src={Dish2} alt="" />
            <figcaption>
              <strong>Nyama Choma</strong>
            </figcaption>
            <figcaption>KSHS 300</figcaption>
          </figure>
          <figure>
            <img src={Dish3} alt="" />
            <figcaption>
              <strong>Mandaazi </strong>
            </figcaption>
            <figcaption>KSHS 300</figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default SpecialDishes
