import React, { useState } from 'react'

export default function Textform() {
    const [text, setText] = useState("Enter Text");
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = (event) => {
        setText(text.toUpperCase());
    }
    const handleLOClick = (event) => {
        setText(text.toLowerCase());
    }
    return (
        <>
        <div className="container my-3">            
            <div className="mb-3">
                <textarea onChange={handleOnChange} className="form-control" value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert TO UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLOClick}>Convert TO LowerCase</button>
        </div>
        <div className="container my-3">
            <p>Total Words: {text.split(" ").length}, Total Characters: {text.length}</p>
        </div>
        </>
    )
}
