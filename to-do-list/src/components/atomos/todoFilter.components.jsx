import React from 'react'
import styled from 'styled-components'

const FilterContainers = ({children}) => {
  return (
    <>
    <Filtros>
    <div className='filter'>
        {children}
    </div>
    </Filtros>
    
    
    </>
  )
}


export default FilterContainers
const Filtros=styled.div`
    



`