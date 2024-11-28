import "./Search.css"
import AppleGroup from "../../components/AppleGroup/AppleGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faStar } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";
import { search } from "./searchFun";
import Popin2 from "./ProdPop2";
import { useNavigate, useSearchParams } from "react-router-dom";


export default function Search() {

  let [query, setQuery] = useState('')
  let [pop, setPop] = useState(false);
  let [activePopInfo, setActivePopInfo] = useState({})
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let q:any = searchParams.get('q');
    setQuery(q)
    searchHandle.mutate(q)   
  }, [])

  function changeHandle(e: any) {
    setQuery(e.target.value);
  }

  const searchHandle = useMutation({
    mutationFn: (query: string) => {
      setSearchParams({
        q: query
      })
      return search(query)
    },
  })

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
        <div className="searchBar">
          <AppleGroup />
          <form className="searchin" onSubmit={(e) => {e.preventDefault(); searchHandle.mutate(query)}}>
            <input className="searchInput" type="text" value={query} onChange={changeHandle} placeholder={"> Search for your lost item"} />
            <div className="group">
              <button>Upload Image</button>
              <button type="submit" onClick={() => { searchHandle.mutate(query) }}>Search</button>
            </div>
          </form>
        </div>

        <div className="prodContainer">
          {
            !searchHandle.isSuccess ?
              <Loader />
              :
              searchHandle.data.documents.length?
              searchHandle.data.documents.map((item: any) => (
                <>
                  <Prod info={item} clickfn={popupClickHandle} infofn={setActivePopInfo} />
                </>
              )):
              <p className="nores">No Results</p>
          }
        </div>
      </div>
    </>

  )
}

function Prod(props: any) {

  function clickHandle() {
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