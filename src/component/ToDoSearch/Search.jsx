import { useDispatch, useSelector } from "react-redux";
import { searchTask } from "../../store/actions";
import "./Search.css";

const ToDoSearch = ({ onSearchClick }) => {
  const searchValue = useSelector((state) => state.searchValue);
  const dispatch = useDispatch();

  const handleOnChangeSearch = (event) => {
    dispatch(searchTask(event.target.value));
  };

  return (
    <div className="todo-search">
      <input
      className="todo_search_form"
        type="text"
        value={searchValue}
        onChange={handleOnChangeSearch}
        placeholder="Search Task"
      />
    </div>
  );
};
export default ToDoSearch;
