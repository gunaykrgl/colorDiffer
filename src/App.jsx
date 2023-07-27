import React from 'react'
import "./index.css"

function App() {

  return (<div className='container'>
    <h1 className='title'>Color Differ</h1>
    <p>Select the box in {"colorName"}</p>
    <div className='color-container'>
      <div className='color color-one'></div>
      <div className='color color-two'></div>
    </div>
  </div>)
}

export default App
