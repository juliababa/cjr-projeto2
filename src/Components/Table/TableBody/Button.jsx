import React, { useState } from 'react';

export default function Button(props){
    
    return(
        <button 
            onClick={() => props.onClick(props.clienteId)} 
            className={`text-button ${props.edit ? 'edit-button' : 'delete-button'}`}>

                {props.text}
        </button>

        
    )
}