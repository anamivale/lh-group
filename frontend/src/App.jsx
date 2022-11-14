import Landingpage from "./pages/landingpage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/about"
import Dishes from "./pages/dishes"
import SpecialDishes from "./pages/specialDishes"
import Reservation from "./pages/reservation"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Landingpage />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/specialdishes" element={<SpecialDishes />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
