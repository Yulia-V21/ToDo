import { useState } from "react";
import ToDoForm from "../ToDoForm/TodoForm";
import ToDoSearch from "../ToDoSearch/Search";
import "./Todo.css";

const ToDo = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="toDoBg">
      <div className="toDo">
        <h2>ToDo</h2>
        <ToDoSearch onSearchClick={(value) => setSearchValue(value)} />
        <ToDoForm searchValue={searchValue} />
      </div>
    </div>
  );
};
export default ToDo;
