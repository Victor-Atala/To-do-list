import React from 'react'
import TodoFilterComponents from '../atomos/todoFilter.components'
import ItemLeft from '../atomos/ItemLeft'
import styled from 'styled-components'
import FilterButton from '../atomos/filterButton'
import FilterButonAct from '../atomos/filterButonAct'
const todoFilter = ({
          total,
          activeFilter, 
          showActiveTodos,
          handleClearComplete,
          showAllTodos,
          showCompleteTodos
          
        }) => {
  return (
    <>
   

    <TodoFilterComponents>
      <Filtros>

        <ItemLeft
  
       total={total}

       />
        <FilterButton>
        <FilterButonAct action={()=> showAllTodos()} active={activeFilter} filter='Todo'/>
        <FilterButonAct action={()=> showActiveTodos()} active={activeFilter} filter='Activos'/>
        <FilterButonAct action={()=> showCompleteTodos()} active={activeFilter} filter='Completados'/>
        </FilterButton>
        <button className='boton' onClick={()=> handleClearComplete()}>
            Borar Completados
        </button>
      </Filtros>
    </TodoFilterComponents>
   
    </>
  )
}

export default todoFilter

const Filtros =styled.div`

display: flex;
justify-content: space-around;
align-items: center;

.boton{
  color:  #6d6c6c;
  background-color: transparent;
  border: none;
}

.boton:hover{
  color: white;
  cursor: pointer;
  transition: all .3s ease-in-out;
}

`