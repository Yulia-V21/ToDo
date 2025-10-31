import { useDispatch, useSelector } from "react-redux";
import { searchTask } from "../../store/actions";
import ToDoBtN from "../ToDoBtn/TodoBtn";

const ToDoSearch = ({ onSearchClick }) => {
  const searchValue = useSelector((state) => state.searchValue);
  const dispatch = useDispatch();

  const handleOnChangeSearch = (event) => {
    dispatch(searchTask(event.target.value));
  };

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={handleOnChangeSearch}
        placeholder="Search Task"
      />
    </div>
  );
};
export default ToDoSearch;
