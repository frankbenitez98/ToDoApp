import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { TodoForm } from "../../ui/TodoForm";
import { useTodo } from "../useTodo";
function EditPage(){
    const location = useLocation(); 
    const {editTodos} = useTodo();  
    const id = Number(useParams().id);
    let todoText; 
    if(location.state.todo){
        todoText = location.state.todo.text; 
    }
    else{
        todoText = '';
    }
    return(
        <TodoForm
            label= "Edita tu To Do"
            submitText = "Editar"
            submitEvent = {(newText)=> editTodos(id, newText)}
            defaultText = {todoText}
        />
    );
}

export {EditPage};