import React from "react";
import './TodoSearch.css'

function TodoSearch({setSearch, loading}){

    const onSearch = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    };

    return(
        <input 
            className="TodoSearch"
            placeholder="Busca un To Do..."
            onChange={onSearch}
            disabled = {loading}
        />
    );
}
export {TodoSearch};