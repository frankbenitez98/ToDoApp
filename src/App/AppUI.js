import React from "react";

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import {TodoContext} from "../TodoContext";
import {Modal} from "../Modal";
import {TodoForm} from "../TodoForm";
import {Error} from "../Error";
import {Loading} from "../Loading";
import {CreaUnTodo} from "../CreaUnTodo";

function AppUI(){
    const {
        loading, 
        error,
        searched,
        completeTodos,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);


    return (
        <React.Fragment>
            <TodoCounter 
                
            />
            
            <TodoSearch

            />
            <TodoList>
                {error && <Error/>}
                {loading && <Loading/>}
                {(!loading && !searched.length) && <CreaUnTodo/>}

                {searched.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text = {todo.text} 
                    completed = {todo.completed}
                    onCompleted = { () => completeTodos(todo.text)}
                    onDelete = {() => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>
            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
            <CreateTodoButton 
                openModal = {openModal}
                setOpenModal = {setOpenModal}
            />
         </React.Fragment>
    );
}

export {AppUI};