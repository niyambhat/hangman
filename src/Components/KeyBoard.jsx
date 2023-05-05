import React from 'react'
import Key from './Key'

function KeyBoard() {
    const top = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const mid = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const bottom = ["Z", "X", "C", "V", "B", "N", "M"]


    return (
        <div>
            <div className='keyRow'>
                {
                    top.map((letter, i) => {
                        return (
                            <Key name={letter} />
                        )
                    })
                }
            </div>
            <div className='keyRow'>
                {
                    mid.map((letter, i) => {
                        return(<Key name={letter} key={i} />)
                    })
                }
            </div>
            <div className='keyRow'>
                {
                    bottom.map((letter, i) => {
                        return(<Key name={letter} key={i} />)
                    })
                }
            </div>

        </div>
    )
}

export default KeyBoard