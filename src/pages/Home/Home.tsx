import SearchBar from "../../components/SearchBar/SearchBar"
import "./Home.css"

export default function Home() {
  return (

    <div className="home">
      <div className="homeHeader">
          <h2>Lost & Found</h2>

          <div className="group">
            <p>Raise Request</p>
            <p>Guide</p>
          </div>
      </div>

      <div className="homeContainer">

        <SearchBar/>
        <div className="homeHeads">
          <h1>Find What You've Lost, Faster and Easier!</h1>
          <p>Search through lost and found items with ease. Whether you remember a few details or have an image of your missing item, our powerful search tools make it simple to locate lost belongings quickly. Just type in keywords or upload an image, and we’ll help you find what you’re looking for.</p>
        </div>
        
      </div>

    </div>




  )
}
