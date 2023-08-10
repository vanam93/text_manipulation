import React, { useState } from 'react'


export default function TextForm(props) {
    const [text,setText]=useState("Enter text here");
    const handleChange=(event) => {
        console.log("text area changed")
       
        setText(event.target.value);
        
    }
    const uppercaseClick=()=>{
        console.log("upper case button clicked")
        const uppercase=text.toUpperCase();
        setText(uppercase);
    }
    const lowercaseClick=()=>{
        const lowercase=text.toLowerCase();
        setText(lowercase);
    }
    const  removeSpace=()=>{
        let newText=text.split(/\s+/).join(" ");
        setText(newText);
    }
    const copyText=()=>{
        let data=document.getElementById("myBox");
        data.select();
        navigator.clipboard.writeText(data.value);
        
    }
   const clearText=()=>{
   
   let flag= window.confirm("Are you sure you want to clear text?");
   if(flag===true)
    setText("");
    
   }
  return (
          <>
           <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}} >
            <div className=" container mb-3">
            <label htmlFor="myBox" className="form-label"><h3>{props.heading}</h3></label>
            <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}}  id="myBox" rows="3" ></textarea>
            </div>
            
            <button className="btn btn-primary mx-3 "  onClick={uppercaseClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-3 "  onClick={lowercaseClick} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-3 "  onClick={removeSpace} >Remove Extra spaces</button>
            <button className="btn btn-primary mx-3 "  onClick={copyText} >Copy Text</button>
            <button className="btn btn-primary mx-3 "  onClick={clearText} >Clear Text</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}} >
                <h3>Text summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return(element.length!==0)}).length} words  {text.length} characters</p>
                <p>{0.008*text.split(" ").filter((element)=>{return(element.length!==0)}).length} minutes required to read</p>
                <h3>Preview</h3>
                <p>{text}</p>            
            </div>
           
            </>
        )
        }
