import React,{useContext} from 'react'
import { GameContext } from '../GameContext'

function Nav() {
  const {points, setGameStarted, level } =useContext(GameContext)
  const reset=()=>{
  localStorage.removeItem("hasGameStarted")
  setGameStarted(false)
  }
  return (
    <div className='fb'>
        <h1 id="level">Level {level}</h1>
        <button id="reset" onClick={()=>reset()}>Reset</button>
    </div>
  )
}

export default Nav