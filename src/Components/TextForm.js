import React, {useState} from 'react'


export default function TextForm(props) {
    const UpConvert = () => {
        let upperText = Text.toUpperCase();
        setText(upperText);
        props.showAlert("Converted to Uppercase!", "success");
    }
    const LowConvert = () => {
        let lowerText = Text.toLowerCase();
        setText(lowerText);
        props.showAlert("Converted to Lowercase!", "success");
    }
    const copyText = () => {
        navigator.clipboard.writeText(Text);
        props.showAlert("Copied to Clipboard!", "warning");
    }
    const clearText = () => {
        setText('');
        props.showAlert("Text Cleared!", "danger");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [Text, setText] = useState("");
    return (
        <>
        <div className="container" style={{color: props.mode==="light"?"black":"#ECECED"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==="light"?"white":"#1F2128", color: props.mode==="light"?"black":"#ECECED"}} placeholder={"Enter text here"} id="textBox" rows="8" value={Text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={UpConvert}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={LowConvert}>Convert to Lowercase</button>
            <button className="btn btn-warning mx-1" onClick={copyText}>Copy to clipboard</button>
            <button className="btn btn-danger mx-1" onClick={clearText}>Clear</button>
        </div>
        <div className="container my-5" style={{color: props.mode==="light"?"black":"#ECECED"}}>
            <h2>Your text summary</h2>
            <p>{Text.split(" ").length} words, {Text.length} characters</p>
            <p>{0.008 * Text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{Text.length>0 ? Text : "Enter text above to preview here."}</p>
        </div>
        </>
    )
}
