import React,{memo} from 'react'
import ChildrenB from './ChildrenB';

const ChildrenA=()=>{
  let randomNumber = Math.floor(Math.random() * 20) + 1;
  return (
    <div>ChildrenA:{randomNumber}
    <ChildrenB/>
    </div>

  )
}

export default ChildrenA