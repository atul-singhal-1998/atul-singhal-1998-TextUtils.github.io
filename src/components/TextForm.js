import React from 'react'
import { useState } from 'react'
export default function TextForm(props) {
    
    const handleOnChange = (event) =>{
        setText(event.target.value);
    };
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("UpperCase Was Clicked")
    };
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("LowerCase Was Clicked")
    };
    const handleClClick = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Clear Text Was Clicked")
    };
    const handleLbClick = () =>{
        let newText = text.replace(/(\r\n|\n|\r)/gm, "");
        setText(newText);
        props.showAlert("Remove Line Breaks Was Clicked")
    };
    const handleCoClick = () =>{
        let copyText = document.getElementById("exampleFormControlTextarea1") ;
        copyText.select();
        copyText.setSelectionRange(0, 999999);
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copy Text Was Clicked")
    };
    const handleReClick = () =>{
        let splitstring = text.split("");
        let reverseArray = splitstring.reverse();
        let newText = reverseArray.join("");
        setText(newText);
        props.showAlert("Reverse Text Was Clicked")
    };
    const [text, setText] = useState('')
  return (
    <>
    <div className="container my-3">
    <div className="mb-3">
        <h1>{props.heading}</h1>
  <textarea className="form-control my-3" id="exampleFormControlTextarea1" onChange={handleOnChange} value={text} rows="8">
  </textarea>
  <button type="button" className="btn btn-dark mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
  <button type="button" className="btn btn-dark mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
  <button type="button" className="btn btn-dark mx-1" onClick={handleClClick}>Clear Text</button>
  <button type="button" className="btn btn-dark mx-1" onClick={handleLbClick}>Remove Line Break</button>
  <button type="button" className="btn btn-dark mx-1" onClick={handleReClick}>Reverse Text</button>
  <button type="button" className="btn btn-dark mx-1" onClick={handleCoClick}>Copy Text</button>
</div>
<div>
    {text.split(' ').filter(function(n){return n !== ''}).length} words & {text.length} Characters
    <p>{0.008*text.split(' ').filter(function(n){return n !== ''}).length} Minutes To Read</p>
<h1>Preview</h1>
<p>{text.length>0?text:"Type Something To Preview"}</p>
</div>
</div>
    </>
  )
}
