import React, {useState} from 'react'
import { UserProvider } from './UserContext'
import ChildrenA from './ChildrenA';

function ContextRenderingLesson() {
    const [value, setValue] = useState()
 let randomNumber = Math.floor(Math.random() * 20) + 1;
  return (
    <UserProvider>
    <div>        
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <h1>Parent{randomNumber}
        </h1>
        <ChildrenA/>
    </div>
    </UserProvider>
  )
}

export default ContextRenderingLesson