/* eslint-disable @typescript-eslint/default-param-last */
import {
  ADD_TODO,
  CLEAR_COMPLETED_TODOS,
  EDIT_TODO,
  REMOVE_TODO,
  SORT_BY_DATE_TODOS,
  TOGGLE_TODO,
} from '../constants/todos-const';

export default function todosReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          completed: false,
          created: `${new Date().toLocaleDateString()} ${new Date()
            .toLocaleTimeString()
            .split(':')
            .slice(0, 2)
            .join(':')}`,
        },
      ];
    }
    case REMOVE_TODO: {
      return state.filter((todo) => todo.id !== action.id);
    }
    case TOGGLE_TODO: {
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    }
    case EDIT_TODO: {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
          };
        }
        return todo;
      });
    }
    case CLEAR_COMPLETED_TODOS: {
      return state.filter((todo) => !todo.completed);
    }
    case SORT_BY_DATE_TODOS: {
      const sortedTodos = [...state].sort((a, b) => {
        if (a.id > b.id) {
          return b.id - a.id;
        }
        if (a.id < b.id) {
          return a.id - b.id;
        }
        return 0;
      });
      return sortedTodos;
    }
    default: {
      return state;
    }
  }
}
