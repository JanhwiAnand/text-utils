// anything written to thi page will be displayed in the output
//we are tryin to make an app that will take the text in the input ant return the number of texts, converts the uppercase to lowercase and remove extra spaces
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Contact from './components/Contact';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

// import React from 'react'->we are using function based component here, react not needed to be installed sice its not used here 

// let name="janhwi"//this is a js
function App() {
 
  const[mode,setMode]=useState("light");//whether dark mode is enables or not
  const[alert,setAlert]=useState(null);
  const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })//passing object in it
    //1st my alert was null but now it is an object
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const togglemode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='#042743';
      document.body.style.color='white';
      document.title="TextUtils-Darkmode"
      showalert("Dark mode has been enabled","success");
      // setInterval(() => {
      //   document.title="Text Utils is Amaizing";
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install textutils now"
      // }, 1500);This will make the title blink by changing value in some time and this is used by some people to attarct the attention  but is not a good user experience 
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      document.title="TextUtils-Lightmode"//This will allow the change in the title dynamically...Tis is now done generally but can be done sometimes
      showalert("Light mode has been enabled","success");
    }
  }
  return (
 <>
<BrowserRouter>
<Navbar start="TextUtils" mode={mode} togglemode={togglemode}/>
<div className="container my-3">
<strong><Alert alert={alert}/></strong>
</div>
<Routes>
  <Route path="/about" element={<About />}/>
</Routes>
<Routes>
<Route path="/" element={<TextForm alertmessg={showalert}heading="Enter the text to analyze"/>}/>
</Routes>
<Routes>
  <Route path="/contact" element={<Contact />}/>
</Routes>
</BrowserRouter>
 </>
   
  );
}

export default App;
