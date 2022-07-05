import "antd/dist/antd.css"
import "./css/Login.css"
import MainPage from "./view/MainPage"
// import Movie from ".iew/movie/Movie;
import Movie from "./view/movie/Movie"
import Login from "./view/LoginAndRegister/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MapShow from "./view/MapShow/MapShow"

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<MainPage />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/map" element={<MapShow />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App