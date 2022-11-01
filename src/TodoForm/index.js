import React from "react";
import './TodoForm.css';
function TodoForm ({addTodo , setOpenModal}){
    const [textArea , setTextArea] = React.useState('');

    const onCancel = () =>{
        setOpenModal(false); 
    };

    const onAdd = (event) =>{
        event.preventDefault(); 
        addTodo(textArea);
        setOpenModal(false);
    };

    const onChange = (event) =>{
        setTextArea(event.target.value);
    };

    return(
        <form onSubmit={onAdd}>
            <label>Escribe un nuevo To Do </label>
            <textarea
                value={textArea}
                onChange = {onChange}
                placeholder="llorar con la llorona..."
                autoFocus
            />
            <div className="TodoForm-buttonContainer">
                <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">
                    Cancelar
                </button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">
                    Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm}; 