import React from "react";
import "./CreaUnTodo.css";

function CreaUnTodo(){ 


    return(

        <div className="crea-container">
            <div className="img-container">
                <img src="https://cdn-icons-png.flaticon.com/512/3286/3286171.png" alt=" "/>
            </div>
            <p className="crea-text">Parece que no tienes nada por hacer!</p>
            <p className="add-text">Presiona el boton <span className="AddButton">+</span> para agregar un To Do</p>
        </div>
    );
}
export {CreaUnTodo}; 