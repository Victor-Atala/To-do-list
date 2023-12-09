import React from 'react'
import styled from 'styled-components'

const titulo = () => {
  return (
    <>
    <Titulo>
    <h1>LISTA DE TAREAS</h1>
    </Titulo>
    </>
  )
}

export default titulo
const Titulo=styled.div`

h1{
  font-size: 1.1em;
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bolder;
}

`