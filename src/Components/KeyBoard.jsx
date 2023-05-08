import React,{useState, useEffect, useContext} from 'react'
import Key from './Key'
import { GameContext } from '../GameContext'
import VictoryScreen from './Modals/VictoryScreen'
const top = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
const mid = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
const bottom = ["Z", "X", "C", "V", "B", "N", "M"]

function KeyBoard({keyPressed, setKeyPressed}) {
    const {level, userInput, setUserInput,setWin, win} = useContext(GameContext)
    const [userEntries, setUserEntries] = useState([])
    const [ans, setAns] = useState(level.ans.name.toUpperCase().split(''))
    useEffect(() => {
       pressKeyOnScreen();
      }, []);

    const pressKeyOnScreen=()=>{
        function handleKeyDown(event) {
            let pressedValue = event.key.toUpperCase()
            setKeyPressed(pressedValue); 
            checkIfThisKeyIsPartOfAnswer(pressedValue);
            }
            document.addEventListener("keydown", handleKeyDown);
            return () => {
              document.removeEventListener("keydown", handleKeyDown);
            };
    }
   
    const checkIfThisKeyIsPartOfAnswer=(pressedValue)=>
    {
    let isPartOfAnswer = ans.find((element)=> element === pressedValue) == pressedValue
    if(isPartOfAnswer){
        setUserEntries(prevState => [...prevState, pressedValue]);
    }
}

useEffect(()=>{
createMatchingArray(ans,userEntries)
},[userEntries, ans])

useEffect(()=>{
if(userInput){
    let won = userInput.length === ans.length && userInput.every((value, index) => value === ans[index]);
    if(won){
        setWin(true);    
    }
}
},[userInput])

useEffect(()=>{
setUserEntries([])
},[win])

function createMatchingArray(arr, target) {
    const result = arr.map((element) => {
      if (target.includes(element)) {
        return element;
      } else {
        return "";
      }
    });
    setUserInput(result)
  }


    return (
        <div>
            {
                win ? <VictoryScreen/> : 
                <>
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
                </>
            }
            
        </div>
    )
}

export default KeyBoard