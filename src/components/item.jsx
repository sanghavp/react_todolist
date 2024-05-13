import PropTypes from "prop-types";
import { useState } from "react";
import "./item.css";
import styled from "styled-components";

const Button = styled.button`
    background: transparent;
    border: 1px solid #cccc;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
      background: #cccccc;
    }
  `;

  const Label = styled.label`
    flex: 1;
    height: 100%
  `
function Item({ item_name, onDelete, index, onEdit }) {
  // const onAddtodo = (value) => {
  //   console.log(value);
  //   onAdd(value);
  // };
  const onCheck = (e) => {
    console.log("event : ", e.target.checked);
    if(e.target.checked == true) {
      console.log(e.target.parentNode);
      e.target.parentNode.style.background = "#cccccc"
    } else {
      e.target.parentNode.style.background = ""
    }
  }
  const onClickDeleteButton = () => {
    onDelete(index);
  };

  const onClickSearchButton = () => {
    onEdit(index);
  };
  return (
    <div className="item">
      <input type="checkbox" name="" className="checkbox" id={index} onChange={onCheck}/>
      <Label htmlFor={index}>{item_name}</Label>
      <div className="action">
        <Button onClick={onClickDeleteButton}>X</Button>
        <Button onClick={onClickSearchButton}>edit</Button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item_name: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  index: PropTypes.number,
  onEdit: PropTypes.func,
};

export default Item;
