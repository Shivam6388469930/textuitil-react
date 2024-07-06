
import React, { useState } from 'react'


function Textform(props) {


    const handleclick=()=>{
        const newtext=text.toUpperCase()
        setText(newtext)
        console.log("Uppercse is clcked")
        
    }
    const handlelower=()=>{
        const newtext=text.toLowerCase()
        setText(newtext)
        console.log("Uppercse is clcked")
        
    }
    const handleclear=()=>{
        const newtext=""
        setText(newtext)
        console.log("Uppercse is clcked")
        
    }

    const handleonchange=(event)=>{
        console.log("on change")
        setText(event.target.value)

    }

    const copy=()=>{
      const text=document.getElementById('mybox')
      text.select()
      navigator.clipboard.writeText(text.value)
      }


   

  

    

 
    const[text,setText]=useState('enter the text')
   
    // console.log(useState('enter the text2'))

  return (
    <>
    <h1>{props.heading}</h1>
    <div className='container my-5'>
   
   <label  className="form-label">Example textarea</label>
   <textarea className="form-control mb-4" rows="6" value={text} onChange={handleonchange} id='mybox' my='5'></textarea>
   <div className="container ml-3">
      <button className='btn btn-primary' onClick={handleclick} >Change Uppercse</button>
      <button className='btn btn-primary mx-3' onClick={handlelower} >Change Lowercase</button>
      <button className='btn btn-primary' onClick={handleclear}>Clear</button>
      <button onClick={copy} className='btn btn-primary mx-3'>Copy</button>
   </div>
 
 </div>
 <div className="container my-3">
    <p>{text.split(" ").length} Words and {text.length} Character</p>
    <p>{0.08*text.split(" ").length} minute read</p>
    <p>{text.split(".").length} No. of paragraph</p>
    <h2>Preview</h2>
    <p>{text}</p>
 </div>
 
 </>
   )
}
 
   


export default Textform
