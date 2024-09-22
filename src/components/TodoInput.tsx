import { useState, useEffect } from "react";
import input from "./Input.module.css";

type Props = {
  //   children?: ReactNode;
  AddListSetLocalStorage: (title: string, description: string) => void;
  updateListInputs: (title: string, description: string) => void
  ediTodo?: { title: string; description: string } | null;
  // AddTitle? : (todoListTitle: string) => void;
};

function TodoInput(props: Props) {
  const { AddListSetLocalStorage, updateListInputs, ediTodo } = props;

  const [inputValue, SetinputValue] = useState("");
  const [inputTitleValue, SetinputTitleValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {

    if (ediTodo) {

      SetinputTitleValue(ediTodo.title);
      SetinputValue(ediTodo.description);
      setIsEditing(true);
    }



  }, [ediTodo]);

  const handleTodo = () => {
    if (inputValue.trim() && inputTitleValue.trim()) {

      if (isEditing && updateListInputs) {
        updateListInputs(inputTitleValue, inputValue);
        setIsEditing(false);

      } else {
        AddListSetLocalStorage(inputTitleValue, inputValue);


      }


      SetinputTitleValue("");
      SetinputValue("");

    }
  };

  return (
    <>
      <div className={input.input_label_group}>
        <label>Title:</label>
        <input
          className={input.inputList}
          type="text"
          value={inputTitleValue}
          onChange={(e) => SetinputTitleValue(e.target.value)}
        />
      </div>
      <div className={input.input_label_group}>
        <label>Description:</label>
        <input
          className={input.inputList}
          type="text"
          value={inputValue}
          onChange={(e) => SetinputValue(e.target.value)}
        />
      </div>
      <button className={input.agregar} type="button" onClick={handleTodo}>
        {isEditing ? "Update" : "Add"}
      </button>
      <div className={input.divider_Container}>
        <hr className={input.divider} />
      </div>
    </>
  );
}

export default TodoInput;
