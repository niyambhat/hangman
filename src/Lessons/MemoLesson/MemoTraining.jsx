import React, {useCallback, useState} from 'react'
import Child from './Child'
function MemoTraining() {
const [name, setName] = useState("")
const testFunction =useCallback((()=>{
    console.log("Test")
}),[])
  return (
    <div>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <h2>Child doesnot rerender becauese we have memoized it using memo. 
            It only rerenders if the props passed to it changes.
            In regards to function, it gets recreated so that triggers, child rerender.
            </h2>
        <Child test={testFunction}/>
        </div>
  )
}

export default MemoTraining