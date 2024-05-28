import React from 'react'
import { useState } from 'react'
function TextForm(props) {
  const handleOnChange=(event)=>{
      // console.log("handle onchange");
      setText(event.target.value);//what ever the value entered by the user, set the text to that value.If here this will not be used then we will not be able to input anything
  }
  const handleUpClick=()=>{
    // console.log("Upper case was clicked"+text);//this will be showed in the console
    let newtext=text.toUpperCase();//whatever text is passed set that to uppercase
    setText(newtext);//the setText method used with the handleOnChange allow to set the text accorf=ding to the user value
    document.body.style.backgroundColor="#0d6efd";
    document.body.style.color="white";
    props.alertmessg("Converted to Uppercase","success");
  }
  const handleLowClick=()=>{
    const lowtext=text.toLowerCase();
    setText(lowtext);
    props.alertmessg("Converted to lowercase","success");
    document.body.style.backgroundColor="#ffc107";
    document.body.style.color="black";
  }
  const handleClear=()=>{
    setText(" ");
    props.alertmessg("Text has been cleard","success");
    document.body.style.backgroundColor="#dc3545";
    document.body.style.color="white";
    
    
  }
  const handleCapitalize=()=>{
   const words=text.split(" ");//string converted to array elements
   const capwords=words.map((words)=>{
    return words.charAt(0).toUpperCase()+words.slice(1);
    
   }
  )
   //join
   const capjoin=capwords.join(" ");
   setText(capjoin);
   document.body.style.backgroundColor="#198754";
   props.alertmessg("Text has been capitalized","success"); 
  }
  const handleCopy=()=>{
    const copytext=document.getElementById("mytext");
    //select the text
    copytext.select();
    navigator.clipboard.writeText(copytext.value);
    props.alertmessg("Text has been copied","success");
    document.body.style.backgroundColor="black";
    //show alert message
    // alert("Copied text:"+copytext.value);
  }
  const handleExtraSpace=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" ")); 
    props.alertmessg("Extra space has been removed from the text","success");
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
  }
    //declare a new state variable which will call const
  const [text, setText] = useState(" ");//text is the variable and settext is the function used the change the variable value if needed
  // setText("Set the new text");
  return ( 
    <>
    <div className="container">
      <h1>{props.heading}</h1>
        <div className="mb-3">
  <textarea className="form-control" value={text}  id="mytext" rows="8" onChange={handleOnChange} ></textarea>
  {/* style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}in style double brackets are used one for defining js and one for object, ie in js i am writing object */}
</div>

<button type="button" className="btn btn-primary mx-1" onClick={handleUpClick} >Uppercase</button>
<button type="button" className="btn btn-warning mx-1" onClick={handleLowClick} >Lowercase</button>
<button typye="button" className="btn btn-danger mx-1"onClick={handleClear}>Clear</button>
<button className="btn btn-success mx-1" onClick={handleCapitalize}>Title</button>
<button className="btn btn-dark mx-1" onClick={handleCopy}>Copy</button>
<button className="btn btn-light mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
</div>
<div className="container my-3" >
  <h2>Your Text Summary</h2>
  <p>{text===" "?0:text.split(" ").length-1} word and {text===" "?0:text.length} lettes</p>
  <p>{0.00420*text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</>
  )
}
export default TextForm
