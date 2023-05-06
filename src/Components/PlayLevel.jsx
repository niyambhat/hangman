import React, {useEffect, useContext, useMemo, useState} from 'react'
import { GameContext } from '../GameContext'
import { generateWords } from '../Dictionary';
import Nav from './Nav';
import KeyBoard from './KeyBoard';
import Slate from './Slate';
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
    <p>Category: {level.ans.category}</p>
    <div className='slate'>
    <Slate answer={level.ans.name.toUpperCase().split('')}/>
    </div>
        
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