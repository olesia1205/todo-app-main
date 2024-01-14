import { createSelector } from 'reselect';

const selectAllTodos = (state) => state.todos;

export const selectActiveTodos = createSelector(selectAllTodos, (todos) =>
  todos.filter((todo) => todo.completed === false)
);

export const selectVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'all': {
      return state.todos;
    }
    case 'active': {
      return state.todos.filter((todo) => !todo.completed);
    }
    case 'completed': {
      return state.todos.filter((todo) => todo.completed);
    }
    default: {
      return state.todos;
    }
  }
};

export const selectSortedTodos = createSelector(selectAllTodos, (todos) => {
  const sortedTodos = [...todos].sort((a, b) => {
    if (a.id > b.id) {
      return b.id - a.id;
    }
    if (a.id < b.id) {
      return a.id - b.id;
    }
    return 0;
  });
  return sortedTodos;
});
