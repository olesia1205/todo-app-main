/* eslint-disable @typescript-eslint/default-param-last */
import {
  ADD_TODO,
  CLEAR_COMPLETED_TODOS,
  EDIT_TODO,
  REMOVE_TODO,
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
    default: {
      return state;
    }
  }
}
