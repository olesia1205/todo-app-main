import {
  ADD_TODO,
  CLEAR_COMPLETED_TODOS,
  EDIT_TODO,
  REMOVE_TODO,
  SORT_BY_DATE_TODOS,
  TOGGLE_TODO,
} from '../constants/todos-const';

export const addTodo = (title) => ({
  type: ADD_TODO,
  title,
});
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});
export const editTodo = (newTitle) => ({
  type: EDIT_TODO,
  payload: newTitle,
});
export const clearCompletedTodos = () => ({
  type: CLEAR_COMPLETED_TODOS,
});
export const sortByDateTodos = () => ({
  type: SORT_BY_DATE_TODOS,
});
