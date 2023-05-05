import React, {useContext} from 'react'
import { GameContext } from '../GameContext'

function VictoryScreen() {
  const {level, setLevel} = useContext(GameContext)
  const nextLevel =()=>{
  setLevel(prev=>prev+1)
  }
  return (
    <div className='modal'>
    <h1>Continue to next Level</h1>
    <button className="play-btn" onClick={reset}>
    <span className="play-icon">&#9658;</span>
    <span className="play-text">Play</span>
    </button>
</div>
  )
}

export default VictoryScreen