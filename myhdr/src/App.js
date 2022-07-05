<<<<<<< HEAD
import "antd/dist/antd.css";
import MainPage from "./view/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
=======
import "antd/dist/antd.css"
import "./css/Login.css"
import MainPage from "./view/MainPage"
// import Movie from "./view/movie/Movie;
import Movie from "./view/movie/Movie"


import Login from "./view/LoginAndRegister/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App () {
>>>>>>> 4ced433998ed05a20030a7efbe55aad500705f87
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<MainPage />} />
<<<<<<< HEAD
          <Route path="/login" element={<h1>hhhh</h1>} />
=======
          <Route path="/movie" element={<Movie />} />
          <Route path="/login" element={<Login />} />
>>>>>>> 4ced433998ed05a20030a7efbe55aad500705f87
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App

