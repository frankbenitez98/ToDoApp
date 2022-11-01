import React from "react";
import { useLocalStorage } from "./useLocalStorage"


function useTodo() {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const [openModal, setOpenModal] = React.useState(false);

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
        newTodos.push(
            { completed: false, text: text }
        );
        saveTodos(newTodos);
    }

    const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
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
        openModal,
        setOpenModal

    };
}

export { useTodo };