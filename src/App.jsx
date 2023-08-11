import React, {useState, useEffect} from 'react'
import "./index.css"

function App() {
  const [colorPairs, setColorPairs] = useState([])
  async function fetchColorPairs(){
    const res = await fetch("../public/closestColors.json")
    if (!res.ok) {
      throw new Error("Failed to fetch colors JSON")
    }
    const data = res.json()
    return data
  }
  useEffect(()=>{
    fetchColorPairs()
      .then(data => {
        setColorPairs(data)
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

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
