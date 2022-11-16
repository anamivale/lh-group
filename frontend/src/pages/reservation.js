import React, { useState } from "react"
import Nav from "./nav"
import "../css/reservation.css"
import Table2 from "../images//table2.jpg"
import Table21 from "../images//table22.jpg"
import Table5 from "../images//table5.jpg"
import Table12 from "../images//table12.jpg"
import Table4 from "../images//table4.jpg"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function Reservation() {
  const [cstate, setCstate] = useState(false)

  function handleFinish() {
    setCstate(true)
  }
  function handleClose() {
    setCstate(false)
  }

  return (
    <div>
      <Nav />
      <div className={cstate ? "" : "container"}>
        <div className="form">
          <FontAwesomeIcon
            icon={faClose}
            style={{
              fontSize: "30px",
              border: "none",
              outline: "none",
              color: "red",
              marginLeft: "280px",
            }}
            onClick={handleClose}
          />

          <h1>Reserve your table</h1>

          <form>
            <input
              type="text"
              placeholder="Name"
              style={{
                width: "200px",
                marginBottom: "20px",
                marginTop: "20px",
              }}
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
      </div>
      <div className="wrapper">
        <div>
          <figure>
            <img src={Table2} alt="" />

            <figcaption>
              <h5>Table for 2</h5>
              <button onClick={handleFinish}>Reserve</button>
            </figcaption>
          </figure>
        </div>
        <div>
          <figure>
            {" "}
            <img src={Table21} alt="" />
            <figcaption>
              <h5>Table for 2</h5>
              <button onClick={handleFinish}>Reserve</button>
            </figcaption>
          </figure>
        </div>
        <div>
          <figure>
            {" "}
            <img src={Table4} alt="" />
            <figcaption>
              <h5>Table for 2</h5>
              <button onClick={handleFinish}>Reserve</button>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="wrapper">
        <div>
          <figure>
            {" "}
            <img src={Table5} alt="" />
            <figcaption>
              <h5>Table for 2</h5>
              <button onClick={handleFinish}>Reserve</button>
            </figcaption>
          </figure>
        </div>
        <div>
          <figure>
            {" "}
            <img src={Table12} alt="" />
            <figcaption>
              <h5>Table for 2</h5>
              <button onClick={handleFinish}>Reserve</button>
            </figcaption>
          </figure>
        </div>
        <div>
          <figure>
            {" "}
            <img src={Table2} alt="" />
            <figcaption>
              <h5>Table for 2</h5>
              <button onClick={handleFinish}>Reserve</button>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="wrapper">
        <div>
          <figure>
            {" "}
            <img src={Table2} alt="" />
            <figcaption>
              <h5>Table for 2</h5>
              <button onClick={handleFinish}>Reserve</button>
            </figcaption>
          </figure>
        </div>
        <div>
          <figure>
            {" "}
            <img src={Table2} alt="" />
            <figcaption>
              <h5>Table for 2</h5>
              <button onClick={handleFinish}>Reserve</button>
            </figcaption>
          </figure>
        </div>
        <div>
          <figure>
            {" "}
            <img src={Table2} alt="" />
            <figcaption>
              <h5>Table for 2</h5>
              <button onClick={handleFinish}>Reserve</button>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Reservation
