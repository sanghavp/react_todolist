import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Item from "./components/item";

function App() {
  // const todoArray = ["Nấu cơm", "rửa bát", "quét nhà"]
  // init todolist
  const [todoArray, setTodoArray] = useState([
    "Nấu cơm",
    "rửa bát",
    "quét nhà",
  ]);
  const [todoValue, setTodoValue] = useState("");
  const [action, setAction] = useState("Thêm")

  const onAddtodo = () => {
    if (!todoValue) return;
    // console.log("value", !todoValue);
    const cloneArray = [...todoArray];
    action == "Thêm" ? cloneArray.push(todoValue) : cloneArray(todoValue);
    setTodoArray(cloneArray);
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
    let todoArrayClone = [...todoArray];
    todoArrayClone.splice(index, 1);
    setTodoArray(todoArrayClone);
  };

  const onClickEditButton = (value) => {
    console.log(value);
    setTodoValue(todoArray[value])
    setAction("Cập nhật")
  }

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
        todoArray.map((value, key) => {
          return (
            <Item
              key={key}
              item_name={value}
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
