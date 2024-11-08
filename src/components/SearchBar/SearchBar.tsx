import AppleGroup from "../AppleGroup/AppleGroup"
import "./SearchBar.css"

export default function SearchBar() {
  return (
    <div className="searchBar">

        <AppleGroup/>

        <div className="searchin">
            <input type="text" placeholder={"> Search for your lost item"} />

            <div className="group">
                <button>Upload Image</button>
                <button>Search</button>
            </div>
        </div>

    </div>
  )
}
