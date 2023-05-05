import React, {useState, useEffect, useContext} from 'react'
import { generateWords } from '../Services'
import { GameContext } from '../GameContext'

function Box(props) {
  const {answer, setChancesLeft, selectedKey,setKeyBoardIsActive} = useContext(GameContext);
  const [correctValue, setCorrectValue] = useState(props.value)
  const [enteredValue, setEnteredValue] = useState("")
  const [editable, setEditable] = useState(props.editable)
  const [isCorrect, setIsCorrect] = useState(null)
  const [isActive, setIsActive] = useState(false)

  const handleChange=(e)=>{
    let userInput = e.target.value;
    processInput(userInput)
  }

  const processInput =(userInput)=>{
    if(userInput == correctValue){
      setEnteredValue(userInput)
      setIsCorrect(true)
    }else {
     setIsCorrect(false);
     setChancesLeft((prev)=>prev-1)
    }
  }

  // const handleSelection = ()=>{
  //  enableKeyboard(); 
  //  setIsActive(true);
  // }

  // useEffect(()=>{
  // isActive && processInput(selectedKey);
  // setIsActive(false)
  // },[selectedKey])

  const enableKeyboard=()=>{
    setKeyBoardIsActive(true) 
  }

  if(editable){
    return (
      <>
      {
        isActive ? 
        <input className="emptyBox yellow" type="text" value={enteredValue} editable="false" onChange={(e)=>handleChange(e)} onClick={()=>props.handleSelection()}/> 
        :
        <input className="emptyBox" type="text" value={enteredValue} editable="false" onChange={(e)=>handleChange(e)} onClick={()=>props.handleSelection()}/>
      }
      

     {isCorrect == false && "X"}
      </>    
  )
  }
  else{
    return (
      <>
       <input className='filledBox' type="text" value={correctValue} readOnly/>
      </>
    )
  }
}

export default Box