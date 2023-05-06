import React, { useContext } from 'react'
import { GameContext } from '../GameContext'
function NewGameScreen() {
const {gameStarted, setGameStarted, setLevel} = useContext(GameContext)
const startGame = ()=>{
  localStorage.setItem("hasGameStarted", "true")
  setGameStarted(true);
}
  return (
    <div className="wrapNewScreen">
        <div className="logo">
        <h1>Hang<span>man</span></h1>
        </div>
        <div>
        <button className="play-btn" onClick={()=>startGame()}>
        <span className="play-icon">&#9658;</span>
        <span className="play-text">Play</span>
        </button>
        </div>      
    </div>
  )
}

export default NewGameScreen