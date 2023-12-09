import React from 'react'
import styled from 'styled-components'

const FilterButtonAct = ({ action, active, filter }) => {
    return (
      <Boton>
        <button onClick={action} className={`boton1 ${active.toLowerCase().includes(filter.toLowerCase()) ? 'active' : 'notActive'}`}>
          {filter}
        </button>
      </Boton>
    );
  };
  
  export default FilterButtonAct;
  
  const Boton = styled.div`
    .boton1:hover {
      color: white;
    }
    .boton1{
      background-color: transparent;
      border: none;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

    }
    .notActive{
      color:#6d6c6c;
    }
  
    .active{
     color: #4d9cc0
    }
`