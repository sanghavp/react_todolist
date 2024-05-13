import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Item from "./components/item";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "./features/slices/todoSlices";

function App() {
  const todoArray = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState("");
  const [action, setAction] = useState("Thêm");
  const [updateKey, setUpdateKey] = useState();

  const onAddtodo = () => {
    if (!todoValue) return;
    // console.log("value", !todoValue);
    if (action == "Thêm") dispatch(addTodo(todoValue));
    else {
      dispatch(updateTodo({ index: updateKey, name: todoValue }));
      setAction("Thêm");
    }

    setTodoValue("");
  };

  const onEditInput = (value) => {
    setTodoValue(value);
  };

  const handleOnEnter = (e) => {
    // console.log("e", e.key);
    if (e.key === "Enter") onAddtodo();
  };

  const onDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  const onClickEditButton = (index) => {
    console.log("index", index);
    setTodoValue(todoArray[index]?.name);
    setUpdateKey(index);
    setAction("Cập nhật");
  };

  return (
    <div>
      <input
        type="text"
        value={todoValue}
        onChange={(e) => onEditInput(e.target.value)}
        onKeyUp={handleOnEnter}
      />
      <button onClick={onAddtodo}>{action}</button>
      <button>Tìm kiếm</button>
      {todoArray &&
        todoArray.map((todo, key) => {
          return (
            <Item
              key={key}
              item_name={todo.name}
              onAdd={onAddtodo}
              onDelete={onDelete}
              onEdit={onClickEditButton}
              index={key}
            />
          );
        })}
    </div>
  );
}

export default App;
