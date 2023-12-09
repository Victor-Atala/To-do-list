import React, { useEffect, useState } from 'react'
import Buscador from '../moleculas/buscador'
import styled from 'styled-components'
import  ListaTareas  from '../moleculas/listaTareas'
import TodoFilter from '../moleculas/todoFilter'
import data from '../data'
const Home = () => {

  const GuardarTarea=JSON.parse(localStorage.getItem({data})) || []
  const [todos, setTodos]=useState(GuardarTarea)
  const [activeFilter, setActiveFilter]=useState('all')
  const [filterTodo, setFilterTodo]=useState(todos)

  useEffect(()=>{
    localStorage.setItem({data}, JSON.stringify(todos));

  },[todos])

 const addTodo=(title)=>{

  const lastId=todos.length > 0 ? todos[todos.length -1].id : 1;

  const newTodo={
    id:lastId + 1,
    title,
    completed:false
  }

  const todoList=[...todos]
  todoList.push(newTodo)
  setTodos(todoList)

 }
 const handleSetCompleted=(id)=>{

  const updateList =todos.map(todo=>{
    if (todo.id===id) {
        return{...todo, completed: !todo.completed}
    }
    return todo
  })
  setTodos(updateList)
 }

 const handleDelete=(id)=>{
  const updateList =todos.filter(todo=> todo.id !==id)
  setTodos(updateList)
 }

 const handleClearComplete=()=>{
const updateList=todos.filter(todo=> !todo.completed)
setTodos(updateList)

 }
 const showAllTodos=()=>{
    setActiveFilter('all')

 }
const showActiveTodos=()=>{
  setActiveFilter('active')
}

const showCompleteTodos=()=>{
  setActiveFilter('completed')
}

useEffect(()=>{
    if (activeFilter==='all') {
      setFilterTodo(todos)
      
    }else if(activeFilter==='active'){
        const activetodos=todos.filter(todo=> todo.completed===false)
        setFilterTodo(activetodos)
    }else if (activeFilter==='completed') {
      const completedTodos=todos.filter(todo=> todo.completed===true)
      setFilterTodo(completedTodos)
    }
}, [activeFilter,todos])


    return (
    <>
    <Contenedor>
      <div className='navegador'>
    <Buscador addTodo={addTodo}/>
      </div>
      <div className='tareas'>
        <ListaTareas
        todos={filterTodo}
        handleSetCompleted={handleSetCompleted}
        handleDelete={handleDelete}
        />
      </div>
      <div className='fotter'>
        <TodoFilter
         total={todos.length}
         activeFilter={ activeFilter}
         showActiveTodos={showActiveTodos}
         handleClearComplete={handleClearComplete}
         showAllTodos={showAllTodos}
         showCompleteTodos={showCompleteTodos}
        />
      </div>
    </Contenedor>
    
    </>
  )
}

export default Home

const Contenedor=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 90vh;

.navegador{
 height: fit-content;

  
}
.tareas{
  h2{
    padding-left:30px;
    font-size: .9em;
  }
  background-color: #0d0d0e73;
  border-radius:5px ;
  position:relative;
  width: 500px;
  top:30px;
  box-shadow: 0 0 10px black;
  height: 500px;

  overflow-y: scroll;

}
.fotter{
  box-shadow: 0 0 10px black;
  width: 500px;
  border-radius:10px;
  background-color: #0d0d0e73;
  position: relative;
  top: 60px;
  
}
`