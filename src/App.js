// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const ToMode=()=>{
    if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='#293866';
    // document.title="Text-Dark"
   
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      // document.title="Text-Light"
    }
  }
  return (
    <>
    {/* <Router> */}
<Navbar title="TextUtils" about="About us" mode={mode} ToMode={ToMode}/>
<div className="container my-6">
<Textbox  mode={mode}/>
{/* <About/> */}
</div>
{/* </Router> */}
</>
  );
}

export default App;
