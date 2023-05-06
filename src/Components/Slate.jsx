import React, {useContext} from 'react'
import Input from './Input'
import { GameContext } from '../GameContext'

function Slate({answer}) {
const {userInput} = useContext(GameContext)
  return (
    <>
       {userInput?.map((letter,i)=>{
        return(
            <>
            <Input value={letter}/>
            </>        
        )
    })}
    </>
  )
}

export default Slate