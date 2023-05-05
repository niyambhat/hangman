import React,{useContext, memo} from 'react'
import { GameContext } from '../GameContext'

const Key=memo(({name})=> {
  const {setSelectedKey, selectedKey, keyBoardIsActive} = useContext(GameContext)
  const handleKeyClick=()=>{
    setSelectedKey(name)
  }
  return (
    <button className='key' onClick={()=>handleKeyClick()} disabled={!keyBoardIsActive}>
        {name}
    </button>   
  )
})

export default Key