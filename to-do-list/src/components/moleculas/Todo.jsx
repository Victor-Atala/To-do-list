import React from 'react'
import CheckBox from '../atomos/checkBox'
import Texto from '../atomos/texto'
import styled from 'styled-components'
import IconEliminar from '../atomos/iconEliminar'
import Check from '../atomos/check'

const Todo = ({todo,handleSetCompleted, handleDelete}) => {
   const {id,title,completed}=todo
  return (
    <>
    <Tareas>

    <div >
        <div className='tareas1'>
            {
                completed ? (
                    <div onClick={()=> handleSetCompleted(id)}>
                       <Check/>
                    </div>
                ) : (

                    <CheckBox
                    handleSetCompleted={handleSetCompleted}
                    todo={todo}
                    />
                )
            }
            <Texto>
                <p className={'' + (completed && "parrafoLine")}>{title}</p>
            </Texto>

           <div className='icon'>

        <IconEliminar
       handleDelete={handleDelete}
        todo={todo}
        />
           </div>
            
        </div>
    </div>
    </Tareas>
    </>
  )
}

export default Todo

const Tareas=styled.div`

.tareas1{
    border-bottom: 1px solid rgb(67, 69, 71);
    top: 0;
    display: flex;
    height: 65px;
    align-items: center;
    padding-left: 10px;
    
    .icon{
        position: absolute;
        right: 20px;
    }
    img{

    }
    

p{
    font-size: 1em;
    font-weight: 500;
    color: #ffffff;
    padding-left:10px ;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.parrafoLine{
    text-decoration: line-through;
    padding: 5px;
}

}



`