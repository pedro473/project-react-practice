import React from 'react';


const Delete = (props) =>(
    <div className='delete'onClick={props.manejarClear} > 
      
            {props.children}
       
    </div>
);


export default Delete;