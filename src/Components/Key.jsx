import React,{useContext, memo} from 'react'
import { GameContext } from '../GameContext'

const Key=memo(({name, keyPressed})=> {
  const {keyBoardIsActive} = useContext(GameContext)

  return (
    
    <button className={`key ${name === keyPressed ? 'pressed' : ''}`}
    type="submit" disabled={keyBoardIsActive} >{name}</button>
  )
})

export default Key