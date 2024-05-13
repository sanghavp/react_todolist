import { configureStore } from '@reduxjs/toolkit'
import todoReducers from '../src/features/slices/todoSlices'
export const store = configureStore({
  reducer: {
    todo: todoReducers
  },
})