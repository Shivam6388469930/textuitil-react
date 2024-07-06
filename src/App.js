import React, { useState } from "react"
import "./app.css"
import Navbar from "./component/Navbar"
import Textform from "./component/Textform"
// import About from "./component/About"
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route 
// } from "react-router-dom"

function App() {
  const[mode,setMode]=useState('light')

  const togglemode=()=>{
   
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black'
      document.body.style.color='white'
      document.getElementcdById('setmode').innerText="Disable dark mode"
      
     
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      document.getElementById('setmode').innerText="Enable  dark mode"
      
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="Textutilit" mode={mode} togglemode={togglemode} about="About"/>
          <div className="container my-3">
          <Textform heading="Analyize your text in below  "/>
            {/* <Routes>
              <Route path="/" element={ <Textform heading="Analyize your text in below  "/>}>
              </Route> */}
              {/* <Route path="/about" element={<About/>}> </Route>
              <About/> */}
            {/* </Routes> */}
          </div>
      {/* </Router> */}
      {/* create navbar using bootstrap */}
   
     
</>
  )
}


export default App;
