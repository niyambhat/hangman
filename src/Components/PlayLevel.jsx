import React, {useEffect, useContext, useMemo, useState} from 'react'
import Box from './HangmanInput'
import { GameContext } from '../GameContext'
import { generateWords } from '../Dictionary';
import Nav from './Nav';
import KeyBoard from './KeyBoard';
import HangmanInput from './HangmanInput';
import { useRandomNumber } from '../Hooks/useRandomNumber';
import Key from './Key';
function PlayLevel() {
const [keyPressed, setKeyPressed] = useState('');
const [keyBoardIsActive, setKeyBoardIsActive] = useState(true)
const {data, gameStarted, level} = useContext(GameContext);
const rerender = useRandomNumber()

const goToNextLevel=()=>{
 //check if vicorious 
 // a
}

//
  return (
    <>
    <Nav/>
    <div className='mainArea'>
    <h1>{rerender}</h1> 
    {
      level.ans.name.split('').map((answer, i)=>{
        return(
          <h1>{answer}</h1>
        )
      })
    }
    
    </div>
    <KeyBoard keyPressed={keyPressed} setKeyPressed={setKeyPressed}/>
    </>
    
    // <div>
    // <div className='mainArea'>
    //     {
    //         answer.split('').map((letter, i)=>{
    //             let editableHelper = letter == answer[2] ? false : true;
    //             return(
    //                 <HangmanInput editable={editableHelper} value={letter} keyBoardValue={selectedKey} handleSelection={handleSelection}/>
    //             )
    //         })
    //     }
    // </div>
    // <div className='keyboard'>
    // <KeyBoard/>
    // </div> 
    // <div className='chances'>
    // <h1>Remaining Lives: {chancesLeft}</h1>
    // </div>
    // </div>
  )
}

export default PlayLevel