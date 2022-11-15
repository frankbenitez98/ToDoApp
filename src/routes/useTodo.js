import React from "react";
import { useLocalStorage } from "./useLocalStorage"


function useTodo() {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V2', []);

    // const [openModal, setOpenModal] = React.useState(false);

    const [search, setSearch] = React.useState('');
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searched = [];

    if (!search.length >= 1) {
        searched = todos;
    }
    else {
        searched = todos.filter(todo => {
            const text = todo.text.toLowerCase();
            const searchText = search.toLowerCase();
            return text.includes(searchText);
        });

    }
    const addTodo = (text) => {
        const newTodos = [...todos];
        const id = newTodoID(todos); 
        newTodos.push(
            { completed: false, text: text, id}
        );
        saveTodos(newTodos);
    }

    const completeTodos = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };
    const editTodos = (id, newText) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].text = newText;
        saveTodos(newTodos);
    };

    const deleteTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    return {
        error,
        loading,
        totalTodos,
        completedTodos,
        search,
        setSearch,
        searched,
        completeTodos,
        deleteTodo,
        addTodo,
        // openModal,
        // setOpenModal
        editTodos,

    };
}
const newTodoID = (todosList) => {
    if( !todosList.length){
        return 1;
    }
    const idList = todosList.map(todo => todo.id);
    const idmax = Math.max(...idList); 
    return idmax + 1; 
};

export { useTodo };