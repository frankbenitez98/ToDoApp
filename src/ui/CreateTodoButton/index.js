import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props){
    // const toggleCreateItem = () => {
    //     if(!props.openModal){
    //         props.setOpenModal(true);
    //     }
    //     else{
    //         props.setOpenModal(false);
    //     }
        
    // };
    return(
        <button 
            className="CreateTodoButton"
            onClick={props.onClick}
        >
            +
        </button>
    );
}

export {CreateTodoButton};