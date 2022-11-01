import React from "react";

function TodoHeader({children,loading}){
    
    return(
        <header>
            {React.Children.toArray(children).map(child => React.cloneElement(child,{loading}))}  
            {/* de esta forma creamos un array de los children para asi clonarlos
                y enviarle parametros diferentes para renderizarlos con parametros distintos. 
            */}
        </header>

    );
}
export {TodoHeader}; 