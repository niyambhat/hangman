import React,{useState, useEffect, useContext} from 'react'
import { GameContext } from '../../GameContext'

function VictoryScreen() {
  const {level, userInput, setUserInput,setWin, win, gameData, setLevel} = useContext(GameContext)
    const [userEntries, setUserEntries] = useState([])
    const [answer, setAnswer] = useState(level.ans.name.toUpperCase().split(''))

  // function createMatchingArray(arr, target) {
  //   const result = arr.map((element) => {
  //     if (target.includes(element)) {
  //       return element;
  //     } else {
  //       return "";
  //     }
  //   });
  //   setUserInput(result)
  // }

  useEffect(()=>{
    setUserInput(Array(answer.length).fill(""))
    },[win])


  const nexLevel=()=>{
    let ans = gameData[level.id +1]
    setLevel((prev)=>({id:prev.id+1,ans:ans}));
    setWin(false);
  }


  return (
    <div className='modal'>
      <div className="main">
      <h1>Continue to next Level</h1>
    <button className="play-btn" onClick={()=>nexLevel()} disabled={level.id == 9}>
    <span className="play-icon">&#9658;</span>
    <span className="play-text">Play</span>
    </button>
      </div> 
</div>
  )
}

export default VictoryScreen