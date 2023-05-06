import React,{useState, useEffect, useContext} from 'react'
import Key from './Key'
import { GameContext } from '../GameContext'

const top = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
const mid = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
const bottom = ["Z", "X", "C", "V", "B", "N", "M"]
function KeyBoard({keyPressed, setKeyPressed}) {
    useEffect(() => {
        function handleKeyDown(event) {
        setKeyPressed(event.key.toUpperCase());
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => {
          document.removeEventListener("keydown", handleKeyDown);
        };
      }, [keyPressed]);

    return (
        <div>
            {keyPressed}
            <div className='keyRow'>
                {
                    top.map((letter, i) => {
                        return (
                            <Key name={letter} keyPressed={keyPressed}/>
                        )
                    })
                }
            </div>
            <div className='keyRow'>
                {
                    mid.map((letter, i) => {
                        return(<Key name={letter} key={i} keyPressed={keyPressed}/>)
                    })
                }
            </div>
            <div className='keyRow'>
                {
                    bottom.map((letter, i) => {
                        return(<Key name={letter} key={i} keyPressed={keyPressed}/>)
                    })
                }
            </div>

        </div>
    )
}

export default KeyBoard