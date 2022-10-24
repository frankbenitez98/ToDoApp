import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch(){
    const {search , setSearch} = React.useContext(TodoContext);
    const onSearch = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    };

    return(
        <input 
            className="TodoSearch" placeholder="Busca un To Do..."
            onChange={onSearch}
        />
    );
}
export {TodoSearch};