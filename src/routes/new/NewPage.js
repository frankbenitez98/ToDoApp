import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodo } from "../useTodo";
function NewPage(){
    const {addTodo} = useTodo(); 
    return(
        <TodoForm
            label= "Escribe tu nuevo To Do"
            submitText = "Añadir"
            submitEvent = {(text)=> addTodo(text)}

        />
    );
}

export {NewPage};