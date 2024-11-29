import { useState } from "react"
import "./Login.css"
import { useNavigate } from "react-router-dom"

export default function Login() {

  const navigate = useNavigate()
  let [user, setUser] = useState("")
  let [pass, setPass] = useState("")
  let [err, setErr] = useState("")

  function SubmitHandle(){

    if(user == "a@a.com" && pass == "asdf"){
      navigate("/admin/items")
    }
    else{
      setErr("Invalid Credentials")
    }

  }

  return (
    <div className="login">
        <div className="loginMenu">

            <h1>Login</h1>
            <input type="text" onChange={(e) => {setUser(e.target.value)}} placeholder="Email" className="loginInput" />
            <input type="password" onChange={(e) => {setPass(e.target.value)}} placeholder="Password" className="loginInput" />
            <p>{err}</p>
            <button className="loginButton" onClick={SubmitHandle}>Submit</button>

        </div>
        <div className="loginImage">
          
        </div>
    </div>
  )
}
