import { useState, memo } from "react";
import React from 'react'

const Input=memo(({value, name, id, onChange})=> { 
     let randomNumber = Math.floor(Math.random() * 20) + 1;
    
  return (
    <div>
        {randomNumber}
        <label>{name}</label>
        <input type="text" value={value} onChange={(e)=>onChange(id,e.target.value)}/>
    </div>
  )
})

export default Input