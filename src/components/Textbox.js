import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
export default function Textbox(props) {
  const [text, setText] = useState('');
  const[ nwords, setNwords]=useState(0);
  
  const ToUP=()=>{
    let newtext=text.toLocaleUpperCase();
    setText(newtext);
  }
  const ToLO=()=>{
    let newtext=text.toLocaleLowerCase();
    setText(newtext);
  }
  const ToCL=()=>{
    // let newtext=text.toLocaleUpperCase();
    setText('');
  }
  const ToCP=()=>{
    var text=document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const ToRES=()=>{
    let newtext=text.replace(/  +/g, ' ');;
    setText(newtext);
  }
  const handleonchange=(event)=>{
    setText(event.target.value);
  }

  useEffect(() => {
    function calci(text){
      text=text.trim()
      text=text.replace(/  +/g, ' ');
      if(text.length===0)
      setNwords(0);
      // else if(text.charAt(text.length-1)===" ")
      // setNwords(text.split(" ").length-1);
      else
      setNwords(text.split(" ").length);
    }
     calci(text);
    }
  , [text]); // Only re-subscribe if props.friend.id changes
  return (
    <div style={{color: props.mode==='dark'?'white':'black'}}>
    {/* <div className="mb-3">
  <label htmlhtmlfor="exampleFormControlInput1" className="form-label my-2">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div> */}
<div className="mb-3 my-2">
    <h1>
        Hey, Enter your text below
    </h1>
  {/* <label for="exampleFormControlTextarea1" className="form-label">{props.text}</label> */}
  <textarea className="form-control my-3" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="10"></textarea>
  <button type="button" className="btn btn-primary my-2 mx-1" onClick={ToUP} >Convert to UpperCase</button>
  <button type="button" className="btn btn-primary my-2 mx-1" onClick={ToLO} >Convert to LowerCase</button>
  <button type="button" className="btn btn-primary my-2 mx-1" onClick={ToCP} >Copy Text</button>
  <button type="button" className="btn btn-primary my-2 mx-1" onClick={ToCL}  >Clear Text</button>
  <button type="button" className="btn btn-primary my-2 mx-1" onClick={ToRES}>Remove Extra Spaces</button>
</div>
<div>
  <h1>Text Summary</h1>
  <p>
    {nwords} words, {text.length} characters
  </p>
  <h3>Minutes Read</h3>
  <p> {0.008*nwords}</p>
  <h3> Preview Text </h3>
  <p> {text.length>0?text:"Enter the text to preview"}</p>
</div>
</div>
  )
}

