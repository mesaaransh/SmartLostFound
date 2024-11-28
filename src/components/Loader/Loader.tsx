import "./Loader.css"

export default function Loader() {
  return (

    <div className="loader-container">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle className="circle outer" cx="50" cy="50" r="45" />
        <circle className="circle inner" cx="50" cy="50" r="25" />
        <circle className="dots" cx="50" cy="5" r="3" />
        <circle className="dots" cx="95" cy="50" r="3" />
        <circle className="dots" cx="50" cy="95" r="3" />
        <circle className="dots" cx="5" cy="50" r="3" />
      </svg>
    </div>

  )
}
