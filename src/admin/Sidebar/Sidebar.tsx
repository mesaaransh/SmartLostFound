import "./Sidebar.css"
export default function Sidebar() {
  return (
    <div className="sidebar">


        <div className="report">
            Report Lost Item
        </div>
        
        <h3>Menus</h3>
        <div className="section">
            <div className="menu">
                <div className="menuicon"></div>
                <p>Lost Items</p>
            </div>

            <div className="menu">
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
