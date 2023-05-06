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
const {level} = useContext(GameContext);

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
  
  )
}

export default PlayLevel