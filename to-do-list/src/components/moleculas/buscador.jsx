import React from 'react'
import Titulo from '../atomos/titulo'
import Input from '../atomos/input'
import styled from 'styled-components'
const Buscador = ({addTodo}) => {
  

  const parametro=(title)=>{
    addTodo(title)
  }
  return (
  <>
    <NavBar>
     
      <Titulo/>
      <Input parametro={parametro}/>
    
    </NavBar>
  </>
  )
}

export default Buscador

const NavBar=styled.div`

 background-color: #0d0d0e73;
 box-shadow: 0 0 10px black;
 border-radius:10px ;
 display: flex;
 justify-content:space-around;
 align-items: center;
 width: 500px;
 height: 50px;





`