import React, {useState, useEffect} from 'react'
import {fetchColorPairs, getRandomPair} from "./colorFunctions"
import "./index.css"

function App() {
  const [colorPairs, setColorPairs] = useState([])
  const [randomColorPair, setRandomColorPair] = useState([])
  const [correctAnswer, setCorrectAnswer] = useState() 
  function handleClick(event) {
    setRandomColorPair(getRandomPair(colorPairs))
  }

  useEffect(()=>{
    fetchColorPairs()
      .then(data => {
        setColorPairs(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  //! EDIT NEEDED: For initialization
  useEffect(()=>{
    setRandomColorPair(getRandomPair(colorPairs))
    setCorrectAnswer(["color_0", "color_1"][Math.floor(Math.random()* 2)])
    console.log(correctAnswer)
  }, [colorPairs])

  return (<div className='container'>
    <h1 className='title'>Color Differ</h1>
    <p>Select the box in {"colorName"}</p>
    <div className='color-container'>
      <div className='color' id="color1" style={{backgroundColor: randomColorPair["color_0"]}} onClick={handleClick}></div>
      <div className='color' id="color2" style={{backgroundColor: randomColorPair["color_1"]}} onClick={handleClick}></div>
    </div>
  </div>)
}

export default App
