import React from "react";

import { useTodo} from "../useTodo";
import { TodoCounter } from "../../ui/TodoCounter";
import { TodoSearch } from "../../ui/TodoSearch";
import { TodoList } from "../../ui/TodoList";
import { CreateTodoButton } from "../../ui/CreateTodoButton";
import { TodoItem } from "../../ui/TodoItem";
import { Modal } from "../../ui/Modal";
import { Error } from "../../ui/Error";
import { Loading } from "../../ui/Loading";
import { CreaUnTodo } from "../../ui/CreaUnTodo";
import { TodoHeader } from "../../ui/TodoHeader"
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate(); 

  const {
    loading,
    error,
    searched,
    completeTodos,
    deleteTodo,
    //openModal,
    //setOpenModal,
    totalTodos,
    completedTodos,
    setSearch,
    // addTodo
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
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => completeTodos(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onEdit = {() => navigate('/edit/' + todo.id, { state : {todo} })}
          />
        )}
      /> 

      {/* {
        openModal && (
          <Modal>
            <TodoForm 
              addTodo = {addTodo}
              setOpenModal = {setOpenModal}
            />
          </Modal>
        )
      } */}
      <CreateTodoButton
        // openModal={openModal}
        // setOpenModal={setOpenModal}
        onClick={()=>navigate('/new')}
      />
    </React.Fragment >
  );

}


export {HomePage};
