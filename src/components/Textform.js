import React, { useState } from "react";

export default function Textform(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to Uppercase", "success");
    };
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Converted to Uppercase", "success");
    };
    const handleClear = () => {
       
        setText('');
        props.showalert("Cleared TextArea", "success");
    };

    const copyText = () => {       
        navigator.clipboard.writeText(text); 
        props.showalert("Copied to Clipboard", "success");
      };

    const speakText = () => {
        if (text.length > 0) {
            let speech = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech);
            props.showalert("Speaking text...", "success");
        }
        
    };
    const handleExtraSpaces = () => {
        let newText = text.replace(/\s+/g, " ").trim();
        setText(newText);
        props.showalert("Extra spaces removed", "success");
      };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    console.log("Current mode:", props.mode);
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        onChange={handleOnChange}
                        value={text}
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#1E293B ' : 'white',
                            color: props.mode === 'dark' ? 'white' : '#042743',
                            border: '1px solid ' + (props.mode === 'dark' ? 'white' : '#042743')
                        }}
                        id="myBox"
                        rows="8"
                        placeholder="Enter your text"
                    ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={copyText}>
                    Copy Text
                </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleClear}>
                    Clear TextArea
                </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>
                    Remove Extraspaces
                </button>
                <button disabled={text.length === 0} className="btn btn-success mx-1 my-2" onClick={speakText}>
                    Speak Text
                </button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} Minutes read.</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
            </div>
           

        </>
    );
}
