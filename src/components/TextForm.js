import React, {useState} from 'react'

export default function TextForm(props) {

  const [text, setText] = useState('');  
  
  const handleUppercaseClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLowercaseClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!", "danger"); 
  }
  const handleReverseClick = () => {
    const reversedText = text.split('').reverse().join('');
    setText(reversedText);
    props.showAlert("Text reversed!", "success"); 
  }
  const handleRemovespaceClick = () => {
    const newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed!", "success"); 
  }
  const handleClearClick = () => {
    setText('Enter text here');
  };
const handleOnChange = (event) => {
    event.preventDefault(); 
    setText(event.target.value);
  }
  return (
    <>
    <div className="container my-3" style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : '#f8f9fa', color: props.mode === 'dark' ? '#ffffff' : '#212529' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'light' ? '#f8f9fa' : '#343a40', color: props.mode === 'light' ? '#212529' : '#ffffff' }} ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUppercaseClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowercaseClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleReverseClick}>Reverse Text</button>
        <button className="btn btn-primary mx-1" onClick={handleRemovespaceClick}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button> 
    </div>
    <div className="container my-3" style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : '#f8f9fa', color: props.mode === 'dark' ? '#ffffff' : '#212529' }}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008 * (text.split(" ").length-1)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to above textbox to preview"}</p>   
        
    </div>
    </>
  )
}
