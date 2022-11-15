import React from "react";
import './TodoList.css';

function TodoList(props){
    return(
        <section className="TodoList-container">
            
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.searched.length) && props.onCreaUnTodo()}
            {props.searched.map(todo => props.render(todo))}

            <ul>
                {props.children}
            </ul>
        </section>
    );
}
export {TodoList};