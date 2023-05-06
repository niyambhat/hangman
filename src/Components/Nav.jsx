import React,{useContext, memo} from 'react'
import { GameContext } from '../GameContext'

const Nav=memo(()=>{
  const {setGameStarted, level } =useContext(GameContext)
  const reset=()=>{
  localStorage.removeItem("hasGameStarted")
  setGameStarted(false)
  }
  return (
    <div className='fb'>
      <h1 id="level">Level {level.id}</h1>
      <h1 id="level">Ans: {level.ans.name}</h1> 
    <button id="reset" onClick={()=>reset()}>Reset</button>
  </div>
  )
})

export default Nav