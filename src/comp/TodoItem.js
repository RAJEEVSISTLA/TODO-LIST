import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  
  return (
    <>
    <div>
      <h4>{todo.title}</h4>
     <p>{todo.desc}</p>
     <button onClick={()=>{onDelete(todo)}} className="btn btn-sm btn-danger" >Delete</button>
    </div>
    <hr/>
    </>
  )
}

 
 