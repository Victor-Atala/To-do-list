import React, {useState } from 'react'
import styled from 'styled-components'

const Input = ({parametro}) => {

  const [title, setTitle]=useState('')
  const [error, setError]=useState('')
  const handleTodo =(e)=>{
    
    if (e.key.toLowerCase()==='enter') {
      if (title.trim()==='') {
        setError("error en ingresar tarea")
      }else{
        setError('')
        parametro(title)
        setTitle('')
    }
  
  }
}
 
  return (
    <>
    <Label>
    <input
     type="text" 
     placeholder='Agregar Tareas'
     value={title}
     onChange={e=> setTitle(e.target.value)}
     onKeyDown={e=>handleTodo(e)}
     />
    {error && <ErrorMessage>{error}</ErrorMessage>}
    </Label>
    </>
  )
}

export default Input

const Label=styled.label`
position: relative;
input{
  background-color: black;
  width: 250px;
  height: 25px;
  border-radius: 5px;
  border: none;
  color: white;
  padding: 5px;

}



  
`
const ErrorMessage=styled.p`
position: absolute;
top: 25px;
color: red;
font: 1em;



`