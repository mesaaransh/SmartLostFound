import { Outlet } from "react-router-dom"
import "./Layout.css"
import Sidebar from "./Sidebar/Sidebar"
import Topbar from "./Topbar/Topbar"

export default function AdminLayout() {
  return (
    <div className="layout">
        <div className="content">
            <Topbar/>
            <div className="outlet">
                <Outlet/>
            </div>
        </div>
        <Sidebar/>
    </div>
  )
}
