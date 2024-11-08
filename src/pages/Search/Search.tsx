import "./Search.css"
import SearchBar from "../../components/SearchBar/SearchBar";
import AppleGroup from "../../components/AppleGroup/AppleGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faStar } from "@fortawesome/free-regular-svg-icons";

export default function Search() {

  return (
    <>
    {/* <ProdPop/> */}

    <div className="search">

      <SearchBar/>

      <div className="prodContainer">
        <Prod/>
        <Prod/>
        <Prod/>
        <Prod/>
        <Prod/>
        <Prod/>
        <Prod/>
        <Prod/>
        <Prod/>
        <Prod/>
        <Prod/>
        <Prod/>
        <Prod/>
        <Prod/>
        <Prod/>
        <Prod/>
        <Prod/>
      </div>

    </div>
    </>
  )
}


function Prod(){


  function clickHandle(){

  }

  return(
    <div className="prod" onClick={clickHandle}>

      <div className="prodImage"></div>

      <div className="prodInfo">
        <div>
          <h3>Label Lost & Found</h3>
          <h5>Place Found</h5>
        </div>
        <div className="prodIcons">
        </div>
      </div>

    </div>
  )

}


function ProdPop(){

  return(
    <div>
      <div className="popupblur"></div>

      <div className="popup">
        <AppleGroup/>
        <div className="popupin">
          <div className="popupimg"></div>

          <div className="popupoptions">
            <div>
              <h1>Item Name</h1>
              <p>Item Place</p>
            </div>

            <div className="prodpopicons">
              <button>Claim</button>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faBookmark} />
            </div>
          </div>
        </div>
      </div> 
    </div>
  )

}