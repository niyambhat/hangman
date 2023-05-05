import React, {useEffect, useContext, useMemo, useState} from 'react'
import Box from './Box'
import { GameContext } from '../GameContext'
import { generateWords } from '../Services';
import Nav from './Nav';
import KeyBoard from './KeyBoard';
function PlayGame() {
const {setAnswer,answer,chancesLeft, selectedKey, level} = useContext(GameContext);
const [allCorrect, setAllCorrect] = useState(false)

useEffect(()=>{
generateWords().then(res=>{
    setAnswer(res[level-1]);
})
},[])

const handleSelection = ()=>{
console.log("tet")  
}

  return (
    <div>
    <Nav/>
    <div className='mainArea'>
        {
            answer.split('').map((letter, i)=>{
                let editableHelper = letter == answer[2] ? false : true;
                return(
                    <Box editable={editableHelper} value={letter} keyBoardValue={selectedKey} handleSelection={handleSelection}/>
                )
            })
        }
    </div>
    <div className='keyboard'>
    <KeyBoard/>
    </div> 
    <div className='chances'>
    <h1>Remaining Lives: {chancesLeft}</h1>
    </div>
    </div>
  )
}

export default PlayGame