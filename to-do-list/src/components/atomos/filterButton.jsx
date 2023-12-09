import React from 'react'
import styled from 'styled-components'

const filterButton = ({children}) => {
  return (
   <>
   <Buton>
   <div>
    {children}
   </div>
   </Buton>
   </>
  )
}

export default filterButton
const Buton=styled.div`
div{
display: flex;
align-items: center;
gap: 10px;
}
    


`