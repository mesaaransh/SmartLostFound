import { faBookmark, faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { submitHandle } from "./searchFun";

export default function Popin2(props: any) {

    let [info, setInfo] = useState({
      Name: '',
      Email: '',
      Phone: ''
    })
  
    function changeHandle(e: any) {
      setInfo({
        ...info,
        [e.target.name]: e.target.value
      })
    }

    let claim = useMutation({
        mutationFn: (id: any) => {
            return submitHandle(id, info)
        },
        onSuccess: () => {
            alert("Claimed Successfully")
            alert("Go to admin office to collect")
            props.claimsetter(true)
        },
        onError: (err) => {
          console.log(err);
        }
    })

    function clickHandle() {
      props.claimsetter(true)
    }
  
    return (
      <div>
  
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
          <input type="text" name="Name" onChange={changeHandle} placeholder="Name" className="loginInput" />
          <input type="text" name="Email" onChange={changeHandle} placeholder="Email" className="loginInput" />
          <input type="text" name="Phone" onChange={changeHandle} placeholder="Phone No." className="loginInput" />
        </div>
  
        <div className="popButtonGroup">
          <button onClick={clickHandle}>Back</button>
          <button onClick={() => {claim.mutate(props.info.$id)}}>Submit</button>
        </div>

      </div>
    )
  
  }