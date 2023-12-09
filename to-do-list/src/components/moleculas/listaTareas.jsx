import React from 'react'

import Todo from './Todo'

const listaTareas = ({todos, handleSetCompleted, handleDelete}) => {
  return (
    <>
        <div>
      {
        todos.map(todo=>{
            return(
            
                 <Todo 
                 key={todo.id}
                 todo={todo}
                 handleSetCompleted={handleSetCompleted}
                 handleDelete={handleDelete}/> 

              
              )})}

        </div>
    
    </>
    
  )
}

export default listaTareas
