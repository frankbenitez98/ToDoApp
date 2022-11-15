import React from "react";
import './TodoItem.css';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { EditIcon } from '../TodoIcon/EditIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';

function TodoItem(props){  

    return(
        <li className="TodoItem">
            {/* <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onCompleted}
            >
                ✔
            </span> */}
            <CompleteIcon
                completed={props.completed}
                onCompleted ={props.onCompleted}
            />
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
                {props.text}
            </p>
            {/* <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            > 
                X 
            </span> */}
            <EditIcon onEdit={props.onEdit}/>
            <DeleteIcon onDelete={props.onDelete}/>

        </li>
    );
}
export {TodoItem};