import React from 'react'
import Eliminar from '../../img/eliminar.png'
import styled from 'styled-components'

const iconEliminar = ({handleDelete, todo}) => {

        const {id}=todo
  return (
    <>
    <Img>
    <div>
        <img onClick={()=> handleDelete(id)} src={Eliminar} alt="" />
    </div>
    </Img>
    </>
  )
}

export default iconEliminar

const Img=styled.div`

img{
    width: 30px;
    filter:invert(100%);
    cursor: pointer;

}
img:hover{
    
   animation: moveImage .3s  infinite alternate ;
   
}

@keyframes moveImage{

    0%{
        
        transform: rotate(-20deg);
    }
    100%{
    
        transform: rotate(20deg);
    }
}
    
`