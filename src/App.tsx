import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home/Home"
import Search from "./pages/Search/Search"
import Populator from "./populator"
import Captioner from "./captioner"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import AdminLogin from "./admin/Login/Login"
import Login from "./pages/Login/Login"
import AdminHome from "./admin/Home/Home"
import AdminLayout from "./admin/Layout"
import AdminReport from "./admin/Report/Report"
import AdminLostItems from "./admin/LostItems/LostItems"
import AdminClaims from "./admin/Claims/Claims"

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


        <Route path="/admin">
          <Route path="login" element={<AdminLogin/>}/>
          <Route element = {<AdminLayout/>}>
            <Route path="home" element={<AdminHome/>}/>
            <Route path="report" element={<AdminReport/>}/>
            <Route path="items" element={<AdminLostItems/>}/>
            <Route path="claims" element={<AdminClaims/>}/>
          </Route>
        </Route>
      </Routes>
    </QueryClientProvider>
    </BrowserRouter>

  )
}

export default App