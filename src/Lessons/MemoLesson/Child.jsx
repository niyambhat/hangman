import React, {memo} from 'react'

const Child= memo(()=>{
let randomNumber = Math.floor(Math.random() * 20) + 1;
  return (
    <div>
        Child Rerenderd:{randomNumber}
    </div>
  )
})

export default Child