import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

import { ITodo, ITodosState } from '../utils/types';

const initialState: ITodosState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: ITodo = {
        id: nanoid(),
        title: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    toggleTodo: (state, action: PayloadAction<string>) => {
      const todoToToggle = state.todos.find((todo) => todo.id === action.payload);
      if (todoToToggle) {
        todoToToggle.completed = !todoToToggle.completed;
      }
    },

    editTodo: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const todoToEdit = state.todos.find((todo) => todo.id === action.payload.id);
      if (todoToEdit) {
        todoToEdit.title = action.payload.title;
      }
    },

    clearCompletedTodos: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, editTodo, clearCompletedTodos } =
  todosSlice.actions;

export default todosSlice.reducer;
