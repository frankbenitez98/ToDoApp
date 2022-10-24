import React from "react";
import { AppUI } from "./AppUI";
import {TodoProvider} from "../TodoContext"
//import './App.css';

// const defaultTodos = [
//   {text:'cortar cebolla', completed: false},
//   {text: 'Tomar un curso de react', completed: false},
//   {text: 'Llorar con la llorona', completed: false}
// ];


function App() {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}


export default App;
