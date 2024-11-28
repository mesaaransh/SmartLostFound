import { useNavigate } from "react-router-dom"
import AppleGroup from "../AppleGroup/AppleGroup"
import "./SearchBar.css"
import { useState } from "react"

export default function SearchBar() {

  const navigate = useNavigate()
  const [query, setQuery] = useState("")

  function submitHandler(){

    navigate('/search?q=' + query)

  }


  return (
    <>

    <div className="searchBar">

      <AppleGroup />

      <form className="searchin" onSubmit={submitHandler}>
        <input className="searchInput" type="text" onChange={(e) => {setQuery(e.target.value)}} placeholder={"> Search for your lost item"} />

        <div className="group">
          <button>Upload Image</button>
          <button type="submit">Search</button>
        </div>
      </form>

    </div>
    
    </>
  )
}
