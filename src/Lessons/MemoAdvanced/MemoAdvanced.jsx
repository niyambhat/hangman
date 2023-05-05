import React, {useState, useCallback} from 'react'
import Input from './Input'

//react optimisation: Re-rendering
function MemoAdvanced() {
    const [formElements, setFormElements] = useState([{ name: "Name", value: "", id:1 },{ name: "Address", value: "",id:2 },{ name: "Contact", value: "", id:3 } ])
    const handleInputChange = useCallback(((id, value)=>{
        setFormElements(prev=>prev.map((item)=>{
            if(item.id==id){
                item.value = value;
            }
            return item
        }))
    }),[])

  return (
    <div>
        <h1>Parent holds the state and passes it to the Input.</h1>
        {formElements.map((type,i)=>{
            return(
                <div key={i}>
                <Input name={type.name} id={type.id} value={type.value} onChange={handleInputChange}/>
                </div>
            )
        })}
    </div>
  )
}

export default MemoAdvanced