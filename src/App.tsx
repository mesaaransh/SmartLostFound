import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home/Home"
import Search from "./pages/Search/Search"
import Login from "./pages/Login/Login"
import Populator from "./populator"
import Captioner from "./captioner"

function App() {

  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/test" element={<Populator/>} />
        <Route path="/test2" element={<Captioner/>} />

      </Routes>
    </BrowserRouter>

  )
}

export default App