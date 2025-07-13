import React, {useState} from 'react';

export default function TextForm(props) { 
    const handleUpClick = ()=>{
        // console.log("Upercase was clicked: " + text ); 
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase", "success");
    }
    const handleLoClick = ()=>{
        // console.log("Lowercase was clicked: " + text ); 
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase", "success");
    }
    const handleclearClick = ()=>{
        // console.log("clearText was clicked: " + text ); 
        let newText = " ";
        setText(newText);
        props.showAlert("Cleared!", "success");
    }

    const handleSentenceCase = ()=>{
      let newText = text
      .toLowerCase()
      .split(". ")
      .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))
      .join(". ");
    
      setText(newText);
      props.showAlert("converted to Sentence", "success");
    }
    const handleRemoveSpaces = ()=>{
      let newText =  text.replace(/\s+/g, ' ').trim();
      setText(newText);
      props.showAlert("Removed! extra spaces", "success");
    }
    const handleCopy = ()=>{
      navigator.clipboard.writeText(text);
        // alert("Text copied to clipboard!");
        props.showAlert("Copied!", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
      const [text, setText] = useState(" ");
    //   text = "new text"; wrong way to change the state
    //   setText("New text"); Correct way to change the state
  return (
    <>
    <div className='container'style={{color: props.mode === 'dark'? 'white': 'black'}} >
        <h1>{props.heading}</h1>
      <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? '#262626': 'white',
            color: props.mode === 'dark'? 'white': 'black' }} id="myBox" rows="8"></textarea>
       </div>
       <button className="btn btn-dark mx-1" onClick={handleUpClick}>Convert to Upercase</button>
       <button className="btn btn-dark" onClick={handleLoClick}>Convert to Lowercase</button>
       <button className='btn btn-dark mx-1 my-1' onClick={handleSentenceCase}>Secntence case</button>
       <button className='btn btn-dark mx-1 my-1' onClick={handleRemoveSpaces}>Remove extra spaces</button>
       <button className='btn btn-dark mx-1 my-1' onClick={handleCopy}  disabled={text.trim().length === 0}>Coppy to Clipboard</button>
       <button className="btn btn-dark mx-1 my-1" onClick={handleclearClick}>Clear text</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'? 'white': 'black'}}>
        <h2>Your text summary</h2>
        <p>Characters count: {text.replace(/\s/g, "").length} |  Words count: {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} | Sentence count: {text.split(/[.!?]+/).filter(s => s.trim().length > 0).length} | Line count: {text.split('\n').filter(line => line.trim() !== '').length} </p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.trim().length > 0 ? text : "Enter something in the textbox about preview it here."}</p>
    </div>
    </>
  );
}













