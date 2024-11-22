import "./AppleGroup.css"

export default function AppleGroup(props: any) {
  return (
    <div className="appleGroup">

        <div className="circle" onClick={props.closeHandle}></div>
        <div className="circle"></div>
        <div className="circle"></div>

    </div>
  )
}
