import React from 'react'
import imgCheck from '../../img/marca-de-verificacion.png'
import styled from 'styled-components'
const check = () => {
  return (
   <>
   <ImgValidacion>
   <img className='check' src={imgCheck} alt="" />
   </ImgValidacion>
   </>
  )
}

export default check
const ImgValidacion=styled.div`

.check{
  width: 29px;
  position: relative;
  top: 2px;
  left: -2.6px;
}



`