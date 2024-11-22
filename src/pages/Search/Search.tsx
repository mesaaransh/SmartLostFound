import "./Search.css"
import SearchBar from "../../components/SearchBar/SearchBar";
import AppleGroup from "../../components/AppleGroup/AppleGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faStar } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";

export default function Search() {

  let [pop, setPop] = useState(false);
  let [activePopInfo, setActivePopInfo] = useState({})
  let [results, setResults] = useState([])

  function popupClickHandle() {
    setPop(!pop)
  }

  useEffect(() => {
    console.log(activePopInfo);
  }, [activePopInfo])

  return (
    <>

      {pop ? <ProdPop clickfn={popupClickHandle} info={activePopInfo} /> : <></>}

      <div className="search">
        <SearchBar populator={setResults} />
        <div className="prodContainer">
          {
            results.map((item: any) => (
              <>
                <Prod info={item} clickfn={popupClickHandle} infofn={setActivePopInfo} />
              </>
            ))
          }
        </div>
      </div>

    </>
  )
}


function Prod(props: any) {

  function clickHandle(){
    props.clickfn()
    props.infofn(props.info)
  }

  return (
    <div className="prod" onClick={clickHandle}>
      <img className="prodImage" src={props.info.ImageURL} alt={props.info.Description} />
      <div className="prodInfo">
        <div>
          <h3>{props.info.Description}</h3>
          <h5>{props.info.Place}</h5>
        </div>
        <div className="prodIcons">
        </div>
      </div>
    </div>
  )

}


function ProdPop(props: any) {

  let [claim, setClaim] = useState(true);

  return (
    <div>
      <div className="popupblur" onClick={props.clickfn}></div>

      <div className="popup">
        <AppleGroup closeHandle={props.clickfn} />

        <div className="popupin">
          {claim ? <Popin1 claimsetter={setClaim} info={props.info} /> : <Popin2 claimsetter={setClaim} info={props.info} />}
        </div>

      </div>
    </div>
  )

}


function Popin1(props: any) {

  function clickHandle() {
    props.claimsetter(false)
  }

  return (
    <>
      <img className="popupimg" src={props.info.ImageURL} alt="" />

      <div className="popupoptions">
        <div>
          <h1>{props.info.Description}</h1>
          <p>{props.info.Place}</p>
        </div>

        <div className="prodpopicons">
          <button onClick={clickHandle}>Claim</button>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faBookmark} />
        </div>
      </div>

    </>
  )

}


function Popin2(props: any) {

  let [info, setInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })

  function changeHandle(e: any){

    setInfo({
      ...info,
      [e.target.name]: e.target.value
    })

  }

  function submitHandle(){

    

  }

  function clickHandle() {
    props.claimsetter(true)
  }

  return (
    <>

      <div className="popupoptions">
        <div>
          <h1>{props.info.Description}</h1>
          <p>{props.info.Place}</p>
        </div>

        <div className="prodpopicons">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faBookmark} />
        </div>
      </div>

      <div className="popInputs">
        <input type="text" onChange={changeHandle} placeholder="Name" className="loginInput" />
        <input type="text" onChange={changeHandle} placeholder="Email" className="loginInput" />
        <input type="text" onChange={changeHandle} placeholder="Phone No." className="loginInput" />
      </div>

      <div className="popButtonGroup">
        <button onClick={clickHandle}>Back</button>
        <button>Submit</button>
      </div>

    </>
  )

}