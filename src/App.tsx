import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home/Home"
import Search from "./pages/Search/Search"
import Login from "./pages/Login/Login"
import Populator from "./populator"
import Captioner from "./captioner"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

function App() {  

  const query = new QueryClient()

  return (

    <BrowserRouter>
    <QueryClientProvider client={query}>
    <ReactQueryDevtools initialIsOpen={false} />
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/test" element={<Populator/>} />
        <Route path="/test2" element={<Captioner/>} />

      </Routes>
    </QueryClientProvider>
    </BrowserRouter>

  )
}

export default App