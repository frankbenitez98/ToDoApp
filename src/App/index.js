import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { useTodo} from "./useTodo";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { Error } from "../Error";
import { Loading } from "../Loading";
import { CreaUnTodo } from "../CreaUnTodo";
import { TodoHeader } from "../TodoHeader"
//import './App.css';
// const defaultTodos = [
//   {text:'cortar cebolla', completed: false},
//   {text: 'Tomar un curso de react', completed: false},
//   {text: 'Llorar con la llorona', completed: false}
// ];


function App() {
  const {
    loading,
    error,
    searched,
    completeTodos,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    setSearch,
    addTodo
  } = useTodo();

  return (
    <React.Fragment >
      <TodoHeader loading = {loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />

        <TodoSearch
          setSearch={setSearch}
        />
      </TodoHeader>
      <TodoList
        error = {error}
        loading = {loading}
        searched = {searched}
        onError = {() => <Error /> }
        onLoading = {() => <Loading /> }
        onCreaUnTodo = { () => <CreaUnTodo />}
        render = { todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => completeTodos(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      /> 

      {/* <TodoList>
        {error && <Error />}
        {loading && <Loading />}
        {(!loading && !searched.length) && <CreaUnTodo />}

        {searched.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => completeTodos(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList> */}
      {
        openModal && (
          <Modal>
            <TodoForm 
              addTodo = {addTodo}
              setOpenModal = {setOpenModal}
            />
          </Modal>
        )
      }
      <CreateTodoButton
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </React.Fragment >
  );

}


export default App;
