import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Nấu cơm",
  },
  {
    id: 2,
    name: "Rửa bát",
  },
  {
    id: 3,
    name: "Quét nhà",
  },
];

export const counterSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // console.log("state", action)
      const lastIndex = state.length - 1
      state.push({
        id: state[lastIndex]?.id + 1,
        name: action.payload
      });
    },
    updateTodo: (state, action) => {
      state[action.payload.index].name = action.payload.name
    },
    deleteTodo: (state, action) => {
      console.log('action', action)
      state.splice(action, 1)
    }
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, updateTodo } = counterSlice.actions;

export default counterSlice.reducer;
