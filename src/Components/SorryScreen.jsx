import React from 'react'

function SorryScreen() {
    const reset=()=>{
        window.location.reload();
    }
  return (
    <div className='modal'>
        <h1>Better Luck Next Time</h1>
        <button className="play-btn" onClick={reset}>
        <span className="play-icon">&#9658;</span>
        <span className="play-text">Play Again</span>
        </button>
    </div>
  )
}

export default SorryScreen