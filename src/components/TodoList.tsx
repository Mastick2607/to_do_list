import TodoItem from "./TodoItem";
import listyle from "./List.module.css"
import { useState } from "react";

type Props ={
    // listTitle:string[];
    list: { title: string; description: string; isCompleted: boolean;id:string }[];
    deleteTodo:(index:string)=>void;
    toggleTodoStatus:(index:string)=>void;
    handleEditTodo:(todo:{title:string; description: string })=>void;
}


function TodoList (props:Props){

 const  {list,deleteTodo,toggleTodoStatus,handleEditTodo} = props;
 const [showCompleted,setShowCompleted] =useState(false);

 const filteredList = list.filter(todo=>todo.isCompleted ===showCompleted);
//  console.log(filteredList.map(todo => todo.id));
 return (   
  
  <div className={listyle.containerStatus}>
      <div  className={listyle.botones}>
            <button className={listyle.actionHomework1} onClick={()=>setShowCompleted(false)}>Pending</button>
            <button className={listyle.actionHomework2} onClick={()=>setShowCompleted(true)}>Finished</button>
          </div>

<ul>
{
        filteredList.map((lista, listIndex) => (
          <TodoItem
            key={listIndex}
            lista={lista.title}
            descripcion={lista.description}
            isCompleted={lista.isCompleted}
            id={lista.id}
            index={listIndex}
            handleEditTodo={handleEditTodo}
            deleteTodo={deleteTodo}
            toggleTodoStatus={toggleTodoStatus}
          />
        ))
      }

 

</ul>
</div>
 )

}
export default TodoList;