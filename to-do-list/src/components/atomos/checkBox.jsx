import React from 'react'
import styled from 'styled-components'

const checkBox = ({handleSetCompleted,todo}) => {
      const {id}=todo
  return (
   <>
   <CheckBox>
    <span onClick={()=> handleSetCompleted(id)} ></span>
   </CheckBox>
   
   </>
  )
}

export default checkBox

const CheckBox=styled.div`
position: relative;



span{

    padding: 2.5px 11px;
    border: 1px solid white;
    border-radius: 100%;
}


`