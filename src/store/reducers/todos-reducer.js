/* eslint-disable @typescript-eslint/default-param-last */
import { ADD_TODO } from '../constants/todos-const';

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
    default: {
      return state;
    }
  }
}
