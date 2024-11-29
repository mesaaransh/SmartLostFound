import { useState } from "react";
import "./Report.css"

export default function AdminReport() {

    const [isEnabled, setIsEnabled] = useState(false);
    const [dragOver, setDragOver] = useState(false);
    const [fileName, setFileName] = useState("");

    const handleFileDrop = (e: any) => {
        e.preventDefault();
        setDragOver(false);
        if (e.dataTransfer.files.length > 0) {
            setFileName(e.dataTransfer.files[0].name);
        }
    };

    const handleFileChange = (e: any) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        }
    };



    return (
        <form className="adminFrom">
            <div
                className={`file-dropzone ${dragOver ? "drag-over" : ""}`}
                onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleFileDrop}
                onClick={() => document.getElementById("file-input")?.click()}
            >
                {fileName || "Drag and drop a file here or click to upload"}
                <input
                    type="file"
                    id="file-input"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                />
            </div>

            <label htmlFor="">Description</label>
            <input type="text" />

            <label htmlFor="">Place Found</label>
            <input type="text" />

            <label htmlFor="">Tags</label>
            <input type="text" />
            
            <label htmlFor="">Date</label>
            <input type="date" />
            

            <label htmlFor="enable">Enable</label>
            <div className="slider-container">
                <input
                    type="checkbox"
                    id="enable"
                    checked={isEnabled}
                    onChange={() => setIsEnabled(!isEnabled)}
                />
                <label className="slider" htmlFor="enable"></label>
            </div>

        </form>
    )
}
