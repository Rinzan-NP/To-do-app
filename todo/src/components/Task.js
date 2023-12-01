import React, { useState } from 'react'

export default function Task() {
const [text, settext] = useState("")
const [Todo, setTodo] = useState([])

const handleAdd = () => {
    let newTask = text;
    settext("");
    setTodo([... Todo,newTask]);
    
    
}

const setvalue = (event) =>{
    settext(event.target.value)

}

  return (
    <>
    <div className="input-group my-3 p-3">
        <input type="text" className="form-control" value={text} onChange={setvalue}/>
        <button className="btn btn-primary" onClick={handleAdd}>Add</button>
    </div>
    <div className="container p-3">
        {Todo.map((e) => (
        <div className="input-group mb-3" key={e}>
            <div className="input-group-text">
                <input className="form-check-input mt-0" type="checkbox" value={e} aria-label="Checkbox for following text input"/>
            </div>
            <input type="text" className="form-control" aria-label="Text input with checkbox" value={e} />
        </div>
    ))}

        
    </div>
  
    </>
  )
}
