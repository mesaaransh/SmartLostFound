import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home/Home"
import Search from "./pages/Search/Search"

function App() {

  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />

      </Routes>
    </BrowserRouter>

  )
}

export default App