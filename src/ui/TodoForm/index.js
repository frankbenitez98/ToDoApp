import React from "react";
import { useNavigate } from "react-router-dom";
import './TodoForm.css';
function TodoForm (props){
    const [textArea , setTextArea] = React.useState(props.defaultText || '');
    const navigate = useNavigate();
    const onCancel = () =>{
        navigate('/'); 
    };

    const onAdd = (event) =>{
        event.preventDefault(); 
        props.submitEvent(textArea);
        navigate('/');
    };

    const onChange = (event) =>{
        setTextArea(event.target.value);
    };

    return(
        <form onSubmit={onAdd}>
            <label>{props.label}</label>
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
                    {props.submitText}
                </button>
            </div>
        </form>
    );
}

export {TodoForm}; 