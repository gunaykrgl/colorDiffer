import React, {useState, useEffect} from 'react'
import "./index.css"

function App() {
  const [colorPairs, setColorPairs] = useState([])
  const [randomColorPair, setRandomColorPair] = useState([])

  async function fetchColorPairs(){
    const res = await fetch("../public/closestColors.json")
    if (!res.ok) {
      throw new Error("Failed to fetch colors JSON")
    }
    const data = res.json()
    return data
  }

  function getRandomColorPair(){
    const keys = Object.keys(colorPairs)
    const randomKey = keys[Math.floor(Math.random()* keys.length)]
    const randomValue = colorPairs[randomKey]
    setRandomColorPair(() => ({color1: randomKey, color2: randomValue}))
  }
  
  function handleClick(event) {
    console.log(event.target.className)
  }

  useEffect(()=>{
    fetchColorPairs()
      .then(data => {
        setColorPairs(data)
      })
      .then(getRandomColorPair)
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(()=>{
    console.log(randomColorPair)
  }, [randomColorPair])

  return (<div className='container'>
    <h1 className='title'>Color Differ</h1>
    <p>Select the box in {"colorName"}</p>
    <div className='color-container'>
      <div className='color color-one' onClick={handleClick}></div>
      <div className='color color-two' onClick={handleClick}></div>
    </div>
  </div>)
}

export default App
