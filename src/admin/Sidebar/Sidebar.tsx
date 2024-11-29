import { useNavigate } from "react-router-dom"
import "./Sidebar.css"
export default function Sidebar() {

    const navigate = useNavigate();

  return (
    <div className="sidebar">


        <div className="report">
            Report Lost Item
        </div>
        
        <h3>Menus</h3>
        <div className="section">

            <div className="menu" onClick={() => {navigate('/admin/home')}}>
                <div className="menuicon"></div>
                <p>Home</p>
            </div>

            <div className="menu" onClick={() => {navigate('/admin/items')}}>
                <div className="menuicon"></div>
                <p>Lost Items</p>
            </div>

            <div className="menu" onClick={() => {navigate('/admin/claims')}}>
                <div className="menuicon"></div>
                <p>Claims</p>
            </div>

            <div className="menu">
                <div className="menuicon"></div>
                <p>Summary Reports</p>
            </div>
        </div>

    </div>
  )
}
