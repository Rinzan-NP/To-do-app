import React, { useState,useEffect } from 'react'
import CompletedTask from './CompletedTask'

const getTodo = () => {
    let list = JSON.parse(localStorage.getItem('tasks'))
    if (list) {
        return list
    }else{
        return []
    }
}

const getComplete = () => {
    let list = JSON.parse(localStorage.getItem('completed'))
    if (list) {
        return list
    }else{
        return []
    }
    
}

export default function Task() {
const [text, settext] = useState("")
const [Todo, setTodo] = useState(getTodo())
const [completed, setcompleted] = useState(getComplete())

const handleAdd = () => {
    let newTask = text;
    settext("");
    if (text !== ""){
        setTodo([...Todo,newTask]);
    }   
}
const setvalue = (event) =>{
    settext(event.target.value)
}
const handlecheck = (task) => {
    setcompleted([...completed, task]);
    const newTodo = Todo.filter((element) => element !== task);
    setTodo(newTodo);
}

useEffect(() => {
  localStorage.setItem('tasks',JSON.stringify(Todo))
}, [Todo])

useEffect(() => {
    localStorage.setItem('completed',JSON.stringify(completed))
}, [completed])


  return (
    <>
    <div className="input-group my-3 p-3">
        <input type="text" className="form-control" value={text} onChange={setvalue}/>
        <button  className="btn btn-primary" onClick={handleAdd}>Add</button>
    </div>
    <div className="container p-3">
        {Todo.map((e,index) => (
        <div className="input-group mb-3" key={index}>
            <div className="input-group-text">
                <input
                    className="form-check-input mt-0"
                    type="checkbox"
                    checked={false} // You may set this value to true based on your requirement
                    onChange={() => handlecheck(e)}
                />
            </div>
            <input type="text" className="form-control"  value={e} readOnly/> 
        </div>
    ))}    
    </div>
    <div className="container p-3">
        <div className="accordion accordion-flush " id="accordionFlushExample">
            <div className="accordion-item ">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{backgroundColor : "aliceblue"}}>
                    Completed
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                {completed.map((element,index) => (
                    <div key={index}>
                            <CompletedTask task={element}/>
                    </div>
                ))
                }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
