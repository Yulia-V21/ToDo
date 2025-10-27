import { useState } from "react";
import ToDoBtN from "../ToDoBtn/TodoBtn";

const ToDoSearch = ({ onSearchClick }) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleOnChange} />
      <ToDoBtN text="Search" onClick={() => onSearchClick(inputValue)} />
    </div>
  );
};
export default ToDoSearch;
