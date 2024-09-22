import { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
// import "./App.css";
import style from "./components/index.module.css";
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [List, setList] = useState<
    { title: string; description: string; isCompleted: boolean; id: string }[]
  >(() => {
    const storeLTodolist = window.localStorage.getItem("todoList");

    // return storeLTodolist ? JSON.parse(storeLTodolist): [];

    if (storeLTodolist) {
      try {
        return JSON.parse(storeLTodolist);
      } catch (error) {
        console.error("Error parsing JSON from localStorage", error);
        return [];
      }
    }
    return [];
    // const storeLlistTitle =  window.localStorage.getItem('title');
    // const storeLlistdescription =  window.localStorage.getItem('description');

    // if (storeLlistTitle && storeLlistdescription) {
    //   return [{ title: storeLlistTitle, description: storeLlistdescription }];
    // }
    // return[];
  });
  // const [ListTitle, setListTitle] = useState<string[]>([]);

  const AddListSetLocalStorage = (title: string, description: string) => {
    try {
      const listStore = [...List, { title, description, isCompleted: false, id: uuidv4() }];
      setList(listStore);
      window.localStorage.setItem("todoList", JSON.stringify(listStore));
      // window.localStorage.setItem("title",JSON.stringify(title));
      // window.localStorage.setItem("description",JSON.stringify(description));
    } catch (error) {
      console.error(error);
    }
  };

  // const AddTitle = (todoListTitle: string) => {
  //   setListTitle([...ListTitle, todoListTitle]);
  // };

  const deleteTodo = (index: string) => {
    const updateList = List.filter((item) => item.id !== index);

    setList(updateList);

    window.localStorage.setItem("todoList", JSON.stringify(updateList));
  };

  const toggleTodoStatus = (index: string) => {
    console.log("Índice a actualizar:", index); // Imprime el índice


    const updateList = List.map((todo) => {
      // Imprime el índice actual y el estado del elemento
      // console.log(`Índice actual: ${i}, Estado actual: ${todo.isCompleted}`);

      return todo.id === index
        ? { ...todo, isCompleted: !todo.isCompleted }
        : todo;
    });

    console.log("Lista actualizada:", updateList); // Imprime la lista actualizada

    setList(updateList);
    window.localStorage.setItem("todoList", JSON.stringify(updateList));
  };

  console.log(List);

  const [ediTodo, setEdiTodo] = useState<{ title: string; description: string } | null>(null);


  const handleEditTodo = (todo: { title: string; description: string }) => {
    setEdiTodo(todo);
  };



  const updateListInputs = (title: string, description: string) => {
    if (ediTodo) {
      const updateList = List.map((todo) =>
        todo.title === ediTodo.title ? { ...todo, title, description } : todo
      );
      setList(updateList);
      window.localStorage.setItem("todoList", JSON.stringify(updateList));
    }
  };





  return (
    <>
      <div className={style.container_father}>
        <Header>TO DO LIST</Header>
        <div className={style.container_child}>
          <TodoInput AddListSetLocalStorage={AddListSetLocalStorage} updateListInputs={updateListInputs} ediTodo={ediTodo} />
          <br />

          <TodoList list={List} deleteTodo={deleteTodo} toggleTodoStatus={toggleTodoStatus} handleEditTodo={handleEditTodo} />
        </div>
      </div>
    </>
  );
}

export default App;
