import React from 'react'
import styled from 'styled-components'

const ItemLeft = ({total}) => {
  return (
    <Texto>
    <p>
        {total} items left
    </p>
    </Texto>
  )
}

export default ItemLeft
const Texto=styled.div`

p{
  padding-left:20px;
  color: white;
  font-weight: bold;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}


  
`