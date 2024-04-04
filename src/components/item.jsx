import { useState } from "react";
import "./item.css";
import styled from "styled-components";
export default function Item({ item_name, onDelete, index, onEdit }) {
  // const onAddtodo = (value) => {
  //   console.log(value);
  //   onAdd(value);
  // };
  const onClickDeleteButton = () => {
    onDelete(index)
  }

  const onClickSearchButton = () => {
    onEdit(index)
  }
  return (
    <div className="item">
      <input
        type="checkbox"
        name=""
        className="checkbox"
      />
      <p>{item_name}</p>
      <div className="action">
        <Button onClick={onClickDeleteButton}>X</Button>
        <Button onClick={onClickSearchButton}>edit</Button>
      </div>
    </div>
  );
}

const Button = styled.button`
  background: transparent;
  border: 1px solid #cccc;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background: #cccccc;
  }
`;
