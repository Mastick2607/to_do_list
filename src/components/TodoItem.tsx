import item from "./Item.module.css";

type Props = {
  descripcion: string;
  lista: string;
  index?: number;
  id: string;
  isCompleted: boolean;
  deleteTodo: (index: string) => void;
  toggleTodoStatus: (index: string) => void;
  handleEditTodo: (todo: { title: string; description: string }) => void;


};

function TodoItem(props: Props) {
  const { descripcion, lista, deleteTodo, toggleTodoStatus, isCompleted, id, handleEditTodo } = props;
  const date = new Date().toLocaleDateString();
  return (
    <li className={`${isCompleted ? `${item.liDescripcion_2}` : `${item.liDescripcion}`} `}>



      <div className={item.textContent}>
        <h2>{lista}</h2>
        <p> {descripcion}</p>

        <p className={`${isCompleted ? `${item.fecha}` : `${item.fecha_2}`} `}>Terminada en la fecha {date}</p>
      </div>   
      <div>
        <i onClick={() => deleteTodo(id)} className={`fa-regular fa-trash-can ${item.icon}`}></i>
        <i onClick={() => toggleTodoStatus(id)} className={`${isCompleted ? `` : ` fa-solid fa-circle-check ${item.icon}`} `}></i>
        <i onClick={() => handleEditTodo({ title: lista, description: descripcion })} className={`${isCompleted ? `` : `fa-solid fa-pen ${item.icon}`}`}></i>
      </div>

    </li>
  );
}

export default TodoItem;
