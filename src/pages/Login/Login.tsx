import "./Login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginMenu">

            <h1>Login</h1>
            <input type="text" placeholder="Email" className="loginInput" />
            <input type="password" placeholder="Password" className="loginInput" />
            <button className="loginButton">Submit</button>

        </div>
        <div className="loginImage">
          
        </div>
    </div>
  )
}
