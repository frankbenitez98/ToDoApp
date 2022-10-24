import React from "react";
import "./Loading.css";
function Loading(){ 


    return(
        <ul >
            <li className="Loading-container">
                <span className="Loading-completeIcon"></span>
                <p className="Loading-text">Cargando TODOs...</p>
                <span className="Loading-deleteIcon"></span>
            </li>
            <li className="Loading-container">
                <span className="Loading-completeIcon"></span>
                <p className="Loading-text">Cargando TODOs...</p>
                <span className="Loading-deleteIcon"></span>
            </li>
            <li className="Loading-container">
                <span className="Loading-completeIcon"></span>
                <p className="Loading-text">Cargando TODOs...</p>
                <span className="Loading-deleteIcon"></span>
            </li>
        </ul>
    );
}
export {Loading}; 