
import React,{memo, useContext} from 'react'
import { UserContext } from './UserContext';


const ChildrenB=memo(()=>{
  const {childrenB, setChildrenB} = useContext(UserContext)
  let randomNumber = Math.floor(Math.random() * 20) + 1;
  return (
    <div>ChildrenB:{randomNumber}
    <input value={childrenB} onChange={(e)=>setChildrenB(e.target.value)}/>
    </div>
  )
})


export default ChildrenB