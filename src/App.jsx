import React, {useState, useEffect} from 'react'
import {fetchColorPairs, getRandomPair} from "./colorFunctions"
import "./index.css"

function App() {
  const [colorPairs, setColorPairs] = useState([])
  const [randomColorPair, setRandomColorPair] = useState([])
  const [correctAnswer, setCorrectAnswer] = useState() 
  const [score, setScore] = useState(0)
  function handleClick(event) {
    if (event.target.id == correctAnswer){
      setRandomColorPair(getRandomPair(colorPairs))
      setScore(score => score + 1)
    }

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
    setCorrectAnswer(["color1", "color2"][Math.floor(Math.random()* 2)])
    console.log(correctAnswer)
  }, [colorPairs])

  return (<div className='container'>
    <h1 className='title'>Color Differ</h1>
    <p>Select the box 
      in <span className="colorNameIdentifier">{randomColorPair[correctAnswer]}
    </span>
    </p>
    <div className='color-container'>
      <div className='color' id="color1" style={{backgroundColor: randomColorPair["color1"]}} onClick={handleClick}></div>
      <div className='color' id="color2" style={{backgroundColor: randomColorPair["color2"]}} onClick={handleClick}></div>
    </div>
    <p>Score: {score}</p>
  </div>)
}

export default App
